import Reveal from "@/components/Reveal";

export default function About() {
  return <section className="about section-pad" id="about">
    <Reveal><div className="section-kicker"><span>01 / A LITTLE CONTEXT</span><span>ABOUT</span></div></Reveal>
    <div className="about-layout">
      <Reveal className="about-title"><p className="eyebrow">THE PERSON BEHIND THE PROJECTS</p><h2>Curious by<br />default<span>.</span></h2></Reveal>
      <Reveal className="about-copy" delay={100}><p className="about-lead">I’m Aditya, a Computer Science Engineer who enjoys building things and understanding how they work.</p><p>My interests move between AI, cybersecurity, software engineering and systems. I like crossing those boundaries, following a question a little further, and turning the useful answers into working projects.</p><a href="#contact" className="text-link"><span>A little more about me</span><span className="link-arrow">↗</span></a></Reveal>
    </div>
    <div className="about-foot"><span>ALWAYS LEARNING, ALWAYS BUILDING</span><span className="about-mark">A<span>/</span></span><span>WORKING ACROSS DISCIPLINES</span></div>
  </section>;
}
