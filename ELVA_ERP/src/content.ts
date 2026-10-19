import {
  Landmark,
  HardHat,
  ShoppingCart,
  Boxes,
  Users,
  Building2,
  Zap,
  Factory,
  IdCard,
  Truck,
  BarChart3,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Site configuration — single home for facts that must be verified.   */
/* ------------------------------------------------------------------ */
export const site = {
  name: "ELVA ERP",
  company: "ELVA Tech",
  url: "https://erp.elvatech.in",
  tagline: "ELVA ERP — One connected platform for modern businesses.",
  // Official contact details are intentionally empty until ELVA confirms them.
  // When set, they appear automatically on the Contact page and legal pages.
  contactEmail: "" as string,
  contactPhone: "" as string,
  registeredAddress: "" as string,
  legalEntity: "ELVA Tech" as string,
  legalLastUpdated: "October 2026",
};

export type Faq = { q: string; a: string };

export type Product = {
  slug: string;
  name: string;
  short: string;
  group: "Core ERP" | "Industry" | "Insight";
  icon: LucideIcon;
  headline: string;
  summary: string;
  problems: string[];
  solves: string;
  features: string[];
  workflow: string[];
  outcomes: string[];
  faqs: Faq[];
  metrics: { label: string; value: string }[];
};

export const products: Product[] = [
  {
    slug: "finance",
    name: "Finance & Accounting",
    short: "Accounting, receivables, payables, banking, budgets and statements.",
    group: "Core ERP",
    icon: Landmark,
    headline: "Finance That Connects With Your Operations.",
    summary:
      "Manage accounting, receivables, payables, banking, budgeting, taxation and financial statements while keeping financial information connected to projects and operational transactions.",
    problems: [
      "Accounts receive operational information late, after the fact.",
      "Project costs and financial ledgers are reconciled by hand.",
      "Month-end MIS takes days of spreadsheet consolidation.",
    ],
    solves:
      "Your accounting data should not sit separately from your project data. ELVA connects financial transactions with the business activity that created them.",
    features: [
      "Chart of Accounts", "General Ledger", "Accounts Receivable", "Accounts Payable", "Bank & Cash",
      "Payment & receipt vouchers", "Journals", "Reconciliation", "Budgeting", "Project accounting",
      "Project profitability", "GST / Tax", "TDS", "Financial statements", "Consolidation",
    ],
    workflow: ["Operational transaction", "Posting rules", "General Ledger", "Reconciliation", "Financial statements", "Management MIS"],
    outcomes: [
      "One ledger connected to projects, procurement and sales",
      "Faster, more reliable period close",
      "Live view of receivables, payables and cash",
    ],
    faqs: [
      { q: "Can finance be tracked by project?", a: "Yes. Project accounting and profitability are core capabilities, with transactions linked to projects and cost centres as configured." },
      { q: "Can posted entries be edited?", a: "Posted financial transactions follow controlled correction and reversal processes, so the audit trail is preserved." },
    ],
    metrics: [{ label: "Receivables", value: "₹4.82 Cr" }, { label: "Payables", value: "₹2.15 Cr" }, { label: "Cash position", value: "₹6.40 Cr" }],
  },
  {
    slug: "projects",
    name: "Projects & Construction",
    short: "Budgets, BOQs, work orders, progress, cost and profitability.",
    group: "Core ERP",
    icon: HardHat,
    headline: "Know Every Project's Cost, Progress and Profitability.",
    summary:
      "Connect project budgets, BOQs, work orders, procurement, material consumption, billing and profitability.",
    problems: [
      "Budget, actual cost and commitments live in different files.",
      "Each project develops its own spreadsheets and processes.",
      "Profitability is only known after the project ends.",
    ],
    solves:
      "See what has been planned, what has been spent, what is committed and what remains — project by project.",
    features: [
      "Project master & codes", "Project locations", "Project budgets", "BOQ", "Cost heads", "Work packages",
      "Work orders", "Contractor / subcontractor management", "Project progress", "Commitments",
      "Cost-to-complete", "Project dashboards", "Project documents",
    ],
    workflow: ["Project setup", "Budget & BOQ", "Work orders", "Procurement & materials", "Progress & billing", "Profitability"],
    outcomes: [
      "Budget vs actual vs committed, side by side",
      "Earlier warning on cost overruns",
      "Comparable reporting across every project",
    ],
    faqs: [
      { q: "Can I manage contractors and subcontractors?", a: "The project and EMS capabilities support contractor and subcontractor workflows. Exact workflows depend on implementation scope." },
      { q: "Can procurement be linked to projects?", a: "Yes. Procurement can be associated with projects, cost centres and other business dimensions as configured." },
    ],
    metrics: [{ label: "Active projects", value: "12" }, { label: "Budget used", value: "64%" }, { label: "Committed", value: "₹18.2 Cr" }],
  },
  {
    slug: "procurement",
    name: "Procurement",
    short: "Requisitions, approvals, POs, receipts, invoices and payments.",
    group: "Core ERP",
    icon: ShoppingCart,
    headline: "Control Every Purchase From Requirement to Payment.",
    summary:
      "Bring purchase requests, approvals, suppliers, POs, receipts, invoices and payments into one controlled workflow.",
    problems: [
      "Material requests and approvals run through email and WhatsApp.",
      "Purchase orders, receipts and invoices don't match up.",
      "Supplier spend and performance are hard to see.",
    ],
    solves: "From material requirement to purchase — without the gaps.",
    features: [
      "Supplier master & ledger", "Purchase requisitions", "Purchase orders", "Goods receipts", "Purchase invoices",
      "Approval workflows", "Supplier performance", "Purchase reports", "Project-linked procurement",
    ],
    workflow: ["Requirement", "Purchase requisition", "Approval", "Purchase order", "Material receipt", "Invoice", "Payment"],
    outcomes: [
      "Every purchase traceable to a project and an approver",
      "Fewer delays between requirement and delivery",
      "Clear supplier spend and cycle-time reporting",
    ],
    faqs: [
      { q: "Can approvals depend on amount or department?", a: "Yes. ELVA's workflow framework supports role-based, amount-based, department and project approvals." },
    ],
    metrics: [{ label: "Open POs", value: "86" }, { label: "Pending approvals", value: "14" }, { label: "PO cycle", value: "3.2 days" }],
  },
  {
    slug: "inventory",
    name: "Inventory & Materials",
    short: "Stock across warehouses and site stores, from receipt to issue.",
    group: "Core ERP",
    icon: Boxes,
    headline: "Know Your Stock Across Every Location.",
    summary:
      "Track materials from receipt to issue, transfer and consumption across warehouses and project sites.",
    problems: [
      "Site stores maintain separate registers.",
      "Teams don't know what is available, where, or what to buy.",
      "Material consumption is disconnected from project cost.",
    ],
    solves:
      "Connect procurement and stores with project execution so material movement becomes visible and accountable.",
    features: [
      "Item master & categories", "Units of measure", "Warehouses & site stores", "Stock receipt & issue", "Transfers",
      "Adjustments", "Stock ageing", "Slow-moving inventory", "Stock alerts", "Batch / serial tracking where applicable",
      "Inventory valuation",
    ],
    workflow: ["Goods receipt", "Warehouse / site store", "Issue to project", "Transfer", "Consumption", "Valuation"],
    outcomes: ["Real-time stock by location", "Material cost flows into project cost", "Fewer stock-outs and less dead stock"],
    faqs: [{ q: "Can inventory be tracked by site?", a: "Yes. Warehouses, site stores and inventory locations can be configured." }],
    metrics: [{ label: "Stock value", value: "₹3.06 Cr" }, { label: "Locations", value: "9" }, { label: "Low-stock items", value: "23" }],
  },
  {
    slug: "sales-crm",
    name: "Sales & CRM",
    short: "Leads, site visits, bookings, payment schedules and collections.",
    group: "Industry",
    icon: Users,
    headline: "From Lead to Booking. From Booking to Collection.",
    summary:
      "Manage leads, customers, site visits, follow-ups, unit inventory, pricing, bookings, payment schedules and collections from one shared customer record.",
    problems: [
      "Sales and finance maintain different customer records.",
      "Customer dues require constant manual follow-up.",
      "Booking status and unit availability drift out of sync.",
    ],
    solves: "Shared customer and transaction data reduces duplicate entry and reconciliation between sales and finance.",
    features: [
      "Lead management", "Lead sources", "Sales pipeline", "Site visits", "Follow-ups", "Property / unit inventory",
      "Pricing", "Booking", "Customer documents", "Payment schedules", "Collections", "Sales reporting",
    ],
    workflow: ["Lead", "Site visit", "Follow-up", "Booking", "Payment schedule", "Collection"],
    outcomes: ["One customer record for sales and finance", "Clear visibility of dues and overdue amounts", "Faster booking-to-collection cycle"],
    faqs: [
      { q: "Does it integrate with property portals or WhatsApp?", a: "ELVA is designed with APIs and integration adapters. Specific integrations such as website leads, portals, WhatsApp, email, SMS or payment gateways depend on the external system and are scoped during implementation." },
    ],
    metrics: [{ label: "Open leads", value: "412" }, { label: "Bookings (Q)", value: "38" }, { label: "Collected", value: "₹9.4 Cr" }],
  },
  {
    slug: "pms",
    name: "Property / Unit Management (PMS)",
    short: "Projects, towers, units, plots, pricing, bookings and possession.",
    group: "Industry",
    icon: Building2,
    headline: "Manage Property From Project to Possession.",
    summary:
      "Manage projects, units, plots, customers, pricing, bookings, collections, documents and construction progress.",
    problems: [
      "Unit availability lives in a spreadsheet only one person updates.",
      "Pricing, allocation and documents are scattered.",
      "Possession readiness is tracked manually.",
    ],
    solves: "One source of truth for your property inventory.",
    features: [
      "Projects", "Towers / blocks", "Floors", "Units, flats, plots & villas", "Unit types", "Area", "Pricing",
      "Availability", "Booking status", "Customer allocation", "Agreements", "Construction progress", "Possession",
    ],
    workflow: ["Available", "Hold", "Booked", "Agreement", "Sold / Registered", "Possession"],
    outcomes: ["Live unit availability across projects", "Fewer double allocations", "Configurable unit lifecycle that matches your process"],
    faqs: [
      { q: "Can I manage apartments and plots?", a: "Yes. The real-estate solution can support project, unit and plot structures according to the configured business model." },
      { q: "Is the unit lifecycle fixed?", a: "No. The lifecycle is configurable according to your process." },
    ],
    metrics: [{ label: "Total units", value: "1,284" }, { label: "Available", value: "317" }, { label: "Booked", value: "842" }],
  },
  {
    slug: "ems",
    name: "ELVA EMS",
    short: "Infrastructure & electrical contracting execution.",
    group: "Industry",
    icon: Zap,
    headline: "Execute Complex Infrastructure Projects With Control.",
    summary:
      "Manage DWA, work orders, BOQ, subcontractors, material consumption, execution, billing and project profitability.",
    problems: [
      "Site execution and billing are tracked separately.",
      "Subcontractor work and material consumption are hard to reconcile.",
      "Project margins are unclear until final billing.",
    ],
    solves: "Bring infrastructure and contracting execution onto the same foundation as finance, procurement and inventory.",
    features: ["DWA", "Projects", "Work orders", "BOQ", "Subcontractors", "Site execution", "Material consumption", "Project costing", "Billing", "Profitability"],
    workflow: ["DWA", "BOQ", "Work orders", "Site execution", "Measurement & billing", "Profitability"],
    outcomes: ["Execution and billing in one record", "Subcontractor control", "Live project costing"],
    faqs: [{ q: "Who is EMS for?", a: "Infrastructure, electrical contracting and other project-driven businesses." }],
    metrics: [{ label: "Work orders", value: "64" }, { label: "Billed", value: "71%" }, { label: "Margin", value: "14.6%" }],
  },
  {
    slug: "manufacturing",
    name: "ELVA Manufacturing",
    short: "BOMs, production orders, WIP, quality and costing.",
    group: "Industry",
    icon: Factory,
    headline: "Connect Production With Finance and Inventory.",
    summary:
      "Manage BOMs, production orders, material consumption, WIP, quality, finished goods and production costing.",
    problems: [
      "Production planning runs separately from inventory.",
      "WIP and production cost are estimated, not measured.",
      "Quality records are disconnected from batches.",
    ],
    solves: "Production activity flows directly into inventory and finance.",
    features: ["BOM", "Production orders", "Work centres", "Routing", "Material planning", "WIP", "Quality", "Finished goods", "Production costing"],
    workflow: ["BOM", "Material planning", "Production order", "WIP", "Quality", "Finished goods"],
    outcomes: ["Accurate production costing", "Material planning tied to stock", "Traceable quality"],
    faqs: [{ q: "Does manufacturing share the same finance?", a: "Yes. Manufacturing is an industry module built on the same ERP foundation." }],
    metrics: [{ label: "Open orders", value: "27" }, { label: "WIP value", value: "₹1.12 Cr" }, { label: "Yield", value: "96.1%" }],
  },
  {
    slug: "hr-payroll",
    name: "HR & Payroll",
    short: "Employees, attendance, payroll, advances and statutory processes.",
    group: "Core ERP",
    icon: IdCard,
    headline: "Manage the People Behind Your Business.",
    summary: "Manage employees, attendance, payroll, advances and statutory processes.",
    problems: ["Site attendance is collected on paper.", "Payroll is prepared in spreadsheets each month.", "Statutory reporting is manual."],
    solves: "Manage the people behind every project with HR connected to finance.",
    features: ["Employee master", "Departments", "Designations", "Attendance", "Leave", "Salary structures", "Payroll", "Employee advances", "Payslips", "PF", "ESIC", "Statutory reporting"],
    workflow: ["Employee", "Attendance & leave", "Payroll run", "Approval", "Payslips", "Accounting"],
    outcomes: ["Payroll posted straight to finance", "Clear headcount by project", "Structured statutory records"],
    faqs: [{ q: "Is payroll connected to accounting?", a: "Yes. Payroll is part of the ERP foundation, so it flows into finance." }],
    metrics: [{ label: "Headcount", value: "486" }, { label: "Attendance", value: "94%" }, { label: "Payroll", value: "₹1.9 Cr" }],
  },
  {
    slug: "assets",
    name: "Assets & Fleet",
    short: "Equipment, vehicles, depreciation, maintenance and trips.",
    group: "Core ERP",
    icon: Truck,
    headline: "Track Equipment, Vehicles and Assets Across Projects.",
    summary:
      "Manage assets from procurement through capitalization, assignment, depreciation, maintenance and disposal — plus vehicles, drivers, fuel and trips.",
    problems: ["Equipment moves between sites without a record.", "Depreciation is calculated outside the ERP.", "Maintenance and warranty dates are missed."],
    solves: "Every asset traceable — where it is, who has it and what it costs.",
    features: ["Asset master", "Capitalization", "Assignment", "Movement", "Depreciation", "Warranty", "Service history", "Maintenance", "Vehicle master", "Driver", "Fuel", "Trips", "GPS integration where supported"],
    workflow: ["Procure", "Capitalize", "Assign to project", "Maintain", "Depreciate", "Dispose"],
    outcomes: ["Asset location by project", "Automatic depreciation", "Maintenance reminders"],
    faqs: [{ q: "Does it support GPS tracking?", a: "GPS integration is possible where supported by the device provider and scoped during implementation." }],
    metrics: [{ label: "Assets", value: "312" }, { label: "Vehicles", value: "41" }, { label: "Due service", value: "6" }],
  },
  {
    slug: "analytics",
    name: "Analytics & MIS",
    short: "Executive dashboards, project, procurement, inventory and HR analytics.",
    group: "Insight",
    icon: BarChart3,
    headline: "Know What Is Happening Across Your Business.",
    summary: "Turn ERP transactions into dashboards, reports, MIS and management insights.",
    problems: ["Critical MIS reports take hours or days to prepare.", "Each department reports a different number.", "Management depends on individuals for information."],
    solves: "Turn transactions into management insight — from the same data operations already use.",
    features: [
      "Executive dashboard: revenue, expenses, EBITDA, PAT", "Receivables, payables & cash", "Budget & project profitability",
      "Project analytics: budget vs actual, margin, progress", "Procurement analytics: supplier spend, PO cycle time",
      "Inventory analytics: stock value, ageing, stock-outs", "HR analytics: headcount, attendance, payroll", "Scheduled MIS",
    ],
    workflow: ["Transactions", "Governed data model", "Dashboards", "Scheduled MIS", "Drill-down", "Decision"],
    outcomes: ["One version of the truth", "MIS without manual consolidation", "Drill from summary to transaction"],
    faqs: [{ q: "Can I generate management reports?", a: "Yes. ELVA Analytics and MIS are designed for management reporting." }],
    metrics: [{ label: "Revenue (YTD)", value: "₹62.4 Cr" }, { label: "EBITDA", value: "18.2%" }, { label: "Collections", value: "87%" }],
  },
  {
    slug: "intelligence",
    name: "ELVA Intelligence",
    short: "Ask questions and get answers from authorized ERP data.",
    group: "Insight",
    icon: Sparkles,
    headline: "Ask Your ERP. Understand Your Business.",
    summary:
      "ELVA Intelligence brings AI-powered interaction to your ERP — natural-language questions and AI-assisted analysis grounded in your authorized business data.",
    problems: ["Simple questions require multiple reports.", "Insight waits for someone to prepare it.", "Generic AI tools guess instead of using your records."],
    solves:
      "ELVA Intelligence does not replace your ERP. It works on top of governed ERP data to help people understand the business faster.",
    features: [
      "Natural-language questions", "Answers from authorized ERP data", "Permission-aware responses", "Explanations of changes and trends",
      "Works across finance, projects, procurement and sales", "AI is not the source of financial truth",
    ],
    workflow: ["User question", "Permission check", "ERP data", "Business logic", "Validated result", "AI explanation"],
    outcomes: ["Faster answers for management", "Answers respect user permissions", "Grounded in validated ERP data"],
    faqs: [
      { q: "Does ELVA ERP include AI?", a: "Yes. ELVA Intelligence provides AI-powered interaction and insights using authorized ERP data." },
      { q: "Can AI modify our financial records?", a: "Sensitive financial actions follow ERP permissions, validation and approval workflows. AI is not the source of financial truth." },
    ],
    metrics: [{ label: "Questions", value: "Natural language" }, { label: "Data", value: "Authorized only" }, { label: "Result", value: "Validated" }],
  },
];

export const productBySlug = (slug: string) => products.find((p) => p.slug === slug);

/* ------------------------------------------------------------------ */
/* Solutions                                                            */
/* ------------------------------------------------------------------ */
export type Solution = {
  slug: string;
  name: string;
  short: string;
  headline: string;
  summary: string;
  audience: string[];
  challenges: string[];
  modules: string[]; // product slugs
  flow: string[];
};

export const solutions: Solution[] = [
  {
    slug: "real-estate",
    name: "Real Estate Developers",
    short: "From land to handover — projects, sales, collections and finance.",
    headline: "The ERP Built Around How Real Estate Developers Actually Work.",
    summary: "Connect projects, construction, procurement, inventory, sales, collections and finance in one system.",
    audience: ["Residential developers", "Plot developers", "Villa developers", "Commercial developers", "Mixed-use developers", "Multi-project developers", "Growing real estate groups", "Construction-led development companies"],
    challenges: [],
    modules: ["projects", "procurement", "inventory", "sales-crm", "pms", "finance", "hr-payroll", "assets", "analytics", "intelligence"],
    flow: ["Land / Project", "Planning & Approvals", "Project & BOQ", "Procurement", "Inventory & Materials", "Construction", "Sales & Booking", "Collections", "Customer Management", "Possession / Handover", "Profitability"],
  },
  {
    slug: "construction",
    name: "Construction Companies",
    short: "Budgets, BOQs, work orders, materials and project costing.",
    headline: "Run Every Site and Every Contract From One Connected System.",
    summary:
      "Connect project budgets, BOQs, work orders, subcontractors, procurement, site stores, billing and finance so every site reports from the same data.",
    audience: ["General contractors", "Civil construction firms", "EPC companies", "Design-build firms", "Construction-led developers"],
    challenges: [
      "Budgets, BOQs and actual costs live in separate spreadsheets.",
      "Material requests reach purchase through calls and messages.",
      "Site stores and head office see different stock figures.",
      "Contract billing and subcontractor payments are reconciled by hand.",
    ],
    modules: ["projects", "procurement", "inventory", "finance", "assets", "hr-payroll", "analytics"],
    flow: ["Contract", "Budget & BOQ", "Work orders", "Procurement", "Site stores", "Execution", "Billing", "Profitability"],
  },
  {
    slug: "infrastructure",
    name: "Infrastructure & Contracting",
    short: "DWA, work orders, subcontractors and execution with ELVA EMS.",
    headline: "Execute Complex Infrastructure Projects With Control.",
    summary:
      "ELVA EMS manages DWA, work orders, BOQ, subcontractors, site execution, material consumption, billing and profitability on the ELVA ERP foundation.",
    audience: ["Infrastructure contractors", "Electrical contractors", "Utility and EPC contractors", "Project-driven businesses"],
    challenges: [
      "Execution progress and billing are tracked separately.",
      "Subcontractor work is difficult to measure and verify.",
      "Material consumption against BOQ is unclear.",
      "Project margin is only visible at the end.",
    ],
    modules: ["ems", "projects", "procurement", "inventory", "finance", "assets", "analytics"],
    flow: ["DWA", "BOQ", "Work orders", "Subcontractors", "Site execution", "Billing", "Profitability"],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    short: "BOMs, production, WIP, quality and costing with ELVA Manufacturing.",
    headline: "Connect Production With Finance and Inventory.",
    summary:
      "ELVA Manufacturing manages BOMs, production orders, work centres, material planning, WIP, quality, finished goods and production costing.",
    audience: ["Discrete manufacturers", "Process manufacturers", "Building-material producers", "Fabrication units"],
    challenges: [
      "Production plans are disconnected from available stock.",
      "WIP and production costs are estimated.",
      "Quality records are not linked to batches.",
      "Finance receives production data late.",
    ],
    modules: ["manufacturing", "inventory", "procurement", "finance", "hr-payroll", "analytics"],
    flow: ["BOM", "Material planning", "Production order", "WIP", "Quality", "Finished goods", "Costing"],
  },
];

export const solutionBySlug = (slug: string) => solutions.find((s) => s.slug === slug);

/* ------------------------------------------------------------------ */
/* Home page                                                            */
/* ------------------------------------------------------------------ */
export const painPoints = [
  { title: "Disconnected Data", text: "Different teams maintain different versions of the truth." },
  { title: "Project Cost Uncertainty", text: "Management cannot easily see budget, actual cost, commitments and profitability together." },
  { title: "Procurement Delays", text: "Material requirements, approvals, purchase orders and receipts are disconnected." },
  { title: "Inventory Blind Spots", text: "Teams struggle to know what is available, where it is, and what needs to be purchased." },
  { title: "Collection Follow-up", text: "Customer dues and overdue receivables require constant manual follow-up." },
  { title: "Management Reporting", text: "Critical MIS reports take hours or days to prepare." },
  { title: "Multiple Projects", text: "Each project develops its own spreadsheets, folders and processes." },
  { title: "Manual Approvals", text: "Important decisions get stuck in email, WhatsApp or verbal communication." },
];

export const fragmented = [
  "Sales may live in a CRM.",
  "Accounts may live in accounting software.",
  "Project teams may use Excel.",
  "Procurement may run through email and WhatsApp.",
  "Site teams may maintain separate registers.",
  "Management may wait for someone to prepare the monthly report.",
];

export const businessFlow = ["Project", "Planning", "Procurement", "Materials", "Construction", "Sales", "Billing", "Collections", "Finance", "Profitability", "Analytics", "ELVA Intelligence", "Decision"];

export const philosophy = [
  { k: "ERP", v: "System of Record" },
  { k: "Industry Operations", v: "System of Execution" },
  { k: "Analytics", v: "System of Insight" },
  { k: "ELVA Intelligence", v: "System of Interaction" },
];

export const comparison: [string, string][] = [
  ["Separate project spreadsheets", "Central project records"],
  ["Manual purchase tracking", "Structured procurement workflow"],
  ["Separate inventory registers", "Connected inventory"],
  ["Manual receivable follow-up", "Receivables and ageing"],
  ["Finance receives information late", "Operational data flows into finance"],
  ["Manual MIS preparation", "Dashboards and scheduled MIS"],
  ["Management depends on individuals", "Shared business data"],
  ["Questions require multiple reports", "ELVA Intelligence can query authorized data"],
];

export const aiQuestions = [
  "What is our total outstanding receivable?",
  "Which projects are exceeding budget?",
  "Which work orders are delayed?",
  "Which customers have overdue payments?",
  "Which suppliers have the highest spend?",
  "Why did project profitability change this quarter?",
];

export const scaleSteps = ["1 Project", "Multiple Projects", "Multiple Branches", "Multiple Entities", "Consolidated Group", "AI-powered Management"];

export const roles = [
  { role: "Promoter / MD", text: "Portfolio-wide view of projects, cash, collections and profitability." },
  { role: "CFO / Finance Head", text: "Connected ledgers, receivables, payables, budgets and consolidation." },
  { role: "Project Head", text: "Budget vs actual, commitments, progress and cost-to-complete per project." },
  { role: "Purchase Manager", text: "Requisitions, approvals, POs and supplier performance in one flow." },
  { role: "Store Manager", text: "Stock by warehouse and site, transfers, issues and alerts." },
  { role: "Sales Head", text: "Leads, site visits, bookings, unit availability and collections." },
  { role: "HR Head", text: "Employees, attendance, payroll and statutory processes." },
  { role: "IT / Admin", text: "Role-based access, audit trails, tenant isolation and integrations." },
];

/* ------------------------------------------------------------------ */
/* Real estate deep-dive sections                                       */
/* ------------------------------------------------------------------ */
export const realEstateSections = [
  { slug: "projects", title: "Know Every Project. Every Cost. Every Commitment.", text: "See what has been planned, what has been spent, what is committed and what remains — project by project.", items: ["Project budgets", "BOQ", "Cost heads", "Work orders", "Contractors", "Commitments", "Progress", "Profitability"] },
  { slug: "procurement", title: "From Material Requirement to Purchase. Without the Gaps.", text: "Requisitions, approvals, POs, receipts and invoices — linked to the project that needed them.", items: ["Requisitions", "Approvals", "Purchase orders", "Goods receipts", "Invoices", "Supplier ledger"] },
  { slug: "inventory", title: "Know What You Have. Where It Is. What You Need.", text: "Connect procurement and stores with project execution so material movement becomes visible and accountable.", items: ["Site stores", "Receipts & issues", "Transfers", "Stock ageing", "Alerts", "Valuation"] },
  { slug: "sales-crm", title: "From Lead to Booking. From Booking to Collection.", text: "Leads, site visits, bookings and payment schedules on the same customer record finance uses.", items: ["Leads", "Site visits", "Follow-ups", "Booking", "Payment schedules", "Sales reporting"] },
  { slug: "pms", title: "One Source of Truth for Your Property Inventory.", text: "Towers, floors, units, plots and villas with configurable status from available to possession.", items: ["Towers / blocks", "Units & plots", "Pricing", "Availability", "Allocation", "Documents"] },
  { slug: "finance", title: "Know What Is Due. What Is Overdue. What Has Been Collected.", text: "Expected collections, overdue exposure and project-level collection performance — without combining spreadsheets.", items: ["Customer ledger", "Installments", "Demands", "Receipts", "Ageing", "Reminders"] },
];

export const profitabilityItems = ["Project value", "Revenue", "Budget", "Actual cost", "Committed cost", "WIP", "Billing", "Collections", "Profit & margin", "Cost-to-complete"];

export const compliance = ["GST", "TDS", "Tax records", "Agreement tracking", "Document expiry", "Approval trails", "Audit trails", "RERA-related workflows where configured and applicable"];

export const realEstateFaqs: Faq[] = [
  { q: "Can I manage apartments and plots?", a: "Yes. The real-estate solution can support project, unit and plot structures according to the configured business model." },
  { q: "Can I track unit availability?", a: "Yes. Unit-level property inventory can be maintained with configurable status and allocation workflows." },
  { q: "Can sales and finance use the same customer data?", a: "That is a core design principle. Shared customer and transaction data reduces duplicate entry and reconciliation." },
  { q: "Can I track project profitability?", a: "Yes. Project accounting and profitability are core capabilities." },
  { q: "Can procurement be linked to projects?", a: "Yes. Procurement can be associated with projects, cost centres and other business dimensions as configured." },
  { q: "Can inventory be tracked by site?", a: "Yes. Warehouses/site stores and inventory locations can be configured." },
  { q: "Can I track customer collections?", a: "Yes. Customer ledgers, invoices, receipts, outstanding and ageing are supported within the finance framework." },
  { q: "Can I manage contractors and subcontractors?", a: "The project/EMS capabilities support contractor and subcontractor workflows. Exact workflows depend on implementation scope." },
  { q: "Can I manage approvals?", a: "Yes. ELVA includes a configurable workflow and approval framework." },
  { q: "Can I generate management reports?", a: "Yes. ELVA Analytics and MIS are designed for management reporting." },
];

export const generalFaqs: Faq[] = [
  { q: "What is ELVA ERP?", a: "ELVA ERP is a modular, multi-tenant business operating platform that connects finance, procurement, inventory, projects, HR, assets, industry operations, analytics and AI." },
  { q: "Is ELVA ERP only for real estate?", a: "Real estate is a primary focus, but ELVA ERP is designed as a broader industry-extensible platform with modules such as EMS and Manufacturing." },
  { q: "Is ELVA ERP cloud-based?", a: "ELVA ERP is designed to support cloud and enterprise deployment models. The exact deployment model depends on customer requirements." },
  { q: "Can ELVA ERP manage multiple projects?", a: "Yes. Project and portfolio-level management is a core requirement for the real-estate solution." },
  { q: "Can it manage multiple companies?", a: "The platform is designed to support multiple legal entities and consolidated reporting where configured." },
  { q: "Can we start with selected modules?", a: "Yes. ELVA ERP is modular and can be configured according to business requirements." },
  { q: "Can ELVA ERP integrate with existing software?", a: "Yes. ELVA ERP is designed with APIs and integration adapters. Specific integrations depend on the external system and available APIs." },
  { q: "Can we migrate data from Excel or another ERP?", a: "Yes. Data migration can be planned through mapping, cleansing, validation, trial migration and final migration." },
  { q: "Does ELVA ERP include AI?", a: "Yes. ELVA Intelligence provides AI-powered interaction and insights using authorized ERP data." },
  { q: "Can AI modify our financial records?", a: "Sensitive financial actions should follow ERP permissions, validation and approval workflows. AI is not the source of financial truth." },
  { q: "Is ELVA ERP suitable for small developers?", a: "ELVA's modular architecture is intended to support growing businesses. The implementation scope depends on the organization's size, workflows and requirements." },
  { q: "Is ELVA ERP suitable for large developers?", a: "The platform is designed for multi-project, multi-entity and role-based enterprise operations. Deployment and implementation architecture can be tailored to enterprise requirements." },
];

/* ------------------------------------------------------------------ */
/* Information pages                                                    */
/* ------------------------------------------------------------------ */
export const howItWorks = [
  { t: "Understand", d: "We understand your projects, teams, workflows, systems and reporting requirements." },
  { t: "Configure", d: "We configure your organization, modules, users, workflows and masters." },
  { t: "Integrate", d: "Connect required external systems and services." },
  { t: "Migrate", d: "Clean, map, validate and migrate required data." },
  { t: "Train", d: "Train administrators, finance, operations and management." },
  { t: "Go Live", d: "Move the agreed workflows into production." },
  { t: "Improve", d: "Use real operational feedback to continuously improve processes and reporting." },
];

export const whyElva = [
  { t: "Built Around Business Processes", d: "Not just screens. ELVA connects the workflow behind the screens." },
  { t: "Real Estate Ready", d: "Project, procurement, inventory, sales, collections and finance can work together." },
  { t: "Modular", d: "Start with the capabilities you need and expand as your business grows." },
  { t: "Multi-Project", d: "Manage multiple projects and entities from one platform." },
  { t: "AI-Enabled", d: "Use ELVA Intelligence to interact with authorized business data." },
  { t: "Extensible", d: "Industry modules can be added without rebuilding the ERP foundation." },
  { t: "Connected Data", d: "One transaction can flow through operations, finance, analytics and AI." },
  { t: "Built for Growth", d: "Designed to support growing teams, projects and business complexity." },
];

export const security = [
  { t: "Tenant isolation", d: "Multiple organizations can operate on the same ELVA platform while keeping their data logically isolated." },
  { t: "Role-based access", d: "Users see and perform only what their role permits." },
  { t: "Audit trails", d: "Critical actions are traceable." },
  { t: "Financial controls", d: "Posted financial transactions follow controlled correction and reversal processes." },
  { t: "Approval workflows", d: "Role, amount, department and project-based approvals with escalation and delegation." },
  { t: "Data protection", d: "Authentication, authorization, encryption, secure storage, monitoring and backup practices applied according to deployment requirements." },
];

export const pricingDimensions = ["Number of users", "Modules", "Number of projects", "Legal entities", "Deployment model", "Data migration", "Integrations", "Custom workflows", "Support / AMC", "AI usage"];

export const resourceTopics = [
  { t: "Real estate project accounting", d: "How project-level ledgers, budgets and commitments come together." },
  { t: "Procurement for construction", d: "Moving material requests out of messaging apps and into controlled workflows." },
  { t: "Site inventory control", d: "Keeping site stores and head office on the same stock figures." },
  { t: "Collections & receivables", d: "Booking-linked payment plans, demands, receipts and ageing." },
  { t: "Choosing an ERP", d: "Questions to ask before replacing spreadsheets and disconnected tools." },
  { t: "Planning a data migration", d: "Mapping, cleansing, validation, trial migration and final cut-over." },
];

/* ------------------------------------------------------------------ */
/* Navigation                                                           */
/* ------------------------------------------------------------------ */
export const nav = {
  simple: [
    { label: "How It Works", to: "/how-it-works" },
    { label: "Why ELVA", to: "/why-elva" },
    { label: "Pricing", to: "/pricing" },
  ],
  resources: [
    { label: "FAQs", to: "/faq", d: "Answers about ELVA ERP" },
    { label: "Resources & Insights", to: "/resources", d: "ERP guides and topics" },
    { label: "Company", to: "/company", d: "About ELVA Tech" },
    { label: "Contact", to: "/contact", d: "Talk to ELVA" },
  ],
};

/* ------------------------------------------------------------------ */
/* Forms                                                                */
/* ------------------------------------------------------------------ */
export const businessTypes = ["Real Estate Developer", "Construction Company", "Infrastructure / Electrical Contractor", "Manufacturing", "Trading", "Other"];
export const moduleOptions = ["Finance", "Procurement", "Inventory", "Projects", "PMS", "EMS", "Manufacturing", "HR & Payroll", "Analytics", "ELVA Intelligence"];
export const projectCounts = ["1", "2–5", "6–10", "11–25", "25+"];
export const employeeCounts = ["1–50", "51–200", "201–500", "501–1000", "1000+"];
export const userCounts = ["1–10", "11–50", "51–150", "151–500", "500+"];
export const timelines = ["Immediately", "Within 3 months", "3–6 months", "6–12 months", "Exploring options"];
