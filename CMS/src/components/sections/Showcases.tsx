import { Link } from "react-router-dom";
import { ProductMockup, type ProductView } from "../ui/ProductMockup";

const bands: {
  view: ProductView;
  title: string;
  text: string;
  layout: string;
}[] = [
  {
    view: "projects",
    layout: "bleed",
    title: "Project management",
    text: "Keep every project’s information, budget, client and operating records organized in one workspace.",
  },
  {
    view: "payments",
    layout: "split",
    title: "Client payments",
    text: "Maintain payment plans, installments, amounts and payment history with a clear financial view.",
  },
  {
    view: "materials",
    layout: "crop",
    title: "Materials",
    text: "See materials move from received to consumed to remaining through focused project tracking.",
  },
  {
    view: "labour",
    layout: "bleed",
    title: "Labour",
    text: "Maintain labour bills, quantities, payments and related records at the project level.",
  },
  {
    view: "drawings",
    layout: "split",
    title: "Drawings",
    text: "Keep plans in one place and follow their review status without searching through files.",
  },
  {
    view: "reports",
    layout: "crop",
    title: "Daily reports",
    text: "Maintain daily project transactions, expenses and operational records in a structured view.",
  },
];

export function Showcases() {
  return (
    <div className="showcases">
      {bands.map((band, i) => (
        <section className={`band band-${band.layout}`} key={band.title}>
          <div className="band-copy">
            <span>0{i + 1} / 06</span>
            <h2>{band.title}</h2>
            <p>{band.text}</p>
            <Link to="/modules">View in modules</Link>
          </div>
          <div className="band-frame">
            <ProductMockup view={band.view} />
          </div>
        </section>
      ))}
    </div>
  );
}
