import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { howItWorks, scaleSteps } from "@/content";
import { PageHero, Reveal, SectionHeading, CtaBand, FlowStrip } from "@/components/site";

export const Route = createFileRoute("/how-it-works")({
  head: () => seo("How It Works | ELVA ERP Implementation", "From understanding your workflows to configuration, migration, training and go-live — how ELVA ERP is implemented and improved.", "/how-it-works"),
  component: HowItWorks,
});

function HowItWorks() {
  return (
    <>
      <PageHero crumbs={[{ label: "How It Works" }]} eyebrow="Implementation" title="From Implementation to Everyday Operations" text="A structured path from understanding your business to running it on ELVA ERP — and improving it continuously." />
      <section className="section-y">
        <div className="container-x">
          <ol className="relative mx-auto max-w-3xl space-y-4 before:absolute before:bottom-6 before:left-6 before:top-6 before:w-px before:bg-border">
            {howItWorks.map((s, i) => (
              <Reveal key={s.t} delay={i * 40}>
                <li className="relative flex gap-5 rounded-2xl border border-border bg-card p-5 shadow-card md:p-6">
                  <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-brand font-display font-semibold text-on-brand">{i + 1}</span>
                  <div>
                    <h2 className="text-xl font-semibold">{s.t}</h2>
                    <p className="mt-1 text-muted-foreground">{s.d}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
      <section className="section-y bg-surface">
        <div className="container-x">
          <SectionHeading eyebrow="Built to scale" title="Start With One Project. Grow Into a Platform." text="Begin with the workflows that matter most today and expand as your organization grows." />
          <div className="mt-10"><FlowStrip steps={scaleSteps} /></div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
