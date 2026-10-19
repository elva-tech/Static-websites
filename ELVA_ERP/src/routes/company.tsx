import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { philosophy } from "@/content";
import { PageHero, SectionHeading, CtaBand, Logo } from "@/components/site";

export const Route = createFileRoute("/company")({
  head: () => seo("About ELVA Tech | ELVA ERP", "ELVA builds business software that connects operational workflows, financial control, analytics and intelligent automation.", "/company"),
  component: Company,
});

function Company() {
  return (
    <>
      <PageHero crumbs={[{ label: "Company" }]} eyebrow="About ELVA" title="Technology Built Around the Way Businesses Actually Work." text="ELVA builds business software that connects operational workflows, financial control, analytics and intelligent automation." actions={false} />
      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-[auto_1fr] lg:items-start">
          <Logo size={140} />
          <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>Our approach is simple: understand the business process, build reusable technology around it, and continuously improve the platform through real customer use cases.</p>
            <p>ELVA ERP is being developed around real enterprise workflows across finance, projects, procurement, inventory and industry operations — with real estate developers and construction businesses as our first focus.</p>
          </div>
        </div>
      </section>
      <section className="section-y bg-surface">
        <div className="container-x">
          <SectionHeading eyebrow="Product philosophy" title="Four systems, one platform" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {philosophy.map((p) => (
              <div key={p.k} className="rounded-2xl border border-border bg-card p-6">
                <p className="font-display text-lg font-semibold text-brand">{p.k}</p>
                <p className="mt-1 text-muted-foreground">{p.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
