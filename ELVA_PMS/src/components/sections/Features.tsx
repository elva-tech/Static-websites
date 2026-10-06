import { ArrowRight, Building2, FileText, IndianRupee, LayoutGrid, Sparkles, Users } from "lucide-react";
import Icon from "../Icon";

const featureData = [
  [
    Building2,
    "Project management",
    "Bring every venture, layout and development under one operational view.",
  ],
  [
    LayoutGrid,
    "Structured inventory",
    "Know the exact status, specifications and pricing of every unit.",
  ],
  [
    Sparkles,
    "AI-assisted pricing",
    "Make internal pricing decisions with data-supported suggestions.",
  ],
  [
    Users,
    "Buyer operations",
    "Keep enquiries, site visits and negotiations tied to the right property.",
  ],
  [
    FileText,
    "Documents & quotes",
    "Prepare, organize and share transaction records with confidence.",
  ],
  [
    IndianRupee,
    "Payment tracking",
    "Record collections, receipts and pending amounts against properties.",
  ],
];

function FeatureGrid() {
  return (
    <div className="feature-grid">
      {featureData.map(([I, title, text], i) => {
        const C = I as any;
        return (
          <article className="feature" key={String(title)}>
            <Icon>
              <C size={20} />
            </Icon>
            <span className="feature-n">0{i + 1}</span>
            <h3>{String(title)}</h3>
            <p>{String(text)}</p>
            <a href="#contact">
              Explore <ArrowRight size={15} />
            </a>
          </article>
        );
      })}
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="features section">
      <div className="section-intro">
        <p className="eyebrow">THE OPERATING SYSTEM FOR PROPERTY SALES</p>
        <h2>Everything from project launch to sale.</h2>
        <p>
          Replace disconnected files and fragile follow-ups with a system
          designed around the lifecycle of a property.
        </p>
      </div>
      <FeatureGrid />
    </section>
  );
}
