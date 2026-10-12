import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { FORMSUBMIT_ENDPOINT } from "../config/formsubmit";

function LegalShell({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <>
      <section className="page-intro legal-intro">
        <div>
          <p className="eyebrow">ELVA CMS</p>
          <h1>{title}</h1>
        </div>
        <p>
          <Link className="legal-back" to="/">
            ← Back to ELVA CMS
          </Link>
        </p>
      </section>
      <article className="legal-body">{children}</article>
    </>
  );
}

export function PrivacyPolicy() {
  return (
    <LegalShell title="Privacy Policy">
      <p className="legal-updated">Last updated: 9 October 2026</p>

      <section>
        <h2>Overview</h2>
        <p>
          This Privacy Policy describes how ELVA Tech (&quot;ELVA&quot;,
          &quot;we&quot;, &quot;us&quot;) handles personal information when you
          use the ELVA CMS marketing website at cms.elvatech.in (the
          &quot;Site&quot;) and when you submit a demo or contact request
          through the form on the Site.
        </p>
        <p>
          ELVA CMS is a construction management product. This policy applies to
          the public marketing Site only, not to a separate logged-in ELVA CMS
          application you may use under agreement with ELVA.
        </p>
      </section>

      <section>
        <h2>Information we collect</h2>
        <p>
          When you use the &quot;Request a Demo&quot; / contact form, we collect
          the information you enter:
        </p>
        <ul>
          <li>Name</li>
          <li>Company name</li>
          <li>Phone number</li>
          <li>Email address</li>
          <li>Approximate number of projects (from the dropdown)</li>
          <li>City</li>
          <li>Optional message</li>
        </ul>
        <p>
          The form also sends the URL of the page you submitted from. A hidden
          honeypot field is included for spam protection; it should remain empty
          for legitimate submissions.
        </p>
        <p>
          When you submit the form, our Site stores a timestamp in your
          browser&apos;s <strong>local storage</strong> (key:{" "}
          <code>elva-cms-demo-sent-at</code>) for 30 seconds to limit repeated
          submissions. We do not use analytics or advertising cookies on this
          Site based on the current implementation.
        </p>
        <p>
          Like most websites, our hosting provider may process standard server
          logs (such as IP address, user agent, and request time) for security
          and operations. Details depend on our host (for example, Vercel).
        </p>
      </section>

      <section>
        <h2>How we use information</h2>
        <p>We use demo and contact submissions to:</p>
        <ul>
          <li>Respond to your enquiry and schedule or discuss a product demo</li>
          <li>Understand your construction business context (projects, city)</li>
          <li>Follow up by email or phone using the contact details you provide</li>
        </ul>
        <p>
          We do not sell your personal information through this Site. We do not
          use your form data for unrelated marketing without a lawful basis and,
          where required, your consent.
        </p>
      </section>

      <section>
        <h2>How submissions are processed</h2>
        <p>
          Form data is transmitted over HTTPS to{" "}
          <a
            href="https://formsubmit.co"
            target="_blank"
            rel="noopener noreferrer"
          >
            FormSubmit
          </a>
          , a third-party form delivery service, which forwards the submission
          to ELVA at <a href={`mailto:${FORMSUBMIT_ENDPOINT}`}>{FORMSUBMIT_ENDPOINT}</a>.
          FormSubmit processes data according to its own terms and privacy
          practices. By submitting the form, your information leaves your
          browser and is handled by FormSubmit and our email provider as part of
          delivery.
        </p>
      </section>

      <section>
        <h2>Retention</h2>
        <p>
          We retain enquiry emails for as long as needed to respond, manage our
          relationship with you, and maintain reasonable business records.
          Retention periods may vary by context. The 30-second local storage
          cooldown on your device is cleared automatically when you clear site
          data or when the key is overwritten by a later submission.
        </p>
      </section>

      <section>
        <h2>Security</h2>
        <p>
          We use HTTPS for form submission and rely on reputable providers for
          hosting and email delivery. No method of transmission or storage is
          completely secure; please avoid sending sensitive credentials or
          unrelated personal data through the marketing form.
        </p>
      </section>

      <section>
        <h2>Your choices</h2>
        <p>
          You may choose not to submit the form. If you have submitted
          information and want to update or delete it, contact us at{" "}
          <a href={`mailto:${FORMSUBMIT_ENDPOINT}`}>{FORMSUBMIT_ENDPOINT}</a>.
          Depending on your location, you may have additional privacy rights;
          contact us to discuss applicable requests.
        </p>
      </section>

      <section>
        <h2>Children</h2>
        <p>
          The Site is intended for business users. We do not knowingly collect
          personal information from children.
        </p>
      </section>

      <section>
        <h2>Changes</h2>
        <p>
          We may update this Privacy Policy when our Site or data practices
          change. The &quot;Last updated&quot; date at the top will reflect the
          latest version.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Questions about this policy or your information:{" "}
          <a href={`mailto:${FORMSUBMIT_ENDPOINT}`}>{FORMSUBMIT_ENDPOINT}</a>.
        </p>
        <p className="legal-note">
          Registered company address and data protection contact: not published
          on this Site — please confirm with ELVA Tech if you need formal legal
          entity details for contracts or regulatory requests.
        </p>
      </section>
    </LegalShell>
  );
}

export function TermsAndConditions() {
  return (
    <LegalShell title="Terms & Conditions">
      <p className="legal-updated">Last updated: 9 October 2026</p>

      <section>
        <h2>Agreement</h2>
        <p>
          By accessing or using the ELVA CMS marketing website at cms.elvatech.in
          (the &quot;Site&quot;), you agree to these Terms &amp; Conditions. If
          you do not agree, please do not use the Site.
        </p>
        <p>
          These terms govern use of the marketing Site only. Use of the ELVA CMS
          software product itself is subject to separate agreement between you
          and ELVA Tech (&quot;ELVA&quot;).
        </p>
      </section>

      <section>
        <h2>About the Site and product information</h2>
        <p>
          The Site describes ELVA CMS, a construction management system for
          project operations. Product screenshots, metrics, and examples on the
          Site are illustrative unless explicitly stated otherwise. Features,
          availability, and pricing may change. Nothing on the Site constitutes
          a binding offer or guaranteed service level.
        </p>
      </section>

      <section>
        <h2>Demo and contact requests</h2>
        <p>
          When you request a demo or contact ELVA through the Site, you agree to
          provide accurate information. We may use that information to respond
          and discuss ELVA CMS. Submitting a demo request does not create a
          customer relationship or license to use the product until separate
          terms are agreed in writing.
        </p>
      </section>

      <section>
        <h2>Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the Site in any unlawful manner or to transmit malware or spam</li>
          <li>
            Attempt to gain unauthorized access to our systems or interfere with
            Site operation
          </li>
          <li>
            Scrape, copy, or automate access in a way that burdens the Site
            without permission
          </li>
          <li>Misrepresent your identity or affiliation when contacting ELVA</li>
        </ul>
      </section>

      <section>
        <h2>Intellectual property</h2>
        <p>
          The Site content, ELVA branding, logos, text, layout, and design are
          owned by ELVA or its licensors and protected by applicable intellectual
          property laws. You may view and share links to the Site for personal or
          internal business reference. You may not copy, modify, or republish
          substantial portions of the Site for commercial use without ELVA&apos;s
          prior written permission.
        </p>
      </section>

      <section>
        <h2>Third-party links and services</h2>
        <p>
          The Site may reference third-party services (for example, form
          delivery or fonts). Those services are governed by their own terms.
          ELVA is not responsible for third-party websites or services linked
          from the Site.
        </p>
      </section>

      <section>
        <h2>Disclaimers</h2>
        <p>
          THE SITE AND ITS CONTENT ARE PROVIDED &quot;AS IS&quot; AND &quot;AS
          AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR
          IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR
          A PARTICULAR PURPOSE, OR NON-INFRINGEMENT, TO THE EXTENT PERMITTED BY
          LAW.
        </p>
        <p>
          Construction and financial decisions should not be made solely on the
          basis of marketing materials. Operational use of ELVA CMS should follow
          your own professional judgment and any product agreement with ELVA.
        </p>
      </section>

      <section>
        <h2>Limitation of liability</h2>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ELVA AND ITS
          AFFILIATES, OFFICERS, AND EMPLOYEES WILL NOT BE LIABLE FOR ANY
          INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR
          ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING FROM YOUR USE OF OR
          INABILITY TO USE THE SITE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH
          DAMAGES.
        </p>
        <p>
          Where liability cannot be excluded, ELVA&apos;s total liability
          arising from your use of the Site is limited to the amount you paid to
          ELVA for use of the Site in the twelve months before the claim (which
          is zero for free access to this marketing Site).
        </p>
      </section>

      <section>
        <h2>Changes</h2>
        <p>
          We may update these Terms from time to time. Continued use of the Site
          after changes are posted constitutes acceptance of the updated Terms.
          Check the &quot;Last updated&quot; date above.
        </p>
      </section>

      <section>
        <h2>Governing law</h2>
        <p>
          These Terms are intended to be interpreted under applicable law in the
          jurisdiction where ELVA Tech primarily operates. Specific governing
          law and dispute venue for your organization should be confirmed with
          ELVA if you require contractual certainty.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Questions about these Terms:{" "}
          <a href={`mailto:${FORMSUBMIT_ENDPOINT}`}>{FORMSUBMIT_ENDPOINT}</a>.
        </p>
        <p className="legal-note">
          Formal registered business name and address for legal notices are not
          listed on this Site; contact ELVA Tech at the email above for
          confirmed details.
        </p>
      </section>
    </LegalShell>
  );
}
