import { createFileRoute } from "@tanstack/react-router";
import { Brain, Wrench, LineChart, Users, MessageCircle, CalendarRange, CheckCircle2, Trophy, Target, Zap, Radar, BookOpen, HelpCircle, Crown, Phone, Bell, ClipboardCheck, Sparkles, Headphones } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import eagleLogo from "@/assets/eagle-logo.png";
import eagleHero from "@/assets/eagle-hero.jpg";
import volumeProfile from "@/assets/volume-profile.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Eagle View Futures — Master Futures Trading with Psychology-Driven Strategies" },
      { name: "description", content: "Master futures trading with psychology-driven strategies. Volume Profile, market structure, live coaching, private Discord — the complete EagleView system." },
      { property: "og:title", content: "Eagle View Futures — Complete Trading Mastery System" },
      { property: "og:description", content: "Psychology-driven futures trading. Volume Profile mastery, live walkthroughs of NQ & ES, private Discord." },
    ],
  }),
});

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 px-6 pt-5">
      <nav className="mx-auto max-w-6xl flex items-center justify-between rounded-full border border-border/60 bg-background/60 backdrop-blur-xl px-5 py-2.5 shadow-card">
        <a href="#top" className="flex items-center gap-2.5">
          <img src={eagleLogo} alt="Eagle View Futures logo" width={36} height={36} className="h-9 w-9" />
          <span className="font-display text-lg tracking-tight">Eagle View <span className="text-primary">Futures</span></span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#benefits" className="hover:text-foreground transition">Benefits</a>
          <a href="#curriculum" className="hover:text-foreground transition">Curriculum</a>
          <a href="#offer" className="hover:text-foreground transition">Offer</a>
          <a href="#about" className="hover:text-foreground transition">Philosophy</a>
        </div>
        <a href="#offer" className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition">
          Enroll
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={eagleHero} alt="Eagle soaring over mountains at dawn" className="h-full w-full object-cover opacity-70" width={1920} height={1080} />
        <div className="absolute inset-0" style={{ background: 'var(--gradient-veil)' }} />
        <div className="absolute inset-0 bg-background/30" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-32 pb-24 w-full">
        <div className="max-w-3xl animate-fade-up">
          <p className="text-sm uppercase tracking-[0.25em] text-primary mb-6">Eagle View · Futures Trading</p>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.05] text-foreground">
            Master Futures Trading with<br />
            <span className="italic text-primary">Psychology-Driven Strategies.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Join a growing community of traders transforming their results with proven mental
            frameworks and technical mastery — built around Volume Profile and market structure.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#offer" className="rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition" style={{ boxShadow: 'var(--shadow-soar)' }}>
              Take Flight — Enroll Now
            </a>
            <a href="#curriculum" className="rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground hover:bg-secondary transition">
              View Curriculum
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const benefits = [
  { Icon: Brain, t: "Master the Psychology of Profitable Trading", d: "Eliminate emotional trading and develop the mindset of consistent winners." },
  { Icon: Wrench, t: "Get My Personal Trading Setup & Broker", d: "Skip years of testing — use the exact platforms and broker I rely on daily." },
  { Icon: LineChart, t: "Learn Advanced Technical Analysis", d: "Read market psychology through price action and volume patterns that actually work." },
  { Icon: Users, t: "Join Our Elite Trader Community", d: "Connect with profitable traders in our private Discord — networking worth thousands." },
  { Icon: MessageCircle, t: "Personal Coaching in Live Q&As", d: "Direct access to me for your specific trading challenges and setups." },
  { Icon: CalendarRange, t: "Weekly Market Opportunities Delivered", d: "Never miss high-probability setups with my personal market analysis." },
];

function Benefits() {
  return (
    <section id="benefits" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4">What you get</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Everything you need to <span className="italic text-muted-foreground">trade like a professional.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map(({ Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-7 hover:border-primary/40 transition">
              <div className="h-11 w-11 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center mb-5">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-xl mb-2 leading-snug">{t}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const principles = [
  { n: "01", t: "Read the auction", d: "Markets are an auction, not a chart. Volume Profile reveals where buyers and sellers truly committed capital." },
  { n: "02", t: "Trade only the obvious", d: "Patience is the eagle's edge. Wait for high-probability locations, then strike with size and certainty." },
  { n: "03", t: "Process over prediction", d: "Forget forecasts. Build a repeatable framework around value areas, points of control, and rotation." },
];

function Principles() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-end mb-20">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4">The philosophy</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Most traders force the market.<br />
              <span className="italic text-muted-foreground">We follow the system.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Most traders force actions onto the markets and try to predict them. We follow guidelines and
              stay disciplined to our winning system.
            </p>
            <p className="mt-4 text-foreground/90 leading-relaxed font-display italic">
              If <span className="text-primary not-italic font-sans">y = Entry</span>, then we execute —
              regardless of fear or any other emotion.
            </p>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Eagle View was built for the trader tired of inconsistent results, confusing concepts and
            limiting circumstances. We are proud to represent high-standard processes for people who believe
            in themselves — so they can achieve greater heights in life. This is one method, taught with
            depth — the same lens used by <span className="text-foreground">multi-millionaire institutional
            desks</span> to navigate futures markets.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {principles.map((p) => (
            <div key={p.n} className="group rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-8 hover:border-primary/40 transition">
              <div className="font-display text-primary text-sm mb-8">{p.n}</div>
              <h3 className="font-display text-2xl mb-3">{p.t}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const phases = [
  {
    label: "Phase 1",
    title: "Foundation & Mindset",
    items: ["Trading psychology mastery", "Platform setup & broker selection", "Risk management that protects your capital"],
  },
  {
    label: "Phase 2",
    title: "Reading the Market",
    items: ["Volume Profile secrets", "Price action psychology", "Market structure analysis"],
  },
  {
    label: "Phase 3",
    title: "The EagleView Strategy",
    items: ["My proprietary trading method", "Entry and exit precision", "Risk/reward optimization"],
  },
  {
    label: "Phase 4",
    title: "Execution Mastery",
    items: ["Live trading examples (NQ & ES)", "Emotional control under pressure", "Profitable trade management"],
  },
];

const bonuses = ["Free Checklist", "Free EagleView E-Book", "Private community access", "Lifetime updates", "PDF resources", "Future strategy releases"];

function Curriculum() {
  return (
    <section id="curriculum" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4">Detailed curriculum</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Here's everything inside <span className="italic text-muted-foreground">the complete system.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {phases.map((p) => (
            <div key={p.label} className="rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-8 hover:border-primary/40 transition">
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-2">{p.label}</p>
              <h3 className="font-display text-2xl mb-5">{p.title}</h3>
              <ul className="space-y-3">
                {p.items.map((it) => (
                  <li key={it} className="flex gap-3 text-sm text-foreground/90">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Exclusive bonuses</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {bonuses.map((b) => (
              <div key={b} className="flex items-center gap-2 text-sm text-foreground/90">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const valueItems = [
  { t: "EagleView Strategies", d: "Battle-tested trading models to identify high-probability setups.", v: "$199" },
  { t: "Private Discord Community", d: "Join our growing community of serious traders focused on results.", v: "$129" },
  { t: "Live Weekly Training", d: "Real-time market analysis and Q&A with the coach.", v: "$179" },
  { t: "Market Intelligence Reports", d: "Weekly breakdowns to time the markets with confidence.", v: "$129" },
  { t: "Trading Psychology Framework", d: "Master the mental game and build unshakable execution.", v: "$129" },
];

const strategyBenefits = [
  { Icon: Trophy, t: "500+ Live Trades Proven — 80% Win Rate", d: "Every strategy has been tested in real market conditions with documented results." },
  { Icon: Target, t: "Master Precise Entry & Exit Timing", d: "Learn the exact signals I use to maximize profits and minimize losses." },
  { Icon: Zap, t: "Spot High-Probability Setups in Seconds", d: "Instantly identify trades with 3:1 reward potential while avoiding market traps." },
  { Icon: Users, t: "Join Our Private Discord of Elite Traders", d: "Network with traders averaging high monthly returns." },
  { Icon: MessageCircle, t: "Get Personal Strategy Coaching", d: "Weekly live sessions where I break down real setups and answer your questions." },
  { Icon: Radar, t: "Never Miss Another Big Move", d: "My personal market analysis delivered weekly with actionable trade ideas." },
];

const strategyArsenal = [
  "EagleView Breakout & Continuation Models",
  "Volume Profile Mastery System",
  "Session Timing & Risk Management Rules",
  "Live Trade Examples & Psychology Framework",
];

function Strategies() {
  return (
    <section id="strategies" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4">Strategy Arsenal</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Battle-Tested Trading Strategies<br />
            <span className="italic text-muted-foreground">that actually work.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {strategyBenefits.map(({ Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-7 hover:border-primary/40 transition">
              <div className="h-11 w-11 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center mb-5">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-xl mb-2 leading-snug">{t}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{d}</p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Inside the arsenal</p>
          <h3 className="font-display text-2xl md:text-3xl mb-6">What's inside the complete Strategy Arsenal</h3>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {strategyArsenal.map((s) => (
              <div key={s} className="flex items-start gap-3 text-sm text-foreground/90">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>{s}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-border/60 pt-6">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Bonus</p>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-primary" /> Free Checklist
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm">
                <BookOpen className="h-4 w-4 text-primary" /> Free EagleView E-Book
              </span>
            </div>
          </div>
        </div>

        {/* Strategy purchase card */}
        <div id="strategies-offer" className="mt-10 rounded-3xl border border-primary/40 bg-card overflow-hidden grid md:grid-cols-5" style={{ boxShadow: 'var(--shadow-card)' }}>
          <div className="md:col-span-3 p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Strategies — standalone offer</p>
            <h3 className="font-display text-3xl md:text-4xl mb-4 leading-tight">
              Get the <span className="italic text-primary">EagleView Strategy Arsenal</span> on its own.
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Already trading and just want the playbook? Buy the exact strategies I trade —
              volume + market structure fused, with annotated entries, stops and targets.
              Includes the Free Checklist & Free EagleView E-Book.
            </p>
            <ul className="space-y-2 mb-8">
              {strategyArsenal.map((s) => (
                <li key={s} className="flex items-start gap-3 text-sm text-foreground/90">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2 p-8 md:p-10 bg-gradient-to-br from-primary/15 to-transparent border-t md:border-t-0 md:border-l border-border flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-2">Your investment</p>
            <div className="font-display text-5xl text-foreground mb-1">$199.99</div>
            <p className="text-sm text-muted-foreground mb-6">One-time payment · Lifetime access</p>
            <a href="https://whop.com/checkout/plan_Hd0wfpQnpP3dy" target="_blank" rel="noopener noreferrer" className="block w-full text-center rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground hover:opacity-90 transition" style={{ boxShadow: 'var(--shadow-soar)' }}>
              Get the Strategies — $199.99
            </a>
            <p className="text-xs text-muted-foreground text-center mt-4">Best paired with the flagship course for full context.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Offer() {
  return (
    <section id="offer" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Hero offer */}
        <div className="relative rounded-3xl border border-primary/40 overflow-hidden bg-card mb-10" style={{ boxShadow: 'var(--shadow-card)' }}>
          <div className="relative h-56 md:h-64">
            <img src={volumeProfile} alt="Volume profile chart" className="absolute inset-0 h-full w-full object-cover opacity-60" loading="lazy" width={1280} height={800} />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
            <div className="relative px-8 md:px-12 py-10 flex flex-col justify-end h-full">
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">The Offer</p>
              <h2 className="font-display text-3xl md:text-5xl leading-tight max-w-3xl">
                Complete Trading Mastery System — <span className="text-primary">$299</span>
              </h2>
              <p className="text-muted-foreground mt-3 max-w-2xl">
                Everything you need to become a consistently profitable trader.
              </p>
            </div>
          </div>
        </div>

        {/* Value itemization */}
        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {valueItems.map((v) => (
            <div key={v.t} className="rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-6 flex items-start gap-4 hover:border-primary/40 transition">
              <div className="h-10 w-10 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                <CheckCircle2 className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-baseline justify-between gap-3 mb-1">
                  <h3 className="font-display text-lg">{v.t}</h3>
                  <span className="text-xs text-muted-foreground">Value {v.v}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Total value callout */}
        <div className="rounded-3xl p-10 md:p-12 text-center relative overflow-hidden border border-primary/40" style={{ background: 'var(--gradient-gold)' }}>
          <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/80 mb-3">Your investment</p>
          <div className="flex flex-wrap items-baseline justify-center gap-x-6 gap-y-2 mb-2">
            <div className="font-display text-primary-foreground/90 text-2xl">
              Total Value: <span className="font-semibold">$765</span>
            </div>
            <div className="font-display text-primary-foreground text-5xl md:text-6xl">
              Today: <span className="font-bold">$299</span>
            </div>
          </div>
          <p className="text-primary-foreground/80 text-sm mb-8">One-time payment · Lifetime access · Free updates</p>
          <a href="https://whop.com/checkout/plan_FCF3G8mFRjgDa" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-background px-10 py-4 text-base font-medium text-foreground hover:opacity-90 transition" style={{ boxShadow: 'var(--shadow-soar)' }}>
            Claim Your Spot Now
          </a>
          <p className="text-primary-foreground/80 text-xs mt-4">Limited availability — apply today.</p>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "What are the program requirements/prerequisites?",
    a: "You must understand the mental and psychological aspect of trading before using live funds. This ensures you remain process-focused instead of focused on money.",
  },
  {
    q: "What if I'm a complete beginner?",
    a: "You must have a basic understanding of what forex/futures are, along with the scale metrics used in the markets.",
  },
  {
    q: "How long does it take to see results?",
    a: "After understanding and becoming disciplined to the trading system, you can see results in as little as 1 month.",
  },
  {
    q: "What kind of support is provided?",
    a: "Our customer service email is EagleviewTrading@Gmail.com. We respond within 24 hours.",
  },
  {
    q: "Can I access the material on mobile?",
    a: "You can — however it is advised not to place trades using mobile cellular devices.",
  },
];

function FAQ() {
  return (
    <section id="faq" className="relative py-32 px-6">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4 inline-flex items-center gap-2 justify-center">
            <HelpCircle className="h-4 w-4" /> FAQ
          </p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Frequently Asked <span className="italic text-muted-foreground">Questions.</span>
          </h2>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="rounded-2xl border border-border bg-card/40 backdrop-blur-sm px-6 hover:border-primary/40 transition"
            >
              <AccordionTrigger className="font-display text-lg text-left hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function Mentorship() {
  const innerCircle = [
    { icon: MessageCircle, title: "Elite Discord Access", desc: "Join our growing community of dedicated traders focused on consistent profitability." },
    { icon: CalendarRange, title: "Weekly Market Intelligence", desc: "My personal volume profile analysis + high-probability setups delivered Sunday nights." },
    { icon: LineChart, title: "Live Trading Sessions (3x/week)", desc: "Watch me trade live, see my decision-making process in real-time." },
    { icon: ClipboardCheck, title: "Your Trades Reviewed & Optimized", desc: "Submit your trades for detailed feedback and execution improvements." },
    { icon: Sparkles, title: "Advanced Psychology & Strategy Content", desc: "Monthly deep-dives into concepts not available anywhere else." },
    { icon: Bell, title: "Real-Time Market Alerts", desc: "Get notified when major setups develop based on my analysis." },
  ];
  const whyChoose = [
    { title: "Faster Learning Curve", desc: "Avoid the 2–3 years most traders waste figuring things out alone." },
    { title: "Real-Time Feedback", desc: "Spot and fix mistakes before they become expensive habits." },
    { title: "Battle-Tested Strategies", desc: "Learn methods refined through 500+ documented trades." },
    { title: "Psychology Support", desc: "Master the mental game with traders who understand the struggle." },
  ];
  const vipExtras = [
    { icon: Phone, title: "Private 1-on-1 Strategy Calls", desc: "Personalized coaching tailored to your specific challenges." },
    { icon: ClipboardCheck, title: "Custom Trading Plan Creation", desc: "I'll build your personal roadmap based on your schedule and capital." },
    { icon: Headphones, title: "Direct Access Channel", desc: "Text me directly for urgent trading questions." },
    { icon: Target, title: "Personalized Trade Setups", desc: "I'll identify specific opportunities based on your risk tolerance." },
    { icon: Users, title: "Accountability Partnership", desc: "Weekly check-ins to ensure you're executing your plan." },
  ];

  const applicationSchema = z.object({
    name: z.string().trim().min(2, "Name is required").max(100),
    email: z.string().trim().email("Valid email required").max(255),
    experience: z.string().trim().min(1, "Please select").max(50),
    capital: z.string().trim().min(1, "Please select").max(50),
    goals: z.string().trim().min(10, "Tell us a bit more").max(1000),
  });

  const [form, setForm] = useState({ name: "", email: "", experience: "", capital: "", goals: "" });
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = applicationSchema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Please complete the form");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setForm({ name: "", email: "", experience: "", capital: "", goals: "" });
      toast.success("Application received — we'll review within 24 hours.");
    }, 600);
  };

  return (
    <section id="mentorship" className="relative py-24 px-6 border-t border-border/60">
      <div className="mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-primary">
            <Crown className="h-3.5 w-3.5" /> Inner Circle
          </span>
          <h2 className="mt-6 font-display text-4xl md:text-5xl leading-tight">
            Join the <span className="italic text-primary">Inner Circle</span> — Elite Trader Mentorship
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Two paths to accelerate your growth alongside traders who hold themselves to a higher standard.
          </p>
        </div>

        {/* Inner Circle */}
        <div className="rounded-3xl border border-border/70 bg-card/60 backdrop-blur p-8 md:p-12" style={{ boxShadow: 'var(--shadow-card)' }}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Inner Circle Community</p>
              <h3 className="font-display text-3xl md:text-4xl">Your Trading Transformation Headquarters</h3>
            </div>
            <div className="text-right">
              <div className="font-display text-4xl text-primary">$99<span className="text-lg text-muted-foreground">/month</span></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {innerCircle.map((item) => (
              <div key={item.title} className="flex gap-4 rounded-2xl border border-border/60 bg-background/40 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-primary/40 bg-primary/5 p-6">
            <div>
              <div className="font-display text-2xl">Inner Circle — <span className="text-primary">$99.99/month</span></div>
              <p className="text-sm text-muted-foreground mt-1">Cancel anytime. Built for serious traders.</p>
            </div>
            <a href="#mentorship-apply" className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition" style={{ boxShadow: 'var(--shadow-soar)' }}>
              Join the Inner Circle
            </a>
          </div>
        </div>

        {/* Why smart traders */}
        <div className="mt-16">
          <h3 className="font-display text-2xl md:text-3xl text-center mb-8">Why Smart Traders Choose Mentorship</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyChoose.map((w) => (
              <div key={w.title} className="rounded-2xl border border-border/60 bg-card/40 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <h4 className="font-medium">{w.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* VIP */}
        <div className="mt-16 rounded-3xl border border-primary/50 p-8 md:p-12 relative overflow-hidden" style={{ background: 'var(--gradient-gold)', boxShadow: 'var(--shadow-soar)' }}>
          <div className="absolute inset-0 bg-background/85" />
          <div className="relative">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-3 py-1 text-xs uppercase tracking-[0.25em] text-primary mb-3">
                  <Crown className="h-3.5 w-3.5" /> VIP Mentorship
                </span>
                <h3 className="font-display text-3xl md:text-4xl">Direct Access to My Trading Brain</h3>
                <p className="text-sm text-muted-foreground mt-2">Everything in Inner Circle — plus:</p>
              </div>
              <div className="text-right">
                <div className="font-display text-4xl text-primary">$450<span className="text-lg text-muted-foreground">/month</span></div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {vipExtras.map((item) => (
                <div key={item.title} className="flex gap-4 rounded-2xl border border-border/60 bg-card/70 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-4 items-center rounded-2xl border border-primary/40 bg-card/80 p-6">
              <div className="md:col-span-2">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary mb-2">
                  <Sparkles className="h-3.5 w-3.5" /> Limited Spots Available
                </div>
                <p className="text-sm text-muted-foreground">We maintain a 4:1 student-to-mentor ratio for quality. All applications reviewed within 24 hours.</p>
              </div>
              <a href="#mentorship-apply" className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition text-center" style={{ boxShadow: 'var(--shadow-soar)' }}>
                Book a Call — $450/mo
              </a>
            </div>
          </div>
        </div>

        {/* Application form */}
        <div id="mentorship-apply" className="mt-16 rounded-3xl border border-border/70 bg-card/60 backdrop-blur p-8 md:p-12">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Apply Now</p>
              <h3 className="font-display text-2xl md:text-3xl mb-3">Book a Call for VIP Mentorship</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Tell us about your trading journey. If we're a fit, you'll receive a calendar link within 24 hours to lock in your strategy call.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5" /> 4:1 student-to-mentor ratio</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5" /> Reviewed personally within 24h</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5" /> Limited monthly spots</li>
              </ul>
            </div>
            <form onSubmit={onSubmit} className="md:col-span-3 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="m-name">Full Name</Label>
                  <Input id="m-name" maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="m-email">Email</Label>
                  <Input id="m-email" type="email" maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1.5" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="m-exp">Trading Experience</Label>
                  <select id="m-exp" value={form.experience} onChange={(e) => setForm({ ...form, experience: e.target.value })} className="mt-1.5 flex h-9 w-full rounded-md border border-input bg-background px-3 text-sm">
                    <option value="">Select…</option>
                    <option value="<1y">Less than 1 year</option>
                    <option value="1-3y">1–3 years</option>
                    <option value="3-5y">3–5 years</option>
                    <option value="5y+">5+ years</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="m-cap">Trading Capital</Label>
                  <select id="m-cap" value={form.capital} onChange={(e) => setForm({ ...form, capital: e.target.value })} className="mt-1.5 flex h-9 w-full rounded-md border border-input bg-background px-3 text-sm">
                    <option value="">Select…</option>
                    <option value="<10k">Under $10k</option>
                    <option value="10-25k">$10k–$25k</option>
                    <option value="25-100k">$25k–$100k</option>
                    <option value="100k+">$100k+</option>
                  </select>
                </div>
              </div>
              <div>
                <Label htmlFor="m-goals">Your Goals & Biggest Challenge</Label>
                <Textarea id="m-goals" maxLength={1000} rows={4} value={form.goals} onChange={(e) => setForm({ ...form, goals: e.target.value })} className="mt-1.5" />
              </div>
              <Button type="submit" disabled={submitting} size="lg" className="w-full">
                {submitting ? "Submitting…" : "Apply for VIP Mentorship"}
              </Button>
              <p className="text-xs text-muted-foreground text-center">All applications reviewed within 24 hours.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <img src={eagleLogo} alt="" aria-hidden width={64} height={64} className="mx-auto h-16 w-16 mb-8 animate-float" />
        <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">
          Take flight and start trading <span className="italic text-primary">like a professional</span> today.
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-10">
          One system. One method. A lifetime of clearer charts and calmer decisions.
        </p>
        <a href="#offer" className="inline-block rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground hover:opacity-90 transition" style={{ boxShadow: 'var(--shadow-soar)' }}>
          Take Flight
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2.5">
          <img src={eagleLogo} alt="" width={24} height={24} className="h-6 w-6" />
          <span>Eagle View Futures</span>
        </div>
        <p>© {new Date().getFullYear()} Eagle View Futures. For educational purposes only. Trading futures involves risk.</p>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Benefits />
      <Principles />
      <Curriculum />
      <Strategies />
      <Offer />
      <Mentorship />
      <Closing />
      <FAQ />
      <Footer />
    </main>
  );
}
