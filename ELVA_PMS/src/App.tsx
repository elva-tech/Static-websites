import { useState } from "react";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import FAQ from "./components/sections/FAQ";
import Features from "./components/sections/Features";
import Hero from "./components/sections/Hero";
import HowItWorks from "./components/sections/HowItWorks";
import Pricing from "./components/sections/Pricing";
import PricingAI from "./components/sections/PricingAI";
import ProductGallery from "./components/sections/ProductGallery";
import Solutions from "./components/sections/Solutions";
import Transformation from "./components/sections/Transformation";
import WhyPMS from "./components/sections/WhyPMS";
import Workflow from "./components/sections/Workflow";

export type PmsPlan = "Starter" | "Business" | "Enterprise";

export default function App() {
  const [plan, setPlan] = useState<PmsPlan | null>(null);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Transformation />
        <Workflow />
        <PricingAI />
        <ProductGallery />
        <HowItWorks />
        <Solutions />
        <WhyPMS />
        <Pricing onSelectPlan={setPlan} />
        <FAQ />
        <About />
        <Contact plan={plan} />
      </main>
      <Footer />
    </>
  );
}
