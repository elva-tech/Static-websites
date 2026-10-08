import { Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { ScrollToTop } from "./components/layout/ScrollToTop";
import {
  About,
  Contact,
  Features,
  HowItWorksPage,
  ModulesPage,
  Roles,
  UseCases,
} from "./pages/Pages";
import { Home } from "./pages/Home";

export default function App() {
  const { pathname } = useLocation();

  return (
    <>
      <ScrollToTop />
      <Header />
      <main key={pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/modules" element={<ModulesPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
