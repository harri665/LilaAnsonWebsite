import { useEffect } from 'react'
import './portfolio.css'

export default function Home() {
  useEffect(() => {
    // Nav scroll behavior
    const nav = document.getElementById('main-nav')
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })

    // Scroll reveal
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), 60)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 }
    )
    reveals.forEach((el) => observer.observe(el))

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      {/* ── Watermark ── */}
      <div className="watermark" aria-hidden="true">
        {Array.from({ length: 10 }).map((_, i) => (
          <div className="watermark-row" key={i}>
            <span>LILA ANSON</span><span>LILA ANSON</span>
            <span>LILA ANSON</span><span>LILA ANSON</span>
          </div>
        ))}
      </div>

      {/* ── Nav ── */}
      <nav id="main-nav">
        <a className="nav-logo" href="#hero">Lila Anson</a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* ══════════════════════════════════════
          HERO
          ══════════════════════════════════════ */}
      <section id="hero">
        <div className="hero-center">
          <p className="hero-eyebrow">Designer &amp; Creative Director — Boulder, CO</p>
          <h1 className="hero-name">
            LILA
            <span className="line2">Anson</span>
          </h1>
          <div className="hero-rule" />
        </div>
        <div className="hero-bottom">
          <p className="hero-tagline">
            <strong>Encouraging radical collaboration and discovery</strong> through
            experimental design, typography, and experiential installation.
          </p>
          <div className="hero-index">
            <div className="hero-index-item"><span className="num">02</span><span>Introduction</span></div>
            <div className="hero-index-item"><span className="num">04</span><span>Experiential Design</span></div>
            <div className="hero-index-item"><span className="num">08</span><span>Graphic Design</span></div>
          </div>
        </div>

        {/* Hero thumbnail strip — folder 01 preview images */}
        <div className="hero-thumbs">
          <div className="hero-thumb-item">
            <img src="/01/portfolios-03_0005_Layer-7.png" alt="Red X decorative shape" />
          </div>
          <div className="hero-thumb-item">
            <img src="/01/portfolios-05_0001_Layer-3.png" alt="Colorado Symphony poster preview" />
          </div>
          <div className="hero-thumb-item">
            <img src="/01/portfolios-06_0000_Layer-2.png" alt="Experimental typography zine cover preview" />
          </div>
          <div className="hero-thumb-item">
            <img src="/01/portfolios-06_0003_Layer-5.png" alt="Bluebird sparkling water can preview" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WORK
          ══════════════════════════════════════ */}
      <section id="work">
        <div className="section-header reveal">
          <span className="label">Selected Work</span>
          <div className="rule" />
        </div>

        <div className="spreads">

          {/* ── SPREAD 04–05 — TEDxCU Intro ── */}
          <div className="spread reveal">
            <div className="spread-hdr">
              <span className="pg">04</span>
              <span className="sec">Experiential Design</span>
              <span className="pg pg-r">05</span>
            </div>
            <div className="spread-pages">
              {/* Left page */}
              <div className="sp">
                <span className="sp-label">04 — Experiential Design</span>
                <h2 className="sp-display">
                  TEDx<span className="sp-display-italic">CU</span><br />
                  2025
                </h2>
                <p className="sp-display-sm">Audience Experience Lead</p>
                <div className="sp-accent-border">
                  <p className="sp-body">
                    As Audience Experience Lead for TEDxCU — an independently organized TED event
                    drawing 1,000+ people annually — I designed and built a series of interactive
                    installations for the 2025 theme &ldquo;Anomaly.&rdquo; Each piece was tailored
                    to a specific speaker&rsquo;s story, built in the wood shop, and deployed across
                    a historic venue where nothing could touch the walls.
                  </p>
                </div>
                <div className="sp-year-row">
                  <img src="/03/portfolios-03_0001_Layer-3.png" alt="TEDxCU 2017 Chain Reaction badge" />
                  <img src="/03/portfolios-03_0002_Layer-4.png" alt="TEDxCU 2018 Game Changer badge" />
                  <img src="/03/portfolios-03_0003_Layer-5.png" alt="TEDxCU 2019 Push and Pull badge" />
                </div>
                <div className="sp-tags">
                  {['Installation', 'Experience Design', 'Adobe Illustrator', 'SketchUp', 'Fabrication'].map(t => (
                    <span className="sp-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
              {/* Right page */}
              <div className="sp">
                <img
                  className="sp-img sp-img-full sp-img-shadow"
                  src="/03/portfolios-03_0000_Layer-2.png"
                  alt="Crafting Connection — Laureal Boston speaker page"
                />
                <p className="sp-caption">Speaker Installation — &ldquo;Crafting Connection&rdquo; · Laureal Boston</p>
                <img
                  className="sp-img sp-img-full"
                  src="/03/portfolios-03_0004_Layer-6.png"
                  alt="Audience member viewing the timeline installation"
                  style={{ marginTop: 12 }}
                />
                <p className="sp-caption">Audience engagement · Timeline installation</p>
              </div>
            </div>
          </div>

          {/* ── EVENT PHOTO GALLERY ── */}
          <div className="event-gallery reveal">
            {[
              { src: '/04/portfolios-04_0004_Layer-6.png', alt: 'Event photo — Life, Death, and AI' },
              { src: '/04/portfolios-04_0005_Layer-7.png', alt: 'Event photo — Cost of Capitalism' },
              { src: '/04/portfolios-04_0006_Layer-8.png', alt: 'Event photo — Rise of Speed' },
              { src: '/04/portfolios-04_0007_Layer-9.png', alt: 'Event photo — Rethinking Roots' },
            ].map((p) => (
              <div className="event-gallery-item" key={p.src}>
                <img src={p.src} alt={p.alt} />
              </div>
            ))}
          </div>

          {/* ── SPREAD 06–07 — TEDxCU Process ── */}
          <div className="spread reveal">
            <div className="spread-hdr">
              <span className="pg">06</span>
              <span className="sec">Experiential Design</span>
              <span className="pg pg-r">07</span>
            </div>
            <div className="spread-pages">
              {/* Left page */}
              <div className="sp">
                <span className="sp-label">Process &amp; Fabrication</span>
                <h2 className="sp-display sp-display-italic">Behind the<br />Anomaly</h2>
                <p className="sp-body">
                  Every installation began as a conversation with the speaker — understanding
                  their story before sketching concepts. January 2025 planning sessions mapped
                  the full venue flow, with each piece positioned to guide audience movement
                  between talks.
                </p>
                <p className="sp-body" style={{ marginTop: 14 }}>
                  Constraints drove creativity: no walls could be marked, no permanent fixtures
                  installed. Everything had to be freestanding, load-bearing, and removable.
                  Materials were sourced from the wood shop and hand-finished to match the
                  venue&rsquo;s aesthetic.
                </p>
                <img
                  className="sp-img sp-img-full"
                  src="/04/portfolios-04_0002_Layer-4.png"
                  alt="January 2025 planning sketch"
                  style={{ marginTop: 16, marginBottom: 4 }}
                />
                <p className="sp-caption">Planning sketch · January 2025</p>
                <img
                  className="sp-img sp-img-full sp-img-shadow"
                  src="/04/portfolios-04_0000_Layer-2.png"
                  alt="Life, Death, and AI full installation display"
                  style={{ marginTop: 12, marginBottom: 4 }}
                />
                <p className="sp-caption">Final installation · &ldquo;Life, Death, and AI&rdquo;</p>
              </div>
              {/* Right page */}
              <div className="sp">
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 8 }}>
                  <img
                    src="/03/portfolios-03_0005_Layer-7.png"
                    alt="Red 3D X decorative"
                    style={{ width: '28%', transform: 'rotate(6deg)' }}
                  />
                </div>
                <div className="sp-img-grid2">
                  <div>
                    <img className="sp-img sp-img-full sp-img-shadow" src="/04/portfolios-04_0001_Layer-3.png" alt="A-frame Ovuli of Imagination sandwich board" />
                    <p className="sp-caption">A-frame · &ldquo;Ovuli of Imagination&rdquo;</p>
                  </div>
                  <div>
                    <img className="sp-img sp-img-full sp-img-shadow" src="/04/portfolios-04_0003_Layer-5.png" alt="Gallery with grid pattern artworks" />
                    <p className="sp-caption">Gallery · Grid pattern installation</p>
                  </div>
                  <div>
                    <img className="sp-img sp-img-full sp-img-shadow" src="/03/portfolios-03_0006_Layer-8.png" alt="SketchUp installation panel mockup" />
                    <p className="sp-caption">SketchUp · Panel mockup</p>
                  </div>
                  <div>
                    <img className="sp-img sp-img-full sp-img-shadow" src="/03/portfolios-03_0007_Layer-9.png" alt="Wooden easel and poster stand" />
                    <p className="sp-caption">Fabrication · Easel stand</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── SPREAD 08–09 — Colorado Symphony ── */}
          <div className="spread reveal">
            <div className="spread-hdr">
              <span className="pg">08</span>
              <span className="sec">Graphic Design</span>
              <span className="pg pg-r">09</span>
            </div>
            <div className="spread-pages">
              {/* Left page */}
              <div className="sp">
                <span className="sp-label">08 — Graphic Design</span>
                <h2 className="sp-display">
                  Colorado<br />
                  <span className="sp-display-italic">Symphony</span>
                </h2>
                <p className="sp-display-sm">Poster Mailer — 2022/2023 Season</p>
                <img
                  className="sp-img sp-img-full sp-img-shadow"
                  src="/05/portfolios-05_0001_Layer-3.png"
                  alt="Colorado Symphony 2022–2023 Classics poster"
                  style={{ marginTop: 8 }}
                />
              </div>
              {/* Right page */}
              <div className="sp">
                <div className="sp-accent-border" style={{ marginBottom: 20 }}>
                  <p className="sp-body">
                    Given scrambled, unformatted event data, I designed a foldable poster mailer
                    for the Colorado Symphony Classics season. Inspired by the abstracted black
                    and white keys of a piano, I developed a bold typographic system in Adobe
                    Illustrator — balancing visual impact with informational hierarchy.
                  </p>
                </div>
                <p className="sp-body">
                  The mailer folds to a compact mailing format and unfolds to reveal the full
                  season calendar. Typography scales from headline display weight down to
                  event-level detail, maintaining legibility across all reading distances.
                </p>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}>
                  <div style={{ width: '58%' }}>
                    <img
                      className="sp-img sp-img-full sp-img-shadow"
                      src="/05/portfolios-05_0000_Layer-2.png"
                      alt="Symphony mailer back with event text"
                    />
                    <p className="sp-caption">Mailer reverse · Season calendar detail</p>
                  </div>
                </div>
                <div className="sp-tags" style={{ marginTop: 'auto' }}>
                  {['Print Design', 'Typography', 'Adobe Illustrator', 'Information Design'].map(t => (
                    <span className="sp-tag" key={t}>{t}</span>
                  ))}
                </div>
                <div className="sp-bar" />
              </div>
            </div>
          </div>

          {/* ── SPREAD 10–11 — Zine + Bluebird ── */}
          <div className="spread reveal">
            <div className="spread-hdr">
              <span className="pg">10</span>
              <span className="sec">Graphic Design</span>
              <span className="pg pg-r">11</span>
            </div>
            <div className="spread-pages">
              {/* Left page — Zine Covers */}
              <div className="sp">
                <span className="sp-label">10 — Graphic Design</span>
                <h2 className="sp-display">
                  Atlas Zine<br />
                  <span className="sp-display-italic">Covers</span>
                </h2>
                <p className="sp-display-sm">Experimental Typography — 2024</p>
                <p className="sp-body">
                  Designed covers for the 2024 Experimental Typography Zine produced at the
                  University of Colorado Boulder. Using variable pixel fonts ranging in fidelity,
                  I applied Extrude &amp; Bevel features and lighting/shading effects in Adobe
                  Illustrator to produce layered, dimensional type compositions.
                </p>
                <div className="sp-img-grid2" style={{ marginTop: 16 }}>
                  <div>
                    <img className="sp-img sp-img-full sp-img-shadow" src="/06/portfolios-06_0000_Layer-2.png" alt="Experimental Typography 2024 — 3D red cover" />
                    <p className="sp-caption">Cover A · 3D extrude</p>
                  </div>
                  <div>
                    <img className="sp-img sp-img-full sp-img-shadow" src="/06/portfolios-06_0001_Layer-3.png" alt="Experimental Typography 2024 — pixel art cover" />
                    <p className="sp-caption">Cover B · Pixel art</p>
                  </div>
                </div>
                <div className="sp-tags">
                  {['Experimental Typography', 'Variable Fonts', 'Adobe Illustrator', 'Editorial'].map(t => (
                    <span className="sp-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
              {/* Right page — Bluebird */}
              <div className="sp">
                <span className="sp-label">11 — Graphic Design</span>
                <h2 className="sp-display">
                  Bluebird<br />
                  <span className="sp-display-italic">Sparkling Water</span>
                </h2>
                <p className="sp-display-sm">Product Branding</p>
                <img
                  className="sp-img sp-img-full sp-img-shadow"
                  src="/06/portfolios-06_0002_Layer-4.png"
                  alt="Bluebird Sparkling Water 12-pack box"
                />
                <p className="sp-caption">12-pack box · Final render</p>
                <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginTop: 14 }}>
                  <img
                    className="sp-img sp-img-shadow"
                    src="/06/portfolios-06_0003_Layer-5.png"
                    alt="Bluebird sparkling water can"
                    style={{ width: '38%' }}
                  />
                  <div style={{ flex: 1 }}>
                    <p className="sp-body">
                      End-to-end product branding for Bluebird Sparkling Water — originally
                      designed in Adobe Illustrator and rendered in Adobe Dimension. The project
                      required studying current sparkling water branding trends to produce
                      something genuinely marketable.
                    </p>
                  </div>
                </div>
                <div className="sp-tags">
                  {['Brand Identity', 'Packaging', 'Adobe Illustrator', 'Adobe Dimension', '3D Render'].map(t => (
                    <span className="sp-tag" key={t}>{t}</span>
                  ))}
                </div>
                <div className="sp-bar" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          THE BOOK
          ══════════════════════════════════════ */}
      <section id="the-book" className="reveal">
        <div className="book-strip-label">
          <span className="label">Portfolio Book — 2025</span>
          <div className="rule" />
        </div>
        <div className="book-strip">
          <div className="book-strip-item">
            <img src="/03/portfolios-03_0008_Layer-1.png" alt="Portfolio book spread pages 04–05" />
          </div>
          <div className="book-strip-item">
            <img src="/04/portfolios-04_0008_Layer-1.png" alt="Portfolio book spread pages 06–07" />
          </div>
          <div className="book-strip-item">
            <img src="/05/portfolios-05_0002_Layer-1.png" alt="Portfolio book spread pages 08–09" />
          </div>
          <div className="book-strip-item">
            <img src="/06/portfolios-06_0004_Layer-1.png" alt="Portfolio book spread pages 10–11" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ABOUT
          ══════════════════════════════════════ */}
      <section id="about">
        <div className="about-sticky reveal">
          <h2 className="about-heading">
            The<br />
            <em>Work</em><br />
            &amp; the<br />
            <em>Eye</em>
          </h2>
          <span className="about-star">✦</span>
        </div>

        <div className="about-body">
          <p className="reveal">
            As a designer, I align my work with one goal: to{' '}
            <strong>encourage radical collaboration and discovery.</strong> This
            &lsquo;North Star&rsquo; guides me through the fields of experimental
            and experiential design, typography, and installation.
          </p>
          <p className="reveal">
            My background spans{' '}
            <strong>graphic design, experiential production, and print</strong> —
            from designing immersive TED event environments for 1,000+ attendees
            to crafting bold typographic systems for print. I&rsquo;m drawn to
            work that communicates complexity with clarity, and that invites
            people in rather than holding them at arm&rsquo;s length.
          </p>
          <p className="reveal">
            Based in Boulder, Colorado. Currently studying at the{' '}
            <strong>University of Colorado Boulder.</strong>
          </p>

          <div className="about-disciplines reveal">
            {[
              { name: 'Experiential Design', tools: 'SketchUp, Illustrator, Fabrication' },
              { name: 'Typography',           tools: 'Variable Fonts, Print, Editorial' },
              { name: 'Brand & Packaging',    tools: 'Illustrator, Adobe Dimension' },
              { name: 'Print & Poster',       tools: 'Illustrator, InDesign' },
            ].map((d) => (
              <div className="discipline-row" key={d.name}>
                <span className="disc-name">{d.name}</span>
                <span className="disc-tools">{d.tools}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTACT
          ══════════════════════════════════════ */}
      <section id="contact">
        <p className="contact-eyebrow reveal">Get in touch</p>
        <h2 className="contact-heading reveal">
          Let&rsquo;s<br />
          <em>work</em><br />
          together
        </h2>
        <div className="contact-links reveal">
          <a className="contact-link primary" href="mailto:hello@lilaanson.com">
            hello@lilaanson.com
          </a>
          <a className="contact-link" href="#" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a className="contact-link" href="#" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer>
        <p>© 2026 Lila Anson</p>
        <p>Designer — Boulder, Colorado</p>
      </footer>
    </>
  )
}
