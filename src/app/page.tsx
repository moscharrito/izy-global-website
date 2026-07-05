'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });

    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

    return () => {
      removeEventListener('scroll', onScroll);
      io.disconnect();
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header id="hdr" className={scrolled ? 'scrolled' : undefined}>
        <div className="wrap nav">
          <a className="brand" href="#top" aria-label="Izy Global Services home">
            <b>Izy Global</b>
            <span>SDVOSB · Federal Mission Support</span>
          </a>
          <nav className={`links${menuOpen ? ' open' : ''}`} id="navLinks">
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#serve" onClick={closeMenu}>Who We Serve</a>
            <a href="#capability" onClick={closeMenu}>Capability</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="btn btn-gold" href="#contact" onClick={closeMenu}>Get a quote</a>
          </nav>
          <button
            className="menu-btn"
            aria-label="Open menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            ☰
          </button>
        </div>
      </header>

      <main id="top">
        {/* ═══ HERO ═══ */}
        <div className="hero">
          <div className="wrap">
            <p className="kicker">Houston, Texas · Service-Disabled Veteran-Owned</p>
            <h1>
              One partner. <span className="serif-i">Many missions.</span>
            </h1>
            <div className="sub">
              <p className="lede">
                Izy Global Services delivers federal mission support across healthcare, logistics,
                staffing, facilities, and technology — a single accountable SDVOSB prime for the VA,
                DoD, and civilian agencies.
              </p>
            </div>
            <div className="ctas">
              <a className="btn btn-gold" href="#contact">
                Start a conversation <span className="arr">→</span>
              </a>
              <a className="btn btn-line" href="#services">Explore capabilities</a>
            </div>
          </div>
          <div className="service-tag">
            <span>Led by an active <b>U.S. Army Reserve</b> service member</span>
            <span className="scroll-hint">Scroll</span>
            <span>Serving the <b>VA, DoD &amp; Civilian Agencies</b> nationwide</span>
          </div>
        </div>

        {/* ═══ CRED MARQUEE ═══ */}
        <div className="statband" aria-label="Federal credentials">
          <div className="track">
            <div className="cell"><b>949Y3</b><span>CAGE Code</span></div>
            <div className="cell"><b>WLDNTVNK9SC7</b><span>Unique Entity ID</span></div>
            <div className="cell"><b>SDVOSB</b><span>certified set-aside partner</span></div>
            <div className="cell"><b>SAM.gov</b><span>active federal registration</span></div>
            <div className="cell"><b>949Y3</b><span>CAGE Code</span></div>
            <div className="cell"><b>WLDNTVNK9SC7</b><span>Unique Entity ID</span></div>
            <div className="cell"><b>SDVOSB</b><span>certified set-aside partner</span></div>
            <div className="cell"><b>SAM.gov</b><span>active federal registration</span></div>
          </div>
        </div>

        {/* ═══ SERVICES ═══ */}
        <section id="services">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-num reveal">What we do</span>
              <div>
                <h2 className="reveal">
                  Five domains. One <span className="it">accountable partner.</span>
                </h2>
                <p className="lead reveal d1">
                  Every domain maps to real solicitation types — so a contracting officer sees
                  exactly where we perform.
                </p>
              </div>
            </div>

            <div className="prog-row reveal">
              <span className="idx">I</span>
              <h3>Healthcare Support</h3>
              <p>
                Clinical and healthcare operations support for VA medical centers and federal health
                systems — medical courier, clinical staffing, DME delivery, and prosthetics services
                delivered to clinical standards.
              </p>
            </div>
            <div className="prog-row reveal">
              <span className="idx">II</span>
              <h3>Logistics &amp; Transportation</h3>
              <p>
                Scheduled and STAT transportation programs — lab and pharmacy courier, STAT
                delivery, and special mode transport built on route engineering and chain-of-custody
                discipline.
              </p>
            </div>
            <div className="prog-row reveal">
              <span className="idx">III</span>
              <h3>Staffing &amp; Administrative</h3>
              <p>
                Managed workforce services — switchboard and call center operations, ID card and
                DEERS support, and administrative staffing with SCA compliance and QASP-ready
                reporting.
              </p>
            </div>
            <div className="prog-row reveal">
              <span className="idx">IV</span>
              <h3>Facilities &amp; Security</h3>
              <p>
                Grounds maintenance, site security, and facility support delivered through licensed,
                vetted teaming partners under a single accountable SDVOSB prime.
              </p>
            </div>
            <div className="prog-row reveal">
              <span className="idx">V</span>
              <h3>Technology &amp; Data</h3>
              <p>
                Data engineering, analytics, and digital modernization support that turns agency data
                into decision-ready insight.
              </p>
            </div>

            <div className="timeline">
              <div className="tl now reveal">
                <p className="when">Step one</p>
                <h3>Assess the mission</h3>
                <p>
                  We map requirements, constraints, and success criteria — reading the solicitation,
                  the operation, and the stakeholders with equal care.
                </p>
              </div>
              <div className="tl reveal d1">
                <p className="when">Step two</p>
                <h3>Build the plan</h3>
                <p>
                  Staffing, compliance, and execution plans with named leads, clear milestones, and
                  pricing that holds up under evaluation.
                </p>
              </div>
              <div className="tl reveal d2">
                <p className="when">Step three</p>
                <h3>Execute &amp; report</h3>
                <p>
                  Disciplined delivery with performance metrics, transparent reporting, and
                  continuous improvement through the life of the engagement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ WHO WE SERVE ═══ */}
        <section className="serve-band" id="serve">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-num reveal">Who we serve</span>
              <div>
                <h2 className="reveal" style={{ color: '#fff' }}>
                  Federal agencies and the{' '}
                  <span className="it" style={{ color: 'var(--gold-soft)' }}>
                    primes who serve them.
                  </span>
                </h2>
                <p className="lead reveal d1">
                  Whether you&apos;re a contracting officer with a set-aside requirement or a large
                  business building a compliant team, we bring the same standard: do the mission
                  right, the first time.
                </p>
              </div>
            </div>
            <div className="split">
              <div className="half reveal">
                <h3>Federal Agencies</h3>
                <p className="sub-t">Direct award · Set-aside</p>
                <ul>
                  <li>SDVOSB set-aside eligible for direct and competitive awards</li>
                  <li>Active SAM.gov registration with clean, current entity data</li>
                  <li>Deep fluency in FAR-based procurement and contract compliance</li>
                  <li>Responsive, accountable, veteran-led performance</li>
                </ul>
              </div>
              <div className="half reveal d1">
                <h3>Prime Contractors</h3>
                <p className="sub-t">Teaming · Subcontracting</p>
                <ul>
                  <li>SDVOSB teaming partner for small business subcontracting goals</li>
                  <li>Disciplined execution that protects your past performance record</li>
                  <li>Clear scopes, clean handoffs, and proactive communication</li>
                  <li>Commercial services available for private-sector clients</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ CAPABILITY ═══ */}
        <section className="refer" id="capability">
          <div className="wrap">
            <div className="frame">
              <div className="sec-head" style={{ marginBottom: 0 }}>
                <span className="sec-num reveal">For contracting officers</span>
                <div>
                  <h2 className="reveal">
                    Vetting us should take <span className="it">minutes, not weeks.</span>
                  </h2>
                  <p className="lead reveal d1">
                    Everything you need to verify, evaluate, and engage Izy Global Services — in one
                    place.
                  </p>
                </div>
              </div>
              <div className="grid">
                <ol className="steps">
                  <li className="reveal">
                    Verify our registration on SAM.gov using CAGE 949Y3 or UEI WLDNTVNK9SC7 —
                    active, current, and set-aside certified.
                  </li>
                  <li className="reveal d1">
                    Request our capability statement by email. It arrives within one business day,
                    tailored to your requirement.
                  </li>
                  <li className="reveal d2">
                    Schedule a capabilities briefing. We come prepared with relevant experience,
                    staffing approach, and pricing philosophy.
                  </li>
                  <li className="reveal d3">
                    Engage with confidence. Named leads, clear milestones, and reporting your office
                    can rely on.
                  </li>
                </ol>
                <div className="promise-card reveal d1">
                  <h3>Federal registry</h3>
                  <div className="reg-rows">
                    <div className="rr"><span className="k">CAGE</span><span className="v">949Y3</span></div>
                    <div className="rr"><span className="k">UEI</span><span className="v">WLDNTVNK9SC7</span></div>
                    <div className="rr"><span className="k">Status</span><span className="v">SDVOSB Certified</span></div>
                    <div className="rr"><span className="k">Registration</span><span className="v">SAM.gov Active</span></div>
                    <div className="rr"><span className="k">HQ</span><span className="v">Houston, Texas</span></div>
                  </div>
                  <a
                    className="btn btn-gold"
                    style={{ marginTop: '30px' }}
                    href="mailto:contracts@izyglobalservices.com?subject=Capability%20Statement%20Request"
                  >
                    Request capability statement <span className="arr">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ ABOUT ═══ */}
        <section className="about" id="about">
          <div className="wrap">
            <div className="quote-wrap">
              <span className="qmark reveal">&quot;</span>
              <blockquote className="reveal d1">
                The discipline that carries a mission through in uniform is the same discipline that
                carries a contract through to performance.
              </blockquote>
              <p className="attribution reveal d2">— Founder, Izy Global Services</p>
              <p className="story reveal d3">
                Izy Global Services is a Service-Disabled Veteran-Owned Small Business headquartered
                in Houston, Texas, founded by an active U.S. Army Reserve service member. Our past
                performance is anchored in VA healthcare logistics, and our reach extends across DoD
                and civilian requirements through disciplined execution and a vetted teaming network
                — with the accountability our clients expect from a veteran-led firm.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ ENGAGE ═══ */}
        <section id="involve">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-num reveal">Ways to engage</span>
              <div>
                <h2 className="reveal">
                  Three doors. All of them <span className="it">open.</span>
                </h2>
              </div>
            </div>
            <div className="doors">
              <div className="door reveal">
                <div className="glyph">01</div>
                <h3>Prime Contract</h3>
                <p>
                  Direct or set-aside awards across our five capability domains — performed by us,
                  accountable to you.
                </p>
                <a href="mailto:contracts@izyglobalservices.com?subject=Prime%20Contract%20Inquiry">
                  Discuss a requirement
                </a>
              </div>
              <div className="door reveal d1">
                <div className="glyph">02</div>
                <h3>Teaming Partner</h3>
                <p>
                  SDVOSB subcontracting and joint pursuit for primes building compliant, capable
                  teams on federal opportunities.
                </p>
                <a href="mailto:contracts@izyglobalservices.com?subject=Teaming%20Inquiry">
                  Explore teaming
                </a>
              </div>
              <div className="door reveal d2">
                <div className="glyph">03</div>
                <h3>Commercial Services</h3>
                <p>
                  Private-sector logistics, staffing, and technology services delivered with the same
                  disciplined federal standard.
                </p>
                <a href="mailto:contracts@izyglobalservices.com?subject=Commercial%20Services%20Inquiry">
                  Start a conversation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ CONTACT ═══ */}
        <section className="contact" id="contact">
          <div className="wrap">
            <div className="grid">
              <div>
                <span
                  className="sec-num reveal"
                  style={{ color: 'var(--gold)', borderTopColor: 'var(--gold)', display: 'inline-block' }}
                >
                  Contact
                </span>
                <h2 className="reveal" style={{ marginTop: '18px' }}>
                  Ready to put veteran-led expertise to{' '}
                  <span className="it" style={{ color: 'var(--gold-soft)' }}>work?</span>
                </h2>
                <p className="note reveal d1" style={{ marginTop: '18px' }}>
                  Let&apos;s talk about your next contract, transformation initiative, or operational
                  challenge. We respond within one business day.
                </p>
              </div>
              <div>
                <a className="big-link reveal" href="mailto:contracts@izyglobalservices.com">
                  <small>Email</small>contracts@izyglobalservices.com
                </a>
                <span className="big-link reveal d1" style={{ cursor: 'default' }}>
                  <small>Headquarters</small>Houston, Texas
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <div>
            <b>Izy Global Services</b> &nbsp;·&nbsp; SDVOSB Federal Mission Support &nbsp;·&nbsp;
            Houston, Texas
          </div>
          <div>
            CAGE 949Y3 &nbsp;·&nbsp; UEI WLDNTVNK9SC7 &nbsp;·&nbsp; © 2026 Izy Global Services LLC
          </div>
        </div>
      </footer>
    </>
  );
}
