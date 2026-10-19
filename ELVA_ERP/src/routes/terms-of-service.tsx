import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { LegalPage, contactLine } from "@/components/legal";
import { site } from "@/content";

export const Route = createFileRoute("/terms-of-service")({
  head: () => seo("Terms of Service | ELVA ERP", "Terms governing the use of the ELVA ERP website.", "/terms-of-service"),
  component: () => (
    <LegalPage
      title="Terms of Service"
      intro={`These terms govern your use of the ELVA ERP website operated by ${site.legalEntity}.`}
      sections={[
        { id: "acceptance", title: "Acceptance", body: ["By using this website you agree to these terms. If you do not agree, please do not use the website."] },
        { id: "use", title: "Use of the website", body: ["You may use this website to learn about ELVA ERP and to contact us. You agree not to misuse the website, interfere with its operation, attempt unauthorised access, or submit false, misleading or harmful information."] },
        { id: "information", title: "Informational content", body: ["Content on this website describes ELVA ERP's capabilities and intended design. It is provided for general information and does not constitute an offer, contract or guarantee. Specific features, integrations, deployment options and compliance support depend on implementation scope and are confirmed in a written agreement.", "Product screens shown on this website are illustrative and use sample data."] },
        { id: "ip", title: "Intellectual property", body: [`The ELVA name, logo, website design and content are owned by ${site.legalEntity} or its licensors. You may not copy, reproduce or redistribute them without permission, except as needed to view the website.`] },
        { id: "third-party", title: "Third-party links", body: ["This website may link to third-party websites. We are not responsible for their content or practices."] },
        { id: "disclaimer", title: "Disclaimer", body: ["The website is provided on an \"as is\" and \"as available\" basis without warranties of any kind, to the extent permitted by law."] },
        { id: "liability", title: "Limitation of liability", body: [`To the extent permitted by law, ${site.legalEntity} is not liable for indirect or consequential loss arising from your use of this website.`] },
        { id: "changes", title: "Changes", body: ["We may update these terms from time to time. Continued use of the website after changes means you accept the updated terms."] },
        { id: "contact", title: "Contact", body: [contactLine()] },
      ]}
    />
  ),
});
