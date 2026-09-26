"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function Hero() {
  const stage = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    const node = stage.current;
    if (!node || reduced || !window.matchMedia("(pointer: fine)").matches) return;
    let frame = 0;
    let targetX = 0, targetY = 0, x = 0, y = 0;
    const move = (event: MouseEvent) => {
      const bounds = node.getBoundingClientRect();
      targetX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      targetY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    };
    const animate = () => {
      x += (targetX - x) * 0.045;
      y += (targetY - y) * 0.045;
      node.style.setProperty("--look-x", `${x}`);
      node.style.setProperty("--look-y", `${y}`);
      frame = requestAnimationFrame(animate);
    };
    node.addEventListener("mousemove", move);
    frame = requestAnimationFrame(animate);
    return () => { node.removeEventListener("mousemove", move); cancelAnimationFrame(frame); };
  }, [reduced]);
  return (
    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-index"><span>PORTFOLIO / 2026</span><span>INDEPENDENT THINKING, ENGINEERED.</span></div>
      <div className="hero-content">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> COMPUTER SCIENCE ENGINEER</p>
          <h1>Hi, I’m<br /><span>Aditya.</span></h1>
          <p className="hero-intro">Building at the intersection of<br />AI, cybersecurity, software &amp; systems.</p>
          <a className="text-link" href="#work"><span>Explore selected work</span><span className="link-arrow">↗</span></a>
        </div>
        <div className="character-stage" ref={stage} aria-label="Illustrated character portrait that responds subtly to pointer movement">
          <div className="stage-halo" />
          <div className="stage-orbit orbit-one" />
          <div className="stage-orbit orbit-two" />
          <div className="stage-caption caption-left">FIG. 01 <span>THE BUILDER</span></div>
          <div className="character-shadow" />
          <div className="character-art"><Image src="/images/aditya-character.png" alt="Stylized portrait of Aditya in a dark hoodie and headphones" fill priority sizes="(max-width: 760px) 78vw, 43vw" /></div>
          <div className="stage-caption caption-right"><span>FOCUS / CURIOSITY</span><span className="caption-dot">●</span></div>
          <div className="stage-cross cross-a">+</div><div className="stage-cross cross-b">+</div>
        </div>
      </div>
      <div className="hero-bottom"><span>AI&nbsp; / &nbsp;SECURITY&nbsp; / &nbsp;SOFTWARE&nbsp; / &nbsp;SYSTEMS</span><a href="#about">SCROLL TO EXPLORE <span>↓</span></a><span className="hero-coordinate">IDEAS INTO WORKING SYSTEMS</span></div>
    </section>
  );
}
