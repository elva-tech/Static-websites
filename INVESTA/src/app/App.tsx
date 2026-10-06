import { HomePage } from "../pages/HomePage";
import { LegalPage } from "../pages/LegalPage";

const legalPages = {
  "/privacy": {
    title: "Privacy Policy",
    sections: [
      "Information we collect|ELVA Investa may process account and organization information, mobile number and OTP-related account information, customer records, documents, and device information where applicable.",
      "How information is used|Information is used to provide, support, secure and improve the platform, maintain authorized access, and manage organization operations.",
      "Data access and retention|Access is limited according to identity, role, organization membership and authorized business operation. Information is retained in accordance with applicable requirements and organization agreements.",
      "Third-party services and security|Where configured, third-party communications or integration services may process information under their own terms. ELVA Investa is designed around appropriate security controls and tenant-level access enforcement.",
      "Your rights and contact|Organizations and users may contact ELVA Technologies about their information and account access.",
    ],
  },
  "/terms": {
    title: "Terms of Service",
    sections: [
      "Platform use and accounts|Organizations and authorized users must use ELVA Investa only for lawful business operations and maintain accurate account information.",
      "Acceptable use|Users must not misuse the platform, attempt unauthorized access, interfere with operations, or use it in breach of applicable law or agreements.",
      "Financial record responsibilities|Organizations remain responsible for their financial products, records, customer relationships, calculations and applicable legal obligations.",
      "Third-party integrations|Any configured third-party service is subject to the availability and terms of that service.",
      "Availability, liability and termination|Platform availability, intellectual property, liability limitations, termination and governing law are subject to the applicable ELVA Technologies agreement.",
    ],
  },
  "/financial-disclaimer": {
    title: "Financial Disclaimer",
    sections: [
      "ELVA Investa is a technology platform designed to help organizations manage investment and lending-related records and operations. The platform does not by itself constitute a bank, investment adviser, lender, payment processor, securities broker or other regulated financial service. Any financial product, investment, lending arrangement, interest rate, repayment obligation or transaction is subject to the terms and applicable laws governing the relevant organization and customer relationship.",
    ],
  },
};

export function App() {
  const page = legalPages[window.location.pathname as keyof typeof legalPages];
  return page ? <LegalPage {...page} /> : <HomePage />;
}
