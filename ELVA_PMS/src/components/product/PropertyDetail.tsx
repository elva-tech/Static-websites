import { Send } from "lucide-react";

export default function PropertyDetail() {
  return (
    <div className="detail-ui">
      <div className="detail-main">
        <p className="mini-label">PROPERTY DETAILS</p>
        <h3>
          Plot 51 <em>Available</em>
        </h3>
        <p className="muted">Green Valley Layout · Phase II</p>
        <div className="detail-fields">
          <span>
            Plot size <b>30 × 50 ft</b>
          </span>
          <span>
            Area <b>1,500 sq.ft</b>
          </span>
          <span>
            Facing <b>East</b>
          </span>
          <span>
            Corner site <b>Yes</b>
          </span>
        </div>
      </div>
      <aside>
        <p>QUOTED PRICE</p>
        <strong>₹ 42.75L</strong>
        <span>₹ 2,850 / sq.ft</span>
        <button>
          Share quote <Send size={14} />
        </button>
      </aside>
    </div>
  );
}
