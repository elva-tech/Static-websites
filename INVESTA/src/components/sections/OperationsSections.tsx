import { useState, type FormEvent } from "react";
import {
  ChevronDown,
  FileText,
  Bell,
  ChartColumnIncreasing,
  ArrowUpRight,
  ShieldCheck,
  LockKeyhole,
  ScrollText,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { WorkflowDiagram } from "../diagrams/WorkflowDiagram";
import { SecurityDiagram } from "../diagrams/SecurityDiagram";
import { faqItems, demoFormFields } from "../../data/content";

const DEMO_SUBMITTED_KEY = "elva-investa-demo-submitted";

function readDemoSubmittedState() {
  try {
    return localStorage.getItem(DEMO_SUBMITTED_KEY) === "true";
  } catch {
    return false;
  }
}

function validateDemoForm(data: FormData) {
  const next: Record<string, string> = {};

  const name = String(data.get("name") ?? "").trim();
  if (!name) next.name = "This field is required.";
  else if (name.length < 2) next.name = "Enter your full name.";
  else if (!/[a-zA-Z]/.test(name))
    next.name = "Enter a name with at least one letter.";

  const company = String(data.get("company") ?? "").trim();
  if (!company) next.company = "This field is required.";
  else if (company.length < 2)
    next.company = "Enter a valid company or organization name.";

  const email = String(data.get("email") ?? "").trim();
  if (!email) next.email = "This field is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
    next.email = "Enter a valid work email with @ and a domain (e.g. name@company.com).";

  const mobileRaw = String(data.get("mobile") ?? "").trim();
  if (!mobileRaw) next.mobile = "This field is required.";
  else {
    const digitsOnly = mobileRaw.replace(/\D/g, "");
    if (digitsOnly.length !== 10 || /\D/.test(mobileRaw.replace(/\s/g, "")))
      next.mobile = "Enter a valid 10-digit mobile number.";
    else if (!/^[6-9]\d{9}$/.test(digitsOnly))
      next.mobile = "Enter a valid 10-digit Indian mobile number.";
  }

  const city = String(data.get("city") ?? "").trim();
  if (!city) next.city = "This field is required.";

  const interest = String(data.get("interest") ?? "").trim();
  if (!interest) next.interest = "This field is required.";

  const size = String(data.get("size") ?? "").trim();
  if (!size) next.size = "This field is required.";

  return next;
}

export function Operations() {
  const items = [
    {
      icon: ScrollText,
      title: "Transactions & ledger",
      text: "Maintain organized investment and lending records, including payouts, repayments, adjustments and historical entries.",
    },
    {
      icon: FileText,
      title: "Documents",
      text: "Associate agreements, statements, receipts and supporting records with authorized customer, investment and loan workflows.",
    },
    {
      icon: Bell,
      title: "Notifications",
      text: "Keep customers informed with relevant payout, withdrawal, repayment and account notifications.",
    },
    {
      icon: ChartColumnIncreasing,
      title: "Reports",
      text: "Turn customer, investment, lending and collection records into useful operational information.",
    },
  ];
  return (
    <section id="operations" className="section operations-section">
      <div className="container">
        <SectionHeading
          eyebrow="CONNECTED OPERATIONAL RECORDS"
          title="The information behind every relationship."
        >
          Transactions, documents, notifications and reports work together to
          provide a structured view of ongoing operations.
        </SectionHeading>
        <div className="operation-layout">
          <Reveal className="ledger-ui">
            <div className="ledger-head">
              <div>
                <small>Loan ledger · Demo record</small>
                <b>LN-1047</b>
              </div>
              <span>Outstanding balance tracked</span>
            </div>
            {[
              ["Disbursement", "Opening record"],
              ["Interest entry", "Scheduled"],
              ["Payment recorded", "Receipt available"],
              ["Adjustment", "Auditable entry"],
            ].map((row, i) => (
              <div className="ledger-row" key={row[0]}>
                <i className={i === 2 ? "green-dot" : ""} />
                <b>{row[0]}</b>
                <span>{row[1]}</span>
              </div>
            ))}
            <div className="ledger-foot">
              <span>Historical activity</span>
              <b>Organized ledger</b>
            </div>
          </Reveal>
          <div className="operation-list">
            {items.map(({ icon: Icon, title, text }, i) => (
              <Reveal className="operation-item" delay={i * 0.06} key={title}>
                <span>
                  <Icon size={20} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Security() {
  return (
    <section id="security" className="section security-section">
      <div className="container security-grid">
        <div>
          <SectionHeading
            eyebrow="SECURITY & DATA ISOLATION"
            title="Your organization. Your customers. Your data."
          >
            Access is built around identity, roles, organization membership,
            customer ownership and authorized business operations.
          </SectionHeading>
          <div className="security-note">
            <LockKeyhole size={20} />
            <p>
              <b>Backend authorization enforces tenant-level access.</b>{" "}
              Frontend filtering is not the security boundary.
            </p>
          </div>
        </div>
        <Reveal>
          <SecurityDiagram />
        </Reveal>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section className="section how-section">
      <div className="container">
        <SectionHeading
          eyebrow="HOW IT WORKS"
          title="A clear path from onboarding to organized operations."
        >
          ELVA Investa is designed to support connected organization and
          customer workflows.
        </SectionHeading>
        <div className="workflow-grid">
          <Reveal className="workflow-panel">
            <div className="workflow-panel-head">
              <span>01</span>
              <div>
                <h3>For an organization</h3>
                <p>
                  Set up a workspace, configure the right modules and manage
                  operations.
                </p>
              </div>
            </div>
            <WorkflowDiagram type="organization" />
          </Reveal>
          <Reveal className="workflow-panel" delay={0.1}>
            <div className="workflow-panel-head">
              <span>02</span>
              <div>
                <h3>For a customer</h3>
                <p>
                  Join the organization and access the relationships authorized
                  for the account.
                </p>
              </div>
            </div>
            <WorkflowDiagram type="customer" />
          </Reveal>
        </div>
        <div className="referral-note">
          <b>Two distinct referral concepts</b>
          <span>
            Client referral code identifies the organization a customer joins.
          </span>
          <i />
          <span>
            Customer referral code records the customer relationship within that
            same organization.
          </span>
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-grid">
        <SectionHeading eyebrow="FAQ" title="Questions, answered.">
          The essentials about ELVA Investa and its operating model.
        </SectionHeading>
        <div className="faq-list">
          {faqItems.map(([question, answer], i) => (
            <div className="faq-item" key={question}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                <span>{question}</span>
                <ChevronDown size={18} />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <p>{answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DemoForm() {
  const [submitted, setSubmitted] = useState(readDemoSubmittedState);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next = validateDemoForm(data);
    setErrors(next);
    if (Object.keys(next).length) return;

    try {
      localStorage.setItem(DEMO_SUBMITTED_KEY, "true");
    } catch {
      /* storage unavailable */
    }
    setSubmitted(true);
  };

  const resetForm = () => {
    try {
      localStorage.removeItem(DEMO_SUBMITTED_KEY);
    } catch {
      /* storage unavailable */
    }
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section className="demo-section" id="demo">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="demo-success"
            className="container success-panel"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <CheckCircle2 />
            <h2>Thank you for your interest in ELVA Investa.</h2>
            <p>Our team will get in touch with you shortly.</p>
            <button className="text-link navy" type="button" onClick={resetForm}>
              Submit another request <ArrowUpRight size={16} />
            </button>
            <small>
              This was a frontend-only demonstration. No request was sent.
            </small>
          </motion.div>
        ) : (
          <motion.div
            key="demo-form"
            className="container demo-grid"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <p className="eyebrow on-dark">
                <span /> REQUEST A DEMO
              </p>
              <h2>
                Ready to bring your investment and lending operations into one
                platform?
              </h2>
              <p>
                See how ELVA Investa can help your organization manage
                customers, investments, loans, collections, transactions and
                records through one unified system.
              </p>
              <div className="demo-aside">
                <ShieldCheck size={20} />
                <span>
                  Built for organizations that need structured operational
                  visibility.
                </span>
              </div>
            </div>
            <form onSubmit={submit} noValidate>
              {demoFormFields.map(([name, label, type]) => (
                <label key={name}>
                  {label} *
                  <input
                    name={name}
                    type={type}
                    aria-invalid={!!errors[name]}
                  />
                  {errors[name] && (
                    <small className="error">{errors[name]}</small>
                  )}
                </label>
              ))}
              <label>
                Interested in *
                <select name="interest" defaultValue="">
                  <option value="" disabled>
                    Select an area
                  </option>
                  <option>Investment Management</option>
                  <option>Borrowing / Loan Management</option>
                  <option>Both</option>
                  <option>Multi-Tenant Platform</option>
                </select>
                {errors.interest && (
                  <small className="error">{errors.interest}</small>
                )}
              </label>
              <label>
                Approximate number of customers *
                <select name="size" defaultValue="">
                  <option value="" disabled>
                    Select a range
                  </option>
                  <option>1–100</option>
                  <option>101–500</option>
                  <option>501–1,000</option>
                  <option>1,000+</option>
                </select>
                {errors.size && (
                  <small className="error">{errors.size}</small>
                )}
              </label>
              <label className="full">
                Message
                <textarea name="message" rows={3} />
              </label>
              <button className="button submit-button" type="submit">
                Request demo <ArrowUpRight size={17} />
              </button>
              <p className="form-note">
                Frontend-only form. A submission service can be connected here.
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
