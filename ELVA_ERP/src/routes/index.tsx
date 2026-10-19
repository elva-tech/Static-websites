import type { CSSProperties } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, X, Check, Sparkles, ShieldCheck } from "lucide-react";
import { seo } from "@/lib/seo";
import realEstateImg from "@/assets/real-estate.jpg";
import {
  painPoints, fragmented, products, businessFlow, philosophy, comparison, aiQuestions, scaleSteps, roles, solutions,
} from "@/content";
import { btn, DashboardMock, Reveal, SectionHeading, CtaBand, FlowStrip, IllustrativeNote } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () =>
    seo(
      "ELVA ERP | Real Estate ERP Software for Developers",
      "ELVA ERP connects finance, projects, procurement, inventory, sales, collections, HR and analytics for real estate developers and growing businesses.",
      "/",
    ),
  component: Home,
});

const tileColors = ["bg-insight-soft text-insight", "bg-accent/20 text-warning", "bg-success/15 text-success", "bg-destructive/10 text-destructive", "bg-brand-soft text-brand"];

function Home() {
  const homeModules = ["finance", "projects", "procurement", "inventory", "sales-crm", "pms", "hr-payroll", "analytics", "intelligence"]
    .map((s) => products.find((p) => p.slug === s)!)
    .filter(Boolean);

  return (
    <>
      {/* Hero — centered, glow + perspective floor */}
      <section className="relative overflow-hidden bg-hero">
        <div className="pointer-events-none absolute inset-x-[-20%] bottom-0 h-[46%] bg-floor" aria-hidden />
        <div className="container-x relative pb-16 pt-14 text-center md:pt-20">
          <div className="animate-rise mx-auto max-w-4xl">
            <p className="eyebrow font-mono text-muted-foreground">— From land to handover · From sales to finance —</p>
            <h1 className="mt-5 text-[clamp(1.75rem,8.5vw,2.4rem)] font-semibold leading-[1.08] text-foreground sm:text-5xl lg:text-[4rem]">
              Run your entire real estate business on <span className="scribble">one connected ERP</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              From projects and construction to sales, collections, procurement, inventory, finance and management reporting — ELVA ERP brings your business onto one connected platform.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/book-demo" className={btn("accent", "lg")}>Book a Demo</Link>
              <Link to="/product" className={btn("outline", "lg")}>Explore ELVA ERP</Link>
            </div>
            <p className="mt-5 text-sm text-muted-foreground">Built for growing real estate developers and project-driven businesses.</p>
          </div>
          <div className="relative mx-auto mt-14 max-w-5xl">
            <div className="animate-float absolute -left-24 top-16 hidden w-56 rounded-xl border border-border bg-card/80 p-4 text-left shadow-lift backdrop-blur xl:block">
              <p className="text-xs text-muted-foreground">Net collections</p>
              <p className="mt-1 font-mono text-xl font-semibold">₹48,10,00,000</p>
              <span className="mt-2 inline-block rounded border border-success/40 px-1.5 text-xs font-semibold text-success">12.4% ↑</span>
            </div>
            <div className="animate-float absolute -right-24 top-24 hidden w-56 rounded-xl border border-border bg-card/80 p-4 text-left shadow-lift backdrop-blur [animation-delay:1.5s] xl:block">
              <p className="text-xs text-muted-foreground">Unit inventory</p>
              {[["Booked", 66], ["Available", 25], ["On hold", 9]].map(([l, v]) => (
                <div key={l} className="mt-2"><div className="flex justify-between text-xs"><span>{l}</span><span className="font-mono">{v}%</span></div><div className="mt-1 h-1.5 rounded-full bg-secondary"><div className="h-full rounded-full bg-insight" style={{ width: `${v}%` }} /></div></div>
              ))}
            </div>
            <div className="animate-rise relative text-left [animation-delay:150ms]"><DashboardMock /></div>
            <p className="mt-3 text-xs text-muted-foreground">Illustrative interface with sample data.</p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-b border-border bg-card">
        <div className="container-x grid grid-cols-2 divide-border md:grid-cols-4 md:divide-x">
          {philosophy.map((p) => (
            <div key={p.k} className="px-2 py-6 md:px-6">
              <p className="font-display text-sm font-semibold text-brand">{p.k}</p>
              <p className="text-sm text-muted-foreground">= {p.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Problem */}
      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading eyebrow="The problem" title={<>Your business is connected. <span className="font-script text-[1.25em] text-insight">Your software should be too.</span></>} text="Real estate businesses rarely run on one system. The result is fragmented information, duplicate work and delayed decisions." />
            <p className="mt-8 rounded-2xl border-l-4 border-accent bg-card p-5 font-display text-lg font-semibold shadow-card">
              ELVA ERP connects these workflows so your teams work from the same business data.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <ul className="grid gap-3">
              {fragmented.map((f, i) => (
                <li key={f} className="flex items-center gap-4 rounded-xl border border-dashed border-input bg-card px-5 py-4" style={{ marginLeft: `${(i % 3) * 1.25}rem` }}>
                  <X className="size-4 shrink-0 text-destructive" aria-hidden />
                  <span className="text-[0.95rem]">{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Pain points */}
      <section className="section-y bg-surface">
        <div className="container-x">
          <Reveal><SectionHeading center eyebrow="What slows developers down" title="Eight gaps a connected ERP closes" /></Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {painPoints.map((p, i) => (
              <Reveal key={p.title} delay={(i % 4) * 60}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lift">
                  <p className="font-display text-sm font-bold text-accent">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Modules — Odoo-style app tiles */}
      <section className="section-y">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <h2 className="font-script text-5xl leading-tight text-foreground md:text-7xl">An <span className="scribble scribble-warm">all-in-one</span> platform</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground"><strong className="text-foreground">One platform. Every important business function.</strong> Start with the modules you need — every module shares the same customers, projects, suppliers and ledgers.</p>
            <Link to="/product" className={`${btn("accent", "lg")} mt-8`}>Explore Modules</Link>
          </Reveal>
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {homeModules.map((p, i) => (
              <Reveal key={p.slug} delay={i * 50}>
                <Link to="/product/$slug" params={{ slug: p.slug }} className="group flex aspect-square flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card p-3 text-center shadow-card transition-all hover:-translate-y-1 hover:shadow-lift" style={{ transform: `rotate(${[-3, 2, -1, 3, -2, 1, -3, 2, -1][i]}deg)` }}>
                  <span className={`flex size-12 items-center justify-center rounded-xl md:size-14 ${tileColors[i % tileColors.length]}`}>
                    <p.icon className="size-6 md:size-7" aria-hidden />
                  </span>
                  <span className="text-xs font-semibold leading-tight sm:text-sm">{p.name.replace(" (PMS)", "")}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Business flow */}
      <section className="section-y relative overflow-hidden bg-brand-deep text-on-brand">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />
        <div className="container-x relative">
          <Reveal><SectionHeading light eyebrow="Connected by design" title="One business flow. From transaction to decision." /></Reveal>
          <Reveal delay={80} className="mt-10"><FlowStrip steps={businessFlow} light /></Reveal>
          <Reveal delay={140}>
            <p className="mt-10 max-w-3xl text-lg leading-relaxed text-on-brand-muted">
              Information does not stop at departmental boundaries. A procurement transaction can affect inventory. Inventory can affect project cost. Project cost can affect profitability. Billing affects receivables. Collections affect cash. All of it becomes available to management through analytics and ELVA Intelligence.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Real estate */}
      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative">
              <img src={realEstateImg} alt="Residential towers under construction at dusk" width={1280} height={960} loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lift" />
              <div className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-border bg-card p-4 shadow-lift sm:left-auto sm:right-6 sm:w-72">
                <p className="text-xs text-muted-foreground">Skyline Residences · Tower B</p>
                <div className="mt-2 grid grid-cols-3 gap-2 text-center">
                  {[["842", "Booked"], ["317", "Available"], ["72%", "Built"]].map(([v, l]) => (
                    <div key={l}><p className="font-display font-semibold">{v}</p><p className="text-[0.65rem] text-muted-foreground">{l}</p></div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading eyebrow="Real estate first" title="Built Around the Real Estate Lifecycle" text="Real estate is not just accounting. It is land, projects, approvals, construction, procurement, inventory, sales, customers, collections and finance — all moving together." />
            <div className="mt-8"><FlowStrip steps={solutions[0]?.flow ?? []} /></div>
            <Link to="/solutions/$slug" params={{ slug: "real-estate" }} className={`${btn("brand", "lg")} mt-8`}>Explore Real Estate ERP <ArrowRight className="size-4" /></Link>
          </Reveal>
        </div>
      </section>

      {/* AI */}
      <section className="section-y bg-surface">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeading eyebrow="ELVA Intelligence" title="Ask Your Business. Get Answers." text="ELVA Intelligence brings AI-powered interaction to your ERP — grounded in your authorized business data. It does not replace your ERP; it helps people understand the business faster." />
            <p className="mt-6 flex items-start gap-3 text-sm text-muted-foreground">
              <ShieldCheck className="size-5 shrink-0 text-success" /> Financial and operational answers come from validated ERP data — not guesses from an AI model.
            </p>
            <Link to="/product/$slug" params={{ slug: "intelligence" }} className={`${btn("outline")} mt-8`}>See ELVA Intelligence <ArrowRight className="size-4" /></Link>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-2xl border border-border bg-card p-5 shadow-lift">
              <div className="flex items-center gap-2 border-b border-border pb-4">
                <span className="flex size-8 items-center justify-center rounded-lg bg-brand text-accent"><Sparkles className="size-4" /></span>
                <p className="font-display font-semibold">Ask ELVA</p>
              </div>
              <div className="mt-4 space-y-3">
                <p className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-brand px-4 py-2.5 text-sm text-on-brand">Which projects are exceeding budget?</p>
                <div className="max-w-[90%] rounded-2xl rounded-bl-md bg-secondary px-4 py-3 text-sm">
                  <p><strong>Riverside Towers</strong> is 6.2% over its approved budget, mainly in structural steel and RMC. Committed cost is ₹1.4 Cr above plan.</p>
                  <p className="mt-2 text-xs text-muted-foreground">Source: Project budgets, POs and goods receipts · checked against your access</p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {aiQuestions.slice(0, 4).map((q) => (
                  <span key={q} className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground">{q}</span>
                ))}
              </div>
            </div>
            <IllustrativeNote />
          </Reveal>
        </div>
      </section>

      {/* Comparison */}
      <section className="section-y">
        <div className="container-x">
          <Reveal><SectionHeading center eyebrow="Why connect" title="Stop Connecting Your Business With Spreadsheets." /></Reveal>
          <Reveal delay={80}>
            <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-border bg-card shadow-card">
              <div className="grid grid-cols-2 bg-surface text-sm font-semibold">
                <p className="px-4 py-4 text-muted-foreground md:px-6">Without a connected ERP</p>
                <p className="border-l border-border px-4 py-4 text-brand md:px-6">With ELVA ERP</p>
              </div>
              {comparison.map(([a, b]) => (
                <div key={a} className="grid grid-cols-2 border-t border-border text-sm">
                  <p className="flex items-start gap-2 px-4 py-4 text-muted-foreground md:px-6"><X className="mt-0.5 size-4 shrink-0 text-destructive/70" />{a}</p>
                  <p className="flex items-start gap-2 border-l border-border px-4 py-4 font-medium md:px-6"><Check className="mt-0.5 size-4 shrink-0 text-success" />{b}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Scale */}
      <section className="section-y bg-surface">
        <div className="container-x">
          <Reveal><SectionHeading eyebrow="Built to scale" title="Start With One Project. Grow Into a Platform." text="ELVA ERP can begin with the workflows that matter most today and expand as your organization grows." /></Reveal>
          <div className="mt-12 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {scaleSteps.map((s, i) => (
              <Reveal key={s} delay={i * 60}>
                <div className="flex h-full flex-col justify-end rounded-2xl bg-brand p-5 text-on-brand sm:min-h-(--stage-h)" style={{ "--stage-h": `${7 + i * 1.4}rem` } as CSSProperties}>
                  <p className="text-xs font-bold text-accent">Stage {i + 1}</p>
                  <p className="mt-1 font-display font-semibold">{s}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="section-y">
        <div className="container-x">
          <Reveal><SectionHeading eyebrow="For every leader" title="One system. The view each role needs." /></Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {roles.map((r) => (
              <div key={r.role} className="bg-card p-6">
                <h3 className="text-base font-semibold">{r.role}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="pb-4">
        <div className="container-x">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-8 text-center md:p-12">
              <p className="eyebrow">Trust</p>
              <h2 className="mt-3 text-2xl font-semibold md:text-3xl">Built Through Real Business Workflows</h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">ELVA ERP is being developed around real enterprise workflows across finance, projects, procurement, inventory and industry operations.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
