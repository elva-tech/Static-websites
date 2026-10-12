import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { modules, steps, useCases } from "../../data/content";
import { Button } from "../ui/Button";
import { ProductMockup } from "../ui/ProductMockup";

const operationAreas = [
  "Client payments",
  "Budgets",
  "Materials",
  "Labour",
  "Drawings",
  "Daily expenses",
  "Site activities",
  "Project records",
];

const visibilityPoints = [
  "Project budgets and spending",
  "Payments received and expected",
  "Current balance and balance to be paid",
  "Payment activity at a glance",
];

const benefits: [string, string][] = [
  ["Manage more projects", "Keep multiple projects organized in one platform."],
  ["Reduce manual tracking", "Bring project records into a structured digital system."],
  ["Improve visibility", "Know the financial and operational status of each project."],
  ["Keep teams connected", "Provide role-specific access for your team and clients."],
];

const workflowNotes = [
  "Set up your company workspace as the home for all projects.",
  "Add each construction project you manage.",
  "Invite supervisors, staff and clients with role-appropriate access.",
  "Add client, address, budget, contractor and rates on each project.",
  "Track payments, materials, labour, drawings and daily reports.",
  "Use dashboards and reports to understand project information.",
];

const roles: { title: string; summary: string }[] = [
  {
    title: "Construction company",
    summary:
      "Manage projects, payments, materials, labour, drawings and overall monitoring.",
  },
  {
    title: "Supervisor",
    summary:
      "Focus on day-to-day reports, materials, drawings and labour records.",
  },
  {
    title: "Client",
    summary: "View payment plans, status and project drawings.",
  },
];

function MobileAccordion({
  items,
}: {
  items: { title: string; body: string; id: string }[];
}) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="mobile-accordion">
      {items.map(({ id, title, body }) => {
        const open = openId === id;
        return (
          <article key={id} className={open ? "open" : ""}>
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpenId(open ? null : id)}
            >
              {title}
              <ChevronDown aria-hidden />
            </button>
            <div className="mobile-accordion-panel">
              <div>
                <p>{body}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function MobileMergedProblemBoard() {
  return (
    <section className="mobile-merged-board" aria-labelledby="mobile-problem-heading">
      <p className="eyebrow">Project operations & visibility</p>
      <h2 id="mobile-problem-heading">
        One clear view when project records are scattered.
      </h2>
      <p className="mobile-lead">
        Spreadsheet, chat and paper records make status hard to read. ELVA CMS
        brings payments, materials, labour, drawings and daily operations into
        one project workspace—with dashboards for budgets, collections and
        balance.
      </p>
      <ul className="mobile-checklist">
        {visibilityPoints.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="mobile-tag-grid" aria-label="Operations covered">
        {operationAreas.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <div className="mobile-dashboard-frame">
        <ProductMockup />
      </div>
    </section>
  );
}

export function MobileModuleExplorer() {
  const shown = modules.slice(0, 6);
  const items = shown.map((m, i) => ({
    id: `module-${i}`,
    title: `${String(i + 1).padStart(2, "0")} · ${m.title}`,
    body: m.text,
  }));

  return (
    <section className="mobile-modules" aria-labelledby="mobile-modules-heading">
      <div className="mobile-section-head">
        <p className="eyebrow">Product modules</p>
        <h2 id="mobile-modules-heading">Six modules, one platform.</h2>
        <p className="mobile-lead">
          Explore what ELVA CMS covers—tap each module for a short description.
        </p>
        <Link className="mobile-text-link" to="/modules">
          View all modules
        </Link>
      </div>
      <MobileAccordion items={items} />
    </section>
  );
}

export function MobileRoleRows() {
  const items = roles.map((r, i) => ({
    id: `role-${i}`,
    title: r.title,
    body: r.summary,
  }));

  return (
    <div className="mobile-roles">
      <MobileAccordion items={items} />
      <Button to="/roles" variant="secondary" className="mobile-roles-cta">
        Explore user roles
      </Button>
    </div>
  );
}

export function MobileMultiProjectSummary() {
  return (
    <div className="mobile-sites-summary">
      <p className="mobile-summary-kicker">Company workspace</p>
      <p className="mobile-summary-body">
        Manage multiple sites—each project keeps its own payments, materials,
        labour, drawings and daily records under one company account.
      </p>
      <ul className="mobile-summary-stats">
        <li>
          <strong>Multiple projects</strong>
          <span>Separate operational data per site</span>
        </li>
        <li>
          <strong>One platform</strong>
          <span>Switch between projects without losing context</span>
        </li>
      </ul>
    </div>
  );
}

export function MobileBenefitsRows() {
  return (
    <ul className="mobile-benefits">
      {benefits.map(([title, text]) => (
        <li key={title}>
          <strong>{title}</strong>
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );
}

export function MobileWorkflowTimeline() {
  return (
    <ol className="mobile-workflow">
      {steps.map((label, i) => (
        <li key={label}>
          <span className="mobile-workflow-step">Step {i + 1}</span>
          <h3>{label}</h3>
          <p>{workflowNotes[i]}</p>
        </li>
      ))}
    </ol>
  );
}

export function MobileUseCaseGrid() {
  return (
    <ul className="mobile-usecases">
      {useCases.map((item, i) => (
        <li key={item}>
          <Link to="/use-cases">
            <span>{String(i + 1).padStart(2, "0")}</span>
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
}
