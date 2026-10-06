import Metric from "./Metric";

export default function Collections() {
  return (
    <div className="collection-ui">
      <div className="collection-metrics">
        <Metric label="Total received" value="₹ 2.84 Cr" change="FY 2025–26" />
        <Metric
          label="Pending collections"
          value="₹ 68.4L"
          change="Across 24 properties"
        />
      </div>
      <div className="payment-list">
        <p>
          <b>Recent payments</b>
          <span>Receipt no. / Date / Status</span>
        </p>
        {[
          "Rajesh R. · Plot 08",
          "S. Menon · Unit 204",
          "Naveen B. · Plot 21",
        ].map((x, i) => (
          <div key={x}>
            <span>
              {x}
              <small>Green Valley Layout</small>
            </span>
            <b>₹ {["4,50,000", "8,75,000", "2,25,000"][i]}</b>
            <em>Received</em>
          </div>
        ))}
      </div>
    </div>
  );
}
