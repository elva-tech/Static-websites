import {
  ArrowUpRight,
  BellRing,
  BookOpenCheck,
  BriefcaseBusiness,
  FileText,
  Landmark,
  Layers3,
  ReceiptText,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { LoanBoard } from "../product-ui/LoanBoard";
import { PhoneDemo } from "../product-ui/PhoneDemo";
import { AdminBoard } from "../product-ui/AdminBoard";
import { TenantDiagram } from "../diagrams/TenantDiagram";

const modules = [
  {
    icon: Landmark,
    title: "Invest",
    text: "Manage investment records, payouts, withdrawals and investor relationships.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Borrow",
    text: "Manage borrowers, loans, interest, repayments and collections.",
  },
  {
    icon: Layers3,
    title: "One customer app",
    text: "Give customers one place to view investment and borrowing information.",
  },
  {
    icon: UsersRound,
    title: "Multi-tenant",
    text: "Support independent organizations through one platform.",
  },
];
export function PlatformIntro() {
  return (
    <>
      <section className="value-strip" id="platform">
        <div className="container value-grid">
          {modules.map(({ icon: Icon, title, text }) => (
            <Reveal className="value-item" key={title}>
              <span className="value-icon">
                <Icon size={19} />
              </span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="intro-section section">
        <div className="container split intro-split">
          <SectionHeading
            eyebrow="THE OPERATIONS LAYER"
            title={
              <>
                Financial operations,
                <br />
                organized in one platform.
              </>
            }
          >
            From customer onboarding to investments, loans, payouts and
            repayments, manage operations from a centralized system while
            customers get a clear view of their own records.
          </SectionHeading>
          <Reveal className="intro-list">
            <div>
              <b>01</b>
              <p>
                Customers, agreements, calculations, payments, collections and
                historical records, organized together.
              </p>
            </div>
            <div>
              <b>02</b>
              <p>
                Structured workflows for investment and lending relationships.
              </p>
            </div>
            <div>
              <b>03</b>
              <p>
                One unified customer app with access aligned to each
                relationship.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
export function InvestBorrow() {
  return (
    <>
      <section id="invest" className="section product-section invest-section">
        <div className="container product-grid">
          <div>
            <SectionHeading
              eyebrow="INVEST"
              title="Manage investment operations with clarity."
            >
              A structured way to manage investment and lender relationships,
              from onboarding to investment records, payouts, withdrawals and
              transaction history.
            </SectionHeading>
            <div className="feature-list">
              <span>Investment records &amp; requests</span>
              <span>Payouts &amp; withdrawals</span>
              <span>Transactions &amp; ledgers</span>
              <span>Documents, referrals &amp; reports</span>
            </div>
            <a className="text-link navy" href="#operations">
              Explore investment records <ArrowUpRight size={16} />
            </a>
          </div>
          <Reveal>
            <div className="product-label">
              <i /> Illustrative product interface
            </div>
            <div className="invest-large">
              <div className="investment-summary">
                <span>Investment workflow</span>
                <div>
                  <b>Request</b>
                  <i />
                  <b>Record</b>
                  <i />
                  <b>Payout</b>
                  <i />
                  <b>Ledger</b>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <section id="borrow" className="section product-section borrow-section">
        <div className="container product-grid reverse">
          <Reveal>
            <LoanBoard />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="BORROW"
              title="Manage borrowers, loans and collections in one place."
            >
              Manage the lending lifecycle from borrower onboarding and loan
              creation to interest collection, repayments, overdue tracking and
              statements.
            </SectionHeading>
            <div className="feature-list dark-list">
              <span>Borrower profiles &amp; loan details</span>
              <span>Configurable interest &amp; repayment workflows</span>
              <span>Collection status &amp; overdue tracking</span>
              <span>Loan ledger &amp; historical records</span>
            </div>
            <p className="fine-copy">
              Final calculation models are configured according to each
              organization’s approved business requirements.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export function AppAndAdmin() {
  return (
    <>
      <section id="customer-app" className="section customer-section">
        <div className="container customer-grid">
          <div>
            <SectionHeading
              eyebrow="ONE CUSTOMER APP"
              title="Everything your customers need, in one app."
            >
              A customer may invest with an organization, borrow from it, or do
              both. ELVA Investa brings both relationships into a single
              customer experience.
            </SectionHeading>
            <div className="relationship-cards">
              <div>
                <span>Investor</span>
                <p>
                  Investments, payouts, withdrawals, transactions and documents.
                </p>
              </div>
              <div>
                <span>Borrower</span>
                <p>
                  Loans, interest due, repayment schedules, history and
                  statements.
                </p>
              </div>
              <div>
                <span>Both</span>
                <p>One personalized view for both relationships.</p>
              </div>
            </div>
          </div>
          <Reveal className="phone-wrap">
            <PhoneDemo />
            <p>Fictional interface shown for demonstration only.</p>
          </Reveal>
        </div>
      </section>
      <section id="admin" className="section admin-section">
        <div className="container admin-grid">
          <Reveal>
            <AdminBoard />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="CLIENT ADMIN PLATFORM"
              title="Powerful administration for every client."
            >
              A centralized environment to manage an organization’s customers,
              investments, loans and collections.
            </SectionHeading>
            <div className="admin-feature-grid">
              <span>
                <UsersRound /> Customer profiles
              </span>
              <span>
                <Landmark /> Investment operations
              </span>
              <span>
                <ReceiptText /> Lending &amp; collections
              </span>
              <span>
                <FileText /> Documents &amp; reports
              </span>
              <span>
                <BellRing /> Notifications
              </span>
              <span>
                <BookOpenCheck /> Audit records
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export function Tenants() {
  return (
    <section id="tenants" className="section tenant-section">
      <div className="container">
        <SectionHeading
          eyebrow="MULTI-TENANT BY DESIGN"
          title="One platform. Multiple organizations."
        >
          Each organization manages its own customers and business data. Client
          Admins work within their organization, while authorized Super Admin
          users manage the overall ELVA Investa environment.
        </SectionHeading>
        <TenantDiagram />
        <div className="tenant-note">
          <ShieldCheck size={19} />
          <span>
            Tenant-level data isolation supports independent organization
            workspaces.
          </span>
        </div>
      </div>
    </section>
  );
}
