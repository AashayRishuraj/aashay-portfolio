import Link from "next/link";
import { ArrowUpRight, CloudSun, Boxes, FileSearch } from "lucide-react";
import type { Project } from "@/data/projects";

const artwork: Record<string, { icon: typeof CloudSun; label: string; className: string }> = {
  "weather-forecasting": { icon: CloudSun, label: "FORECASTING / ML", className: "weather-art" },
  "inventory-dashboard": { icon: Boxes, label: "OPERATIONS / ANALYTICS", className: "inventory-art" },
  "ai-resume-analyzer": { icon: FileSearch, label: "NLP / TEXT ANALYSIS", className: "resume-art" },
};

export function ProjectCard({ project }: { project: Project }) {
  const visual = artwork[project.slug] ?? artwork["weather-forecasting"];
  const Icon = visual.icon;
  return (
    <article className={`project-card ${visual.className}`}>
      <div className="project-art">
        <div className="art-grid" />
        <div className="art-orb" />
        <div className="art-icon"><Icon size={34} strokeWidth={1.35} /></div>
        <span className="art-index">{project.slug === "weather-forecasting" ? "01" : project.slug === "inventory-dashboard" ? "02" : "03"}</span>
        <span className="art-label">{visual.label}</span>
      </div>
      <div className="project-body">
        <div className="eyebrow">{project.category.slice(0, 2).join(" / ")}</div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="tag-list">{project.stack.slice(0, 4).map((technology) => <span className="tag" key={technology}>{technology}</span>)}</div>
        <Link className="text-link" href={`/projects/${project.slug}`}>Explore case study <ArrowUpRight size={16} /></Link>
      </div>
    </article>
  );
}
