import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const projects = [
  {
    num: '04 — Experiential Design',
    title: <>TEDxCU<br />2025</>,
    subtitle: 'Audience Experience Lead',
    desc: 'As Audience Experience Lead for TEDxCU — an independently organized TED event drawing 1,000+ people annually — I designed and built a series of interactive installations for the 2025 theme "Anomaly." Each piece was tailored to a specific speaker\'s story, built in the wood shop, and deployed across a historic venue where nothing could touch the walls.',
    tags: ['Installation', 'Experience Design', 'Adobe Illustrator', 'SketchUp', 'Fabrication'],
    img: '/03/portfolios-03_0008_Layer-1.png',
    alt: 'TEDxCU Experiential Design',
    href: '/work/tedxcu',
  },
  {
    num: '08 — Graphic Design',
    title: <>Colorado<br />Symphony</>,
    subtitle: 'Poster Mailer — 2022/2023 Season',
    desc: 'Given scrambled, unformatted event data, I designed a foldable poster mailer for the Colorado Symphony Classics season. Inspired by the abstracted black and white keys of a piano, I developed a bold typographic system in Adobe Illustrator — balancing visual impact with informational hierarchy.',
    tags: ['Print Design', 'Typography', 'Adobe Illustrator', 'Information Design'],
    img: '/05/portfolios-05_0000_Layer-2.png',
    alt: 'Colorado Symphony Poster Mailer',
    href: null,
  },
  {
    num: '10 — Graphic Design',
    title: <>Atlas Zine<br />Covers</>,
    subtitle: 'Experimental Typography — 2024',
    desc: 'Designed covers for the 2024 Experimental Typography Zine produced at the University of Colorado Boulder. Using variable pixel fonts ranging in fidelity, I applied Extrude & Bevel features and lighting/shading effects in Adobe Illustrator to produce layered, dimensional type compositions.',
    tags: ['Experimental Typography', 'Variable Fonts', 'Adobe Illustrator', 'Editorial'],
    img: '/06/portfolios-06_0000_Layer-2.png',
    alt: 'Experimental Typography Zine Covers',
    href: null,
  },
  {
    num: '11 — Graphic Design',
    title: <>Bluebird<br />Sparkling Water</>,
    subtitle: 'Product Branding',
    desc: 'End-to-end product branding for Bluebird Sparkling Water — originally designed in Adobe Illustrator and rendered in Adobe Dimension. The project required studying current sparkling water branding trends to produce something genuinely marketable, while developing skills in typographic layout and 3D rendering.',
    tags: ['Brand Identity', 'Packaging', 'Adobe Illustrator', 'Adobe Dimension', '3D Render'],
    img: '/02/portfolios-02_0000_Layer-2.png',
    alt: 'Bluebird Sparkling Water Branding',
    href: null,
  },
]

export default function Portfolio() {
  useEffect(() => {
    const nav = document.getElementById('nav')
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 60)
    window.addEventListener('scroll', onScroll)

    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), 60)
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08 })
    reveals.forEach(el => observer.observe(el))

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      {/* WATERMARK */}
      <div className="watermark" aria-hidden="true">
        {Array.from({ length: 10 }).map((_, i) => (
          <div className="watermark-row" key={i}>
            <span>LILA ANSON</span><span>LILA ANSON</span>
            <span>LILA ANSON</span><span>LILA ANSON</span>
          </div>
        ))}
      </div>

      {/* NAV */}
      <nav id="nav">
        <a className="nav-logo" href="#hero">Lila Anson</a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="hero-center">
          <p className="hero-eyebrow">Designer &amp; Creative Director — Boulder, CO</p>
          <h1 className="hero-name">
            LILA
            <span className="line2">Anson</span>
          </h1>
          <div className="hero-rule"></div>
        </div>
        <div className="hero-bottom">
          <p className="hero-tagline">
            <strong>Encouraging radical collaboration and discovery</strong> through experimental design, typography, and experiential installation.
          </p>
          <div className="hero-index">
            <div className="hero-index-item"><span className="num">02</span><span>Introduction</span></div>
            <div className="hero-index-item"><span className="num">04</span><span>Experiential Design</span></div>
            <div className="hero-index-item"><span className="num">08</span><span>Graphic Design</span></div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work">
        <div className="section-header reveal">
          <span className="label">Selected Work</span>
          <div className="rule"></div>
        </div>
        <div className="projects">
          {projects.map((p, i) => (
            <div className="project reveal" key={i}>
              <div className="project-image">
                <img src={p.img} alt={p.alt} />
              </div>
              <div className="project-info">
                <div className="project-top">
                  <span className="proj-num">{p.num}</span>
                  <h2 className="proj-title">{p.title}</h2>
                  <p className="proj-subtitle">{p.subtitle}</p>
                  <p className="proj-desc">{p.desc}</p>
                </div>
                <div className="proj-bottom">
                  <div className="proj-tags">
                    {p.tags.map((tag) => (
                      <span className="proj-tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                  {p.href && (
                    <Link className="proj-cta" to={p.href}>
                      View Case Study <span className="proj-cta-arrow">→</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="about-sticky reveal">
          <h2 className="about-heading">
            The<br />
            <em>Work</em><br />
            &amp; the<br />
            <em>Eye</em>
          </h2>
          <div className="about-star">✦</div>
        </div>
        <div className="about-body">
          <p className="reveal">
            As a designer, I align my work with one goal: to <strong>encourage radical collaboration and discovery.</strong> This 'North Star' guides me through the fields of experimental and experiential design, typography, and installation.
          </p>
          <p className="reveal">
            My background spans <strong>graphic design, experiential production, and print</strong> — from designing immersive TED event environments for 1,000+ attendees to crafting bold typographic systems for print. I'm drawn to work that communicates complexity with clarity, and that invites people in rather than holding them at arm's length.
          </p>
          <p className="reveal">
            Based in Boulder, Colorado. Currently studying at the <strong>University of Colorado Boulder.</strong>
          </p>
          <div className="about-disciplines reveal">
            <div className="discipline-row">
              <span className="disc-name">Experiential Design</span>
              <span className="disc-tools">SketchUp, Illustrator, Fabrication</span>
            </div>
            <div className="discipline-row">
              <span className="disc-name">Typography</span>
              <span className="disc-tools">Variable Fonts, Print, Editorial</span>
            </div>
            <div className="discipline-row">
              <span className="disc-name">Brand &amp; Packaging</span>
              <span className="disc-tools">Illustrator, Adobe Dimension</span>
            </div>
            <div className="discipline-row">
              <span className="disc-name">Print &amp; Poster</span>
              <span className="disc-tools">Illustrator, InDesign</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <p className="contact-eyebrow reveal">Get in touch</p>
        <h2 className="contact-heading reveal">
          Let's<br />
          <em>work</em><br />
          together
        </h2>
        <div className="contact-links reveal">
          <a className="contact-link primary" href="mailto:hello@lilaanson.com">hello@lilaanson.com</a>
          <a className="contact-link" href="#" target="_blank" rel="noreferrer">Instagram</a>
          <a className="contact-link" href="#" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="contact-link" href="https://lilaanson.com" target="_blank" rel="noreferrer">lilaanson.com</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Lila Anson</p>
        <p>Designer — Boulder, Colorado</p>
      </footer>
    </>
  )
}
