import { SectionHeading } from "../ui/SectionHeading";

export function MeetDirekt() {
  return (
    <section className="section meet" id="product">
      <SectionHeading
        eyebrow="01 / THE PLATFORM"
        title={
          <>
            Meet <i>Direkt.</i>
          </>
        }
      >
        <p>
          Direkt is an AI-powered trading platform designed to make systematic
          trading more intelligent, automated and accessible.
        </p>
      </SectionHeading>
      <div className="quote-panel">
        <p>
          “Direkt combines real-time market data, AI-driven analysis, trading
          logic and automation in one platform.”
        </p>
        <div>
          <span>MARKET DATA</span>
          <b>+</b>
          <span>AI DECISIONS</span>
          <b>+</b>
          <span>RISK CONTROLS</span>
        </div>
      </div>
    </section>
  );
}

export function Problem() {
  const points = [
    "Monitor price movements",
    "Analyze market conditions",
    "Identify opportunities",
    "Calculate position size",
    "Track an open position",
    "React to changing conditions",
  ];
  return (
    <section className="section problem">
      <div>
        <p className="eyebrow">02 / THE CHALLENGE</p>
        <h2>
          Markets move fast.
          <br />
          <i>Manual trading</i> can’t watch everything.
        </h2>
      </div>
      <div>
        <p>
          Trading requires constant attention. Direkt is designed to automate
          this workflow and provide a systematic approach to market monitoring
          and trading.
        </p>
        <ul>
          {points.map((point, index) => (
            <li key={point}>
              <span>0{index + 1}</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
