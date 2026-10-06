import { CircleAlert, ReceiptText, WalletCards } from "lucide-react";
export function LoanBoard() {
  return (
    <div className="product-window loan-board">
      <div className="window-bar">
        <div className="window-dots">
          <i />
          <i />
          <i />
        </div>
        <span>Borrow / Collections</span>
        <span className="demo-pill">Demo data</span>
      </div>
      <div className="loan-layout">
        <aside>
          <span>Dashboard</span>
          <b>Loans</b>
          <span>Collections</span>
          <span>Ledger</span>
          <span>Reports</span>
        </aside>
        <div className="loan-content">
          <div className="loan-hero">
            <div>
              <small>Outstanding balance</small>
              <strong>₹ 4,82,400</strong>
              <span>Illustrative account record</span>
            </div>
            <div className="ring">
              <span>68%</span>
              <small>Collected</small>
            </div>
          </div>
          <div className="collection-grid">
            <div>
              <WalletCards size={18} />
              <small>Due today</small>
              <b>18 accounts</b>
            </div>
            <div>
              <ReceiptText size={18} />
              <small>Recorded</small>
              <b>24 payments</b>
            </div>
            <div>
              <CircleAlert size={18} />
              <small>Overdue</small>
              <b>Review queue</b>
            </div>
          </div>
          <div className="schedule">
            <div className="schedule-title">
              <b>Repayment schedule</b>
              <span>Loan LN-1047</span>
            </div>
            {["Interest entry", "Principal payment", "Receipt available"].map(
              (item, i) => (
                <div className="schedule-row" key={item}>
                  <i className={i === 2 ? "completed" : ""} />
                  <span>{item}</span>
                  <small>{i === 2 ? "Recorded" : "Upcoming"}</small>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
