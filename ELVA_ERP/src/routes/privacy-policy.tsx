import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { LegalPage, contactLine } from "@/components/legal";
import { site } from "@/content";

export const Route = createFileRoute("/privacy-policy")({
  head: () => seo("Privacy Policy | ELVA ERP", "How ELVA Tech collects, uses and protects information submitted through the ELVA ERP website.", "/privacy-policy"),
  component: () => (
    <LegalPage
      title="Privacy Policy"
      intro={`This policy explains how ${site.legalEntity} handles information you share through this website.`}
      sections={[
        { id: "scope", title: "Scope", body: ["This policy applies to information submitted through the ELVA ERP website, including the Contact, Book a Demo and Request a Proposal forms. It does not cover data processed inside the ELVA ERP product for customers, which is governed by customer agreements."] },
        { id: "information", title: "Information we collect", body: ["When you submit a form, we collect the details you provide: name, company, work email, phone number, city, business type, industry, number of projects, employees or users, current software, modules of interest, implementation timeline and your message.", "We also record limited context about the submission: the page you submitted from, the page you first landed on, the referring website and any campaign (UTM) parameters in the link you followed."] },
        { id: "use", title: "How we use information", body: ["We use this information to respond to your enquiry, schedule demos, prepare proposals, understand which products and industries you are interested in, and improve how we communicate about ELVA ERP."] },
        { id: "handling", title: "How enquiries are handled", body: ["Submissions are stored securely and are accessible only to ELVA team members who need them to respond to your enquiry."] },
        { id: "sharing", title: "Sharing", body: ["We do not sell your information. We may use service providers that host and operate this website and its data storage on our behalf. They process information only to provide those services."] },
        { id: "security", title: "Security and retention", body: ["We apply reasonable technical and organisational measures to protect the information you submit. We keep enquiry information only for as long as it is needed for the purposes described above, or as required by law."] },
        { id: "rights", title: "Your choices and rights", body: ["You may ask us to access, correct or delete the information you have submitted, or to stop contacting you. " + contactLine()] },
        { id: "cookies", title: "Cookies and local storage", body: ["This website does not use advertising cookies. It uses your browser's session storage to remember the page you first visited and campaign parameters so they can be attached to an enquiry you submit during the same visit. This information is cleared when you close the browser tab."] },
        { id: "changes", title: "Changes to this policy", body: ["We may update this policy from time to time. The date at the top of this page shows when it was last revised."] },
        { id: "contact", title: "Contact", body: [contactLine()] },
      ]}
    />
  ),
});
