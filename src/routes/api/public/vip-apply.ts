import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const RECIPIENT = "Jonasbusiness18@gmail.com";
const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_mail/gmail/v1";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().min(5).max(30),
  experience: z.string().trim().min(1).max(100),
});

function b64url(input: string) {
  return Buffer.from(input, "utf-8")
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function buildRaw(data: z.infer<typeof schema>) {
  const subject = `New VIP Mentorship Application — ${data.name}`;
  const body = [
    "New VIP Mentorship application from EagleView Futures Trading:",
    "",
    `Full Name: ${data.name}`,
    `Phone #: ${data.phone}`,
    `Trading Experience: ${data.experience}`,
    "",
    `Submitted: ${new Date().toISOString()}`,
  ].join("\r\n");

  const message = [
    `To: ${RECIPIENT}`,
    `Subject: ${subject}`,
    'Content-Type: text/plain; charset="UTF-8"',
    "MIME-Version: 1.0",
    "",
    body,
  ].join("\r\n");

  return b64url(message);
}

export const Route = createFileRoute("/api/public/vip-apply")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
        const GOOGLE_MAIL_API_KEY = process.env.GOOGLE_MAIL_API_KEY;
        if (!LOVABLE_API_KEY || !GOOGLE_MAIL_API_KEY) {
          return new Response(
            JSON.stringify({ error: "Email service not configured" }),
            { status: 500, headers: { "Content-Type": "application/json" } },
          );
        }

        let payload: unknown;
        try {
          payload = await request.json();
        } catch {
          return new Response(JSON.stringify({ error: "Invalid JSON" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        const parsed = schema.safeParse(payload);
        if (!parsed.success) {
          return new Response(
            JSON.stringify({ error: parsed.error.issues[0]?.message ?? "Invalid input" }),
            { status: 400, headers: { "Content-Type": "application/json" } },
          );
        }

        const raw = buildRaw(parsed.data);

        const res = await fetch(`${GATEWAY_URL}/users/me/messages/send`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${LOVABLE_API_KEY}`,
            "X-Connection-Api-Key": GOOGLE_MAIL_API_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ raw }),
        });

        if (!res.ok) {
          const text = await res.text();
          console.error("Gmail send failed", res.status, text);
          return new Response(
            JSON.stringify({ error: "Failed to send application" }),
            { status: 502, headers: { "Content-Type": "application/json" } },
          );
        }

        return new Response(JSON.stringify({ ok: true }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      },
    },
  },
});
