import { createFileRoute } from "@tanstack/react-router";
import { Check, X } from "lucide-react";
import { seo } from "@/lib/seo";
import { whyElva, comparison } from "@/content";
import { PageHero, Reveal, SectionHeading, CtaBand } from "@/components/site";

export const Route = createFileRoute("/why-elva")({
  head: () => seo("Why ELVA ERP | Connected, Modular, Real Estate Ready", "Why developers choose ELVA ERP: built around business processes, modular, multi-project, AI-enabled and extensible.", "/why-elva"),
  component: Why,
});

function Why() {
  return (
    <>
      <PageHero crumbs={[{ label: "Why ELVA" }]} eyebrow="Why ELVA" title="Why ELVA ERP?" text="Not accounting software. Not a CRM. Not a collection of dashboards. A connected business operating platform." />
      <section className="section-y">
        <div className="container-x grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyElva.map((w, i) => (
            <Reveal key={w.t} delay={(i % 4) * 60}>
              <div className="h-full rounded-2xl border border-border bg-card p-6">
                <p className="font-display text-3xl font-semibold text-accent">{i + 1}</p>
                <h2 className="mt-3 text-lg font-semibold">{w.t}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{w.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="section-y bg-surface">
        <div className="container-x">
          <SectionHeading center title="Stop Connecting Your Business With Spreadsheets." />
          <div className="mx-auto mt-10 max-w-4xl space-y-2">
            {comparison.map(([a, b]) => (
              <div key={a} className="grid gap-2 rounded-xl border border-border bg-card p-4 text-sm sm:grid-cols-2">
                <p className="flex gap-2 text-muted-foreground"><X className="size-4 shrink-0 text-destructive/70" />{a}</p>
                <p className="flex gap-2 font-medium"><Check className="size-4 shrink-0 text-success" />{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
