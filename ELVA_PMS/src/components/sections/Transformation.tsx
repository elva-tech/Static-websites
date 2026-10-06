import { ArrowRight, Check } from "lucide-react";

export default function Transformation() {
  return (
    <section className="transform">
      <div className="transform-old">
        <p className="eyebrow">THE OLD WAY</p>
        <h2>Operations scattered across tools.</h2>
        <div>
          {[
            "Excel sheets",
            "WhatsApp chats",
            "Paper documents",
            "Separate payment records",
            "Manual reports",
          ].map((x) => (
            <span key={x}>{x}</span>
          ))}
        </div>
      </div>
      <div className="transform-arrow">
        <ArrowRight />
      </div>
      <div className="transform-new">
        <p className="eyebrow">THE ELVA WAY</p>
        <h2>One connected system.</h2>
        <div>
          {[
            "Projects",
            "Inventory",
            "Pricing",
            "Buyers",
            "Documents",
            "Payments",
            "Analytics",
          ].map((x) => (
            <span key={x}>
              <Check size={13} />
              {x}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
