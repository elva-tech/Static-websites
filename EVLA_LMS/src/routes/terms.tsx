import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/legal";

const t = "Terms of Service — ELVA LMS";
const d = "Terms governing use of the ELVA LMS website and platform by ELVA Tech.";
export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: t }, { name: "description", content: d }, { property: "og:title", content: t }, { property: "og:description", content: d }, { property: "og:type", content: "article" }], links: [{ rel: "canonical", href: "/terms" }] }),
  component: () => (
    <LegalPage title="Terms of Service" intro="These terms describe the conditions for using the ELVA LMS website and, where agreed, the ELVA LMS platform provided by ELVA Tech." sections={[
      { id: "scope", h: "Scope", body: <p>Use of the platform by institutes is additionally governed by the commercial agreement between the institute and ELVA Tech.</p> },
      { id: "accounts", h: "Accounts and access", body: <p>Institutes are responsible for the users they invite, the roles they assign and keeping credentials secure.</p> },
      { id: "content", h: "Content", body: <p>Institutes retain ownership of the content they upload and grant ELVA Tech the rights needed to host and process it to provide the service.</p> },
      { id: "ai", h: "AI features", body: <p>AI-generated output is provided as assistance and may contain errors. Teachers and institutes should review it before relying on it.</p> },
      { id: "use", h: "Acceptable use", body: <p>Do not misuse the service, attempt unauthorised access, or upload unlawful content.</p> },
      { id: "changes", h: "Changes", body: <p>We may update these terms; material changes will be communicated.</p> },
    ]} />
  ),
});
