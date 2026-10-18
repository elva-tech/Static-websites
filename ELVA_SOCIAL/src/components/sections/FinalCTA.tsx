import { StartForm } from './StartForm'

export function FinalCTA() {
  return (
    <section id="start" className="final">
      <p className="section-kicker">READY WHEN YOU ARE</p>
      <h2>
        Your next post shouldn't start
        <br />
        with a blank screen.
      </h2>
      <p>
        Give ELVA your business knowledge, your ideas and your events. Let AI turn them into content your audience
        wants to see.
      </p>
      <StartForm />
      <small>You run the business. ELVA keeps the conversation going.</small>
    </section>
  )
}
