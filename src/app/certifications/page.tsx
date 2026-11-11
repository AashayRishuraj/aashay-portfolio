import { certifications } from "@/data/certifications";

export const metadata = { title: "Certifications" };

export default function Certifications() {
  return (
    <>
      <header className="page-hero">
        <div className="eyebrow">CONTINUOUS LEARNING</div>
        <h1 className="page-title">Certifications & learning.</h1>
        <p>Certificates and programme documents supplied for this portfolio. Open or download each original document.</p>
      </header>
      <section className="container" style={{ paddingTop: 20, paddingBottom: 72 }}>
        <div className="grid">
          {certifications.map((certificate, index) => (
            <article className="cert-card" key={certificate.title} style={{ padding: 22 }}>
              <div className="eyebrow">DOCUMENT {String(index + 1).padStart(2, "0")}</div>
              <h3>{certificate.title}</h3>
              <p className="muted">{certificate.issuer}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 16 }}>
                <a className="button primary" href={certificate.file} target="_blank" rel="noreferrer">
                  View document ↗
                </a>
                <a className="button" href={certificate.file} download>
                  Download ↓
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
