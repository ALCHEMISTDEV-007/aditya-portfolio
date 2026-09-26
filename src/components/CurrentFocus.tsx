import Reveal from "@/components/Reveal";

const lifecycle = ["Discover", "Inventory", "Assess", "Correlate", "Prioritize", "Remediate", "Verify", "Report"];

export default function CurrentFocus() {
  return <section className="sentinel-detail current-focus" id="currently-building">
    <div className="sentinel-detail-inner section-pad">
      <Reveal><div className="section-kicker"><span>03 / IN PROGRESS</span><span>BUILDING &amp; LEARNING</span></div></Reveal>
      <div className="sentinel-detail-grid"><Reveal><p className="eyebrow">CURRENTLY BUILDING</p><h2>Sentinel<br />AI<span className="focus-period">.</span></h2><p className="sentinel-detail-copy">An intelligent security exposure and vulnerability assessment platform, taking shape around asset discovery, risk context and clear remediation priorities.</p><div className="sentinel-status"><span className="status-dot"/> ACTIVE PERSONAL PROJECT</div><div className="cpts-path"><span className="cpts-path-kicker">ALSO WORKING TOWARD</span><strong>Hack The Box <span>CPTS</span></strong><p>Currently pursuing the Certified Penetration Testing Specialist path.</p><p className="cpts-details">Hands-on practice includes 30+ TryHackMe rooms and 20+ PortSwigger labs.</p><div className="cpts-tags"><span>ENUMERATION</span><span>WEB</span><span>NETWORKS</span><span>REPORTING</span></div></div></Reveal>
        <Reveal className="lifecycle" delay={100}><div className="lifecycle-head"><span>THE ASSESSMENT LOOP</span><span>DESIGN IN PROGRESS</span></div>{lifecycle.map((step, index) => <div className="lifecycle-step" key={step}><span className="lifecycle-number">0{index + 1}</span><span>{step}</span><span className="lifecycle-node"/></div>)}</Reveal></div>
      <div className="sentinel-stack"><span>EARLY TECH DIRECTION</span><div>PYTHON <i>·</i> FASTAPI <i>·</i> POSTGRESQL <i>·</i> NMAP <i>·</i> AI / RAG</div></div>
    </div>
  </section>;
}
