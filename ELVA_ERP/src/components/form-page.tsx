import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { LeadForm, type FormType } from "@/components/lead-form";
import { Breadcrumbs } from "@/components/site";

export function FormPage({ type, eyebrow, title, text, points, aside }: { type: FormType; eyebrow: string; title: string; text: string; points: string[]; aside?: ReactNode }) {
  return (
    <section className="relative">
      <div className="absolute inset-x-0 top-0 h-[30rem] bg-hero" aria-hidden />
      <div className="container-x relative grid gap-10 py-14 md:py-20 lg:grid-cols-[1fr_1.35fr]">
        <div className="lg:pt-4">
          <Breadcrumbs items={[{ label: eyebrow }]} />
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">{title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{text}</p>
          <ul className="mt-8 space-y-3 rounded-2xl bg-card p-6 text-card-foreground shadow-card lg:mt-16">
            {points.map((p) => (
              <li key={p} className="flex gap-3 text-sm"><Check className="mt-0.5 size-4 shrink-0 text-success" />{p}</li>
            ))}
          </ul>
          {aside}
        </div>
        <div className="min-w-0"><LeadForm type={type} /></div>
      </div>
    </section>
  );
}
