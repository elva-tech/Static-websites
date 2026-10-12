import type { ReactNode } from "react";
import { Header, Footer } from "./site";

export function LegalPage({ title, intro, sections }: { title: string; intro: string; sections: { id: string; h: string; body: ReactNode }[] }) {
  return (
    <>
      <Header />
      <main className="container-x grid gap-12 py-16 lg:grid-cols-[14rem_1fr]">
        <nav aria-label="Contents" className="lg:sticky lg:top-24 lg:self-start">
          <a href="/" className="text-sm text-primary">← Back to ELVA LMS</a>
          <ol className="mt-6 space-y-2 text-sm text-muted-foreground">
            {sections.map((s) => <li key={s.id}><a className="hover:text-foreground" href={`#${s.id}`}>{s.h}</a></li>)}
          </ol>
        </nav>
        <article className="max-w-2xl animate-rise">
          <p className="eyebrow text-primary">Legal · Draft pending ELVA review</p>
          <h1 className="mt-4 text-4xl font-semibold">{title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{intro}</p>
          <p className="mt-6 rounded-xl border border-warning/40 bg-warning/10 p-4 text-sm">This document is a draft. Registered company details, retention periods, governing law and third-party processors must be confirmed by ELVA Tech before publication.</p>
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="mt-10">
              <h2 className="text-2xl font-semibold">{s.h}</h2>
              <div className="mt-3 space-y-3 leading-relaxed text-muted-foreground">{s.body}</div>
            </section>
          ))}
          <p className="mt-12 text-sm text-muted-foreground">Questions? Contact ELVA Tech, Bangalore, India — <a className="text-primary" href="tel:+919611149957">+91-96111 49957</a>.</p>
        </article>
      </main>
      <Footer />
    </>
  );
}
