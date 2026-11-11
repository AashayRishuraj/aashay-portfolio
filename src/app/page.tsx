import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  Database,
  Download,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";
import { skillGroups } from "@/data/skills";
import { experience } from "@/data/experience";
import { GithubShowcase } from "@/components/github-showcase";

const focusAreas = [
  { icon: BarChart3, title: "Analytics", detail: "Exploring data, measuring performance and communicating useful insights." },
  { icon: BrainCircuit, title: "Machine learning", detail: "Building and evaluating practical predictive models." },
  { icon: Database, title: "Data foundations", detail: "Working with Python, SQL and structured data workflows." },
];

export default function Home() {
  return (
    <div className="home-page">
      <section className="container hero hero-v3">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> DATA · ANALYTICS · INTELLIGENCE</div>
          <p className="hero-kicker">Hello, I’m Aashay Rishuraj</p>
          <h1>Turning data into <em>decisions.</em><br />Building intelligence into products.</h1>
          <p className="lead">{profile.summary}</p>
          <div className="actions hero-actions">
            <a className="button primary" href="/resume/Aashay-Rishuraj-Resume.pdf" download>Download resume <Download size={16} /></a>
            <Link className="button button-quiet" href="/projects">Explore my work <ArrowUpRight size={16} /></Link>
          </div>
          <div className="social-row">
            <a className="text-link" href={profile.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
            <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
            <a className="text-link" href={`mailto:${profile.email}`}><Mail size={16} /> Email</a>
          </div>
          <div className="hero-note"><span className="note-line" /> Open to data analytics, data science and ML opportunities</div>
        </div>

        <div className="hero-visual" aria-label="Decorative data visualization showing a rising trend line and analytics cards">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <img className="profile-portrait" src="/images/aashay-rishuraj.png" alt="Aashay Rishuraj, data analytics and data science professional" /><div className="visual-topline"><span>INSIGHT / 001</span><span className="live-mark">● SYSTEMS THINKING</span></div>
          <div className="visual-main">
            <div className="visual-label">From raw data</div>
            <div className="visual-big">01<span> / 03</span></div>
            <div className="visual-caption">Understand&nbsp; → &nbsp;Explore&nbsp; → &nbsp;Explain</div>
            <svg className="trend-chart" viewBox="0 0 440 176" role="img" aria-label="Illustrative upward trend line">
              <defs><linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#69e0d0" stopOpacity=".28"/><stop offset="100%" stopColor="#69e0d0" stopOpacity="0"/></linearGradient></defs>
              <path d="M0 145 C38 136 46 105 84 116 S132 135 164 93 S216 102 245 74 S295 88 324 48 S376 64 440 12 L440 176 L0 176Z" fill="url(#chartFill)" />
              <path d="M0 145 C38 136 46 105 84 116 S132 135 164 93 S216 102 245 74 S295 88 324 48 S376 64 440 12" fill="none" stroke="#69e0d0" strokeWidth="3" strokeLinecap="round" />
              <circle cx="440" cy="12" r="5" fill="#69e0d0" />
              <path d="M0 44H440M0 88H440M0 132H440" stroke="#d8f5f0" strokeOpacity=".09" strokeDasharray="3 7" />
            </svg>
          </div>
          <div className="visual-bottom"><div><span className="mini-label">APPROACH</span><strong>Curiosity first.</strong></div><div className="visual-symbol">↗</div></div>
          <div className="floating-chip chip-top"><span className="chip-icon"><BarChart3 size={15} /></span><span>DATA → INSIGHT</span></div>
          <div className="floating-chip chip-bottom"><span className="chip-pulse" /> MODEL / EVALUATE / REFINE</div>
        </div>
      </section>

      <section className="container intro-strip" aria-label="Portfolio overview">
        <div><strong>03</strong><span>Featured projects</span></div>
        <div><strong>02</strong><span>Internship experiences</span></div>
        <div><strong>06</strong><span>Listed certifications</span></div>
        <div className="strip-message">A practical blend of analytical thinking and product perspective.</div>
      </section>

      <section className="container section-block">
        <div className="section-head"><div><div className="eyebrow">WHAT I WORK ON</div><h2>Turning questions into clarity.</h2><p>Three connected disciplines that help move a problem from uncertainty to a useful outcome.</p></div></div>
        <div className="focus-grid">{focusAreas.map(({ icon: Icon, title, detail }, index) => <article className="focus-card" key={title}><div className="focus-card-top"><span className="focus-icon"><Icon size={20} /></span><span className="focus-number">0{index + 1}</span></div><h3>{title}</h3><p>{detail}</p></article>)}</div>
      </section>

      <section className="container section-block">
        <div className="section-head"><div><div className="eyebrow">SELECTED WORK</div><h2>Projects with a purpose.</h2><p>Applied projects across forecasting, operational analytics and natural language processing.</p></div><Link className="text-link section-link" href="/projects">All projects <ArrowUpRight size={16} /></Link></div>
        <div className="grid project-grid">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
      </section>

      <section className="container section-block toolkit-section">
        <div className="section-head"><div><div className="eyebrow">THE TOOLKIT</div><h2>Tools are only as good as the questions.</h2><p>A growing toolkit for working across the data lifecycle—from preparation to communication.</p></div><Link className="text-link section-link" href="/skills">Explore skills <ArrowUpRight size={16} /></Link></div>
        <div className="skill-grid">{skillGroups.slice(0, 4).map((group) => <div className="skill-group" key={group.title}><div className="skill-heading"><h3>{group.title}</h3><span>{String(group.items.length).padStart(2, "0")} TOOLS</span></div><div className="tag-list">{group.items.map((item) => <span className="tag" key={item}>{item}</span>)}</div></div>)}</div>
      </section>

      <GithubShowcase />

      <section className="container section-block">
        <div className="section-head"><div><div className="eyebrow">EXPERIENCE</div><h2>Learning by building.</h2><p>Experience across product thinking, data analysis and applied machine learning.</p></div><Link className="text-link section-link" href="/experience">Full experience <ArrowUpRight size={16} /></Link></div>
        <div className="timeline">{experience.map((item) => <article className="timeline-card" key={item.company}><div><div className="eyebrow">{item.period}</div><h3>{item.company}</h3><p className="muted">{item.role} · {item.location}</p></div><ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul></article>)}</div>
      </section>

      <section className="container closing-section">
        <div className="closing-panel"><div className="closing-glow" /><div className="eyebrow"><Sparkles size={13} /> LET’S BUILD SOMETHING USEFUL</div><h2>Have a data problem<br /><em>worth solving?</em></h2><p>I’m open to opportunities where I can turn data into clear insights, thoughtful analysis and practical solutions.</p><div className="actions"><Link className="button primary" href="/contact">Start a conversation <ArrowRight size={16} /></Link><a className="button button-quiet" href={`mailto:${profile.email}`}>{profile.email}</a></div><Link className="closing-scroll" href="/about">A little more about me <ArrowDownRight size={15} /></Link></div>
      </section>
    </div>
  );
}
