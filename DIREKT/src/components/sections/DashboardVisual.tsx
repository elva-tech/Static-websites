import { useId } from "react";

const chart =
  "0,86 26,77 49,82 76,57 98,65 123,41 149,51 175,25 202,45 228,30 253,40 281,16 307,27 333,11";

export function DashboardVisual({
  compact = false,
  status = "AI ANALYZING",
}: {
  compact?: boolean;
  status?: string;
}) {
  const fadeId = useId().replace(/:/g, "");
  return (
    <div
      className={`terminal ${compact ? "terminal--compact" : ""}`}
      aria-label="Illustrative Direkt product dashboard"
    >
      <div className="terminal-bar">
        <span className="terminal-brand">
          DIREKT <b>• LIVE</b>
        </span>
        <span>Illustrative interface</span>
      </div>
      <div className="terminal-grid">
        <aside>
          <span>MARKETS</span>
          <strong>SI FUTURES</strong>
          <em>Active analysis</em>
          <hr />
          <span>WATCHLIST</span>
          <p>
            Silver Futures <b>•</b>
          </p>
          <p>Gold Futures</p>
          <p>Energy Index</p>
        </aside>
        <main>
          <div className="instrument">
            <div>
              <span>Silver Futures</span>
              <strong>₹ 87,412.60</strong>
              <em>Market data status: live</em>
            </div>
            <div className="tag">{status}</div>
          </div>
          <div className="chart">
            <div className="chart-scale">
              <span>88,000</span>
              <span>87,500</span>
              <span>87,000</span>
            </div>
            <svg
              viewBox="0 0 340 100"
              preserveAspectRatio="none"
              role="img"
              aria-label="Illustrative market chart"
            >
              <defs>
                <linearGradient id={fadeId} x1="0" x2="0" y1="0" y2="1">
                  <stop stopColor="#1d6f8a" stopOpacity=".16" />
                  <stop offset="1" stopColor="#1d6f8a" stopOpacity="0" />
                </linearGradient>
              </defs>
              <polygon points={`${chart} 333,100 0,100`} fill={`url(#${fadeId})`} />
              <polyline
                points={chart}
                fill="none"
                stroke="#1d6f8a"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <div className="chart-time">
              <span>09:30</span>
              <span>11:00</span>
              <span>12:30</span>
              <span>14:00</span>
            </div>
          </div>
          <div className="dash-stats">
            <div>
              <span>POSITION</span>
              <b>None</b>
            </div>
            <div>
              <span>RISK CHECK</span>
              <b className="pass">Configured</b>
            </div>
            <div>
              <span>DECISION</span>
              <b>WAIT</b>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
