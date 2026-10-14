import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Aasthi" },
      { name: "description", content: "How ELVA Technologies handles information submitted through the Aasthi early-access form." },
      { property: "og:title", content: "Privacy Policy — Aasthi" },
      { property: "og:description", content: "How Aasthi early-access information is collected and used." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <LegalPage title="Privacy Policy">
      <p>This website is operated by ELVA Technologies for the Aasthi product, which is currently in development.</p>
      <h2>Information we collect</h2>
      <p>When you register for early access we collect your full name, email address, mobile number, user type and city.</p>
      <h2>How we use it</h2>
      <p>We use this information only to contact you about Aasthi product updates and early-access opportunities. We do not sell your information.</p>
      <h2>Storage and security</h2>
      <p>Submissions are stored securely and are accessible only to authorised members of the ELVA Technologies team.</p>
      <h2>Your choices</h2>
      <p>You may ask us to update or delete your information, or stop contacting you, at any time by reaching out via www.elvatech.in.</p>
    </LegalPage>
  ),
});
