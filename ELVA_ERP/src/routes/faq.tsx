import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { generalFaqs, realEstateFaqs } from "@/content";
import { PageHero, SectionHeading, CtaBand, FaqList } from "@/components/site";

export const Route = createFileRoute("/faq")({
  head: () => seo("FAQs | ELVA ERP", "Answers to common questions about ELVA ERP: modules, multi-project and multi-entity support, integrations, migration, AI and real estate.", "/faq"),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHero crumbs={[{ label: "FAQs" }]} eyebrow="FAQs" title="Frequently asked questions" text="Can't find what you need? Talk to ELVA and we'll help." />
      <section className="section-y">
        <div className="container-x grid gap-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
            <SectionHeading eyebrow="General" title="About ELVA ERP" />
            <FaqList faqs={generalFaqs} />
          </div>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
            <SectionHeading eyebrow="Real estate" title="For developers" />
            <FaqList faqs={realEstateFaqs} />
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
