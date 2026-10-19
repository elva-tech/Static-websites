import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { seo } from "@/lib/seo";
import { pricingDimensions } from "@/content";
import { PageHero, SectionHeading, CtaBand, CheckList, btn } from "@/components/site";

export const Route = createFileRoute("/pricing")({
  head: () => seo("Pricing | ELVA ERP", "ELVA ERP is priced on modules, users, projects, entities, deployment model and integrations. Request a quote tailored to your business.", "/pricing"),
  component: Pricing,
});

function Pricing() {
  return (
    <>
      <PageHero crumbs={[{ label: "Pricing" }]} eyebrow="Pricing" title="ERP That Scales With Your Business" text="Every real estate business has a different number of projects, users, entities, workflows and integrations. ELVA ERP is priced on the scope you actually need." actions={false} />
      <section className="section-y">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <SectionHeading eyebrow="What shapes your quote" title="Priced on your scope, not a fixed tier." text="We'll review your requirements and prepare a proposal covering modules, implementation, migration and support." />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/request-proposal" className={btn("accent", "lg")}>Request a Quote <ArrowRight className="size-4" /></Link>
              <Link to="/book-demo" className={btn("outline", "lg")}>Book a Demo</Link>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card md:p-8">
            <CheckList items={pricingDimensions} />
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
