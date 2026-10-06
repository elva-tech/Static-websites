import { useState } from "react";
import Collections from "../product/Collections";
import Inventory from "../product/Inventory";
import Pipeline from "../product/Pipeline";
import PropertyDetail from "../product/PropertyDetail";

const screenTabs = [
  ["Inventory", "Live inventory by project"],
  ["Property detail", "Complete property context"],
  ["Buyer pipeline", "Enquiries that move forward"],
  ["Collections", "Payments at a glance"],
];

export default function ProductGallery() {
  const [active, setActive] = useState(0);
  return (
    <section id="product" className="screens section">
      <div className="section-intro center">
        <p className="eyebrow">PRODUCT EXPERIENCE</p>
        <h2>See every moving part of your business.</h2>
        <p>
          One clear admin environment for your sales and property operations.
        </p>
      </div>
      <div className="screen-tabs">
        {screenTabs.map((x, i) => (
          <button
            onClick={() => setActive(i)}
            className={active === i ? "selected" : ""}
            key={x[0]}
          >
            <b>0{i + 1}</b>
            {x[0]}
          </button>
        ))}
      </div>
      <div className="screen-stage">
        <div className="screen-top">
          <span className="crumb">ELVA PMS / {screenTabs[active][0]}</span>
          <span className="live">
            <i /> Live demo
          </span>
        </div>
        {active === 0 ? (
          <Inventory />
        ) : active === 1 ? (
          <PropertyDetail />
        ) : active === 2 ? (
          <Pipeline />
        ) : (
          <Collections />
        )}
      </div>
      <p className="screen-caption">
        <b>{screenTabs[active][0]}.</b> {screenTabs[active][1]} — presented with
        illustrative data only.
      </p>
    </section>
  );
}
