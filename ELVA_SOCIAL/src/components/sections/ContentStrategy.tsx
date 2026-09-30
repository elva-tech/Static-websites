import { strategyBars } from '../../data/strategyBars'

export function ContentStrategy() {
  return (
    <section className="strategy">
      <div>
        <p className="section-kicker">CONTENT STRATEGY</p>
        <h2>Useful enough to earn attention.</h2>
        <p>ELVA’s strategy keeps your page valuable, not promotional. Product content stays event-driven.</p>
      </div>
      <div className="strategy-bars">
        {strategyBars.map(([x, n]) => (
          <div key={String(x)}>
            <span>{x}</span>
            <i>
              <b style={{ width: `${Number(n) * 4}%` }} />
            </i>
            <em>{n}%</em>
          </div>
        ))}
      </div>
    </section>
  )
}
