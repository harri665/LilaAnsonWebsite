import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './TEDxCU.css'
import { setupFitPages } from './fitPages'

const i3 = n => `/03/portfolios-03_${String(n).padStart(4,'0')}_Layer-${n+2}.png`
const i4 = n => `/04/portfolios-04_${String(n).padStart(4,'0')}_Layer-${n+2}.png`

const Wm = () => (
  <div className="tedx-wm" aria-hidden="true">
    {Array.from({ length: 14 }).map((_, i) => (
      <div className="tedx-wm-row" key={i}>
        <span>LILA ANSON</span><span>LILA ANSON</span><span>LILA ANSON</span>
      </div>
    ))}
  </div>
)

export default function TEDxCU() {
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

      {/* ── NAV ── */}
      <nav className="tedx-nav">
        <Link to="/" className="tedx-nav-back">← Back</Link>
        <span className="tedx-nav-logo">TEDxCU — 2025</span>
        <ul className="tedx-nav-links">
          <li><a href="#s1">Introduction</a></li>
          <li><a href="#s2">Process</a></li>
        </ul>
        <span className="tedx-nav-pg">Experiential Design</span>
      </nav>

      {/* ═══ SPREAD 1 · pp. 04 – 05 ═══ */}
      <div className="tedx-spread" id="s1">

        {/* PAGE 04 */}
        <div className="tedx-pg">
          <Wm />
          <div className="tedx-pg-inner">
            <div className="tedx-rh">
              <span>04</span>
              <span className="rh-center">Experiential Design</span>
              <span />
            </div>

            <div className="tedx-title reveal">
              Experiential
              <span className="tedx-title-l2">Design</span>
            </div>

            <div className="tedx-bracket reveal">
              <p className="tedx-body lg">
                My work in Experiential Design catalyzed with my role as Audience Experience
                Lead in TEDxCU, an independently organized TED event that draws around 1,000
                people annually. I was responsible for creating an immersive environment on
                event day to help guests engage with each speaker and the 2025 theme,
                &lsquo;Anomaly.&rsquo; I chose to accomplish this through a series of interactive
                installations featuring each unique speaker.
              </p>
            </div>

            <div className="tedx-cols tedx-cols--4-6 reveal" style={{marginTop: '2rem'}}>
              <p className="tedx-body">
                In addition, I set up small-scale installations and utilized the wood shop
                and laser-cutter to make themed decorations throughout the year that could
                be reused at the event. For one of these smaller installations, I scoured
                the internet to find information about TEDxCU since its start 12 years ago
                and designed a <span className="tedx-u2">visual timeline</span> in Adobe
                Illustrator that I printed and mounted on foam core. This timeline was
                displayed at our Speaker Meet &amp; Greet event and gave speakers insight
                into the legacy they were joining.
              </p>

              <div>
                <div className="tedx-2up" style={{gridTemplateColumns:'1fr 1fr',gap:'.4rem'}}>
                  <img src={i3(1)} alt="2017 — Chain Reaction" />
                  <img src={i3(5)} alt="TEDxCU star" />
                  <img src={i3(2)} alt="2018 — Game Changer" />
                  <img src={i3(3)} alt="2019 — Push & Pull" />
                </div>
                <img src={i3(4)} alt="2020 — Uncharted" style={{width:'100%',display:'block',marginTop:'.4rem'}} />
              </div>

              
            </div>
            
          </div>
        </div>

        {/* PAGE 05 */}
        <div className="tedx-pg">
          <Wm />
          <div className="tedx-pg-inner">
            <div className="tedx-rh">
              <span />
              <span className="rh-center">Experiential Design</span>
              <span>05</span>
            </div>

            <div className="tedx-cols tedx-cols--35-65 reveal">
              <div>
                <img src={i3(0)} alt="Laureal Boston" />
              </div>
              <p className="tedx-body lg">
                The first step for each installation was researching and familiarizing
                myself with each speaker. The more I knew about their story, the more I
                could align my interactions with the unique intentions behind their talk.
              </p>
            </div>

            <hr className="tedx-hr" />

            <div className="tedx-cols tedx-cols--5-5 reveal">
              <p className="tedx-body lg">
                One of the biggest challenges with this role was working within the space.
                This old, historical building was beautiful, but had strict rules that
                nothing could directly touch the wall. I spent weeks in SketchUp building
                wooden structures, debating what would be the{' '}
                <span className="tedx-u">most sturdy but also require the least material.</span>
              </p>
              <img src={i3(7)} alt="Wooden stand — SketchUp"
                style={{width:'100%',display:'block',border:'1px solid #ddd'}} />
            </div>

            <div className="tedx-renders reveal">
              <img src={i3(8)} alt="Display unit — SketchUp" />
              <img src={i3(6)} alt="Installation — built" />
            </div>
          </div>
        </div>
      </div>

      {/* ═══ SPREAD 2 · pp. 06 – 07 ═══ */}
      <div className="tedx-spread" id="s2">

        {/* PAGE 06 */}
        <div className="tedx-pg">
          <Wm />
          <div className="tedx-pg-inner">
            <div className="tedx-rh">
              <span>06</span>
              <span className="rh-center">Experiential Design</span>
              <span />
            </div>

            <p className="tedx-body lg reveal">
              I made mockups of each installation in Adobe Illustrator before moving on to
              anything physical. These mockups were imported into SketchUp and placed into
              a virtual copy of the lobby which I had made after visiting and taking
              measurements. I wanted to know exactly how each color would align or clash
              with the room and exactly how each installation would look from a distance.
            </p>

            <div className="tedx-cols tedx-cols--4-6 reveal" style={{marginTop:'1rem', alignItems:'stretch'}}>
              <div className="tedx-fill-col">
              <p className="tedx-body tedx-fill-text">
                I then moved to the wood shop, where I built my installations to{' '}
                <span className="tedx-u">allow them to be deconstructed, transported in
                a car, and reconstructed.</span>{' '}
                At the same time, I prepped large foam core boards with the actual content
                of each installation. Titles were outlined using a Vinyl Cutter and chunks
                of text were printed on an Inkjet printer.
              </p>
              </div>
              <div className="tedx-stacked">
                <img src={i4(0)} alt="Life, Death & AI — mockup" />
                <img src={i4(1)} alt="Levels of Imagination — built" />
              </div>
            </div>

            <div className="tedx-cols tedx-cols--45-55 reveal" style={{marginTop:'1.25rem'}}>
              <img src={i4(2)} alt="Planning sketches — January 2025"
                style={{width:'100%',display:'block',border:'1px solid #ccc'}} />
              <p className="tedx-body">
                Although I had prepared rough sketches of what I thought the best layout
                would be for the installations, rehearsal day was about arranging and
                rearranging.
              </p>
            </div>
          </div>
        </div>

        {/* PAGE 07 */}
        <div className="tedx-pg">
          <Wm />
          <div className="tedx-pg-inner">
            <div className="tedx-rh">
              <span />
              <span className="rh-center">Experiential Design</span>
              <span>07</span>
            </div>

            <div className="tedx-cols tedx-cols--5-5 reveal">
              <div className="tedx-photo-stack">
                <img src={i4(3)} alt="Visitors at speed climbing panel" />
                <img src={i4(5)} alt="Matthew King: The Cost of Capitalism" />
                <img src={i4(6)} alt="Life, Death, and AI installation" />
                <img src={i4(7)} alt="Laureal Boston: Crafting Connection" />
              </div>

              <div>
                <img src={i4(4)} alt="Rethinking Roots installation"
                  style={{width:'100%',display:'block',marginBottom:'1.2rem'}} />
                <img src="/global/star.png" alt="" className="tedx-doodle" />
                <p className="tedx-body lg">
                  The next day was the actual event. After delegating my team to occupy
                  each installation and prompt guests to engage, I was able to observe
                  how people moved through the space and interacted with my ideas.
                </p>
                <div className="tedx-bubble-wrap">
                  <div className="tedx-bubble">
                    &ldquo;&hellip;by far the most in-depth, detailed, interactive and
                    engaging lobby set up a TEDxCU event has ever seen by a longshot!&rdquo;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
