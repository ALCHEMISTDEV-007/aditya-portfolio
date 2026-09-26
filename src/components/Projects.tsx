import Reveal from "@/components/Reveal";
import { githubProfile, projects } from "@/data/projects";

export default function Projects() {
  return <section className="projects section-pad" id="work">
    <Reveal><div className="section-kicker"><span>02 / SELECTED WORK</span><span>A FEW THINGS MADE WITH INTENT</span></div></Reveal>
    <Reveal className="projects-heading"><p className="eyebrow">THOUGHTS, THEN THINGS</p><h2>Selected<br /><span>work.</span></h2><span className="project-count">04<br />PROJECTS</span></Reveal>
    <a className="sentinel-feature" href="https://github.com/ALCHEMISTDEV-007/PolySteg" target="_blank" rel="noreferrer" aria-label="View PolySteg on GitHub">
      <div className="sentinel-art polysteg-art"><div className="sentinel-ring ring-a"/><div className="sentinel-ring ring-b"/><div className="sentinel-ring ring-c"/><div className="sentinel-cross">✳</div><div className="sentinel-core">P<span>·</span></div><div className="sentinel-coord">PAYLOAD / LAYERS / COVER</div><div className="sentinel-side-note">POLYMORPHIC STEGANOGRAPHY<br/>PYTHON CLI / V1.4</div><span className="poly-label poly-image">IMAGE</span><span className="poly-label poly-audio">AUDIO</span><span className="poly-label poly-pdf">PDF</span><span className="poly-label poly-video">VIDEO</span></div>
      <div className="sentinel-info"><div className="project-meta"><span>01 — FEATURED PROJECT</span><span>SECURITY / PYTHON</span></div><h3>Poly<br /><span>Steg.</span></h3><p>A multi-format steganography suite for concealing text, files and nested payloads across images, audio, PDFs and video.</p><div className="tag-row"><span>PYTHON</span><span>OOP</span><span>STEGANOGRAPHY</span><span>RED TEAM</span></div><div className="sentinel-link">VIEW POLYSTEG ON GITHUB <span>↗</span></div></div>
    </a>
    <div className="project-list">{projects.map((project) => <Reveal key={project.number} className="project-reveal"><a className="project-row" href={project.href} target="_blank" rel="noreferrer"><div className={`project-art ${project.className}`}><span className="project-art-label">{project.note}</span><span className="project-art-mark">{project.mark}</span><span className="project-art-index">{project.number} / 04</span></div><div className="project-row-info"><div className="project-meta"><span>{project.number} — {project.category}</span><span>{project.linkLabel ?? "VIEW REPOSITORY"}</span></div><h3>{project.name}<span className="project-arrow">↗</span></h3><p>{project.description}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></a></Reveal>)}</div>
    <div className="projects-outro"><span>MORE EXPERIMENTS ARE ALWAYS IN PROGRESS</span><a href="#experiments">SEE WHAT ELSE I’M EXPLORING <span>↘</span></a></div>
  </section>;
}
