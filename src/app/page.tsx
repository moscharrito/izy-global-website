'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const hdr = document.getElementById('hdr');
    const onScroll = () => hdr?.classList.toggle('scrolled', window.scrollY > 20);
    addEventListener('scroll', onScroll);

    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

    return () => {
      removeEventListener('scroll', onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <>
      <header id="hdr">
        <div className="wrap nav">
          <a className="brand" href="#">
            <span className="mark">Izy</span>
            <b>Izy Global Services</b>
          </a>
          <nav className="navlinks">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href="#contact">
            <button className="btn btn-gold">Get a Quote</button>
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="grain"></div>
        <div className="glow g1"></div>
        <div className="glow g2"></div>
        <div className="wrap">
          <span className="eyebrow reveal">
            <span className="dot"></span>Service-Disabled Veteran-Owned Small Business
          </span>
          <h1 className="reveal" style={{ transitionDelay: '.08s' }}>
            Strategic consulting,<br />executed with <em>military precision.</em>
          </h1>
          <p className="lede reveal" style={{ transitionDelay: '.16s' }}>
            Izy Global Services helps federal and commercial organizations transform operations,
            modernize technology, and win on contract performance — led by veterans who understand
            the mission.
          </p>
          <div className="hero-cta reveal" style={{ transitionDelay: '.24s' }}>
            <a href="#contact">
              <button className="btn btn-gold">Start a Conversation →</button>
            </a>
            <a href="#services">
              <button className="btn btn-ghost">Explore Services</button>
            </a>
          </div>
          <div className="creds">
            <div className="cred reveal" style={{ transitionDelay: '.3s' }}>
              <div className="k">949Y3</div>
              <div className="l">CAGE Code</div>
            </div>
            <div className="cred reveal" style={{ transitionDelay: '.36s' }}>
              <div className="k">WLDNTVNK9SC7</div>
              <div className="l">UEI Number</div>
            </div>
            <div className="cred reveal" style={{ transitionDelay: '.42s' }}>
              <div className="k">SAM.gov</div>
              <div className="l">Active Registration</div>
            </div>
            <div className="cred reveal" style={{ transitionDelay: '.48s' }}>
              <div className="k">Houston, TX</div>
              <div className="l">Headquarters</div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" id="about">
        <div className="wrap">
          <div className="sec-tag reveal">Who We Are</div>
          <h2 className="reveal" style={{ transitionDelay: '.06s' }}>
            A trusted SDVOSB partner built on service and results.
          </h2>
          <div className="about-grid">
            <div className="reveal" style={{ transitionDelay: '.1s' }}>
              <p>
                Izy Global Services is a Service-Disabled Veteran-Owned Small Business headquartered
                in Houston, Texas. We pair deep federal procurement experience with technology and
                operational expertise to drive organizational transformation and deliver measurable
                business outcomes.
              </p>
              <p>
                Our work spans strategic planning, supply-chain and process optimization,
                government-contract performance, and digital transformation — delivered with the
                discipline and accountability our clients expect from a veteran-led firm.
              </p>
              <ul className="checks">
                <li><span className="ic">✓</span>Strategic business consulting expertise</li>
                <li><span className="ic">✓</span>Proven SDVOSB partner with active SAM.gov registration</li>
                <li><span className="ic">✓</span>Technology &amp; operational excellence</li>
                <li><span className="ic">✓</span>Measurable, mission-focused outcomes</li>
              </ul>
            </div>
            <div className="panel reveal" style={{ transitionDelay: '.16s' }}>
              <h3>Why partner with Izy?</h3>
              <div className="stat">
                <div className="big">Veteran-Led</div>
                <div className="cap">Discipline, integrity, and accountability on every engagement</div>
              </div>
              <div className="stat">
                <div className="big">Federal-Ready</div>
                <div className="cap">Set-aside eligible with deep procurement fluency</div>
              </div>
              <div className="stat">
                <div className="big">Outcome-Driven</div>
                <div className="cap">Strategy translated into measurable performance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec cap-sec" id="capabilities">
        <div className="wrap">
          <div className="sec-tag reveal">Our Capabilities</div>
          <h2 className="reveal" style={{ transitionDelay: '.06s' }}>
            Consulting solutions for transformation and contracting.
          </h2>
          <p className="sub reveal" style={{ transitionDelay: '.1s' }}>
            Four core practice areas, each grounded in operational rigor and federal contracting
            fluency.
          </p>
          <div className="cards" id="services">
            <div className="card reveal">
              <div className="num">01</div>
              <div className="cic">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3>Strategic Business Transformation</h3>
              <p>
                Comprehensive consulting that drives organizational change, optimizes processes, and
                delivers measurable results through strategic planning and disciplined execution.
              </p>
              <a href="#contact" className="more">
                Learn more{' '}
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="card reveal" style={{ transitionDelay: '.08s' }}>
              <div className="num">02</div>
              <div className="cic">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3>Operational Excellence Consulting</h3>
              <p>
                Supply-chain and operational consulting that streamlines processes, reduces cost, and
                improves performance across your organization.
              </p>
              <a href="#contact" className="more">
                Learn more{' '}
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="card reveal" style={{ transitionDelay: '.16s' }}>
              <div className="num">03</div>
              <div className="cic">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3>Government Contracting Excellence</h3>
              <p>
                Strategic consulting for contracting success, leveraging SDVOSB certification and deep
                federal procurement expertise to optimize performance and compliance.
              </p>
              <a href="#contact" className="more">
                Learn more{' '}
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="card reveal" style={{ transitionDelay: '.24s' }}>
              <div className="num">04</div>
              <div className="cic">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3>Technology &amp; Digital Transformation</h3>
              <p>
                Technology consulting that aligns IT capabilities with business objectives, driving
                modernization and competitive advantage through practical, scalable solutions.
              </p>
              <a href="#contact" className="more">
                Learn more{' '}
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="band" id="contact">
        <div className="grain"></div>
        <div className="glow g1" style={{ opacity: '.6' }}></div>
        <div className="wrap">
          <h2 className="reveal">Ready to put veteran-led expertise to work?</h2>
          <p className="reveal" style={{ transitionDelay: '.06s' }}>
            Let&apos;s talk about your next contract, transformation initiative, or operational
            challenge.
          </p>
          <div className="reveal" style={{ transitionDelay: '.12s' }}>
            <a href="mailto:contracts@izyglobalservices.com">
              <button className="btn btn-gold">contracts@izyglobalservices.com</button>
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="foot">
            <div>
              <a className="brand" href="#">
                <span className="mark">Izy</span>
                <b>Izy Global Services</b>
              </a>
              <p>
                Strategic business consulting &amp; transformation — delivered with veteran-led
                excellence.
              </p>
              <a className="line" href="mailto:contracts@izyglobalservices.com">
                contracts@izyglobalservices.com
              </a>
              <a className="line" href="tel:346-483-6266">346-483-6266</a>
              <a className="line">Houston, Texas</a>
            </div>
            <div>
              <h4>Navigate</h4>
              <a className="line" href="#about">About</a>
              <a className="line" href="#services">Services</a>
              <a className="line" href="#capabilities">Capabilities</a>
              <a className="line" href="#contact">Contact</a>
            </div>
            <div>
              <h4>Credentials</h4>
              <div className="badge"><span className="d"></span>SDVOSB Certified</div>
              <div className="badge"><span className="d"></span>SAM.gov Registered</div>
              <div style={{ marginTop: '18px' }}>
                <div style={{ fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.4)' }}>CAGE</div>
                <div style={{ fontWeight: 600, fontSize: '15px' }}>949Y3</div>
              </div>
              <div style={{ marginTop: '12px' }}>
                <div style={{ fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.4)' }}>UEI</div>
                <div style={{ fontWeight: 600, fontSize: '15px' }}>WLDNTVNK9SC7</div>
              </div>
            </div>
          </div>
          <div className="copy">© 2026 Izy Global Services LLC. All Rights Reserved.</div>
        </div>
      </footer>
    </>
  );
}
