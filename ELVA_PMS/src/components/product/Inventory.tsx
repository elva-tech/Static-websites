import { ArrowRight, ChevronDown } from "lucide-react";

export default function Inventory() {
  const units = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
  ];
  const cls = (i: number) =>
    i === 3 || i === 10
      ? "sold"
      : i === 5 || i === 13
        ? "booked"
        : i === 1 || i === 15
          ? "interested"
          : "available";
  return (
    <div className="inventory-ui">
      <div className="inventory-head">
        <div>
          <small>PROJECT INVENTORY</small>
          <h3>
            Green Valley Layout <ChevronDown size={15} />
          </h3>
        </div>
        <button className="filter">
          All plots <ChevronDown size={14} />
        </button>
      </div>
      <div className="inv-summary">
        <span>
          <i className="available"></i> Available <b>12</b>
        </span>
        <span>
          <i className="interested"></i> Interested <b>2</b>
        </span>
        <span>
          <i className="booked"></i> Booked <b>2</b>
        </span>
        <span>
          <i className="sold"></i> Sold <b>2</b>
        </span>
      </div>
      <div className="site-plan">
        <div className="road road-a">30 FT ROAD</div>
        <div className="plots">
          {units.map((n, i) => (
            <button
              aria-label={`Plot ${n}`}
              className={"plot " + cls(i)}
              key={n}
            >
              {n}
            </button>
          ))}
        </div>
        <div className="road road-b">24 FT ROAD</div>
      </div>
      <div className="property-preview">
        <span className="mini-label">SELECTED PROPERTY</span>
        <b>Plot 07</b>
        <span>30 × 50 ft · 1,500 sq.ft · East facing</span>
        <strong>
          ₹ 2,850 <small>/ sq.ft</small>
        </strong>
        <button>
          View detail <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}
