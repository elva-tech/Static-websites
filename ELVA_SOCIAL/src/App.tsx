import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Problem } from './components/sections/Problem'
import { Solution } from './components/sections/Solution'
import { HowItWorks } from './components/sections/HowItWorks'
import { EventToContent } from './components/sections/EventToContent'
import { ContentEngine } from './components/sections/ContentEngine'
import { PlatformAdaptation } from './components/sections/PlatformAdaptation'
import { HumanApproval } from './components/sections/HumanApproval'
import { ContentCalendar } from './components/sections/ContentCalendar'
import { ContentStrategy } from './components/sections/ContentStrategy'
import { ContentExamples } from './components/sections/ContentExamples'
import { UseCases } from './components/sections/UseCases'
import { InspirationEngine } from './components/sections/InspirationEngine'
import { Analytics } from './components/sections/Analytics'
import { Trust } from './components/sections/Trust'
import { FAQ } from './components/sections/FAQ'
import { FinalCTA } from './components/sections/FinalCTA'

export function App() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <EventToContent />
        <ContentEngine />
        <PlatformAdaptation />
        <HumanApproval />
        <ContentCalendar />
        <ContentStrategy />
        <ContentExamples />
        <UseCases />
        <InspirationEngine />
        <Analytics />
        <Trust />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
