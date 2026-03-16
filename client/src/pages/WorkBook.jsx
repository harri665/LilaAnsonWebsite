import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './TEDxCU.css'
import './ColoradoSymphony.css'
import './ZineBluebird.css'
import './WorkBook.css'
import { setupFitPages } from './fitPages'

const base = import.meta.env.BASE_URL
const i3 = n => `${base}03/portfolios-03_${String(n).padStart(4,'0')}_Layer-${n+2}.png`
const i4 = n => `${base}04/portfolios-04_${String(n).padStart(4,'0')}_Layer-${n+2}.png`
const i5 = n => `${base}05/portfolios-05_${String(n).padStart(4,'0')}_Layer-${n+2}.png`
const zine = [
  `${base}06/portfolios-06_0000_Layer-2.png`,
  `${base}06/portfolios-06_0001_Layer-3.png`,
  `${base}06/portfolios-06_0002_Layer-4.png`,
  `${base}06/portfolios-06_0003_Layer-5.png`,
]
const bluebird = [
  `${base}06/portfolios-06_0002_Layer-4.png`,
  `${base}06/portfolios-06_0003_Layer-5.png`,
]
const star = `${base}global/star.png`

/* ── Shared helpers ── */
const Wm = () => (
  <div className="tedx-wm" aria-hidden="true">
    {Array.from({ length: 14 }).map((_, i) => (
      <div className="tedx-wm-row" key={i}>
        <span>LILA ANSON</span><span>LILA ANSON</span><span>LILA ANSON</span>
      </div>
    ))}
  </div>
)

const Blank = () => <div className="wb-pg-blank"><Wm /></div>

/* ── Individual page components ── */

const Page04 = () => (
  <div className="tedx-pg">
    <Wm />
    <div className="tedx-pg-inner">
      <div className="tedx-rh">
        <span>04</span>
        <span className="rh-center">Experiential Design</span>
        <span />
      </div>
      <div className="tedx-title">
        Experiential<span className="tedx-title-l2">Design</span>
      </div>
      <div className="tedx-bracket">
        <p className="tedx-body lg">
          My work in Experiential Design catalyzed with my role as Audience Experience
          Lead in TEDxCU, an independently organized TED event that draws around 1,000
          people annually. I was responsible for creating an immersive environment on
          event day to help guests engage with each speaker and the 2025 theme,
          &lsquo;Anomaly.&rsquo; I chose to accomplish this through a series of interactive
          installations featuring each unique speaker.
        </p>
      </div>
      <div className="tedx-cols tedx-cols--4-6" style={{marginTop:'2rem'}}>
        <p className="tedx-body">
          In addition, I set up small-scale installations and utilized the wood shop
          and laser-cutter to make themed decorations throughout the year. For one of
          these smaller installations, I designed a <span className="tedx-u2">visual timeline</span> in
          Adobe Illustrator that I printed and mounted on foam core, displayed at our
          Speaker Meet &amp; Greet event.
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
)

const Page05 = () => (
  <div className="tedx-pg">
    <Wm />
    <div className="tedx-pg-inner">
      <div className="tedx-rh">
        <span /><span className="rh-center">Experiential Design</span><span>05</span>
      </div>
      <div className="tedx-cols tedx-cols--35-65">
        <div><img src={i3(0)} alt="Laureal Boston" /></div>
        <p className="tedx-body lg">
          The first step for each installation was researching and familiarizing
          myself with each speaker. The more I knew about their story, the more I
          could align my interactions with the unique intentions behind their talk.
        </p>
      </div>
      <hr className="tedx-hr" />
      <div className="tedx-cols tedx-cols--5-5">
        <p className="tedx-body lg">
          One of the biggest challenges was working within the space. This historical
          building had strict rules that nothing could directly touch the wall. I spent
          weeks in SketchUp building wooden structures, debating what would be the{' '}
          <span className="tedx-u">most sturdy but also require the least material.</span>
        </p>
        <img src={i3(7)} alt="Wooden stand — SketchUp" style={{width:'100%',display:'block',border:'1px solid #ddd'}} />
      </div>
      <div className="tedx-renders">
        <img src={i3(8)} alt="Display unit — SketchUp" />
        <img src={i3(6)} alt="Installation — built" />
      </div>
    </div>
  </div>
)

const Page06 = () => (
  <div className="tedx-pg wb-page-06">
    <Wm />
    <div className="tedx-pg-inner">
      <div className="tedx-rh">
        <span>06</span><span className="rh-center">Experiential Design</span><span />
      </div>
      <p className="tedx-body lg wb-p06-intro-copy">
        I made mockups of each installation in Adobe Illustrator before moving on to
        anything physical. These mockups were imported into SketchUp and placed into
        a virtual copy of the lobby which I had made after visiting and taking
        measurements. I wanted to know exactly how each color would align or clash
        with the room and exactly how each installation would look from a distance.
      </p>
      <div className="tedx-cols tedx-cols--4-6" style={{marginTop:'.75rem',alignItems:'stretch'}}>
        <div className="tedx-fill-col">
          <p className="tedx-body tedx-fill-text wb-p06-woodshop-copy">
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
      <div className="tedx-cols tedx-cols--45-55" style={{marginTop:'.75rem'}}>
        <img src={i4(2)} alt="Planning sketches — January 2025" style={{width:'100%',display:'block',border:'1px solid #ccc'}} />
        <p className="tedx-body wb-p06-outro-copy">
          Although I had prepared rough sketches of what I thought the best layout
          would be for the installations, rehearsal day was about arranging and rearranging.
        </p>
      </div>
    </div>
  </div>
)

const Page07 = () => (
  <div className="tedx-pg wb-page-07">
    <Wm />
    <div className="tedx-pg-inner">
      <div className="tedx-rh">
        <span /><span className="rh-center">Experiential Design</span><span>07</span>
      </div>
      <div className="tedx-cols tedx-cols--5-5">
        <div className="tedx-photo-stack">
          <img src={i4(3)} alt="Visitors at speed climbing panel" />
          <img src={i4(5)} alt="Matthew King: The Cost of Capitalism" />
          <img src={i4(6)} alt="Life, Death, and AI installation" />
          <img src={i4(7)} alt="Laureal Boston: Crafting Connection" />
        </div>
        <div>
          <img src={i4(4)} alt="Rethinking Roots installation" style={{width:'100%',display:'block',marginBottom:'1.2rem'}} />
          <img src={star} alt="" className="tedx-doodle" />
          <p className="tedx-body lg wb-p07-event-copy">
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
)

const Page08 = () => (
  <div className="tedx-pg">
    <Wm />
    <div className="tedx-pg-inner">
      <div className="tedx-rh">
        <span>08</span><span className="rh-center">Graphic Design</span><span />
      </div>
      <div className="cs-section-title">
        Graphic Design:<br />Colorado Symphony Poster Mailer
      </div>
      <div className="cs-poster-wrap">
        <img src={i5(1)} alt="Colorado Symphony Classics poster — front" />
      </div>
    </div>
  </div>
)

const Page09 = () => (
  <div className="tedx-pg">
    <Wm />
    <div className="tedx-pg-inner">
      <div className="tedx-rh">
        <span /><span className="rh-center">Graphic Design</span><span>09</span>
      </div>
      <p className="tedx-body lg" style={{marginBottom:'2rem'}}>
        A challenge within graphic design is taking dense information and presenting
        it in a way that maintains readability and simplicity. For the Colorado
        Symphony Classics Poster Mailer, I was given scrambled, unformatted dates
        and event descriptions, and tasked with creating a foldable poster mailer.
        Inspired by the abstracted black and white keys of a piano, I designed the
        front in Adobe Illustrator, playing with typography and layout.
      </p>
      <div className="tedx-cols tedx-cols--5-5 cs-back-row">
        <img src={i5(0)} alt="Colorado Symphony Classics poster — back schedule" style={{width:'100%',display:'block',border:'10px solid #111'}} />
        <div className="cs-back-text">
          <p className="tedx-body lg" style={{textAlign:'justify'}}>
            For the information on the back, I prioritized the most vital information
            first: the concert titles. From there, I formatted the times and
            descriptions with the most tedious information at the bottom.
          </p>
          <img src={star} alt="" className="tedx-doodle cs-star" />
        </div>
      </div>
    </div>
  </div>
)

const Page10 = () => (
  <div className="tedx-pg">
    <Wm />
    <div className="tedx-pg-inner">
      <div className="tedx-rh">
        <span>10</span><span className="rh-center">Graphic Design</span><span />
      </div>
      <div className="zine-title">
        Graphic Design:<br /><span style={{paddingLeft:'1.5rem'}}>Zine Covers</span>
      </div>
      <div className="zine-cols">
        <div className="zine-col">
          <p className="tedx-body" style={{marginBottom:'1.8rem'}}>
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
          <div className="zb-cover-frame" style={{marginBottom:'1.2rem'}}>
            <img src={zine[0]} alt="Experimental Typography — ATLAS cover" />
          </div>
          <div className="zb-note zine-note-extrude">
            <span className="zb-caveat">Extrude &amp; Bevel feature<br />and lighting/shading effects</span>
            <span className="zine-arrow-right">↗</span>
          </div>
          <div className="zine-closing">
            <img src={star} alt="" className="zine-star" />
            <p className="tedx-body" style={{textAlign:'justify'}}>
              For this project, I sampled new unique and variable typefaces and
              learned how to apply new text effects within Adobe Illustrator.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const Page11 = () => (
  <div className="tedx-pg">
    <Wm />
    <div className="tedx-pg-inner">
      <div className="tedx-rh">
        <span /><span className="rh-center">Graphic Design</span><span>11</span>
      </div>
      <div className="bb-title">
        Graphic Design:<br />Bluebird<br />Sparkling Water
      </div>
      <p className="tedx-body lg" style={{marginBottom:'1.5rem'}}>
        BLUEBIRD Sparkling Water is product branding originally designed in Adobe
        Illustrator and rendered with <span className="tedx-u">Adobe Dimension</span>.
      </p>
      <div className="zb-box-img">
        <img src={bluebird[0]} alt="Bluebird Sparkling Water — 12-pack box" />
      </div>
      <div className="tedx-cols tedx-cols--45-55 bb-lower" style={{alignItems:'start'}}>
        <img src={bluebird[1]} alt="Bluebird Sparkling Water — can" style={{width:'100%',display:'block'}} />
        <p className="tedx-body lg" style={{textAlign:'justify'}}>
          This design required me to study current sparkling water branding trends
          to create something marketable. I was also able to learn about typographic{' '}
          <span className="tedx-u">layout</span> and the abilities of Dimension.
        </p>
      </div>
      <div className="zb-bottom-strip" />
    </div>
  </div>
)

/* ── Leaf definitions ──
 *
 *  Leaf 0 is a blank cover, pre-flipped (current starts at 1).
 *  State transitions (left = back of last flipped leaf):
 *  current=1  p04      | p05   ← opens here (two pages)
 *  current=2  p06      | p07
 *  current=3  p08      | p09
 *  current=4  p10      | p11
 */
const LEAVES = [
  { front: <Blank />,  back: <Page04 /> },  // cover — pre-flipped on mount
  { front: <Page05 />, back: <Page06 /> },
  { front: <Page07 />, back: <Page08 /> },
  { front: <Page09 />, back: <Page10 /> },
  { front: <Page11 />, back: <Blank />  },
]

const MOBILE_PAGES = [
  <Page04 key="p04" />,
  <Page05 key="p05" />,
  <Page06 key="p06" />,
  <Page07 key="p07" />,
  <Page08 key="p08" />,
  <Page09 key="p09" />,
  <Page10 key="p10" />,
  <Page11 key="p11" />,
]

const TOTAL = LEAVES.length // 5
export const BOOK_DESKTOP_STEPS = TOTAL - 1
export const BOOK_MOBILE_STEPS = MOBILE_PAGES.length

/* ── Embeddable book display (used in Portfolio scroll section) ── */
export function BookDisplay({ current, mobile = false, mobileTurnIndex = 0, mobileTurnProgress = 0 }) {
  useEffect(() => {
    const cleanup = setupFitPages()
    return cleanup
  }, [])

  if (mobile) {
    return (
      <div className="wb-book wb-book--mobile">
        <div className="wb-mobile-stack">
          {MOBILE_PAGES.map((page, i) => (
            (() => {
              const fullyFlipped = i < mobileTurnIndex
              const isTurning = i === mobileTurnIndex && current < MOBILE_PAGES.length
              const turn = fullyFlipped ? 1 : (isTurning ? mobileTurnProgress : 0)
              const easedTurn = turn * turn * (3 - 2 * turn)
              const rotate = -180 * easedTurn
              const lift = isTurning ? (1 - Math.abs(0.5 - easedTurn) * 2) * 18 : 0

              return (
                <div
                  key={i}
                  className={`wb-mobile-leaf${fullyFlipped || (isTurning && easedTurn > 0.995) ? ' flipped' : ''}${isTurning ? ' turning' : ''}`}
                  style={{
                    zIndex: fullyFlipped ? 0 : MOBILE_PAGES.length - i,
                    transform: `translateY(${-lift}px) rotateY(${rotate}deg)`,
                  }}
                >
                  <div className="wb-mobile-page">{page}</div>
                </div>
              )
            })()
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="wb-book">
      {LEAVES.map(({ front, back }, i) => (
        <div
          key={i}
          className={`wb-leaf${i < current ? ' flipped' : ''}`}
          style={{ zIndex: i < current ? 0 : TOTAL - i }}
        >
          <div className="wb-leaf-front">{front}</div>
          <div className="wb-leaf-back">{back}</div>
        </div>
      ))}
    </div>
  )
}

export default function WorkBook() {
  const [current, setCurrent] = useState(1)

  useEffect(() => {
    const cleanup = setupFitPages()
    return cleanup
  }, [])

  const prev = () => setCurrent(c => Math.max(1, c - 1))
  const next = () => setCurrent(c => Math.min(TOTAL - 1, c + 1))

  return (
    <div className="wb-wrap">

      {/* NAV */}
      <nav className="tedx-nav">
        <Link to="/" className="tedx-nav-back">← Back</Link>
        <span className="tedx-nav-logo">Lila Anson — Portfolio</span>
        <div className="wb-nav-controls">
          <button className="wb-nav-btn" onClick={prev} disabled={current === 1}>← Prev</button>
          <span className="wb-counter">{current} / {TOTAL - 1}</span>
          <button className="wb-nav-btn" onClick={next} disabled={current === TOTAL - 1}>Next →</button>
        </div>
      </nav>

      {/* BOOK */}
      <div className="wb-book">
        {LEAVES.map(({ front, back }, i) => (
          <div
            key={i}
            className={`wb-leaf${i < current ? ' flipped' : ''}`}
            style={{ zIndex: i < current ? 0 : TOTAL - i }}
          >
            <div className="wb-leaf-front">{front}</div>
            <div className="wb-leaf-back">{back}</div>
          </div>
        ))}
      </div>

    </div>
  )
}
