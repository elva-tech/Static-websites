import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { FormPage } from "@/components/form-page";

export const Route = createFileRoute("/request-proposal")({
  head: () => seo("Request a Proposal | ELVA ERP", "Share your ERP requirements and get a proposal for ELVA ERP covering modules, implementation, migration and support.", "/request-proposal"),
  component: () => (
    <FormPage
      type="proposal"
      eyebrow="Request a Proposal"
      title="Let's Discuss Your ERP Requirements"
      text="Share your scope and we'll prepare a proposal based on modules, users, projects, deployment and integrations."
      points={["Pricing based on the scope you need", "Implementation and data-migration approach", "Timeline aligned with your plans"]}
    />
  ),
});
