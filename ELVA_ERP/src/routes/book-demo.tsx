import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { FormPage } from "@/components/form-page";

export const Route = createFileRoute("/book-demo")({
  head: () => seo("Book a Demo | ELVA ERP", "Book an ELVA ERP demo tailored to your projects, teams and workflows.", "/book-demo"),
  component: () => (
    <FormPage
      type="demo"
      eyebrow="Book a Demo"
      title="Book Your ELVA ERP Demo"
      text="Tell us how your business works, and we can demonstrate how ELVA ERP can fit your projects, teams and workflows."
      points={["A walkthrough focused on your business type", "See how projects, sales, procurement and finance connect", "Discuss modules, scope and next steps"]}
    />
  ),
});
