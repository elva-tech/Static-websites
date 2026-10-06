import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import {
  Audience,
  DifferenceAndPerformance,
  Enrolment,
  Faq,
  Pricing,
  TrustAndRisk,
} from "./components/sections/Conversion";
import {
  ControlAndPaper,
  Intelligence,
  ProductAndFeatures,
} from "./components/sections/FeatureSections";
import { Hero } from "./components/sections/Hero";
import { MeetDirekt, Problem } from "./components/sections/Intro";
import { Workflow } from "./components/sections/Workflow";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MeetDirekt />
        <Problem />
        <Workflow />
        <Intelligence />
        <ControlAndPaper />
        <ProductAndFeatures />
        <Audience />
        <DifferenceAndPerformance />
        <Pricing />
        <Enrolment />
        <Faq />
        <TrustAndRisk />
      </main>
      <Footer />
    </>
  );
}
