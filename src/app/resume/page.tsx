import { profile } from "@/data/profile";

export const metadata = { title: "Resume" };

const resumeUrl = "/resume/Aashay-Rishuraj-Resume.pdf";

export default function Resume() {
  return (
    <>
      <header className="page-hero">
        <div className="eyebrow">RESUME</div>
        <h1 className="page-title">A concise view of my experience.</h1>
        <p>Explore my background, education and experience, or open the original PDF in a separate tab.</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 18 }}>
          <a className="button primary" href={resumeUrl} target="_blank" rel="noreferrer">Open resume PDF ↗</a>
          <a className="button" href={resumeUrl} download="Aashay-Rishuraj-Resume.pdf">Download resume ↓</a>
        </div>
      </header>
      <section className="container" style={{ paddingTop: 20, paddingBottom: 72 }}>
        <div className="panel">
          <h3>Professional summary</h3>
          <p>{profile.summary}</p>
          <h3>Education</h3>
          <p>{profile.education} · {profile.university} · {profile.educationYears}</p>
        </div>
      </section>
    </>
  );
}
