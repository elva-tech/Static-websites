import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, FileSearch, Scale, TrendingUp, Layers, Home, LineChart, Globe2, Briefcase, Plus } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import heroImg from "@/assets/hero-land.jpg";
import landImg from "@/assets/land-aerial.jpg";
import { Header, Footer } from "@/components/site/Chrome";
import { LeadForm } from "@/components/site/LeadForm";
import { WatchDemoButton } from "@/components/site/DemoVideo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aasthi — Know Before You Buy | Property Decision Intelligence" },
      { name: "description", content: "Aasthi is an AI-powered property decision-intelligence platform in development by ELVA Technologies. Register for early access." },
      { property: "og:title", content: "Aasthi — Know Before You Buy" },
      { property: "og:description", content: "Is it safe to buy? Is it smart to buy? Property due diligence and investment intelligence, coming soon." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const Planned = () => (
  <span className="eyebrow rounded-full border border-current/30 px-2 py-0.5 text-[0.6rem] opacity-70">Planned</span>
);

function Index() {
  useReveal();
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Introducing />
        <Engines />
        <How />
        <Who />
        <Why />
        <About />
        <EarlyAccess />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-14 lg:grid-cols-12 lg:pt-20">
        <div className="rise lg:col-span-7">
          <span className="eyebrow inline-flex items-center gap-2 text-teal">
            <span className="size-1.5 animate-pulse rounded-full bg-teal" /> Coming Soon
          </span>
          <h1 className="display mt-6 text-[clamp(3.5rem,9vw,8.5rem)] text-primary">
            Aasthi<span className="text-gold">.</span>
            <br />
            <em className="text-foreground/80">Know Before</em>
            <br />
            You Buy.
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
            AI-powered property decision intelligence for safer property purchases and smarter real-estate investments.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#early-access" className="inline-flex items-center justify-center gap-2 bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition hover:bg-accent hover:text-accent-foreground max-sm:w-full">
              Get Early Access <ArrowRight className="size-4" />
            </a>
            <WatchDemoButton className="justify-center max-sm:w-full" />
            <a href="#features" className="inline-flex items-center justify-center gap-2 border border-primary/25 px-7 py-4 text-sm font-semibold text-primary transition hover:border-primary max-sm:w-full">
              Explore Features
            </a>
          </div>
        </div>
        <div className="relative lg:col-span-5">
          <div className="rise relative h-[420px] overflow-hidden rounded-t-[999px] ring-1 ring-primary/10 sm:h-[560px]" style={{ animationDelay: "0.15s" }}>
            <img src={heroImg} alt="Aerial view of an empty land plot marked with survey stakes" width={1600} height={1104} className="kenburns h-full w-full object-cover" />
            <div className="survey-grid absolute inset-0" aria-hidden />
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden>
              <polygon points="22,48 80,44 88,80 14,84" className="plot-line" fill="none" vectorEffect="non-scaling-stroke" />
            </svg>
            <span className="pin absolute left-[22%] top-[48%]" aria-hidden />
            <span className="pin absolute left-[80%] top-[44%]" style={{ animationDelay: "0.6s" }} aria-hidden />
            <span className="pin absolute left-[88%] top-[80%]" style={{ animationDelay: "1.2s" }} aria-hidden />
            <div className="scanline absolute inset-x-0 h-24" aria-hidden />
            <div className="absolute left-1/2 top-24 -translate-x-1/2 whitespace-nowrap bg-background/90 px-3 py-1.5 text-[0.65rem] font-medium tracking-wider text-primary backdrop-blur">
              SCANNING PLOT · SAMPLE
            </div>
          </div>
          <HeroCard />
        </div>
      </div>
    </section>
  );
}

function HeroCard() {
  const rows = [
    { k: "Title documents", v: "2 items to verify", tone: "text-gold" },
    { k: "Encumbrance info", v: "Missing", tone: "text-gold" },
    { k: "Price vs. locality", v: "Within range", tone: "text-teal" },
    { k: "Est. rental yield", v: "3.1%", tone: "text-teal" },
  ];
  return (
    <div className="rise absolute -bottom-10 left-4 right-4 bg-card p-6 shadow-2xl shadow-primary/20 sm:right-auto sm:w-80 lg:-left-10" style={{ animationDelay: "0.3s" }}>
      <div className="flex items-center justify-between">
        <span className="eyebrow text-muted-foreground">Property snapshot</span>
        <span className="eyebrow text-[0.6rem] text-gold">Illustrative</span>
      </div>
      <dl className="mt-4 divide-y divide-border text-sm">
        {rows.map((r) => (
          <div key={r.k} className="flex justify-between py-2.5">
            <dt className="text-muted-foreground">{r.k}</dt>
            <dd className={`font-semibold ${r.tone}`}>{r.v}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-3 text-[0.68rem] leading-snug text-muted-foreground">Sample data for illustration only. Not a real analysis.</p>
    </div>
  );
}

function SectionHead({ n, eyebrow, title, children, dark = false }: { n: string; eyebrow: string; title: string; children?: React.ReactNode; dark?: boolean }) {
  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <div className={`eyebrow lg:col-span-3 ${dark ? "text-gold" : "text-muted-foreground"}`}>
        <span className="text-gold">{n}</span> — {eyebrow}
      </div>
      <div className="lg:col-span-9">
        <h2 className={`display text-[clamp(2.5rem,5.5vw,4.75rem)] ${dark ? "text-ink-foreground" : "text-primary"}`}>{title}</h2>
        {children && <div className={`mt-6 max-w-2xl text-lg leading-relaxed ${dark ? "text-ink-muted" : "text-muted-foreground"}`}>{children}</div>}
      </div>
    </div>
  );
}

function Problem() {
  const items = [
    ["Legal uncertainty", "Property documents and records can be complex, and buyers may struggle to identify issues that need further verification."],
    ["Unclear investment potential", "Buyers and investors may find it difficult to assess price context, rental yield, ROI and potential appreciation consistently."],
    ["Fragmented information", "Relevant details may be spread across different sources, making it harder to form a complete view before deciding."],
  ];
  return (
    <section className="border-t border-border py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead n="01" eyebrow="The problem" title="Property decisions deserve better information.">
          Buying property is one of the most consequential financial decisions a person can make. Yet important information about legal risks, property records, market prices and investment potential can be difficult to evaluate in one place.
        </SectionHead>
        <div className="mt-20 grid gap-px bg-border md:grid-cols-3">
          {items.map(([t, d], i) => (
            <article key={t} className="bg-background p-8 lg:p-10">
              <span className="display text-6xl text-gold">0{i + 1}</span>
              <h3 className="mt-8 text-xl font-semibold text-primary">{t}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Introducing() {
  const caps = [
    { i: FileSearch, t: "Property Due Diligence", d: "Structured support for reviewing available property information and identifying potential issues that may need further verification." },
    { i: Scale, t: "Legal-Risk Insights", d: "Help understanding potential red flags and areas requiring review by qualified legal professionals." },
    { i: TrendingUp, t: "Investment Intelligence", d: "Support evaluating ROI, rental yield, price benchmarks and relevant market or location indicators." },
    { i: Layers, t: "AI Property Advisor", d: "A guided experience intended to help explore property-related questions and interpret available information." },
  ];
  return (
    <section id="features" className="bg-sand/60 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead n="02" eyebrow="Introducing Aasthi" title="One place to evaluate property risk and investment potential.">
          Aasthi is being built to bring property due diligence and real-estate investment intelligence together, helping users ask better questions, understand potential risks and make more informed decisions.
        </SectionHead>
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {caps.map(({ i: Icon, t, d }) => (
            <article key={t} className="group flex flex-col bg-card p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
              <div className="flex items-center justify-between text-primary">
                <Icon className="size-6" strokeWidth={1.5} />
                <Planned />
              </div>
              <h3 className="mt-10 text-lg font-semibold text-primary">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">All capabilities shown are in development. Availability will be confirmed at launch.</p>
      </div>
    </section>
  );
}

function Engines() {
  const panels = [
    {
      tag: "Due Diligence Engine",
      q: "Is it safe to buy?",
      pts: ["Organising available property details and documents.", "Surfacing potential legal or documentation concerns.", "Highlighting missing information or areas requiring verification.", "Helping prepare questions for a qualified property lawyer or relevant authority."],
      dark: true,
    },
    {
      tag: "Investment Intelligence Engine",
      q: "Is it smart to buy?",
      pts: ["ROI and rental-yield analysis.", "Price benchmarking.", "Location and market indicators.", "Investment comparison and decision support."],
      dark: false,
    },
  ];
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead n="03" eyebrow="Two core engines" title="Two perspectives. One better-informed decision." />
        <div className="mt-20 grid lg:grid-cols-2">
          {panels.map((p) => (
            <article key={p.tag} className={`p-10 lg:p-14 ${p.dark ? "bg-ink text-ink-foreground" : "bg-gold/15 text-primary"}`}>
              <span className={`eyebrow ${p.dark ? "text-gold" : "text-teal"}`}>{p.tag}</span>
              <p className="display mt-6 text-5xl lg:text-6xl">“{p.q}”</p>
              <p className={`mt-8 eyebrow ${p.dark ? "text-ink-muted" : "text-muted-foreground"}`}>Planned capabilities — designed to support</p>
              <ul className="mt-4 space-y-4">
                {p.pts.map((x) => (
                  <li key={x} className={`flex gap-3 border-t pt-4 ${p.dark ? "border-ink-line" : "border-primary/15"}`}>
                    <Plus className="mt-1 size-4 shrink-0 text-gold" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">Aasthi does not guarantee legal clearance, appreciation, rental income or investment returns.</p>
      </div>
    </section>
  );
}

function How() {
  const steps = [
    ["Share Property Details", "Provide relevant property information and available documents."],
    ["Analyse Available Information", "Aasthi is designed to organise and evaluate supplied or available information."],
    ["Review Risk & Investment Insights", "Review potential concerns, missing information and relevant investment indicators."],
    ["Make a More Informed Decision", "Use the insights as decision support alongside independent verification and professional advice."],
  ];
  return (
    <section id="how" className="relative overflow-hidden bg-ink py-28">
      <img src={landImg} alt="" aria-hidden loading="lazy" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover opacity-15" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHead dark n="04" eyebrow="How it works" title="From property details to clearer decisions." />
        <ol className="mt-20 grid gap-10 md:grid-cols-4">
          {steps.map(([t, d], i) => (
            <li key={t} className="border-t border-gold/60 pt-6">
              <span className="eyebrow text-gold">Step {i + 1}</span>
              <h3 className="display mt-4 text-3xl text-ink-foreground">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{d}</p>
            </li>
          ))}
        </ol>
        <p className="mt-14 text-sm text-ink-muted">The final workflow depends on capabilities supported by the product release.</p>
      </div>
    </section>
  );
}

function Who() {
  const a = [
    { i: Home, t: "Home Buyers", d: "Understand what to review before committing to a property purchase." },
    { i: LineChart, t: "Investors", d: "Compare properties using relevant financial and market indicators." },
    { i: Globe2, t: "NRIs", d: "Access structured information and decision support when evaluating Indian property." },
    { i: Briefcase, t: "Real-Estate Professionals", d: "Explore property intelligence tools that may support client conversations and analysis." },
  ];
  return (
    <section id="who" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead n="05" eyebrow="Who it's for" title="Built for people making important property decisions." />
        <div className="mt-20 grid gap-px bg-border sm:grid-cols-2">
          {a.map(({ i: Icon, t, d }) => (
            <article key={t} className="flex flex-col gap-5 bg-background p-6 sm:p-8 lg:flex-row lg:gap-6 lg:p-12">
              <Icon className="size-7 shrink-0 text-gold" strokeWidth={1.5} />
              <div className="min-w-0">
                <h3 className="display text-3xl text-primary md:text-4xl">{t}</h3>
                <p className="mt-3 text-muted-foreground">{d}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  const h = [
    ["Risk-aware", "Bring potential concerns and missing information into focus."],
    ["Investment-oriented", "Consider financial indicators alongside property details."],
    ["Information-led", "Support decisions with structured insights rather than unsupported promises."],
    ["Designed for clarity", "Make complex property information easier to review and discuss."],
  ];
  return (
    <section className="bg-sand/60 py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
        <div>
          <span className="eyebrow text-muted-foreground"><span className="text-gold">06</span> — Why Aasthi</span>
          <h2 className="display mt-6 text-[clamp(3rem,7vw,6.5rem)] text-primary">Beyond property <em>listings.</em></h2>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
            Aasthi's vision is to help users look beyond a property's listing price and evaluate the information that matters to a purchase or investment decision.
          </p>
        </div>
        <dl className="self-end">
          {h.map(([t, d]) => (
            <div key={t} className="grid grid-cols-3 gap-4 border-t border-primary/15 py-6">
              <dt className="font-semibold text-primary">{t}</dt>
              <dd className="col-span-2 text-muted-foreground">{d}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead n="07" eyebrow="About" title="Built by ELVA Technologies.">
          <p>
            Aasthi is a product initiative by ELVA Technologies, a technology company building software solutions to address practical business and decision-making challenges.
          </p>
          <p className="mt-4">
            The Aasthi team brings together software engineering, product development, market research and an understanding of the real-world consequences of property decisions.
          </p>
          <a href="https://www.elvatech.in" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 border-b border-gold pb-1 text-base font-semibold text-primary">
            Visit elvatech.in <ArrowUpRight className="size-4" />
          </a>
        </SectionHead>
      </div>
    </section>
  );
}

function EarlyAccess() {
  return (
    <section id="early-access" className="bg-ink py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="eyebrow text-gold">08 — Early access</span>
          <h2 className="display mt-6 text-[clamp(2.75rem,5.5vw,5rem)] text-ink-foreground">Be among the first to explore Aasthi.</h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            We're building Aasthi to make property decisions more informed. Register your interest to hear about product updates and early-access opportunities.
          </p>
        </div>
        <div className="lg:col-span-7">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const f = [
    ["What is Aasthi?", "Aasthi is an AI-powered property decision-intelligence platform being developed to support property due diligence and real-estate investment evaluation."],
    ["Is Aasthi available now?", "Aasthi is a coming-soon product. The team will communicate availability and early-access updates as the product progresses."],
    ["Does Aasthi guarantee that a property is legally safe?", "No. Aasthi is intended to support property research and decision-making. Users should independently verify records and consult qualified legal professionals where appropriate."],
    ["Does Aasthi guarantee investment returns or appreciation?", "No. Property values, rental income and investment outcomes are uncertain. Any analysis is intended as decision support, not a guarantee of future performance."],
    ["How can I get early access?", "Submit the early-access form. The team may contact you with updates or opportunities, subject to availability."],
  ];
  return (
    <section className="py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <span className="eyebrow text-muted-foreground"><span className="text-gold">09</span> — FAQ</span>
          <h2 className="display mt-6 text-6xl text-primary">Questions.</h2>
        </div>
        <div className="lg:col-span-8">
          {f.map(([q, a]) => (
            <details key={q} className="group border-t border-border py-6 last:border-b">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold text-primary">
                {q}
                <Plus className="size-5 shrink-0 text-gold transition group-open:rotate-45" />
              </summary>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
