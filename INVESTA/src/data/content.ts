export const faqItems = [
  [
    "What is ELVA Investa?",
    "ELVA Investa is a multi-tenant platform for managing investment and lending operations, including investors, borrowers, investments, loans, payouts, repayments, transactions, documents and reports.",
  ],
  [
    "Is ELVA Investa a bank?",
    "No. ELVA Investa is business management and record-management software. It is not inherently a bank.",
  ],
  [
    "Does money move through ELVA Investa?",
    "The platform primarily records and manages financial relationships and transactions. Actual money movement depends on the organization’s configured process and integrations.",
  ],
  [
    "Can one customer be both an investor and a borrower?",
    "Yes. A customer can have both relationships and access both modules through the same customer application.",
  ],
  [
    "Can multiple organizations use ELVA Investa?",
    "Yes. ELVA Investa is designed as a multi-tenant platform.",
  ],
  [
    "Can one organization’s admin see another organization’s data?",
    "No. Tenant isolation is a core requirement.",
  ],
  [
    "Can organizations configure loan rules?",
    "The platform is designed to support configurable lending rules, subject to supported calculation models and the organization’s approved requirements.",
  ],
  [
    "Can ELVA Investa manage documents and reports?",
    "Yes. Documents can be associated with customers, investments and loans, and investment, lending, collection and operational reporting are part of the platform.",
  ],
];

export const investmentRows = [
  ["INV-0428", "Growth Plan", "Monthly", "Active"],
  ["INV-0394", "Income Plan", "Quarterly", "Active"],
  ["INV-0371", "Secure Plan", "Monthly", "Matures soon"],
];

export const demoFormFields = [
  ["name", "Name", "text"],
  ["company", "Company / Organization", "text"],
  ["email", "Work Email", "email"],
  ["mobile", "Mobile Number", "tel"],
  ["city", "City / Location", "text"],
] as const;
