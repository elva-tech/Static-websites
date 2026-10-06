import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { scrollTo } from "../../lib/scroll";

const faqs = [
  [
    "What is ELVA PMS?",
    "ELVA PMS is property management software for real-estate developers to manage projects, property inventory, pricing, buyers, documents, payments and analytics from one platform.",
  ],
  [
    "Who is ELVA PMS for?",
    "It is designed for real-estate developers, builders, promoters and property-development companies managing one or multiple projects.",
  ],
  [
    "Can I manage multiple projects?",
    "Yes. ELVA PMS is designed around multi-project real-estate operations.",
  ],
  [
    "Does the AI automatically set my selling price?",
    "No. It provides a suggested price. The administrator reviews the suggestion and controls the final selling price.",
  ],
  [
    "Can I manage buyers, documents and payments?",
    "Yes. ELVA PMS includes buyer management, document upload and sharing, payment records, receipts and payment history.",
  ],
  [
    "Can ELVA PMS be customized?",
    "ELVA PMS can be configured or extended based on business requirements. Discuss your workflow with the ELVA team during a demo.",
  ],
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="faq section">
      <div>
        <p className="eyebrow">FAQ</p>
        <h2>Questions, answered clearly.</h2>
        <p>
          Want to see how it fits your own workflow? Speak with the ELVA team.
        </p>
        <button className="text-button" onClick={() => scrollTo("contact")}>
          Talk to sales <ArrowRight size={16} />
        </button>
      </div>
      <div className="accordion">
        {faqs.map(([q, a], i) => (
          <div className={open === i ? "open" : ""} key={q}>
            <button
              aria-expanded={open === i}
              onClick={() => setOpen(open === i ? -1 : i)}
            >
              {q}
              <ChevronDown />
            </button>
            {open === i && <p>{a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
