import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { seo } from "@/lib/seo";
import { solutions } from "@/content";
import { PageHero, Reveal, CtaBand, FlowStrip } from "@/components/site";

export const Route = createFileRoute("/solutions/")({
  head: () =>
    seo(
      "Industry Solutions | ELVA ERP",
      "ELVA ERP solutions for real estate developers, construction companies, infrastructure contractors and manufacturers — one ERP foundation, multiple industries.",
      "/solutions",
    ),
  component: Solutions,
});

function Solutions() {
  return (
    <>
      <PageHero crumbs={[{ label: "Solutions" }]} eyebrow="Industry solutions" title="One ERP Foundation. Multiple Industries." text="Real estate is our primary focus. The same foundation extends to construction, infrastructure and manufacturing through industry modules." />
      <section className="section-y">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {solutions.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 2) * 80}>
              <Link to="/solutions/$slug" params={{ slug: s.slug }} className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-lift md:p-9">
                {i === 0 && <span className="mb-4 w-fit rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">Primary solution</span>}
                <h2 className="text-2xl font-semibold">{s.name}</h2>
                <p className="mt-3 text-muted-foreground">{s.summary}</p>
                <div className="mt-6 flex-1"><FlowStrip steps={s.flow.slice(0, 5)} /></div>
                <span className="mt-6 inline-flex items-center gap-1.5 font-semibold text-brand">Explore {s.name} <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
