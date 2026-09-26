"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function Owl() {
  return <svg className="owl-svg" viewBox="0 0 112 92" role="img" aria-label="A small illustrated owl companion">
    <ellipse cx="56" cy="52" rx="37" ry="34" fill="#a66d3f" />
    <path d="M24 32 18 6l25 16M88 32l6-26-25 16" fill="#75472e" stroke="#d6a36b" strokeWidth="3" strokeLinejoin="round" />
    <g className="owl-wing owl-wing-left"><path d="M25 42C5 44 2 62 12 75c8 10 21 6 29-3Z" fill="#7d4d32" stroke="#d6a36b" strokeWidth="2"/><path d="m12 56 16 10m-11-19 16 10m-14 21 11-8" stroke="#d6a36b" strokeWidth="2" strokeLinecap="round" opacity=".8"/></g>
    <g className="owl-wing owl-wing-right"><path d="M87 42c20 2 23 20 13 33-8 10-21 6-29-3Z" fill="#7d4d32" stroke="#d6a36b" strokeWidth="2"/><path d="M100 56 84 66m11-19-16 10m14 21-11-8" stroke="#d6a36b" strokeWidth="2" strokeLinecap="round" opacity=".8"/></g>
    <ellipse cx="41" cy="45" rx="17" ry="19" fill="#f0dfbf"/><ellipse cx="71" cy="45" rx="17" ry="19" fill="#f0dfbf"/>
    <circle cx="43" cy="45" r="9" fill="#d78a36"/><circle cx="69" cy="45" r="9" fill="#d78a36"/><circle cx="43" cy="45" r="5.5" fill="#171512"/><circle cx="69" cy="45" r="5.5" fill="#171512"/>
    <circle cx="45" cy="42" r="2" fill="#fff4dc"/><circle cx="71" cy="42" r="2" fill="#fff4dc"/>
    <path d="m52 56 4 7 5-7Z" fill="#db994d"/><path d="M40 83v5m30-5v5" stroke="#d3954d" strokeWidth="3" strokeLinecap="round"/>
  </svg>;
}

export default function OwlFlight() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    const owl = ref.current;
    if (!owl || reduced) return;
    let raf = 0;
    let start = performance.now();
    let from = { x: -10, y: 18 };
    let to = { x: 82, y: 55 };
    let segment = 4400;
    let pointer = { x: 0, y: 0 };
    const onPointer = (e: PointerEvent) => { pointer.x = (e.clientX / innerWidth - .5) * 12; pointer.y = (e.clientY / innerHeight - .5) * 9; };
    const nextTarget = (t: number, scroll: number) => {
      from = { ...to };
      const options = scroll < .24 ? [{ x: 82, y: 55 }, { x: 18, y: 30 }, { x: 82, y: 20 }, { x: 50, y: 43 }] : scroll > .86 ? [{ x: 82, y: 56 }, { x: 90, y: 64 }, { x: 55, y: 77 }] : [{ x: 13 + Math.random() * 76, y: 18 + Math.random() * 65 }];
      to = options[Math.floor(Math.random() * options.length)];
      start = t;
      segment = 5000 + Math.random() * 2200;
    };
    const animate = (now: number) => {
      const scroll = scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight);
      if (now - start > segment) nextTarget(now, scroll);
      const p = Math.min(1, (now - start) / segment);
      const eased = p * p * (3 - 2 * p);
      const bend = Math.sin(p * Math.PI) * 8;
      const x = from.x + (to.x - from.x) * eased + pointer.x * .25;
      const y = from.y + (to.y - from.y) * eased + bend + pointer.y * .25;
      const dx = to.x - from.x;
      const angle = Math.max(-18, Math.min(18, dx * .28));
      const scale = scroll > .86 ? .82 : 1;
      owl.style.transform = `translate3d(${x}vw, ${y}vh, 0) rotate(${angle}deg) scale(${scale})`;
      owl.classList.toggle("is-perched", scroll < .08 && p > .76);
      owl.classList.toggle("is-moving", !owl.classList.contains("is-perched"));
      raf = requestAnimationFrame(animate);
    };
    window.addEventListener("pointermove", onPointer, { passive: true });
    raf = requestAnimationFrame(animate);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("pointermove", onPointer); };
  }, [reduced]);
  return <div className={`owl-companion ${reduced ? "owl-static" : ""}`} ref={ref} aria-hidden="false"><Owl /><span className="owl-label">little companion</span></div>;
}
