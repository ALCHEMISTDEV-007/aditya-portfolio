import Reveal from "@/components/Reveal";

const groups: [string, string, string[]][] = [
  ["01", "LANGUAGES", ["Python", "C", "C++", "Java", "JavaScript"]],
  ["02", "AI / DATA", ["Machine Learning", "Pandas", "NumPy", "Matplotlib", "Seaborn", "TF-IDF", "Jupyter", "RAG"]],
  ["03", "CYBERSECURITY", ["Linux", "Nmap", "Hydra", "Metasploit", "Burp Suite", "Wireshark", "Network Security", "Vulnerability Assessment"]],
  ["04", "DEVELOPMENT", ["HTML", "React", "Next.js", "FastAPI", "PostgreSQL", "Solidity", "Ethereum", "Smart Contracts", "Docker", "Git"]],
];

export default function Skills() {
  return <section className="skills section-pad" id="skills"><Reveal><div className="section-kicker"><span>04 / THE TOOLKIT</span><span>SKILLS &amp; TECHNOLOGIES</span></div></Reveal><div className="skills-intro"><Reveal><h2>Tools for<br /><span>the curious.</span></h2></Reveal><Reveal><p>The right tool depends on the question. Here are some of the languages, libraries and systems I reach for.</p></Reveal></div><div className="skill-groups">{groups.map(([number, title, items]) => <Reveal key={number} className="skill-group"><span className="skill-number">{number}</span><h3>{title}</h3><div className="skill-items">{items.map((item) => <span key={item}>{item}</span>)}</div></Reveal>)}</div></section>;
}
