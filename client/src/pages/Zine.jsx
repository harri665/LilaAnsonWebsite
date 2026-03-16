import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './TEDxCU.css'
import './ZineBluebird.css'
import { setupFitPages } from './fitPages'

const base = import.meta.env.BASE_URL
const zine = [
  `${base}06/portfolios-06_0000_Layer-2.png`,
  `${base}06/portfolios-06_0001_Layer-3.png`,
  `${base}06/portfolios-06_0002_Layer-4.png`,
  `${base}06/portfolios-06_0003_Layer-5.png`,
  `${base}06/portfolios-06_0004_Layer-1.png`,
]

const Wm = () => (
  <div className="tedx-wm" aria-hidden="true">
    {Array.from({ length: 14 }).map((_, i) => (
      <div className="tedx-wm-row" key={i}>
        <span>LILA ANSON</span><span>LILA ANSON</span><span>LILA ANSON</span>
      </div>
    ))}
  </div>
)

export default function Zine() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const cleanupFit = setupFitPages()

    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target) }
      })
    }, { threshold: 0.06 })
    els.forEach(el => io.observe(el))

    return () => { cleanupFit(); io.disconnect() }
  }, [])

  return (
    <div className="tedx-wrap">
      <nav className="tedx-nav">
        <Link to="/" className="tedx-nav-back">← Back</Link>
        <span className="tedx-nav-logo">Zine Covers — 2024</span>
        <ul className="tedx-nav-links">
          <li><a href="#s1">Overview</a></li>
        </ul>
        <span className="tedx-nav-pg">Graphic Design</span>
      </nav>

      <div className="tedx-spread tedx-spread--single" id="s1">
        <div className="tedx-pg">
          <Wm />
          <div className="tedx-pg-inner">
            <div className="tedx-rh">
              <span>10</span>
              <span className="rh-center">Graphic Design</span>
              <span />
            </div>

            <div className="zine-title reveal">
              Graphic Design:<br />
              <span style={{paddingLeft: '1.5rem'}}>Zine Covers</span>
            </div>

            <div className="zine-cols reveal">
              <div className="zine-col">
                <p className="tedx-body" style={{marginBottom: '1.8rem'}}>
                  I designed covers for the 2024 Experimental Typography Zine produced
                  by a professor at the University of Colorado Boulder.
                </p>
                <div className="zb-note zine-note-top">
                  <span className="zb-caveat">Variable pixel fonts,<br />ranging in fidelity</span>
                </div>
                <div className="zine-arrow-left">↙</div>
                <div className="zb-cover-frame">
                  <img src={zine[1]} alt="Experimental Typography — pixel art cover" />
                </div>
              </div>

              <div className="zine-col">
                <div className="zb-cover-frame" style={{marginBottom: '1.2rem'}}>
                  <img src={zine[0]} alt="Experimental Typography — ATLAS cover" />
                </div>
                <div className="zb-note zine-note-extrude">
                  <span className="zb-caveat">Extrude &amp; Bevel feature<br />and lighting/shading<br />effects</span>
                  <span className="zine-arrow-right">↗</span>
                </div>
                <div className="zine-closing">
                  <img src="/global/star.png" alt="" className="zine-star" />
                  <p className="tedx-body" style={{textAlign: 'justify'}}>
                    For this project, I sampled new unique and variable typefaces and
                    learned how to apply new text effects within Adobe Illustrator.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
