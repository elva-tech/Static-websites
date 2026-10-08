import {
  BarChart3,
  Boxes,
  ClipboardList,
  FileStack,
  HardHat,
  IndianRupee,
  LayoutDashboard,
  Users,
} from "lucide-react";

export const modules = [
  {
    title: "Project management",
    text: "Keep project number, client, address, budget, contractor and operations in one project workspace.",
    icon: ClipboardList,
  },
  {
    title: "Client payments",
    text: "Maintain payment plans, installments, collections, dates and payment records project by project.",
    icon: IndianRupee,
  },
  {
    title: "Materials",
    text: "Track material receipts, consumption and remaining stock with a clear transaction history.",
    icon: Boxes,
  },
  {
    title: "Labour",
    text: "Record labour bills, work categories, quantities, extra payments and payment history.",
    icon: HardHat,
  },
  {
    title: "Drawings",
    text: "Store drawings centrally and follow their submitted, approved, rejected or re-upload status.",
    icon: FileStack,
  },
  {
    title: "Daily reports",
    text: "Maintain daily project transactions, expenses and operational records in a structured view.",
    icon: LayoutDashboard,
  },
  {
    title: "Role-based access",
    text: "Give company teams, supervisors and clients the information relevant to their role.",
    icon: Users,
  },
  {
    title: "Project visibility",
    text: "Use dashboards and payment analytics to understand balances, spending and expectations.",
    icon: BarChart3,
  },
];

export const steps = [
  "Create your company workspace",
  "Add projects",
  "Add your team",
  "Add project information",
  "Start managing operations",
  "Monitor your projects",
];
export const useCases = [
  "Individual house construction",
  "Villa construction",
  "Residential buildings",
  "Commercial construction",
  "Civil contracting",
];
export const faqs = [
  [
    "What is ELVA CMS?",
    "ELVA CMS is a construction management system designed to help construction companies manage projects, payments, materials, labour, drawings and daily operations.",
  ],
  [
    "Can I manage multiple projects?",
    "Yes. ELVA CMS is designed around project-based management under a construction company workspace.",
  ],
  [
    "Can clients access the system?",
    "Yes. Clients can access relevant payment and drawing information through a dedicated experience.",
  ],
  [
    "Can supervisors use ELVA CMS?",
    "Yes. Supervisors have a focused project interface for site-level daily reports, materials, drawings and labour records.",
  ],
  [
    "Can I track construction materials?",
    "Yes. Material list and material tracking functionality cover received, consumed and remaining quantities.",
  ],
  [
    "Can I manage construction drawings?",
    "Yes. Drawings can be uploaded and tracked through submitted, approved, rejected and re-upload stages.",
  ],
];
