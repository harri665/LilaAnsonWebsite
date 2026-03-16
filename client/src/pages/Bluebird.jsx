import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './TEDxCU.css'
import './ZineBluebird.css'
import { setupFitPages } from './fitPages'

const base = import.meta.env.BASE_URL
const bluebird = [
  `${base}06/portfolios-06_0002_Layer-4.png`,
  `${base}06/portfolios-06_0003_Layer-5.png`,
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

export default function Bluebird() {
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
        <span className="tedx-nav-logo">Bluebird Sparkling Water — 2024</span>
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
              <span />
              <span className="rh-center">Graphic Design</span>
              <span>11</span>
            </div>

            <div className="bb-title reveal">
              Graphic Design:<br />
              Bluebird<br />
              Sparkling Water
            </div>

            <p className="tedx-body lg reveal" style={{marginBottom: '1.5rem'}}>
              BLUEBIRD Sparkling Water is product branding originally designed in Adobe
              Illustrator and rendered with{' '}
              <span className="tedx-u">Adobe Dimension</span>.
            </p>

            <div className="zb-box-img reveal">
              <img src={bluebird[0]} alt="Bluebird Sparkling Water — 12-pack box" />
            </div>

            <div className="tedx-cols tedx-cols--45-55 reveal bb-lower" style={{alignItems: 'start'}}>
              <img src={bluebird[1]} alt="Bluebird Sparkling Water — can"
                style={{width: '100%', display: 'block'}} />
              <p className="tedx-body lg" style={{textAlign: 'justify'}}>
                This design required me to study current sparkling water branding trends
                to create something marketable. I was also able to learn about typographic{' '}
                <span className="tedx-u">layout</span> and the abilities of Dimension.
              </p>
            </div>

            <div className="zb-bottom-strip reveal" />
          </div>
        </div>
      </div>
    </div>
  )
}
