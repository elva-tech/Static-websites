import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — Aasthi" },
      { name: "description", content: "Terms governing use of the Aasthi coming-soon website by ELVA Technologies." },
      { property: "og:title", content: "Terms of Use — Aasthi" },
      { property: "og:description", content: "Terms governing use of the Aasthi website." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <LegalPage title="Terms of Use">
      <p>By using this website you agree to these terms.</p>
      <h2>Product status</h2>
      <p>Aasthi is under development. Features described on this site are planned and may change or not be offered.</p>
      <h2>No professional advice</h2>
      <p>Nothing on this site is legal, financial or investment advice. Always verify property records independently and consult qualified professionals.</p>
      <h2>No guarantees</h2>
      <p>ELVA Technologies does not guarantee the legal status of any property, its future value, rental income or investment returns.</p>
      <h2>Contact</h2>
      <p>Questions can be directed to ELVA Technologies via www.elvatech.in.</p>
    </LegalPage>
  ),
});
