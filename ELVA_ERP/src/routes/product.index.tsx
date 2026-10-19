import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { seo } from "@/lib/seo";
import { products, philosophy, security, type Product } from "@/content";
import { PageHero, DashboardMock, Reveal, SectionHeading, CtaBand } from "@/components/site";

export const Route = createFileRoute("/product/")({
  head: () =>
    seo(
      "ELVA ERP Product Overview | Modules for Finance, Projects & More",
      "Explore ELVA ERP modules: finance, projects, procurement, inventory, sales, property, HR, assets, analytics and ELVA Intelligence on one platform.",
      "/product",
    ),
  component: ProductOverview,
});

const groupText: Record<Product["group"], string> = {
  "Core ERP": "The business foundation behind every ELVA industry solution.",
  Industry: "One ERP foundation. Multiple industries.",
  Insight: "Turn transactions into management insight — and conversation.",
};

function ProductOverview() {
  const groups: Product["group"][] = ["Core ERP", "Industry", "Insight"];
  return (
    <>
      <PageHero crumbs={[{ label: "Product" }]} eyebrow="ELVA ERP platform" title="A connected business operating platform." text="Operational activity, financial control, project execution and management intelligence — working together on one shared data foundation.">
        <DashboardMock />
      </PageHero>

      <section className="border-b border-border bg-card">
        <div className="container-x grid grid-cols-2 md:grid-cols-4">
          {philosophy.map((p) => (
            <div key={p.k} className="px-2 py-6 md:px-6">
              <p className="font-display text-sm font-semibold text-brand">{p.k}</p>
              <p className="text-sm text-muted-foreground">{p.v}</p>
            </div>
          ))}
        </div>
      </section>

      {groups.map((g, gi) => (
        <section key={g} className={gi % 2 ? "section-y bg-surface" : "section-y"}>
          <div className="container-x">
            <Reveal><SectionHeading eyebrow={g} title={groupText[g]} /></Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {products.filter((p) => p.group === g).map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) * 60}>
                  <Link to="/product/$slug" params={{ slug: p.slug }} className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lift">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-brand-soft text-brand group-hover:bg-brand group-hover:text-on-brand"><p.icon className="size-5" /></span>
                    <h3 className="mt-4 text-lg font-semibold">{p.name}</h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.summary}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">View module <ArrowRight className="size-4" /></span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section-y bg-brand-deep text-on-brand">
        <div className="container-x">
          <SectionHeading light eyebrow="Security & control" title="Your Business Data. Your Control." text="ELVA ERP is designed as a multi-tenant platform. Each organization has its own users, modules, workflows, configurations and business data — isolated by tenant context and access controls." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {security.map((s) => (
              <div key={s.t} className="rounded-2xl border border-on-brand/15 bg-on-brand/5 p-6">
                <h3 className="font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-on-brand-muted">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
