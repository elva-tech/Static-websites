import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/sections/Hero";
import {
  AppAndAdmin,
  InvestBorrow,
  PlatformIntro,
  Tenants,
} from "../components/sections/PlatformSections";
import {
  DemoForm,
  FAQ,
  HowItWorks,
  Operations,
  Security,
} from "../components/sections/OperationsSections";

export function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <PlatformIntro />
        <InvestBorrow />
        <AppAndAdmin />
        {/* <Tenants /> */}
        <Operations />
        <Security />
        <HowItWorks />
        <FAQ />
        <DemoForm />
      </main>
      <Footer />
    </>
  );
}
