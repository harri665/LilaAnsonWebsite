import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const base = import.meta.env.BASE_URL

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

      {/* INTRODUCTION */}
      <section id="intro">
        <div className="work-rh reveal">
          <span>02</span>
          <span className="work-rh-title">Introduction</span>
          <span />
        </div>
        <div className="intro-body reveal">
          <div className="intro-images">
            <img src={`${base}02/portfolios-02_0000_Layer-2.png`} alt="Lila Anson — portrait" />
          </div>
          <p className="intro-text">
            As a designer, I align my<br />
            work with one goal: to<br />
            encourage radical collaboration<br />
            and discovery. This &lsquo;North<br />
            Star&rsquo; guides me through the<br />
            fields of experimental and<br />
            experiential design, typography,<br />
            and installation.
          </p>
        </div>
      </section>

      {/* WORK */}
      <section id="work">
        <div className="work-rh reveal">
          <span>00</span>
          <span className="work-rh-title">Index</span>
          <span />
        </div>

        <div className="work-index">

          {/* TEDxCU (04) — top right */}
          <div className="wi-item wi-tedxcu reveal">
            <Link to="/work/tedxcu">
              <img src={`${base}03/portfolios-03_0005_Layer-7.png`} alt="TEDxCU Experiential Design" />
            </Link>
            <div className="wi-meta">
              <span className="wi-pgnum">(04)</span>
              <span className="wi-hand">TEDxCU!</span>
            </div>
          </div>

          {/* Colorado Symphony (08) — middle left */}
          <div className="wi-item wi-colorado reveal">
            <span className="wi-hand wi-hand--above">(Colorado Symphony<br />Poster Mailer)</span>
            <Link to="/work/colorado-symphony">
              <img src={`${base}05/portfolios-05_0001_Layer-3.png`} alt="Colorado Symphony Poster Mailer" />
            </Link>
            <span className="wi-pgnum wi-pgnum--below">(08)</span>
          </div>

          {/* Zine Covers (10) — lower right */}
          <div className="wi-item wi-zine reveal">
            <span className="wi-pgnum wi-pgnum--above">(10)</span>
            <Link to="/work/zine">
              <img src={`${base}06/portfolios-06_0000_Layer-2.png`} alt="Experimental Typography Zine Covers" />
            </Link>
            <span className="wi-hand wi-hand--below">Zine<br />Covers...</span>
          </div>

          {/* Bluebird (11) — lower left */}
          <div className="wi-item wi-bluebird reveal">
            <span className="wi-hand wi-hand--above">BLUEBIRD<br />Sparkling Water :)</span>
            <Link to="/work/bluebird">
              <img src={`${base}06/portfolios-06_0003_Layer-5.png`} alt="Bluebird Sparkling Water Branding" />
            </Link>
            <span className="wi-pgnum wi-pgnum--below">(11)</span>
          </div>

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
          <img src={`${base}global/star.png`} alt="" className="about-star" />
        </div>
        <div className="about-body">
          <p className="reveal">
            As a designer, I align my work with one goal: to <strong>encourage radical collaboration and discovery.</strong> This 'North Star' guides me through the fields of experimental and experiential design, typography, and installation.
          </p>
          <p className="reveal">
            My background spans <strong>graphic design, experiential production, and print</strong> — from designing immersive TED event environments for 1,000+ attendees to crafting bold typographic systems for print. I'm drawn to work that communicates complexity with clarity, and that invites people in rather than holding them at arm's length.
          </p>
          <p className="reveal">
            Based in Boulder, Colorado. Graduated from the <strong>University of Colorado Boulder.</strong>
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
          <a className="contact-link primary" href="mailto:lilaeanson@gmail.com">lilaeanson@gmail.com</a>
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
