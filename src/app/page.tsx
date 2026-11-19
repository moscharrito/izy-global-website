'use client';

import { useEffect, useRef, useState } from 'react';

const CONTACT_EMAIL = 'contracts@izyglobalservices.com';

const TICKER_ITEMS = [
  'Logistics & Transportation',
  'Healthcare Support',
  'Pharmacy Courier Networks',
  'Staffing & Administrative',
  'Facilities & Security',
  'Technology & Data',
  'STAT & After-Hours Coverage',
  'Multi-State Operations',
];

type IntentKey = 'capability' | 'requirement' | 'teaming';

const INTENT_MAP: Record<IntentKey, { intent: string; msg: string; type?: string }> = {
  capability: {
    intent: 'Request capability statement',
    msg: 'Please send your current capability statement.',
  },
  requirement: { intent: 'Discuss a requirement', msg: '' },
  teaming: { intent: 'Teaming / subcontracting', msg: '', type: 'Prime contractor' },
};

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Check glyph used throughout the hero meta and "who we serve" lists */
function Check({ width = 17 }: { width?: number }) {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

/* Counts up once the stat scrolls into view */
function Counter({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
      setValue(target);
      return;
    }

    const run = () => {
      let start: number | null = null;
      const dur = 1500;
      const frame = (ts: number) => {
        if (start === null) start = ts;
        const p = Math.min((ts - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setValue(Math.round(target * eased));
        if (p < 1) requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            run();
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return <span ref={ref}>{value}</span>;
}

/* Copies CAGE / UEI to the clipboard with inline confirmation */
function CopyButton({ value }: { value: string }) {
  const [done, setDone] = useState(false);

  const copy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        const ta = document.createElement('textarea');
        ta.value = value;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      setDone(true);
      setTimeout(() => setDone(false), 1800);
    } catch {
      /* clipboard unavailable — leave the label unchanged */
    }
  };

  return (
    <button
      className={`copy-btn${done ? ' done' : ''}`}
      type="button"
      onClick={copy}
      aria-label={`Copy ${value}`}
    >
      {done ? 'Copied ✓' : 'Copy'}
    </button>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [year, setYear] = useState(2026);

  const [form, setForm] = useState({
    name: '',
    org: '',
    email: '',
    type: 'Federal agency',
    intent: 'Discuss a requirement',
    message: '',
  });
  const [status, setStatus] = useState<{ text: string; err: boolean } | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());

    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const els = document.querySelectorAll('.reveal');
    let io: IntersectionObserver | undefined;
    if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
    } else {
      io = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in');
              io?.unobserve(entry.target);
            }
          }),
        { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
      );
      els.forEach((el) => io?.observe(el));
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      io?.disconnect();
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  /* Intent buttons: preselect the request type, then scroll to the form */
  const goToContact = (key: IntentKey) => {
    const cfg = INTENT_MAP[key];
    setMenuOpen(false);
    setForm((f) => ({
      ...f,
      intent: cfg.intent,
      type: cfg.type ?? f.type,
      message: cfg.msg && !f.message ? cfg.msg : f.message,
    }));

    const reduce = prefersReducedMotion();
    document
      .getElementById('contact')
      ?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    setTimeout(
      () => document.getElementById('fName')?.focus({ preventScroll: true }),
      reduce ? 60 : 650
    );
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = form.name.trim();
    const org = form.org.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !org || !email || !message) {
      setStatus({
        text: 'Please complete the required fields (name, agency/company, work email, message) and try again.',
        err: true,
      });
      return;
    }
    if (email.indexOf('@') < 1 || email.indexOf('.') < 0) {
      setStatus({
        text: "That email address doesn't look complete — please check it and try again.",
        err: true,
      });
      return;
    }

    const subject = `${form.intent} — ${org}`;
    const body = `${message}\n\n—\n${name}\n${org} (${form.type})\n${email}`;
    const link = document.createElement('a');
    link.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setStatus({
      text: `Your email app should now open with the message ready to send to ${CONTACT_EMAIL}. We respond within one business day.`,
      err: false,
    });
  };

  const navLinks = (
    <>
      <a className="link" href="#capabilities" onClick={closeMenu}>
        Capabilities
      </a>
      <a className="link" href="#who-we-serve" onClick={closeMenu}>
        Who We Serve
      </a>
      <a className="link" href="#performance" onClick={closeMenu}>
        Performance
      </a>
      <a className="link" href="#vetting" onClick={closeMenu}>
        Vetting
      </a>
      <a className="link" href="#about" onClick={closeMenu}>
        About
      </a>
      <a className="link" href="#contact" onClick={closeMenu}>
        Contact
      </a>
    </>
  );

  return (
    <>
      {/* ═══ Proof bar ═══ */}
      <div className="proofbar" aria-label="Company credentials">
        <div className="wrap">
          <div className="items">
            <span>
              <i className="dot" />
              SDVOSB <b>VetCert Certified</b>
            </span>
            <span>
              CAGE <b>949Y3</b>
            </span>
            <span>
              UEI <b>WLDNTVNK9SC7</b>
            </span>
            <span>
              SAM.gov <b>Active Registration</b>
            </span>
          </div>
          <a className="verify" href="https://sam.gov" target="_blank" rel="noopener noreferrer">
            Verify on SAM.gov ↗
          </a>
        </div>
      </div>

      {/* ═══ Nav ═══ */}
      <header className={`site${scrolled ? ' scrolled' : ''}`} id="siteHeader">
        <div className="wrap nav">
          <a className="brand" href="#top" aria-label="Izy Global Services LLC — home">
            <span className="brand-mark" aria-hidden="true">
              <span>IG</span>
            </span>
            <span className="brand-text">
              <strong>IZY GLOBAL SERVICES</strong>
              <small>LLC · Service-Disabled Veteran-Owned</small>
            </span>
          </a>
          <nav className="main" aria-label="Primary">
            {navLinks}
            <button
              className="btn btn-gold btn-sm"
              type="button"
              onClick={() => goToContact('capability')}
            >
              Request Capability Statement
            </button>
          </nav>
          <button
            className="menu-btn"
            id="menuBtn"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobileMenu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
        <div className={`mobile-menu${menuOpen ? ' open' : ''}`} id="mobileMenu">
          <a href="#capabilities" onClick={closeMenu}>
            Capabilities
          </a>
          <a href="#who-we-serve" onClick={closeMenu}>
            Who We Serve
          </a>
          <a href="#performance" onClick={closeMenu}>
            Performance
          </a>
          <a href="#vetting" onClick={closeMenu}>
            Vetting
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
          <a href="#sms-terms" onClick={closeMenu}>
            SMS Terms &amp; Privacy
          </a>
          <button
            className="btn btn-gold"
            type="button"
            onClick={() => goToContact('capability')}
          >
            Request Capability Statement
          </button>
        </div>
      </header>

      <main id="main">
        {/* ═══ Hero ═══ */}
        <section className="hero" id="top">
          <div className="hero-bg" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/hero-ops.jpg" alt="" />
          </div>
          <div className="hero-shade" aria-hidden="true" />
          <div className="wrap">
            <div>
              <span className="eyebrow hero-fade">
                Federal Prime · Houston &amp; San Antonio, Texas
              </span>
              <h1>
                <span className="line">One partner.</span>
                <span className="line gold">Many missions.</span>
              </h1>
              <p className="lede hero-fade">
                Izy Global Services LLC is a <strong>veteran-led SDVOSB prime</strong> built for
                programs of consequence — logistics at our core, with the depth to bid and execute
                across healthcare support, staffing, facilities, and technology. One prime. One
                accountable team.
              </p>
              <div className="hero-ctas hero-fade">
                <button
                  className="btn btn-gold"
                  type="button"
                  onClick={() => goToContact('capability')}
                >
                  Request Capability Statement
                </button>
                <button
                  className="btn btn-outline-w"
                  type="button"
                  onClick={() => goToContact('requirement')}
                >
                  Discuss a Requirement
                </button>
              </div>
              <div className="hero-meta hero-fade">
                <span>
                  <Check />
                  Founded 2020
                </span>
                <span>
                  <Check />
                  President-led, single point of contact
                </span>
                <span>
                  <Check />
                  Performing today in TX &amp; TN
                </span>
              </div>
            </div>

            <aside className="dossier glass-dark hero-fade" aria-label="Vendor snapshot">
              <div className="dossier-head">
                <h2>Vendor Snapshot</h2>
                <span className="live">
                  <i aria-hidden="true" />
                  Ready to Award
                </span>
              </div>
              <dl>
                <div className="row">
                  <dt>Legal Name</dt>
                  <dd>Izy Global Services LLC</dd>
                </div>
                <div className="row">
                  <dt>Designation</dt>
                  <dd>SDVOSB · VetCert Certified</dd>
                </div>
                <div className="row">
                  <dt>CAGE Code</dt>
                  <dd className="mono">
                    949Y3 <CopyButton value="949Y3" />
                  </dd>
                </div>
                <div className="row">
                  <dt>UEI</dt>
                  <dd className="mono">
                    WLDNTVNK9SC7 <CopyButton value="WLDNTVNK9SC7" />
                  </dd>
                </div>
                <div className="row">
                  <dt>SAM.gov</dt>
                  <dd>Active Registration</dd>
                </div>
                <div className="row">
                  <dt>Headquarters</dt>
                  <dd>Houston, Texas</dd>
                </div>
              </dl>
              <div className="dossier-foot">
                <a href="https://sam.gov" target="_blank" rel="noopener noreferrer">
                  Verify us on SAM.gov
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 17 17 7M8 7h9v9" />
                  </svg>
                </a>
                <p>Look us up by UEI or CAGE — it takes under a minute.</p>
              </div>
            </aside>
          </div>
        </section>

        {/* ═══ Ticker ═══ */}
        <div className="ticker" aria-hidden="true">
          <div className="ticker-track" id="tickerTrack">
            {[0, 1].map((set) => (
              <div className="ticker-set" key={set}>
                {TICKER_ITEMS.map((item) => (
                  <span key={item}>
                    {item}
                    <i>◆</i>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ═══ Scale ═══ */}
        <section className="scale" aria-label="Company scale">
          <div className="wrap">
            <span className="eyebrow reveal">The Scale</span>
            <h2 className="reveal d1" style={{ marginTop: 16 }}>
              Small business. <span className="gold">Prime-contractor standard.</span>
            </h2>
            <p className="sub reveal d2">
              We pursue and execute government contracts the way the large primes do — disciplined
              capture, documented compliance, and performance you can verify — with a veteran-led
              team that still answers its own phone.
            </p>
            <div className="stat-grid">
              <div className="stat reveal">
                <div className="num">
                  <Counter target={5} />
                </div>
                <div className="lbl">
                  Capability domains under one accountable prime — logistics first
                </div>
              </div>
              <div className="stat reveal d1">
                <div className="num">
                  <Counter target={4} />
                </div>
                <div className="lbl">
                  Government &amp; health-system clients served — VA, DSCA, U.S. Army, University
                  Health
                </div>
              </div>
              <div className="stat reveal d2">
                <div className="num">
                  <Counter target={2} />
                </div>
                <div className="lbl">
                  States in active operation today — Texas &amp; Tennessee, HQ in Houston
                </div>
              </div>
              <div className="stat reveal d3">
                <div className="num">2020</div>
                <div className="lbl">
                  Founded by a service-disabled veteran — performing on contract ever since
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ Capabilities ═══ */}
        <section className="block" id="capabilities">
          <div className="wrap">
            <div className="sec-head reveal">
              <span className="eyebrow">Capabilities</span>
              <h2>Logistics first. Mission-wide depth.</h2>
              <p>
                Our home ground is moving critical freight on deadline. Around that core we bid and
                execute across five domains — so one prime can cover the requirement, not just a
                slice of it.
              </p>
            </div>

            <article className="cap-feature reveal">
              <div className="photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/img/logistics-feature.jpg" alt="Izy Global Services logistics operations" />
              </div>
              <div className="body">
                <span className="flag">Primary Niche</span>
                <h3>Logistics &amp; Transportation</h3>
                <p>
                  Scheduled and STAT route operations with chain-of-custody discipline, from single
                  facilities to multi-site networks — the capability our largest contracts are built
                  on.
                </p>
                <ul>
                  <li>Dedicated &amp; batched route networks</li>
                  <li>STAT and after-hours coverage</li>
                  <li>Multi-state operations — TX &amp; TN</li>
                  <li>Chain-of-custody documentation</li>
                </ul>
              </div>
            </article>

            <div className="cap-grid">
              <article className="cap glass glass-sheen reveal">
                <span className="sheen" aria-hidden="true" />
                <div className="icon" aria-hidden="true">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19.5 12.6 12 20l-7.5-7.4A5.3 5.3 0 1 1 12 6.2a5.3 5.3 0 1 1 7.5 6.4Z" />
                    <path d="M3.5 12h4l1.5-3 3 6 1.8-3.5h6.7" />
                  </svg>
                </div>
                <h3>Healthcare Support</h3>
                <p>
                  Patient-facing support services for hospitals and health systems, run to clinical
                  standards of care and custody.
                </p>
                <ul>
                  <li>Pharmacy &amp; medical courier services</li>
                  <li>Hand-to-patient delivery with signature</li>
                  <li>HIPAA-trained, background-checked drivers</li>
                </ul>
              </article>

              <article className="cap glass glass-sheen reveal d1">
                <span className="sheen" aria-hidden="true" />
                <div className="icon" aria-hidden="true">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="9" cy="8" r="3.4" />
                    <path d="M3 20c.6-3.4 3-5.2 6-5.2s5.4 1.8 6 5.2" />
                    <path d="M15.8 4.9a3.4 3.4 0 0 1 0 6.3" />
                    <path d="M18.2 15.2c1.7.8 2.7 2.4 3 4.8" />
                  </svg>
                </div>
                <h3>Staffing &amp; Administrative</h3>
                <p>
                  Vetted personnel who can scale from a single placement to a full program ramp —
                  fast, and documented.
                </p>
                <ul>
                  <li>Administrative &amp; program support staff</li>
                  <li>Surge and ramp staffing</li>
                  <li>Screening, credentialing &amp; onboarding</li>
                </ul>
              </article>

              <article className="cap glass glass-sheen reveal">
                <span className="sheen" aria-hidden="true" />
                <div className="icon" aria-hidden="true">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2.8 19.5 5.6v5.6c0 4.9-3.2 8.4-7.5 10-4.3-1.6-7.5-5.1-7.5-10V5.6Z" />
                    <path d="m8.8 11.8 2.3 2.3 4.2-4.4" />
                  </svg>
                </div>
                <h3>Facilities &amp; Security</h3>
                <p>
                  Facilities support and security services delivered by cleared, supervised personnel
                  who show up ready.
                </p>
                <ul>
                  <li>Facilities operations support</li>
                  <li>Site security &amp; access support</li>
                  <li>Supervised, uniformed personnel</li>
                </ul>
              </article>

              <article className="cap glass glass-sheen reveal d1">
                <span className="sheen" aria-hidden="true" />
                <div className="icon" aria-hidden="true">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="6" y="6" width="12" height="12" rx="2" />
                    <rect x="10.2" y="10.2" width="3.6" height="3.6" />
                    <path d="M9.5 2.5V6M14.5 2.5V6M9.5 18v3.5M14.5 18v3.5M2.5 9.5H6M2.5 14.5H6M18 9.5h3.5M18 14.5h3.5" />
                  </svg>
                </div>
                <h3>Technology &amp; Data</h3>
                <p>
                  Quality assurance and data-platform support for mission systems where accuracy is
                  the deliverable.
                </p>
                <ul>
                  <li>Data platform quality assurance</li>
                  <li>Testing &amp; validation support</li>
                  <li>Documentation &amp; reporting</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* ═══ Who we serve ═══ */}
        <section className="block tight" id="who-we-serve" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="sec-head reveal">
              <span className="eyebrow">Who We Serve</span>
              <h2>Two ways to work with us</h2>
              <p>
                Whether you are awarding directly or building a compliant team, the path in is short
                and the paperwork is ready.
              </p>
            </div>
            <div className="serve-grid">
              <article className="serve agency reveal">
                <span className="tag">For Federal Agencies</span>
                <h3>Award to a verified SDVOSB prime</h3>
                <p>
                  Set-aside and direct-award ready, with registration, reps, and certs in order
                  before you ask.
                </p>
                <ul>
                  <li>
                    <Check />
                    VetCert-certified SDVOSB — verify in minutes on SAM.gov
                  </li>
                  <li>
                    <Check />
                    Current performance for a major Texas health system and the VA
                  </li>
                  <li>
                    <Check />
                    Capability statement and briefing available on request
                  </li>
                  <li>
                    <Check />
                    One accountable point of contact — the President
                  </li>
                </ul>
                <button
                  className="btn btn-gold"
                  type="button"
                  onClick={() => goToContact('requirement')}
                >
                  Discuss a Requirement
                </button>
              </article>

              <article className="serve prime glass glass-sheen reveal d1">
                <span className="sheen" aria-hidden="true" />
                <span className="tag">For Prime Contractors</span>
                <h3>A small-business partner that performs</h3>
                <p>
                  Meet your SDVOSB subcontracting goals with a partner who already operates under
                  federal standards.
                </p>
                <ul>
                  <li>
                    <Check />
                    SDVOSB credit toward small-business subcontracting plans
                  </li>
                  <li>
                    <Check />
                    Operating footprint in Houston, San Antonio &amp; Tennessee
                  </li>
                  <li>
                    <Check />
                    Documented compliance: background checks, MVR reviews, HIPAA training
                  </li>
                  <li>
                    <Check />
                    Surge capacity for courier, staffing &amp; support scope
                  </li>
                </ul>
                <button
                  className="btn btn-navy"
                  type="button"
                  onClick={() => goToContact('teaming')}
                >
                  Explore Teaming
                </button>
              </article>
            </div>
          </div>
        </section>

        {/* ═══ Past performance ═══ */}
        <section className="block tight" id="performance" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="sec-head reveal">
              <span className="eyebrow">Past Performance</span>
              <h2>On contract now</h2>
              <p>
                Real engagements, in production — references available to contracting officers on
                request.
              </p>
            </div>
            <div className="perf glass reveal">
              <div className="perf-row">
                <div className="client">University Health — San Antonio</div>
                <div className="work">
                  Pharmacy Courier Services across the San Antonio health system
                </div>
                <div className="when">2026 – 2029</div>
              </div>
              <div className="perf-row">
                <div className="client">VA Tennessee Valley Healthcare System</div>
                <div className="work">RMD Courier Services</div>
                <div className="when">2025 – 2030</div>
              </div>
              <div className="perf-row">
                <div className="client">Defense Security Cooperation Agency</div>
                <div className="work">Worldwide Data Platform — Quality Assurance</div>
                <div className="when">Ongoing</div>
              </div>
              <div className="perf-row">
                <div className="client">U.S. Army</div>
                <div className="work">Contract support services</div>
                <div className="when">2023</div>
              </div>
            </div>
            <p className="perf-note reveal">
              Contract numbers and references provided in our capability statement.
            </p>
          </div>
        </section>

        {/* ═══ Vetting ═══ */}
        <section className="block on-navy-sec" id="vetting">
          <div className="wrap">
            <div className="sec-head reveal">
              <span className="eyebrow">Vetting</span>
              <h2>Vetting us should take minutes, not weeks.</h2>
              <p>
                Everything a contracting officer or capture team needs is public, current, or one
                email away.
              </p>
            </div>
            <div className="steps">
              <article className="step reveal">
                <span className="num">01</span>
                <h3>Verify on SAM.gov</h3>
                <p>
                  Search our UEI <span className="mono">WLDNTVNK9SC7</span> or CAGE{' '}
                  <span className="mono">949Y3</span> and confirm active registration and SDVOSB
                  status.
                </p>
                <span className="time">Under 1 minute</span>
              </article>
              <article className="step reveal d1">
                <span className="num">02</span>
                <h3>Request the capability statement</h3>
                <p>
                  One email gets our full capability statement — domains, past performance, and
                  differentiators in a single document.
                </p>
                <span className="time">Same business day</span>
              </article>
              <article className="step reveal d2">
                <span className="num">03</span>
                <h3>Schedule a briefing</h3>
                <p>
                  A short call with company leadership to walk your requirement, our approach, and
                  how we would staff and start.
                </p>
                <span className="time">30 minutes</span>
              </article>
              <article className="step reveal d3">
                <span className="num">04</span>
                <h3>Engage</h3>
                <p>
                  Direct award, task order, or subcontract — paperwork is in order, insurance and
                  compliance documentation ready to file.
                </p>
                <span className="time">Ready when you are</span>
              </article>
            </div>
          </div>
        </section>

        {/* ═══ About ═══ */}
        <section className="block" id="about">
          <div className="wrap">
            <div className="sec-head reveal">
              <span className="eyebrow">About</span>
              <h2>Veteran-led. Texas-based. Built to perform.</h2>
            </div>
            <div className="about-grid">
              <div className="about-copy reveal">
                <p>
                  Izy Global Services LLC was founded in 2020 by a service-disabled veteran with one
                  standard carried over from uniform:{' '}
                  <strong>the mission gets done, and someone accountable owns it.</strong>
                </p>
                <p>
                  Today the company performs healthcare courier operations for one of Texas&apos;s
                  largest public health systems, courier services for the Department of Veterans
                  Affairs in Tennessee, and data-platform quality assurance for the Defense Security
                  Cooperation Agency — from headquarters in Houston and an operations base in San
                  Antonio.
                </p>
                <p>
                  We stay deliberately lean at the top. When you call, you reach leadership. When
                  something needs to change mid-contract, it changes — without a ticket queue.
                </p>
                <div className="sig">
                  <span className="avatar" aria-hidden="true">
                    IR
                  </span>
                  <div>
                    <strong>Ismaila Raji</strong>
                    <span>President, Izy Global Services LLC</span>
                  </div>
                </div>
              </div>
              <aside className="facts glass reveal d1" aria-label="Company facts">
                <h3>At a Glance</h3>
                <dl>
                  <div className="row">
                    <dt>Legal Name</dt>
                    <dd>Izy Global Services LLC</dd>
                  </div>
                  <div className="row">
                    <dt>Founded</dt>
                    <dd>December 2020</dd>
                  </div>
                  <div className="row">
                    <dt>Designation</dt>
                    <dd>SDVOSB · VetCert Certified</dd>
                  </div>
                  <div className="row">
                    <dt>CAGE / UEI</dt>
                    <dd className="mono">949Y3 / WLDNTVNK9SC7</dd>
                  </div>
                  <div className="row">
                    <dt>Headquarters</dt>
                    <dd>Houston, Texas</dd>
                  </div>
                  <div className="row">
                    <dt>Operations</dt>
                    <dd>San Antonio, Texas</dd>
                  </div>
                  <div className="row">
                    <dt>Leadership</dt>
                    <dd>Ismaila Raji, President</dd>
                  </div>
                  <div className="row">
                    <dt>Phone</dt>
                    <dd>(713) 992-0481</dd>
                  </div>
                </dl>
              </aside>
            </div>
          </div>
        </section>

        {/* ═══ CTA band ═══ */}
        <section className="cta-band">
          <div className="bg" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/cta-band.jpg" alt="" />
          </div>
          <div className="shade" aria-hidden="true" />
          <div className="wrap">
            <span className="eyebrow reveal">The Next Requirement</span>
            <h2 className="reveal d1" style={{ marginTop: 18 }}>
              Your mission doesn&apos;t wait. <span className="gold">Neither do we.</span>
            </h2>
            <p className="reveal d2">
              Bid-ready, award-ready, and performing today. Send the requirement — or start with the
              capability statement — and hear back from leadership within one business day.
            </p>
            <div className="hero-ctas reveal d3">
              <button
                className="btn btn-gold"
                type="button"
                onClick={() => goToContact('requirement')}
              >
                Discuss a Requirement
              </button>
              <button
                className="btn btn-outline-w"
                type="button"
                onClick={() => goToContact('capability')}
              >
                Request Capability Statement
              </button>
            </div>
          </div>
        </section>

        {/* ═══ Contact ═══ */}
        <section className="block" id="contact">
          <div className="wrap">
            <div className="sec-head reveal">
              <span className="eyebrow">Contact</span>
              <h2>Tell us about the requirement</h2>
              <p>Agencies, primes, and teaming partners — one form, straight to leadership.</p>
            </div>
            <div className="contact-grid">
              <div className="contact-info reveal">
                <div className="info-block">
                  <div className="label">Headquarters</div>
                  <div className="value">12411 King Olaf Dr</div>
                  <div className="sub">Houston, TX 77044</div>
                </div>
                <div className="info-block">
                  <div className="label">San Antonio Operations</div>
                  <div className="value">500 Navarro St, 2nd Floor</div>
                  <div className="sub">San Antonio, TX 78205</div>
                </div>
                <div className="info-block">
                  <div className="label">Phone</div>
                  <div className="value">
                    <a href="tel:+17139920481">(713) 992-0481</a>
                  </div>
                </div>
                <div className="info-block">
                  <div className="label">Email</div>
                  <div className="value">
                    <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                  </div>
                </div>
                <div className="respond">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3.5 2" />
                  </svg>
                  <p>
                    We respond within one business day — capability statement requests usually the
                    same day.
                  </p>
                </div>
              </div>

              <form className="card glass reveal d1" id="contactForm" noValidate onSubmit={onSubmit}>
                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="fName">
                      Full name{' '}
                      <span className="req" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      id="fName"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="fOrg">
                      Agency / Company{' '}
                      <span className="req" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      id="fOrg"
                      name="org"
                      type="text"
                      autoComplete="organization"
                      required
                      value={form.org}
                      onChange={(e) => setForm((f) => ({ ...f, org: e.target.value }))}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="fEmail">
                      Work email{' '}
                      <span className="req" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      id="fEmail"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="fType">I am contacting you as</label>
                    <select
                      id="fType"
                      name="type"
                      value={form.type}
                      onChange={(e) => setForm((f) => ({ ...f, type: e.target.value }))}
                    >
                      <option value="Federal agency">Federal agency</option>
                      <option value="Prime contractor">Prime contractor</option>
                      <option value="Teaming partner">Teaming partner</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="field full">
                    <label htmlFor="fIntent">Request type</label>
                    <select
                      id="fIntent"
                      name="intent"
                      value={form.intent}
                      onChange={(e) => setForm((f) => ({ ...f, intent: e.target.value }))}
                    >
                      <option value="Discuss a requirement">Discuss a requirement</option>
                      <option value="Request capability statement">
                        Request capability statement
                      </option>
                      <option value="Teaming / subcontracting">Teaming / subcontracting</option>
                      <option value="Schedule a briefing">Schedule a briefing</option>
                    </select>
                  </div>
                  <div className="field full">
                    <label htmlFor="fMsg">
                      Message{' '}
                      <span className="req" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <textarea
                      id="fMsg"
                      name="message"
                      required
                      placeholder="Requirement, place of performance, timeline — whatever you have."
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    />
                  </div>
                </div>
                <button className="btn btn-navy" type="submit">
                  Send via Email
                </button>
                <p className="form-note">
                  Opens your email app with the message addressed to us — nothing is stored on this
                  page.
                </p>
                <div
                  className={`form-status${status ? ' show' : ''}${status?.err ? ' err' : ''}`}
                  id="formStatus"
                  role="status"
                >
                  {status?.text}
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* ═══ SMS terms & privacy ═══ */}
        <section className="block tight" id="sms-terms" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="sec-head reveal">
              <span className="eyebrow">Policies</span>
              <h2>SMS terms &amp; privacy</h2>
              <p>
                Text messaging program terms for prescription delivery and pickup notifications, and
                how we handle mobile opt-in data.
              </p>
            </div>
            <div className="policy-grid">
              <article className="policy glass reveal" aria-labelledby="smsTermsHeading">
                <span className="policy-kicker">Text messaging program</span>
                <h3 id="smsTermsHeading">Izy Global Services LLC SMS Terms</h3>
                <ol>
                  <li>
                    When you opt-in to Izy Global Services LLC, you agree to receive pharmacy
                    prescription delivery and pickup notifications text messages related to
                    notifications about prescription deliveries and pickups, including delivery
                    windows and pickup reminders.
                  </li>
                  <li>
                    You can cancel the SMS service at any time. Just text &quot;STOP&#8221;. After
                    you send the SMS message &quot;STOP&quot; to us, we will send you an SMS message
                    to confirm that you have been unsubscribed. After this, you will no longer
                    receive SMS messages from us. If you want to join again, just sign up as you did
                    the first time and we will start sending SMS messages to you again.
                  </li>
                  <li>
                    If you are experiencing issues with the messaging program you can reply with the
                    keyword &#8220;HELP&#8221; for more assistance, or you can get help directly at{' '}
                    <a href="mailto:contracts@izyglobalservices.com">
                      contracts@izyglobalservices.com
                    </a>
                    .
                  </li>
                  <li>Carriers are not liable for delayed or undelivered messages.</li>
                  <li>
                    As always, message and data rates may apply for any messages sent to you from us
                    and to us from you. You will receive Message frequency may vary. If you have any
                    questions about your text plan or data plan, it is best to contact your wireless
                    provider.
                  </li>
                </ol>
              </article>

              <article className="policy privacy reveal d1" aria-labelledby="smsPrivacyHeading">
                <span className="policy-kicker">Privacy</span>
                <h3 id="smsPrivacyHeading">Izy Global Services LLC Privacy Policy</h3>
                <p>
                  Izy Global Services LLC will not share consumer opt-in data and consent with any
                  third parties for their own use case; excluding aggregators and providers of the
                  Text Messaging services.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>

      {/* ═══ Footer ═══ */}
      <footer>
        <div className="wrap">
          <div className="foot-grid">
            <div>
              <a className="brand" href="#top" aria-label="Izy Global Services LLC — back to top">
                <span className="brand-mark" aria-hidden="true">
                  <span>IG</span>
                </span>
                <span className="brand-text">
                  <strong>IZY GLOBAL SERVICES</strong>
                  <small>LLC · Service-Disabled Veteran-Owned</small>
                </span>
              </a>
              <p>
                A veteran-led SDVOSB prime for logistics &amp; transportation, healthcare support,
                staffing, facilities &amp; security, and technology services.
              </p>
            </div>
            <div>
              <h4>Navigate</h4>
              <ul>
                <li>
                  <a href="#capabilities">Capabilities</a>
                </li>
                <li>
                  <a href="#who-we-serve">Who We Serve</a>
                </li>
                <li>
                  <a href="#performance">Performance</a>
                </li>
                <li>
                  <a href="#vetting">Vetting</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <a href="#sms-terms">SMS Terms &amp; Privacy</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Credentials</h4>
              <ul className="foot-creds">
                <li>SDVOSB · VetCert Certified</li>
                <li>CAGE — 949Y3</li>
                <li>UEI — WLDNTVNK9SC7</li>
                <li>SAM.gov — Active</li>
                <li>
                  <a href="https://sam.gov" target="_blank" rel="noopener noreferrer">
                    Verify on SAM.gov ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© <span id="year">{year}</span> Izy Global Services LLC. All rights reserved.</span>
            <span>Houston, TX · San Antonio, TX · (713) 992-0481</span>
          </div>
        </div>
      </footer>
    </>
  );
}
