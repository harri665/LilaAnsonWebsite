import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './TEDxCU.css'
import './ColoradoSymphony.css'
import { setupFitPages } from './fitPages'

const i5 = n => `/05/portfolios-05_${String(n).padStart(4,'0')}_Layer-${n+2}.png`

const Wm = () => (
  <div className="tedx-wm" aria-hidden="true">
    {Array.from({ length: 14 }).map((_, i) => (
      <div className="tedx-wm-row" key={i}>
        <span>LILA ANSON</span><span>LILA ANSON</span><span>LILA ANSON</span>
      </div>
    ))}
  </div>
)

export default function ColoradoSymphony() {
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
        <span className="tedx-nav-logo">Colorado Symphony — 2022</span>
        <ul className="tedx-nav-links">
          <li><a href="#s1">Overview</a></li>
        </ul>
        <span className="tedx-nav-pg">Graphic Design</span>
      </nav>

      <div className="tedx-spread" id="s1">

        {/* PAGE 08 */}
        <div className="tedx-pg">
          <Wm />
          <div className="tedx-pg-inner">
            <div className="tedx-rh">
              <span>08</span>
              <span className="rh-center">Graphic Design</span>
              <span />
            </div>

            <div className="cs-section-title reveal">
              Graphic Design:<br />
              Colorado Symphony Poster Mailer
            </div>

            <div className="cs-poster-wrap reveal">
              <img src={i5(1)} alt="Colorado Symphony Classics poster — front" />
            </div>
          </div>
        </div>

        {/* PAGE 09 */}
        <div className="tedx-pg">
          <Wm />
          <div className="tedx-pg-inner">
            <div className="tedx-rh">
              <span />
              <span className="rh-center">Graphic Design</span>
              <span>09</span>
            </div>

            <p className="tedx-body lg reveal" style={{marginBottom: '2rem'}}>
              A challenge within graphic design is taking dense information and presenting
              it in a way that maintains readability and simplicity. For the Colorado
              Symphony Classics Poster Mailer, I was given a document with scrambled,
              unformatted dates and event descriptions, and tasked with creating a foldable
              poster mailer that presented the information in an optimized and clear way.
              Inspired by the abstracted black and white keys of a piano, I designed the
              front in Adobe Illustrator, playing with typography and layout.
            </p>

            <div className="tedx-cols tedx-cols--5-5 reveal cs-back-row">
              <img src={i5(0)} alt="Colorado Symphony Classics poster — back schedule"
                style={{width:'100%', display:'block', border:'10px solid #111'}} />

              <div className="cs-back-text">
                <p className="tedx-body lg" style={{textAlign:'justify'}}>
                  For the information on the back, I prioritized the most vital information
                  first: the concert titles. From there, I formatted the times and
                  descriptions with the most tedious information at the bottom.
                </p>
                <img src="/global/star.png" alt="" className="tedx-doodle cs-star" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
