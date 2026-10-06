import { BarChart3, FileCheck2, Landmark, UsersRound } from "lucide-react";
export function AdminBoard() {
  return (
    <div className="product-window admin-board">
      <div className="window-bar">
        <div className="window-dots">
          <i />
          <i />
          <i />
        </div>
        <span>Client admin / Operations</span>
      </div>
      <div className="admin-layout">
        <aside>
          <b>ELVA Investa</b>
          <span>Overview</span>
          <span>Customers</span>
          <span>Investments</span>
          <span>Loans</span>
          <span>Reports</span>
          <span>Audit</span>
        </aside>
        <div className="admin-main">
          <div className="admin-title">
            <div>
              <small>Organization workspace</small>
              <h3>Operations overview</h3>
            </div>
            <span className="demo-pill">Demo data</span>
          </div>
          <div className="admin-stats">
            <div>
              <UsersRound />
              <small>Customers</small>
              <b>248</b>
            </div>
            <div>
              <Landmark />
              <small>Investments</small>
              <b>86</b>
            </div>
            <div>
              <FileCheck2 />
              <small>Documents</small>
              <b>143</b>
            </div>
          </div>
          <div className="report-card">
            <div>
              <b>Operational reporting</b>
              <small>Structured records across the organization</small>
            </div>
            <BarChart3 size={27} />
            <div className="bars">
              {[34, 54, 40, 67, 56, 82, 70].map((h, i) => (
                <i key={i} style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
