import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { seo } from "@/lib/seo";
import { site } from "@/content";
import { FormPage } from "@/components/form-page";

export const Route = createFileRoute("/contact")({
  head: () => seo("Contact ELVA | Talk to ELVA ERP", "Tell us about your business, your current systems and what you want to improve. Talk to the ELVA ERP team.", "/contact"),
  component: Contact,
});

function Contact() {
  return (
    <FormPage
      type="contact"
      eyebrow="Talk to ELVA"
      title="Talk to ELVA"
      text="Tell us about your business, your current systems and what you want to improve. Our team will help you understand whether ELVA ERP is the right fit."
      points={["We respond to every business enquiry", "Prefer a walkthrough? Book a demo instead", "Need pricing? Request a proposal"]}
      aside={
        <div className="mt-6 space-y-2 text-sm text-foreground">
          {site.contactEmail && <a href={`mailto:${site.contactEmail}`} className="flex items-center gap-2"><Mail className="size-4" />{site.contactEmail}</a>}
          {site.contactPhone && <a href={`tel:${site.contactPhone}`} className="flex items-center gap-2"><Phone className="size-4" />{site.contactPhone}</a>}
          <p className="flex gap-4 font-semibold">
            <Link to="/book-demo" className="text-brand underline">Book a Demo</Link>
            <Link to="/request-proposal" className="text-brand underline">Request a Proposal</Link>
          </p>
        </div>
      }
    />
  );
}
