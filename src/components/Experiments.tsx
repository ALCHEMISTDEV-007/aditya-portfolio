"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

const experiments = ["Artificial intelligence", "Digital security", "Web experiences", "Systems & tooling", "Small games", "Creative technology"];

export default function Experiments() {
  const [active, setActive] = useState(0);
  return <section className="experiments section-pad" id="experiments"><Reveal><div className="section-kicker"><span>05 / THE PLAYGROUND</span><span>EXPERIMENTS</span></div></Reveal><div className="experiments-layout"><Reveal><p className="eyebrow">ROOM TO WANDER</p><h2>Not all paths<br />are <span>straight.</span></h2><p className="experiments-copy">Some of the best ideas start outside the plan. This is where I follow a thread, try something new, and see what happens.</p></Reveal><Reveal className="experiment-console" delay={120}><div className="console-head"><span>OPEN CURIOSITY.EXE</span><span>● &nbsp;RUNNING</span></div><div className="experiment-options">{experiments.map((item, i) => <button key={item} className={active === i ? "active" : ""} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => setActive(i)}><span>0{i + 1}</span><span>{item}</span><span className="experiment-indicator">↗</span></button>)}</div><div className="console-bottom"><span>CURRENTLY PULLING ON THIS THREAD</span><span className="console-current">{experiments[active].toUpperCase()}</span></div></Reveal></div></section>;
}
