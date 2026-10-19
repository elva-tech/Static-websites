import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, AlertCircle, Lock, Plug } from "lucide-react";
import { seo } from "@/lib/seo";
import { productBySlug, products } from "@/content";
import { PageHero, DashboardMock, Reveal, SectionHeading, CtaBand, FlowStrip, CheckList, FaqList, IllustrativeNote } from "@/components/site";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = productBySlug(params.slug);
    if (!product) throw notFound();
    return { slug: product.slug };
  },
  head: ({ params, loaderData }) => {
    const p = loaderData ? productBySlug(loaderData.slug) : undefined;
    if (!p) return { meta: [{ title: "Module not found | ELVA ERP" }, { name: "robots", content: "noindex" }] };
    return seo(`${p.name} | ELVA ERP`, p.summary.slice(0, 158), `/product/${params.slug}`);
  },
  component: ProductPage,
});

function ProductPage() {
  const { slug } = Route.useLoaderData();
  const p = productBySlug(slug)!;
  const related = products.filter((x) => x.slug !== p.slug && x.group === p.group).slice(0, 3);

  return (
    <>
      <PageHero crumbs={[{ label: "Product", to: "/product" }, { label: p.name }]} eyebrow={p.name} title={p.headline} text={p.summary}>
        <DashboardMock title={p.name} metrics={p.metrics} />
      </PageHero>

      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="The business problem" title="Where the gaps appear today" />
            <ul className="mt-8 space-y-3">
              {p.problems.map((x) => (
                <li key={x} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                  <AlertCircle className="mt-0.5 size-5 shrink-0 text-warning" /> {x}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <div className="h-full rounded-3xl bg-brand-gradient p-8 text-on-brand md:p-10">
              <p className="eyebrow text-accent">What ELVA solves</p>
              <p className="mt-4 font-display text-2xl font-semibold leading-snug">{p.solves}</p>
              <ul className="mt-8 space-y-3">
                {p.outcomes.map((o) => (
                  <li key={o} className="flex gap-3 text-on-brand-muted"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />{o}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x">
          <Reveal><SectionHeading eyebrow="Core features" title={`What's inside ${p.name}`} /></Reveal>
          <Reveal delay={80} className="mt-10 rounded-2xl border border-border bg-card p-6 md:p-8"><CheckList items={p.features} cols={3} /></Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <Reveal><SectionHeading eyebrow="Workflow" title="How the work flows" text="Each step updates the same records, so the next team — and finance — sees it immediately." /></Reveal>
          <Reveal delay={80} className="mt-10"><FlowStrip steps={p.workflow} /></Reveal>
          <Reveal delay={140} className="mt-12">
            <DashboardMock title={`${p.name} — workspace`} metrics={p.metrics} />
            <IllustrativeNote />
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <Plug className="size-6 text-insight" />
            <h3 className="mt-4 text-lg font-semibold">Integrations</h3>
            <p className="mt-2 text-sm text-muted-foreground">ELVA ERP is designed with APIs and integration adapters. Specific integrations depend on the external system and available APIs, and are scoped during implementation.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <Lock className="size-6 text-insight" />
            <h3 className="mt-4 text-lg font-semibold">Security & permissions</h3>
            <p className="mt-2 text-sm text-muted-foreground">Role-based access, approval workflows and audit trails apply across the module. Users see and perform only what their role permits.</p>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading eyebrow="FAQs" title="Common questions" />
          <FaqList faqs={p.faqs} />
        </div>
      </section>

      {related.length > 0 && (
        <section className="pb-4">
          <div className="container-x">
            <p className="eyebrow">Related modules</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {related.map((r) => (
                <Link key={r.slug} to="/product/$slug" params={{ slug: r.slug }} className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 hover:shadow-card">
                  <r.icon className="size-6 text-brand" />
                  <span className="flex-1 font-semibold">{r.name}</span>
                  <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand title={`See ${p.name} with your data in mind.`} />
    </>
  );
}
