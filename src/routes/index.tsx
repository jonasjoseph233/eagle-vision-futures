import { createFileRoute } from "@tanstack/react-router";
import { Brain, Wrench, LineChart, Users, MessageCircle, CalendarRange, CheckCircle2 } from "lucide-react";
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

const bonuses = ["Private community access", "Lifetime updates", "PDF resources", "Future strategy releases"];

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
          <a href="#" className="inline-block rounded-full bg-background px-10 py-4 text-base font-medium text-foreground hover:opacity-90 transition" style={{ boxShadow: 'var(--shadow-soar)' }}>
            Claim Your Spot Now
          </a>
          <p className="text-primary-foreground/80 text-xs mt-4">Limited availability — apply today.</p>
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
      <Offer />
      <Closing />
      <Footer />
    </main>
  );
}
