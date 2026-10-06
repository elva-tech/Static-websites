import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
export function LegalPage({
  title,
  sections,
}: {
  title: string;
  sections: string[];
}) {
  return (
    <>
      <Navbar />
      <main className="legal-page">
        <div className="container">
          <p className="eyebrow">ELVA INVESTA</p>
          <h1>{title}</h1>
          <p className="legal-alert">
            Legal review is required before production publication.
          </p>
          {sections.map((section, i) => {
            const [heading, copy] = section.split("|");
            return (
              <section key={section}>
                <h2>
                  {title === "Financial Disclaimer"
                    ? "Technology platform notice"
                    : heading}
                </h2>
                <p>{title === "Financial Disclaimer" ? section : copy}</p>
                {i === 0 && title !== "Financial Disclaimer" && (
                  <p>
                    ELVA Investa is business management and record-management
                    software for organizations that manage investment and
                    lending operations.
                  </p>
                )}
              </section>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
