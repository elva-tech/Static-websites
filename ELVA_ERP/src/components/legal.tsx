import { site } from "@/content";

export type LegalSection = { id: string; title: string; body: string[] };

export function LegalPage({ title, intro, sections }: { title: string; intro: string; sections: LegalSection[] }) {
  return (
    <>
      <section className="bg-hero">
        <div className="container-x py-14 md:py-20">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-3 text-4xl font-semibold md:text-5xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">{intro}</p>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: {site.legalLastUpdated}</p>
        </div>
      </section>
      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-[15rem_1fr]">
          <nav aria-label="Contents" className="lg:sticky lg:top-24 lg:self-start">
            <p className="eyebrow">Contents</p>
            <ol className="mt-3 space-y-2 text-sm">
              {sections.map((s, i) => (
                <li key={s.id}><a href={`#${s.id}`} className="text-muted-foreground hover:text-brand">{i + 1}. {s.title}</a></li>
              ))}
            </ol>
          </nav>
          <div className="max-w-3xl space-y-10">
            {sections.map((s, i) => (
              <section key={s.id} id={s.id} className="scroll-mt-24">
                <h2 className="text-2xl font-semibold">{i + 1}. {s.title}</h2>
                {s.body.map((p) => <p key={p} className="mt-3 leading-relaxed text-muted-foreground">{p}</p>)}
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export const contactLine = () =>
  site.contactEmail
    ? `You can contact ${site.legalEntity} at ${site.contactEmail}.`
    : `You can contact ${site.legalEntity} using the contact form on our Contact page.`;
