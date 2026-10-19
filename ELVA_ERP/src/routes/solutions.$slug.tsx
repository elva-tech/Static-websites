import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, AlertCircle, Building } from "lucide-react";
import { seo } from "@/lib/seo";
import realEstateImg from "@/assets/real-estate.jpg";
import {
  solutionBySlug, productBySlug, realEstateSections, profitabilityItems, compliance, realEstateFaqs, type Solution,
} from "@/content";
import { PageHero, DashboardMock, Reveal, SectionHeading, CtaBand, FlowStrip, CheckList, FaqList, btn } from "@/components/site";

export const Route = createFileRoute("/solutions/$slug")({
  loader: ({ params }) => {
    const s = solutionBySlug(params.slug);
    if (!s) throw notFound();
    return { slug: s.slug };
  },
  head: ({ params, loaderData }) => {
    const s = loaderData ? solutionBySlug(loaderData.slug) : undefined;
    if (!s) return { meta: [{ title: "Solution not found | ELVA ERP" }, { name: "robots", content: "noindex" }] };
    if (s.slug === "real-estate")
      return seo("Real Estate ERP Software | ELVA ERP", "Manage projects, construction, procurement, inventory, sales, collections, finance and profitability with ELVA ERP for real estate developers.", "/solutions/real-estate");
    return seo(`${s.name} ERP | ELVA ERP`, s.summary.slice(0, 158), `/solutions/${params.slug}`);
  },
  component: SolutionPage,
});

function SolutionPage() {
  const { slug } = Route.useLoaderData();
  const s = solutionBySlug(slug)!;
  return s.slug === "real-estate" ? <RealEstate s={s} /> : <GenericSolution s={s} />;
}

function ModuleGrid({ s }: { s: Solution }) {
  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {s.modules.map((m) => productBySlug(m)).filter((p) => !!p).map((p) => (
        <Link key={p!.slug} to="/product/$slug" params={{ slug: p!.slug }} className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-card">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand">{(() => { const I = p!.icon; return <I className="size-5" />; })()}</span>
          <span><span className="block font-semibold">{p!.name}</span><span className="block text-sm text-muted-foreground">{p!.short}</span></span>
        </Link>
      ))}
    </div>
  );
}

function GenericSolution({ s }: { s: Solution }) {
  return (
    <>
      <PageHero crumbs={[{ label: "Solutions", to: "/solutions" }, { label: s.name }]} eyebrow={s.name} title={s.headline} text={s.summary}>
        <DashboardMock title={`${s.name} overview`} />
      </PageHero>
      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="Who it's for" title="Designed for" />
            <div className="mt-8"><CheckList items={s.audience} cols={1} /></div>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading eyebrow="Challenges" title="What ELVA helps fix" />
            <ul className="mt-8 space-y-3">
              {s.challenges.map((c) => (
                <li key={c} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"><AlertCircle className="mt-0.5 size-5 shrink-0 text-warning" />{c}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
      <section className="section-y bg-brand-deep text-on-brand">
        <div className="container-x">
          <SectionHeading light eyebrow="Connected workflow" title="One flow, one record" />
          <div className="mt-10"><FlowStrip steps={s.flow} light /></div>
        </div>
      </section>
      <section className="section-y">
        <div className="container-x">
          <SectionHeading eyebrow="Modules" title="The modules behind this solution" />
          <ModuleGrid s={s} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}

function RealEstate({ s }: { s: Solution }) {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-deep text-on-brand">
        <img src={realEstateImg} alt="" width={1280} height={960} className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-deep via-brand-deep/85 to-brand-deep/30" aria-hidden />
        <div className="container-x relative py-20 md:py-28">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs font-semibold text-on-brand-muted">
            <Link to="/" className="hover:text-accent">Home</Link> / <Link to="/solutions" className="hover:text-accent">Solutions</Link> / <span className="text-on-brand">Real Estate</span>
          </nav>
          <div className="animate-rise max-w-3xl">
            <p className="eyebrow text-accent">Real Estate ERP</p>
            <h1 className="mt-3 text-4xl font-semibold leading-[1.06] md:text-[3.4rem]">{s.headline}</h1>
            <p className="mt-5 max-w-2xl text-lg text-on-brand-muted">{s.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/book-demo" className={btn("warm", "lg")}>Book a Real Estate ERP Demo <ArrowRight className="size-4" /></Link>
              <Link to="/request-proposal" className={btn("ghostLight", "lg")}>Request a Proposal</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card py-8">
        <div className="container-x flex flex-wrap gap-2">
          {s.audience.map((a) => (
            <span key={a} className="inline-flex items-center gap-2 rounded-full bg-secondary px-3.5 py-2 text-sm font-medium"><Building className="size-4 text-brand" />{a}</span>
          ))}
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <Reveal><SectionHeading eyebrow="The lifecycle" title="From Land to Handover. One System." /></Reveal>
          <Reveal delay={80} className="mt-10"><FlowStrip steps={s.flow} /></Reveal>
        </div>
      </section>

      {realEstateSections.map((sec, i) => {
        const p = productBySlug(sec.slug)!;
        return (
          <section key={sec.title} className={i % 2 === 0 ? "section-y bg-surface" : "section-y"}>
            <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
              <Reveal className={i % 2 ? "lg:order-2" : ""}>
                <p className="eyebrow">{p.name}</p>
                <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">{sec.title}</h2>
                <p className="mt-4 text-lg text-muted-foreground">{sec.text}</p>
                <div className="mt-6"><CheckList items={sec.items} /></div>
                <Link to="/product/$slug" params={{ slug: p.slug }} className="mt-7 inline-flex items-center gap-1.5 font-semibold text-brand">Explore {p.name} <ArrowRight className="size-4" /></Link>
              </Reveal>
              <Reveal delay={100}><DashboardMock title={p.name} metrics={p.metrics} compact={i % 2 === 1} /></Reveal>
            </div>
          </section>
        );
      })}

      <section className="section-y bg-brand-deep text-on-brand">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading light eyebrow="Project profitability" title="Know Project Profitability Before the Project Ends." />
            <Link to="/product/$slug" params={{ slug: "analytics" }} className={`${btn("warm", "lg")} mt-8`}>See Project Intelligence <ArrowRight className="size-4" /></Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {profitabilityItems.map((x) => (
              <div key={x} className="rounded-xl border border-on-brand/15 bg-on-brand/5 px-4 py-3 text-sm font-semibold">{x}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-7">
            <h3 className="text-xl font-semibold">One ERP for Your Entire Portfolio.</h3>
            <p className="mt-3 text-sm text-muted-foreground">Individual project performance, comparison, consolidated finance, receivables, payables, cash, procurement, inventory and management MIS.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-7">
            <h3 className="text-xl font-semibold">Manage Your Group, Not Just One Company.</h3>
            <p className="mt-3 text-sm text-muted-foreground">Where configured: multiple legal entities, branches, business units, cost centres, intercompany transactions and consolidated reporting.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-7">
            <h3 className="text-xl font-semibold">Build Compliance Into the Workflow.</h3>
            <p className="mt-3 text-sm text-muted-foreground">ELVA ERP can be configured to support your compliance workflows and reporting requirements.</p>
            <div className="mt-4 flex flex-wrap gap-1.5">{compliance.map((c) => <span key={c} className="rounded-full bg-secondary px-2.5 py-1 text-xs">{c}</span>)}</div>
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x">
          <SectionHeading eyebrow="Modules" title="Everything a developer runs on" />
          <ModuleGrid s={s} />
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading eyebrow="Real estate FAQ" title="Questions developers ask" />
          <FaqList faqs={realEstateFaqs} />
        </div>
      </section>

      <CtaBand title="See ELVA ERP with your projects in mind." />
    </>
  );
}
