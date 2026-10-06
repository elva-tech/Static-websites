import {
  Bell,
  ChevronRight,
  CircleDollarSign,
  CreditCard,
  FileText,
  Home,
  UserRound,
} from "lucide-react";
export function PhoneDemo() {
  return (
    <div className="phone">
      <div className="phone-notch" />
      <div className="phone-head">
        <span>Good morning</span>
        <Bell size={16} />
        <strong>Demo customer</strong>
      </div>
      <div className="phone-balance">
        <small>Relationships at a glance</small>
        <div>
          <b>Invest</b>
          <span>Borrow</span>
        </div>
        <strong>One customer app</strong>
      </div>
      <div className="phone-cards">
        <div>
          <span className="phone-icon green">
            <CircleDollarSign size={16} />
          </span>
          <p>
            <b>Invest</b>
            <small>Records & payouts</small>
          </p>
          <ChevronRight size={15} />
        </div>
        <div>
          <span className="phone-icon blue">
            <CreditCard size={16} />
          </span>
          <p>
            <b>Borrow</b>
            <small>Loans & repayments</small>
          </p>
          <ChevronRight size={15} />
        </div>
      </div>
      <div className="phone-activity">
        <b>Recent records</b>
        {["Payout information", "Repayment schedule", "Document available"].map(
          (x, i) => (
            <div key={x}>
              <FileText size={14} />
              <span>{x}</span>
              <small>{i + 1}d</small>
            </div>
          ),
        )}
      </div>
      <div className="phone-nav">
        <Home size={16} />
        <FileText size={16} />
        <CreditCard size={16} />
        <UserRound size={16} />
      </div>
    </div>
  );
}
