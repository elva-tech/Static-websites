import { Button } from "../ui/Button";
import { DashboardVisual } from "./DashboardVisual";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">SYSTEMATIC MARKET INTELLIGENCE</p>
        <h1>
          AI-powered trading.
          <br />
          Built for the markets.
        </h1>
        <p className="hero-text">
          Direkt analyzes real-time market data, evaluates trading
          opportunities, manages positions and automates the trading workflow
          through an intelligent trading engine.
        </p>
        <div className="hero-actions">
          <Button href="#enrol">Enrol in Direkt</Button>
          <Button href="#how-it-works" tone="quiet">
            See how it works
          </Button>
        </div>
        <p className="hero-note">
          <i></i> Built around visibility, control and defined risk parameters.
        </p>
      </div>
      <div className="hero-visual">
        <div className="market-brief">
          <div>
            <span>SILVER FUTURES · LIVE</span>
            <strong>87,412.60</strong>
          </div>
          <ol>
            <li>
              <span>01</span>Market data
            </li>
            <li>
              <span>02</span>Risk check
            </li>
            <li>
              <span>03</span>Decision
            </li>
            <li>
              <span>04</span>Position
            </li>
          </ol>
        </div>
        <DashboardVisual status="MONITORING" />
      </div>
    </section>
  );
}
