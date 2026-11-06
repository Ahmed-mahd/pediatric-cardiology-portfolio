"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { professorData } from "./data";

type IconName = "heart" | "pulse" | "arrow" | "book" | "microscope" | "globe" | "mail" | "pin" | "calendar" | "external";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  const paths: Record<IconName, React.ReactNode> = {
    heart: <><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21.2l7.8-7.7 1-1.1a5.5 5.5 0 0 0 0-7.8Z" /><path d="M7.5 12h2l1.2-2.8 2.2 5.6 1.2-2.8h2.4" /></>,
    pulse: <path d="M2 12h4l2.5-7 4.2 14 2.5-7H22" />,
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    book: <><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5Z" /><path d="M4 4.5v17" /><path d="M8 6h8" /></>,
    microscope: <><path d="M6 20h12" /><path d="M9 20a6 6 0 0 0 6-6v-1" /><path d="M8 4h5v4H8z" /><path d="M10 8v4" /><path d="M13 6h3" /><path d="M16 6v6a4 4 0 0 1 4 4" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    calendar: <><rect x="3" y="4.5" width="18" height="16" rx="2" /><path d="M16 2.5v4M8 2.5v4M3 9h18" /></>,
    external: <><path d="M14 4h6v6M20 4l-9 9" /><path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" /></>,
  };
  return <svg {...common}>{paths[name]}</svg>;
}

function AnimatedCounter({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || hasAnimated.current) return;
      hasAnimated.current = true;
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / 1200, 1);
        setCount(Math.round(value * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{count}</span>;
}

const navItems = [
  ["about", "Profile"],
  ["expertise", "Expertise"],
  ["research", "Research"],
  ["academic-archive", "Archive"],
  ["contact", "Contact"],
] as const;

export default function Home() {
  const d = professorData;
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [filter, setFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filteredPublications = useMemo(() => {
    const publications = d.publications;
    if (filter === "recent") return publications.filter((item) => Number(item.year) >= 2020);
    if (filter === "classic") return publications.filter((item) => Number(item.year) < 2015);
    return publications;
  }, [d.publications, filter]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <nav className={`site-nav ${scrolled ? "is-scrolled" : ""}`} aria-label="Primary navigation">
        <a className="brand" href="#top" onClick={closeMenu}>
          <span className="brand-mark"><Icon name="heart" size={22} /></span>
          <span><strong>SHETA</strong><small>Clinical Portfolio</small></span>
        </a>
        <button className={`menu-button ${menuOpen ? "is-open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
          <span /><span /><span />
        </button>
        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          {navItems.map(([id, label]) => <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>)}
          <a className="nav-cta" href={`mailto:${d.contact.email}`} onClick={closeMenu}>Connect <Icon name="arrow" size={16} /></a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-grid" />
        <div className="orbit orbit-one" /><div className="orbit orbit-two" />
        <div className="hero-scanline" />
        <div className="hero-content shell">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> Pediatric Cardiology / Cairo University</div>
            <h1>Where precision<br /><em>meets</em> compassion.</h1>
            <p className="hero-lead">{d.hero.subtitle}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#expertise">Explore expertise <Icon name="arrow" size={18} /></a>
              <a className="button button-ghost" href="#research">View research</a>
            </div>
            <div className="hero-meta"><span><Icon name="pin" size={16} /> Kasr Al Ainy, Cairo</span><span><Icon name="globe" size={16} /> Egypt · Global research</span></div>
          </div>
          <div className="hero-portrait-wrap">
            <div className="portrait-orbit" />
            <div className="portrait-card">
              <Image src={d.about.image} alt={d.name.full} fill priority sizes="(max-width: 900px) 280px, 430px" />
              <div className="portrait-overlay"><span>ACTIVE PRACTICE</span><strong>30<span>+</span></strong><small>years advancing<br />pediatric heart care</small></div>
            </div>
            <div className="signal-card"><span className="signal-label">LIVE SIGNAL</span><svg viewBox="0 0 220 48" preserveAspectRatio="none" aria-hidden="true"><path d="M0 25h44l8-18 12 34 12-27 10 17h34l8-13 10 13h82" /></svg></div>
          </div>
        </div>
        <div className="hero-footer shell"><span>SCROLL TO DISCOVER</span><span className="scroll-line" /><span>01 / 05</span></div>
      </section>

      <section className="signal-strip"><div className="shell signal-grid"><div><span className="signal-icon"><Icon name="heart" size={20} /></span><span><small>FOCUS</small><strong>Pediatric cardiac care</strong></span></div><div><span className="signal-icon"><Icon name="microscope" size={20} /></span><span><small>METHOD</small><strong>Evidence-led medicine</strong></span></div><div><span className="signal-icon"><Icon name="globe" size={20} /></span><span><small>REACH</small><strong>Egypt · International</strong></span></div><div><span className="signal-icon"><Icon name="calendar" size={20} /></span><span><small>AVAILABILITY</small><strong>By appointment</strong></span></div></div></section>

      <section className="section shell profile-section" id="about">
        <div className="section-kicker">01 / PROFILE <span /></div>
        <div className="profile-grid">
          <div className="profile-heading"><p className="mono-label">THE HUMAN SIDE OF THE DATA</p><h2>Care designed<br /><em>around the child.</em></h2><p className="section-intro">Prof. Sahar Shaker Sheta brings together three decades of clinical practice, academic teaching, and research leadership in pediatric cardiology.</p><a className="text-link" href={`mailto:${d.contact.email}`}>Start a conversation <Icon name="arrow" size={16} /></a></div>
          <div className="profile-body">{d.about.bio.slice(0, 3).map((text, index) => <p key={index}>{text}</p>)}<p className="arabic-note">{d.about.bioArabic}</p><div className="credential-row"><div><small>ROLE</small><strong>{d.title}</strong></div><div><small>INSTITUTION</small><strong>Kasr Al Ainy Faculty of Medicine</strong></div></div></div>
        </div>
      </section>

      <section className="section dark-section" id="expertise"><div className="shell"><div className="section-kicker light">02 / EXPERTISE <span /></div><div className="section-heading-row"><div><h2>Clinical intelligence,<br /><em>humanly applied.</em></h2></div><p>Advanced diagnostic thinking for the smallest hearts — from fetal assessment to complex congenital care.</p></div><div className="expertise-grid">{d.services.map((service, index) => <article className="expertise-card" key={service.title}><div className="card-number">0{index + 1}</div><div className="expertise-icon"><Icon name={index === 0 ? "pulse" : "heart"} size={24} /></div><h3>{service.title}</h3><p>{service.description}</p><span className="card-arrow"><Icon name="arrow" size={18} /></span></article>)}</div></div></section>

      <section className="section impact-section"><div className="shell"><div className="section-kicker">03 / IMPACT <span /></div><div className="impact-layout"><div><h2>A career measured<br /><em>in lasting impact.</em></h2><p className="section-intro">Teaching, publishing, and improving pediatric cardiac outcomes across generations.</p></div><div className="stats-grid">{d.statistics.map((stat) => <div className="impact-stat" key={stat.label}><strong><AnimatedCounter value={stat.value} /><sup>+</sup></strong><span>{stat.label}</span></div>)}</div></div></div></section>

      <section className="section research-section" id="research"><div className="shell"><div className="section-kicker light">04 / RESEARCH <span /></div><div className="section-heading-row"><div><h2>Knowledge that<br /><em>moves medicine forward.</em></h2></div><p>Selected publications and collaborations spanning echocardiography, fetal cardiology, congenital heart disease, and rheumatic heart disease.</p></div><div className="research-tags">{d.researchInterests.slice(0, 8).map((tag) => <span key={tag}>{tag}</span>)}</div><div className="publication-toolbar"><div className="filter-tabs">{[["all", "All work"], ["recent", "2020—now"], ["classic", "Before 2015"]].map(([value, label]) => <button className={filter === value ? "active" : ""} key={value} onClick={() => { setFilter(value); setShowAll(false); }}>{label}</button>)}</div><span className="publication-count">{filteredPublications.length} publications indexed</span></div><div className="publication-list">{(showAll ? filteredPublications : filteredPublications.slice(0, 6)).map((publication, index) => <a className="publication-row" href={publication.doi === "#" ? undefined : publication.doi} target="_blank" rel="noreferrer" key={`${publication.title}-${index}`}><span className="publication-year">{publication.year || "—"}</span><span className="publication-title"><strong>{publication.title}</strong><small>{publication.journal}</small></span><Icon name="external" size={17} /></a>)}</div><button className="button button-outline-light more-button" onClick={() => setShowAll(!showAll)}>{showAll ? "Show fewer" : "Load more publications"} <Icon name="arrow" size={17} /></button></div></section>

      <section className="section archive-section" id="academic-archive">
        <div className="shell">
          <div className="section-kicker">ACADEMIC ARCHIVE <span /></div>
          <div className="section-heading-row archive-heading"><div><h2>Beyond the<br /><em>publication list.</em></h2></div><p>The supplied CV and bibliography distinguish journal publications from conference outputs, supervised postgraduate work, and Prof. Sheta&apos;s own research. Each record is kept in its original category.</p></div>
          <div className="archive-grid">
            <div className="archive-panel">
              <div className="archive-panel-head"><span className="archive-index">A / 31 RECORDS</span><h3>Conference presentations</h3><p>International meetings, posters, abstracts, and national scientific presentations.</p></div>
              <div className="archive-list">{d.conferences.map((item, index) => <article className="archive-item" key={`${item.title}-${index}`}><span className="archive-year">{item.year || "—"}</span><div><strong>{item.title}</strong><small>{item.venue} · {item.location}</small></div></article>)}</div>
            </div>
            <div className="archive-panel">
              <div className="archive-panel-head"><span className="archive-index">B / 20 RECORDS</span><h3>Supervised postgraduate theses</h3><p>Supervision records transcribed from the Cairo University CV; these are not publications authored by Prof. Sheta.</p></div>
              <div className="archive-list">{d.supervisedTheses.map((item, index) => <article className="archive-item" key={`${item.title}-${index}`}><span className="archive-year">{item.year}</span><div><strong>{item.title}</strong><small>{item.degree} · {item.university}</small></div></article>)}</div>
            </div>
          </div>
          <div className="own-research"><div><span className="archive-index">C / PROFESSOR&apos;S OWN RESEARCH</span><h3>Postgraduate research</h3></div><div className="own-research-list">{d.ownResearch.map((item) => <article key={item.title}><span>{item.year}</span><div><strong>{item.title}</strong><small>{item.degree} · {item.institution}</small></div></article>)}</div></div>
          <p className="archive-note">Bibliography note: the supplied document is a verification-oriented master bibliography. Older CV-derived records and collaborative works are intentionally labeled where complete author lists or publication metadata still require confirmation.</p>
        </div>
      </section>

      <section className="section career-section"><div className="shell"><div className="section-kicker">05 / JOURNEY <span /></div><div className="career-grid"><div><h2>Built on<br /><em>curiosity.</em></h2><p className="section-intro">A career that keeps asking better questions — in the clinic, the classroom, and the lab.</p></div><div className="timeline">{d.experience.map((item) => <article key={item.title}><span className="timeline-marker" /><small>{item.period}</small><h3>{item.title}</h3><p>{item.institution}</p><span>{item.description}</span></article>)}</div></div></div></section>

      <section className="contact-section" id="contact"><div className="shell contact-grid"><div><div className="section-kicker light">LET&apos;S CONNECT <span /></div><h2>Good care starts<br />with a <em>conversation.</em></h2><p>For appointments, academic collaboration, or research enquiries, reach out directly.</p></div><div className="contact-card"><a href={`mailto:${d.contact.email}`}><Icon name="mail" size={19} /><span><small>EMAIL</small>{d.contact.email}</span><Icon name="arrow" size={17} /></a><div><Icon name="pin" size={19} /><span><small>LOCATION</small>{d.contact.location}</span></div><div><Icon name="calendar" size={19} /><span><small>OFFICE HOURS</small>{d.contact.officeHours}</span></div></div></div></section>

      <footer className="site-footer"><div className="shell footer-inner"><a className="brand" href="#top"><span className="brand-mark"><Icon name="heart" size={20} /></span><span><strong>SHETA</strong><small>Clinical Portfolio</small></span></a><span>© {new Date().getFullYear()} Sahar Shaker Sheta</span><span>Designed for care / built for discovery</span></div></footer>
    </main>
  );
}
