import type { ReactNode } from "react";
import { Header, Footer } from "./Chrome";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <Header home={false} />
      <main className="mx-auto max-w-3xl px-6 py-20">
        <p className="eyebrow text-gold">Draft — pending legal review</p>
        <h1 className="display mt-4 text-6xl text-primary">{title}</h1>
        <div className="mt-10 space-y-5 leading-relaxed text-muted-foreground [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-primary">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
