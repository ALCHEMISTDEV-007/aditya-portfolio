"use client";

import { useEffect, useState } from "react";
import { githubProfile } from "@/data/projects";

const links = [
  ["Work", "#work"], ["About", "#about"], ["Experiments", "#experiments"], ["Contact", "#contact"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`site-nav ${scrolled ? "is-scrolled" : ""}`}>
      <a className="wordmark" href="#top" aria-label="Aditya, home">ADITYA<span>®</span></a>
      <nav className={open ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>
      <a href={githubProfile} className="nav-availability" target="_blank" rel="noreferrer"><span /> GITHUB / ALCHEMISTDEV-007</a>
      <button className={`menu-toggle ${open ? "active" : ""}`} onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
        <span /><span />
      </button>
    </header>
  );
}
