import Logo from "../layout/Logo";
import Metric from "./Metric";

export default function Dashboard() {
  const bars = [42, 67, 55, 88, 71, 96, 82];
  return (
    <div className="dash-wrap" aria-label="Illustrative ELVA PMS dashboard">
      <div className="dash-sidebar">
        <Logo />
        <div className="side-active">
          ▦ <span>Overview</span>
        </div>
        <div>
          ▦ <span>Projects</span>
        </div>
        <div>
          ◇ <span>Inventory</span>
        </div>
        <div>
          ◉ <span>Buyers</span>
        </div>
        <div>
          ▤ <span>Payments</span>
        </div>
        <div>
          ◌ <span>Analytics</span>
        </div>
        <div className="side-bottom">
          AT
          <br />
          <small>Admin</small>
        </div>
      </div>
      <div className="dash-main">
        <div className="dash-top">
          <div>
            <small>Monday, 12 August</small>
            <h3>Good morning, Anika</h3>
          </div>
          <div className="avatar">AS</div>
        </div>
        <div className="metric-row">
          <Metric label="Active projects" value="12" change="+2 this quarter" />
          <Metric
            label="Available inventory"
            value="426"
            change="Across 8 locations"
          />
          <Metric
            label="Collections"
            value="₹ 2.84 Cr"
            change="This financial year"
          />
        </div>
        <div className="dash-grid">
          <div className="sales-card">
            <div className="card-title">
              <span>Sales overview</span>
              <small>Last 7 months⌄</small>
            </div>
            <div className="chart">
              <div className="y-axis">
                <i>90L</i>
                <i>60L</i>
                <i>30L</i>
                <i>0</i>
              </div>
              <div className="bars">
                {bars.map((h, i) => (
                  <div key={i}>
                    <b style={{ height: `${h}%` }}></b>
                    <small>
                      {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"][i]}
                    </small>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="status-card">
            <div className="card-title">
              <span>Inventory status</span>
              <small>View report →</small>
            </div>
            <div className="donut">
              <span>
                426<small>units</small>
              </span>
            </div>
            <div className="legend">
              <p>
                <i className="available"></i>Available <b>238</b>
              </p>
              <p>
                <i className="interested"></i>Interested <b>92</b>
              </p>
              <p>
                <i className="booked"></i>Booked <b>58</b>
              </p>
              <p>
                <i className="sold"></i>Sold <b>38</b>
              </p>
            </div>
          </div>
        </div>
        <div className="project-table">
          <div className="card-title">
            <span>Projects</span>
            <small>View all →</small>
          </div>
          <div className="thead">
            <span>PROJECT</span>
            <span>INVENTORY</span>
            <span>COLLECTIONS</span>
            <span>STATUS</span>
          </div>
          <div className="trow">
            <b>Green Valley Layout</b>
            <span>124 plots</span>
            <span>₹ 84.2L</span>
            <em>On track</em>
          </div>
          <div className="trow">
            <b>ABC Heights</b>
            <span>86 units</span>
            <span>₹ 46.8L</span>
            <em>On track</em>
          </div>
        </div>
      </div>
    </div>
  );
}
