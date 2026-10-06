import { DashboardVisual } from "./DashboardVisual";
import { openEnrolment } from "../ui/Button";
import { SectionHeading } from "../ui/SectionHeading";

const featureCards = [
  ["AI analysis", "Continuous AI-driven market analysis."],
  ["Real-time monitoring", "Keep track of changing market conditions."],
  ["Automated decisions", "Systematically evaluate trading opportunities."],
  ["Position management", "Manage positions from entry through exit."],
  ["Risk controls", "Apply configured trading and position limits."],
  ["Paper trading", "Test the system using simulated capital."],
];

export function Intelligence() {
  return (
    <>
      <section className="section split-feature">
        <div>
          <p className="eyebrow">04 / AI ENGINE</p>
          <h2>
            AI that keeps
            <br />
            <i>watching.</i>
          </h2>
          <p>
            Direkt uses an AI-driven decision engine to continuously evaluate
            market conditions instead of relying only on a one-time analysis.
          </p>
          <div className="analysis-list">
            <span>Current market conditions</span>
            <span>Price movement & volatility</span>
            <span>Trading signals</span>
            <span>Configured strategy conditions</span>
          </div>
        </div>
        <div className="ai-panel">
          <div className="panel-header">
            DIREKT AI <span>● ANALYZING</span>
          </div>
          <dl>
            <div>
              <dt>Market</dt>
              <dd>Silver Futures</dd>
            </div>
            <div>
              <dt>Market condition</dt>
              <dd>Detected</dd>
            </div>
            <div>
              <dt>Risk check</dt>
              <dd className="pass">Passed</dd>
            </div>
            <div>
              <dt>Decision</dt>
              <dd>WAIT</dd>
            </div>
          </dl>
          <p>Structured decision, not market commentary.</p>
        </div>
      </section>
      <section className="section monitoring">
        <div className="monitoring-flow">
          <span>LIVE MARKET DATA</span>
          <b>↓</b>
          <span>DIREKT AI</span>
          <b>↓</b>
          <span>TRADING DECISION</span>
          <b>↓</b>
          <span>POSITION MONITORING</span>
        </div>
        <div>
          <p className="eyebrow">05 / REAL-TIME MONITORING</p>
          <h2>
            Always watching
            <br />
            the <i>market.</i>
          </h2>
          <p>
            Direkt is designed to work with real-time market data so the trading
            engine can continuously evaluate changing market conditions.
          </p>
        </div>
      </section>
    </>
  );
}

export function ControlAndPaper() {
  return (
    <>
      <section className="section control">
        <SectionHeading
          eyebrow="06 / RISK & CONTROL"
          title={
            <>
              Automation with <i>controls.</i>
            </>
          }
        >
          The user should always have visibility into the trading system.
        </SectionHeading>
        <div className="control-grid">
          <div className="control-list">
            {[
              "Position limits",
              "Risk parameters",
              "Capital checks",
              "Stop-loss settings",
              "Trading limits",
            ].map((item, i) => (
              <p key={item}>
                <span>0{i + 1}</span>
                {item}
                <b>Configured</b>
              </p>
            ))}
          </div>
          <div className="control-actions">
            <span>EXECUTION CONTROLS</span>
            <button>
              Pause trading <b>Ⅱ</b>
            </button>
            <button className="stop">
              Stop trading <b>■</b>
            </button>
            <small>Actions shown for illustration only.</small>
          </div>
        </div>
      </section>
      <section className="section paper" id="paper-trading">
        <div>
          <p className="eyebrow">07 / PAPER TRADING</p>
          <h2>
            Start with
            <br />
            <i>simulated trading.</i>
          </h2>
          <p>
            Experience the platform and test trading strategies using simulated
            capital rather than real money.
          </p>
          <a
            href="?plan=Direkt%20Paper&paper=1#enrol"
            className="text-link"
            onClick={(event) => {
              event.preventDefault();
              openEnrolment({ plan: "Direkt Paper", paper: true });
            }}
          >
            Start paper trading <span>↗</span>
          </a>
        </div>
        <div className="paper-list">
          <span>Monitor live market data</span>
          <span>Generate AI trading decisions</span>
          <span>Simulate entries and exits</span>
          <span>Review trade history</span>
          <p>
            Paper-trading results are simulated and may differ materially from
            results achieved in live markets because of execution, liquidity,
            slippage, fees and latency.
          </p>
        </div>
      </section>
    </>
  );
}

export function ProductAndFeatures() {
  return (
    <>
      <section className="section dashboard-section" id="dashboard">
        <SectionHeading
          eyebrow="08 / PRODUCT VIEW"
          title={
            <>
              Everything in <i>one view.</i>
            </>
          }
        >
          An illustrative product interface showing the information users need
          to review the trading workflow.
        </SectionHeading>
        <DashboardVisual />
        <p className="illustrative">
          Illustrative interface. Product capabilities and availability may
          vary.
        </p>
      </section>
      <section className="section markets">
        <div>
          <p className="eyebrow">09 / SUPPORTED MARKETS</p>
          <h2>
            Built for
            <br />
            <i>futures trading.</i>
          </h2>
        </div>
        <div>
          <p>
            Direkt’s initial focus is futures trading, with the product
            architecture designed to support additional instruments and markets
            over time.
          </p>
          <div className="market-focus">
            <span>INITIAL FOCUS</span>
            <strong>
              Silver
              <br />
              Futures
            </strong>
            <small>
              Only verified integrations are made available to users.
            </small>
          </div>
        </div>
      </section>
      <section className="section features" id="features">
        <SectionHeading
          eyebrow="10 / WHY DIREKT"
          title={
            <>
              Built around the entire
              <br />
              <i>trading workflow.</i>
            </>
          }
        />
        <div className="feature-grid">
          {featureCards.map(([title, text], i) => (
            <article key={title}>
              <span>0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
