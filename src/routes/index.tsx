import { createFileRoute } from "@tanstack/react-router";
import eagleLogo from "@/assets/eagle-logo.png";
import eagleHero from "@/assets/eagle-hero.jpg";
import volumeProfile from "@/assets/volume-profile.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Eagle View Futures — Volume Profile Mastery Course" },
      { name: "description", content: "Soar above the markets. A comprehensive futures trading course built around Volume Profile Mastery 101. See what other traders miss." },
      { property: "og:title", content: "Eagle View Futures — Volume Profile Mastery" },
      { property: "og:description", content: "A comprehensive futures trading course centered on Volume Profile Mastery 101." },
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
          <a href="#course" className="hover:text-foreground transition">Course</a>
          <a href="#curriculum" className="hover:text-foreground transition">Curriculum</a>
          <a href="#about" className="hover:text-foreground transition">Philosophy</a>
        </div>
        <a href="#course" className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition">
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
        <div className="max-w-2xl animate-fade-up">
          <p className="text-sm uppercase tracking-[0.25em] text-primary mb-6">Eagle View · Futures Trading</p>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.05] text-foreground">
            See the market<br />
            <span className="italic text-primary">from above.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            A patient, comprehensive futures trading course built on a single edge:
            <span className="text-foreground"> Volume Profile mastery.</span> Read the auction.
            Find the levels that actually matter. Trade with conviction.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#course" className="rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition shadow-soar" style={{ boxShadow: 'var(--shadow-soar)' }}>
              Begin the Ascent
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
              Most traders stare at price.<br />
              <span className="italic text-muted-foreground">We watch the herd.</span>
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Eagle View was built for the trader tired of indicators, signal groups, and noise. This is one
            method, taught with depth — the same lens used by institutional desks to navigate futures markets.
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

const modules = [
  "Market structure & the auction process",
  "Building & reading Volume Profile",
  "Value Area, POC and developing value",
  "Initial Balance, opening types & day frameworks",
  "Composite profiles & multi-day context",
  "Trade location, entries, stops & sizing",
  "Risk, journaling & the trader's mindset",
  "Live walkthroughs of the indices — NQ & ES",
  "Weekly trade breakdowns & recaps",
  "Private Discord access — high-standards community",
];

const strategyModules = [
  "My personal high-conviction setups",
  "Volume + market structure confluence playbook",
  "Entry, stop & target rules with annotated examples",
  "Bias frameworks for NQ & ES",
  "Plug-and-play — designed to accelerate your learning",
];

function Course() {
  return (
    <section id="course" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4">Pricing</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight mb-4">
            Two paths. <span className="italic text-muted-foreground">One edge.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Most futures courses run <span className="line-through">$1,000+</span>. We're keeping the door
            open at a limited launch price — built for the few who actually do the work.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* MAIN COURSE */}
          <div className="rounded-3xl border border-primary/40 overflow-hidden bg-card relative" style={{ boxShadow: 'var(--shadow-card)' }}>
            <div className="absolute top-5 right-5 z-10">
              <span className="rounded-full bg-primary/15 border border-primary/40 text-primary text-[10px] uppercase tracking-[0.2em] px-3 py-1">Limited launch price</span>
            </div>
            <div className="relative h-44">
              <img src={volumeProfile} alt="Volume profile chart" className="absolute inset-0 h-full w-full object-cover opacity-70" loading="lazy" width={1280} height={800} />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              <div className="relative p-8 flex flex-col justify-end h-full">
                <p className="text-xs uppercase tracking-[0.3em] text-primary mb-2">The Flagship Course</p>
                <p className="font-display text-2xl md:text-3xl">Futures Trading & Volume Profile Mastery 101</p>
              </div>
            </div>

            <div className="p-8 lg:p-10">
              <div className="flex items-baseline gap-3 mb-1">
                <span className="font-display text-5xl text-primary">$299.99</span>
                <span className="text-base text-muted-foreground line-through">$1,000+</span>
                <span className="rounded-full bg-primary/20 text-primary text-[11px] font-medium px-2 py-0.5">Save 70%</span>
              </div>
              <p className="text-sm text-muted-foreground mb-8">One-time payment · Lifetime access · Free updates</p>

              <ul id="curriculum" className="space-y-3 mb-10">
                {modules.map((m, i) => (
                  <li key={i} className="flex gap-3 text-sm text-foreground/90">
                    <span className="font-display text-primary text-xs mt-1 w-6 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>

              <a href="#" className="block w-full text-center rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground hover:opacity-90 transition" style={{ boxShadow: 'var(--shadow-soar)' }}>
                Enroll — $299.99
              </a>
              <p className="text-xs text-muted-foreground text-center mt-4">Trading futures involves risk. Past performance is not indicative of future results.</p>
            </div>
          </div>

          {/* STRATEGIES PACKAGE */}
          <div className="rounded-3xl border border-border overflow-hidden bg-card/60 backdrop-blur-sm flex flex-col" style={{ boxShadow: 'var(--shadow-card)' }}>
            <div className="p-8 lg:p-10 flex-1 flex flex-col">
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-2">Add-on · Strategy Pack</p>
              <p className="font-display text-2xl md:text-3xl mb-6">Profitable Strategies Package</p>

              <div className="flex items-baseline gap-3 mb-1">
                <span className="font-display text-5xl text-foreground">$199.99</span>
              </div>
              <p className="text-sm text-muted-foreground mb-8">
                Skip the guesswork. Buy the exact strategies I trade — volume + market structure fused.
                A shortcut to reading the chart the way we do.
              </p>

              <ul className="space-y-3 mb-10 flex-1">
                {strategyModules.map((m, i) => (
                  <li key={i} className="flex gap-3 text-sm text-foreground/90">
                    <span className="font-display text-primary text-xs mt-1 w-6 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>

              <a href="#" className="block w-full text-center rounded-full border border-primary/60 text-primary px-7 py-4 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition">
                Get the Strategies — $199.99
              </a>
              <p className="text-xs text-muted-foreground text-center mt-4">Best paired with the flagship course for full context.</p>
            </div>
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
          Rise above the noise.
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-10">
          One course. One method. A lifetime of clearer charts and calmer decisions.
        </p>
        <a href="#course" className="inline-block rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground hover:opacity-90 transition" style={{ boxShadow: 'var(--shadow-soar)' }}>
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
        <p>© {new Date().getFullYear()} Eagle View Futures. For educational purposes only.</p>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Principles />
      <Course />
      <Closing />
      <Footer />
    </main>
  );
}
