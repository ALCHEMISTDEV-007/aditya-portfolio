import Reveal from "@/components/Reveal";
import { githubProfile } from "@/data/projects";

export default function Contact() {
  return <section className="contact section-pad" id="contact"><Reveal><div className="section-kicker"><span>06 / YOUR TURN</span><span>CONTACT</span></div></Reveal><div className="contact-layout"><Reveal><p className="eyebrow"><span className="eyebrow-line"/> HAVE A GOOD QUESTION?</p><h2>Let’s make<br />something <span>matter.</span></h2></Reveal><Reveal className="contact-aside" delay={100}><p>For interesting projects, thoughtful collaboration, or a conversation that starts with “what if…”.</p><a href="mailto:adithyagireesh007@gmail.com?subject=Hello%20Adithya" className="contact-email">Send a message <span>↗</span></a><a className="contact-github" href={githubProfile} target="_blank" rel="noreferrer">Or find me on GitHub ↗</a><span className="contact-note">I’M ALWAYS OPEN TO A GOOD CONVERSATION.</span></Reveal></div><div className="contact-bottom"><span>ADITHYA GIREESH / COMPUTER SCIENCE ENGINEER</span><a href={githubProfile} target="_blank" rel="noreferrer">GITHUB.COM/ALCHEMISTDEV-007 ↗</a></div></section>;
}
