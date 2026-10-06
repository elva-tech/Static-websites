import {
  ArrowDownLeft,
  ArrowUpRight,
  CalendarDays,
  MoreHorizontal,
} from "lucide-react";
import { investmentRows } from "../../data/content";
export function InvestmentBoard() {
  return (
    <div className="product-window investment-board">
      <div className="window-bar">
        <div className="window-dots">
          <i />
          <i />
          <i />
        </div>
        <span>Investments / Overview</span>
        <MoreHorizontal size={18} />
      </div>
      <div className="window-body">
        <div className="metric-row">
          <div>
            <span>Active investments</span>
            <strong>12</strong>
            <small>Demo workspace</small>
          </div>
          <div className="green-metric">
            <span>Next payout cycle</span>
            <strong>08</strong>
            <small>days away</small>
          </div>
        </div>
        <div className="table-title">
          <b>Investment records</b>
          <button>
            View all <ArrowUpRight size={13} />
          </button>
        </div>
        <div className="data-table">
          <div className="table-head">
            <span>Number</span>
            <span>Plan</span>
            <span>Cycle</span>
            <span>Status</span>
          </div>
          {investmentRows.map((row) => (
            <div className="table-row" key={row[0]}>
              {row.map((cell, i) => (
                <span
                  key={cell}
                  className={
                    i === 3
                      ? `status ${cell === "Active" ? "active" : "soon"}`
                      : ""
                  }
                >
                  {cell}
                </span>
              ))}
            </div>
          ))}
        </div>
        <div className="timeline">
          <div>
            <span className="icon-circle green">
              <ArrowDownLeft size={14} />
            </span>
            <p>
              <b>Payout record</b>
              <small>Scheduled according to your workflow</small>
            </p>
          </div>
          <div>
            <span className="icon-circle blue">
              <CalendarDays size={14} />
            </span>
            <p>
              <b>Withdrawal request</b>
              <small>Review and status tracking</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
