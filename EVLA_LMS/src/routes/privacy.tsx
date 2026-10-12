import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/legal";

const t = "Privacy Policy — ELVA LMS";
const d = "How ELVA Tech handles information shared through the ELVA LMS website and platform.";
export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: t }, { name: "description", content: d }, { property: "og:title", content: t }, { property: "og:description", content: d }, { property: "og:type", content: "article" }], links: [{ rel: "canonical", href: "/privacy" }] }),
  component: () => (
    <LegalPage title="Privacy Policy" intro="This policy explains what information ELVA Tech collects through the ELVA LMS website and platform, why, and the choices you have." sections={[
      { id: "collect", h: "Information we collect", body: <p>Details you provide in enquiries — name, institute name, phone, email, city, institute size, coaching type, requirements and preferred contact time. Within the platform, institutes provide data about their users, courses, content, assessments and attendance.</p> },
      { id: "use", h: "How we use information", body: <p>To respond to enquiries, arrange demos, provide and improve ELVA LMS, and deliver configured notifications. We do not sell personal information.</p> },
      { id: "institutes", h: "Institute data", body: <p>Institutes control the data they upload. ELVA LMS is designed so each institute's data is isolated and accessible according to configured roles and permissions.</p> },
      { id: "ai", h: "AI features", body: <p>When AI features are enabled, relevant content may be processed to generate answers, quizzes, summaries or reports. AI outputs may be inaccurate and should be reviewed.</p> },
      { id: "security", h: "Security", body: <p>We apply safeguards such as role-based access, HTTPS and secure storage. No system is completely secure.</p> },
      { id: "rights", h: "Your choices", body: <p>You may request access, correction or deletion of your information by contacting us.</p> },
    ]} />
  ),
});
