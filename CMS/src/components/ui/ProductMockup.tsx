import { ArrowUpRight, MoreHorizontal } from "lucide-react";

export type ProductView =
  | "dashboard"
  | "projects"
  | "payments"
  | "materials"
  | "labour"
  | "drawings"
  | "reports"
  | "client"
  | "supervisor"
  | "access"
  | "analytics";

export function ProductMockup({
  compact = false,
  view = "dashboard",
  className = "",
}: {
  compact?: boolean;
  view?: ProductView;
  className?: string;
}) {
  const screen = view === "analytics" ? "dashboard" : view;

  return (
    <div
      className={`product-mockup ${compact ? "compact" : ""} ${className}`}
      data-view={view}
    >
      <div className="browser-bar">
        <span></span>
        <span></span>
        <span></span>
        <em>cms.elvatech.in / {pathFor(view)}</em>
      </div>
      <div className="app-shell">
        <aside>
          <div className="app-mark">E</div>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </aside>
        <div className="app-main" key={screen}>
          {screen === "dashboard" && <DashboardScreen />}
          {screen === "projects" && <ProjectsScreen />}
          {screen === "payments" && <PaymentsScreen />}
          {screen === "materials" && <MaterialsScreen />}
          {screen === "labour" && <LabourScreen />}
          {screen === "drawings" && <DrawingsScreen />}
          {screen === "reports" && <ReportsScreen />}
          {screen === "client" && <ClientScreen />}
          {screen === "supervisor" && <SupervisorScreen />}
          {screen === "access" && <AccessScreen />}
        </div>
      </div>
    </div>
  );
}

function pathFor(view: ProductView) {
  if (view === "analytics" || view === "dashboard") return "projects";
  if (view === "access") return "roles";
  return view;
}

function DashboardScreen() {
  return (
    <>
      <div className="app-title">
        <div>
          <small>Project dashboard</small>
          <h3>Mahendra Enclave 03</h3>
        </div>
        <button>
          Project overview <ArrowUpRight size={13} />
        </button>
      </div>
      <div className="metric-row">
        <Metric name="Payments done" value="₹6.0L" trend="3 installments" />
        <Metric name="Budget spent" value="₹4.8L" trend="Project expenses" />
        <Metric name="Existing balance" value="₹1.2L" trend="Current position" />
      </div>
      <div className="charts">
        <div className="chart">
          <div className="chart-head">
            <span>Payment analytics</span>
            <MoreHorizontal size={18} />
          </div>
          <div className="bars">
            <b style={{ height: "38%" }}></b>
            <b style={{ height: "62%" }}></b>
            <b style={{ height: "45%" }}></b>
            <b style={{ height: "78%" }}></b>
            <b style={{ height: "57%" }}></b>
            <b className="accent" style={{ height: "88%" }}></b>
          </div>
          <div className="axis">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
          </div>
        </div>
        <div className="material-card">
          <small>Material tracking</small>
          <h4>Steel</h4>
          <div className="ring">
            80<small>%</small>
          </div>
          <p>
            <span>Received</span> 50 units
          </p>
          <p>
            <span>Remaining</span> 10 units
          </p>
        </div>
      </div>
      <div className="table">
        <div>
          <b>Recent activity</b>
          <span>View all</span>
        </div>
        <p>
          <span>Material consumption</span>
          <span>Steel · 20 units</span>
          <small>Today</small>
        </p>
        <p>
          <span>Payment received</span>
          <span>Installment 03</span>
          <small>08 Jan</small>
        </p>
      </div>
    </>
  );
}

function ProjectsScreen() {
  return (
    <Sheet
      kicker="Projects"
      title="Company workspace"
      rows={[
        ["Project", "Mahendra Enclave 03"],
        ["Client", "On the project record"],
        ["Address", "Stored with the project"],
        ["Budget", "Project budget"],
        ["Contractor", "Assigned on the project"],
      ]}
    />
  );
}

function PaymentsScreen() {
  return (
    <Sheet
      kicker="Client payments"
      title="Payment plan"
      rows={[
        ["Installments", "Payment schedule"],
        ["Collections", "Amounts received"],
        ["Dates", "Recorded with each payment"],
        ["History", "Installment 03"],
        ["Balance", "Current project position"],
      ]}
    />
  );
}

function MaterialsScreen() {
  return (
    <Sheet
      kicker="Materials"
      title="Steel"
      rows={[
        ["Received", "50 units"],
        ["Consumed", "Recorded on the project"],
        ["Remaining", "10 units"],
        ["History", "Transaction list"],
        ["Project", "Mahendra Enclave 03"],
      ]}
    />
  );
}

function LabourScreen() {
  return (
    <Sheet
      kicker="Labour"
      title="Labour bills"
      rows={[
        ["Work category", "Project-level record"],
        ["Quantity", "Entered on the bill"],
        ["Extra payments", "Kept with the bill"],
        ["Payment history", "Project labour payments"],
        ["Project", "Mahendra Enclave 03"],
      ]}
    />
  );
}

function DrawingsScreen() {
  return (
    <Sheet
      kicker="Drawings"
      title="Drawing register"
      rows={[
        ["Plan set", "Stored on the project"],
        ["Submitted", "Awaiting review"],
        ["Approved", "Review complete"],
        ["Rejected", "Needs correction"],
        ["Re-upload", "Returned for a new file"],
      ]}
    />
  );
}

function ReportsScreen() {
  return (
    <Sheet
      kicker="Daily reports"
      title="Today’s record"
      rows={[
        ["Transactions", "Daily project entries"],
        ["Expenses", "Recorded against the project"],
        ["Materials", "Consumption noted"],
        ["Labour", "Related daily record"],
        ["Project", "Mahendra Enclave 03"],
      ]}
    />
  );
}

function ClientScreen() {
  return (
    <Sheet
      kicker="Client"
      title="Your project"
      rows={[
        ["Payment plan", "Installments and dates"],
        ["Payment status", "What has been received"],
        ["Installment details", "Installment 03"],
        ["Drawings", "Plans shared with you"],
        ["Drawing status", "Submitted to approved"],
      ]}
    />
  );
}

function SupervisorScreen() {
  return (
    <Sheet
      kicker="Supervisor"
      title="Site operations"
      rows={[
        ["Daily reports", "Today’s project record"],
        ["Materials", "Received, consumed, remaining"],
        ["Drawings", "Review status"],
        ["Labour bills", "Quantities and payments"],
        ["Project", "Mahendra Enclave 03"],
      ]}
    />
  );
}

function AccessScreen() {
  return (
    <Sheet
      kicker="Access"
      title="Role on the project"
      rows={[
        ["Company", "Projects, payments, operations"],
        ["Supervisor", "Reports, materials, labour"],
        ["Client", "Payments and drawings"],
        ["Assignment", "By project"],
        ["Workspace", "One company, many projects"],
      ]}
    />
  );
}

function Sheet({
  kicker,
  title,
  rows,
}: {
  kicker: string;
  title: string;
  rows: [string, string][];
}) {
  return (
    <div className="sheet">
      <div className="app-title">
        <div>
          <small>{kicker}</small>
          <h3>{title}</h3>
        </div>
      </div>
      <ul className="sheet-rows">
        {rows.map(([label, value]) => (
          <li key={label}>
            <span>{label}</span>
            <b>{value}</b>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Metric({
  name,
  value,
  trend,
}: {
  name: string;
  value: string;
  trend: string;
}) {
  return (
    <div className="metric">
      <small>{name}</small>
      <strong>{value}</strong>
      <span>{trend}</span>
    </div>
  );
}
