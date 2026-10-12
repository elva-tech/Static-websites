import { createFileRoute } from "@tanstack/react-router";
import { Header, Footer } from "@/components/site/site";
import { Hero, Problem, Overview, Classes, Audiences, Differentiator, AI, Assessments, Analytics, Platform, Pricing, Demo, FAQ, ClosingCTA } from "@/components/site/home";

const t = "ELVA LMS | AI-Powered LMS for Coaching Institutes";
const d = "ELVA LMS is an AI-powered Learning Management System for coaching institutes. Manage students, teachers, courses, classes, tests, attendance, content, analytics and AI learning tools in one platform.";
export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: t }, { name: "description", content: d }, { property: "og:title", content: t }, { property: "og:description", content: d }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: "/" }] }),
  component: () => (
    <>
      <Header home />
      <main>
        <Hero /><Problem /><Overview /><Classes /><Differentiator /><AI /><Audiences /><Assessments /><Analytics /><Platform /><Pricing /><Demo /><FAQ /><ClosingCTA />
      </main>
      <Footer />
    </>
  ),
});
