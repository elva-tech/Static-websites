import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { resourceTopics } from "@/content";
import { PageHero, CtaBand, btn } from "@/components/site";

export const Route = createFileRoute("/resources")({
  head: () => seo("Resources & Insights | ELVA ERP", "ERP guides and insights for real estate developers and construction businesses — project accounting, procurement, inventory and collections.", "/resources"),
  component: Resources,
});

function Resources() {
  return (
    <>
      <PageHero crumbs={[{ label: "Resources" }]} eyebrow="Resources" title="ERP Guides & Insights" text="Practical guides for real estate and construction businesses are being prepared. Here's what's coming." actions={false} />
      <section className="section-y">
        <div className="container-x">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {resourceTopics.map((r) => (
              <article key={r.t} className="flex flex-col rounded-2xl border border-border bg-card p-6">
                <span className="w-fit rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold text-muted-foreground">Coming soon</span>
                <h2 className="mt-4 text-lg font-semibold">{r.t}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{r.d}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 rounded-2xl border border-border bg-surface p-8 text-center">
            <h2 className="text-xl font-semibold">Case studies</h2>
            <p className="mx-auto mt-2 max-w-xl text-muted-foreground">Customer case studies will be published once customers approve public references.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link to="/faq" className={btn("outline")}>Read the FAQs</Link>
              <Link to="/contact" className={btn("brand")}>Ask us a question</Link>
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
