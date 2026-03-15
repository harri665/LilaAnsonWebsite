import { useEffect } from 'react'
import { Link } from 'react-router-dom'

// indices 0–7 only (index 8 / Layer-1 excluded)
const i3 = (n) => `/03/portfolios-03_${String(n).padStart(4,'0')}_Layer-${n+2}.png`
const i4 = (n) => `/04/portfolios-04_${String(n).padStart(4,'0')}_Layer-${n+2}.png`

function RunningHead({ left, right }) {
  return (
    <div className="mag-running-head">
      <span>{left}</span>
      <span className="mag-running-center">Experiential Design</span>
      <span>{right}</span>
    </div>
  )
}

export default function TEDxCU() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const reveals = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), 60)
          io.unobserve(e.target)
        }
      })
    }, { threshold: 0.04 })
    reveals.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div className="mag-wrap">

      {/* Fixed nav */}
      <nav className="proj-page-nav">
        <Link className="proj-back" to="/">
          <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M9 2L4 7l5 5" />
          </svg>
          Work
        </Link>
        <span className="proj-page-num">04 — Experiential Design</span>
      </nav>

      {/* ═══════════════════════════════════════
          SPREAD 1  ·  pp. 04 – 05
      ═══════════════════════════════════════ */}
      <RunningHead left="04" right="05" />

      <div className="mag-spread reveal">

        {/* ── PAGE 04 ─────────────────────────────
            Layout:
              Title (staggered)
              ─ rule ─
              Full-width intro paragraph
              ─ rule ─
              [narrow text col] [image stack: star / 2-cards / wide photo]
        ──────────────────────────────────────── */}
        <div className="mag-pg">

          <div className="mag-title">
            <span className="mag-title-l1">Experiential</span>
            <span className="mag-title-l2"><em>Design</em></span>
          </div>

          <div className="mag-rule" />

          <p className="mag-p">
            My work in Experiential Design catalyzed with my role as Audience Experience
            Lead in TEDxCU, an independently organized TED event that draws around 1,000
            people annually. I was responsible for creating an immersive environment on
            event day to help guests engage with each speaker and the 2025 theme,
            'Anomaly.' I chose to accomplish this through a series of interactive
            installations featuring each unique speaker.
          </p>

          <div className="mag-rule" />

          {/* [~40% text] [~60% images] */}
          <div className="mag-cols mag-cols--4-6">

            <p className="mag-p">
              In addition, I set up small-scale installations and utilized the wood shop
              and laser-cutter to make themed decorations throughout the year that could
              be reused at the event. For one of these smaller installations, I scoured
              the internet to find information about TEDxCU since its start 12 years ago
              and designed a <span className="mag-underline">visual timeline</span> in
              Adobe Illustrator that I printed and mounted on foam core. This timeline
              was displayed at our Speaker Meet &amp; Greet event and gave speakers
              insight into the legacy they were joining.
            </p>

            {/* Image stack: large top → 2 cards side-by-side → wide photo */}
            <div className="mag-img-stack">
              <div className="mag-img-2up">
                
                <img src={i3(1)} alt="TEDxCU 2017 timeline card" />
                <img src={i3(3)} alt="TEDxCU 2017 timeline card" />
                <img src={i3(2)} alt="TEDxCU 2019 timeline card" />
                <img src={i3(5)} alt="TEDxCU 2019 timeline card" />
              </div>
            </div>

          </div>
        </div>

        {/* ── PAGE 05 ─────────────────────────────
            Layout:
              [CRAFTING CONNECTION + small text + portrait] [research paragraph]
              ─ rule ─
              [challenges paragraph (wider)] [SketchUp image (narrower)]
              [installation photo] [3-D render]
        ──────────────────────────────────────── */}
        <div className="mag-pg">

          {/* [~40% subhead+text+portrait] [~60% research text] */}
          <div className="mag-cols mag-cols--4-6">

            <div className="mag-crafting-col">
              <h2 className="mag-subhead">Crafting<br />Connection</h2>
              <p className="mag-p mag-p--sm">
                A great installation knows that just a series of facts and figures with an
                invitation to connect. Behind every wall, a great story reminds you of who
                you are, where you've been, or where you could go — or simply asking
                "How was your day?" becomes a personal force for human connection.
              </p>
              <img className="mag-img mag-img--portrait" src={i3(4)} alt="Speaker portrait" />
            </div>

            <p className="mag-p">
              The first step for each installation was researching and familiarizing
              myself with each speaker. The more I knew about their story, the more I
              could align my interactions with the unique intentions behind their talk.
            </p>

          </div>

          <div className="mag-rule" />

          {/* [~58% challenges text] [~42% SketchUp image] */}
          <div className="mag-cols mag-cols--58-42">

            <p className="mag-p">
              One of the biggest challenges with this role was working within the space.
              This old, historical building was beautiful, but had strict rules that
              nothing could directly touch the wall. I spent weeks in SketchUp building
              wooden structures, debating what would be the{' '}
              <span className="mag-underline">
                most sturdy but also require the least material.
              </span>
            </p>

            <img className="mag-img mag-img--cover" src={i3(5)} alt="SketchUp wooden structure" />

          </div>

          {/* Two landscape images spanning full page width */}
          <div className="mag-img-2up mag-img-2up--spaced">
            <img src={i3(6)} alt="Installation display in hall" />
            <img src={i3(7)} alt="3D installation render" />
          </div>

        </div>
      </div>{/* end spread 1 */}

      {/* ═══════════════════════════════════════
          SPREAD 2  ·  pp. 06 – 07
      ═══════════════════════════════════════ */}
      <RunningHead left="06" right="07" />

      <div className="mag-spread reveal">

        {/* ── PAGE 06 ─────────────────────────────
            Layout:
              Full-width mockup paragraph
              [narrow fabrication text] [2 stacked mockup images]
              [sketch photo] [rehearsal text]
        ──────────────────────────────────────── */}
        <div className="mag-pg">

          <p className="mag-p">
            I made mockups of each installation in Adobe Illustrator before moving on to
            anything physical. These mockups were imported into SketchUp and placed into
            a virtual copy of the lobby which I had made after visiting and taking
            measurements. I wanted to know exactly how each color would align or clash
            with the room and exactly how each installation would look from a distance.
          </p>

          <div className="mag-rule" />

          {/* [~40% wood shop text] [~60% 2 stacked mockup images] */}
          <div className="mag-cols mag-cols--4-6">

            <p className="mag-p">
              I then moved to the wood shop, where I built my installations to{' '}
              <span className="mag-underline">
                allow them to be deconstructed, transported in a car, and reconstructed.
              </span>{' '}
              At the same time, I prepped large foam core boards with the actual content
              of each installation. Titles were outlined using a Vinyl Cutter and chunks
              of text were printed on an Inkjet printer.
            </p>

            <div className="mag-img-stack">
              <img className="mag-img mag-img--cover" src={i4(0)} alt="Illustrator mockup — Life, Death, and AI" />
              <img className="mag-img mag-img--cover" src={i4(1)} alt="Easel mockup — Levels of Imagination" />
            </div>

          </div>

          <div className="mag-rule" />

          {/* [~50% sketch photo] [~50% rehearsal text] */}
          <div className="mag-cols">
            <img className="mag-img mag-img--cover" src={i4(2)} alt="Installation floor plan sketch" />
            <p className="mag-p">
              Although I had prepared rough sketches of what I thought the best layout
              would be for the installations, rehearsal day was about arranging and
              rearranging.
            </p>
          </div>

        </div>

        {/* ── PAGE 07 ─────────────────────────────
            Layout:
              [2-col × 3-row photo grid (~65%)] [event text + circle quote (~35%)]
        ──────────────────────────────────────── */}
        <div className="mag-pg">

          <div className="mag-cols mag-cols--65-35">

            {/* Strict 2×3 photo grid */}
            <div className="mag-photo-grid">
              <img src={i4(3)} alt="Event day" />
              <img src={i4(4)} alt="Event day" />
              <img src={i4(5)} alt="Event day" />
              <img src={i4(6)} alt="Event day" />
              <img src={i4(7)} alt="Event day" />
              <img src={i3(3)} alt="Event day" />
            </div>

            {/* Event day text + quote bubble */}
            <div className="mag-event-aside">
              <p className="mag-p">
                The next day was the actual event. After delegating my team to occupy
                each installation and prompt guests to engage, I was able to observe how
                people moved through the space and interacted with my ideas.
              </p>
              <div className="mag-quote-bubble">
                "…by far the most in-depth, detailed, interactive and engaging lobby set
                up a TEDxCU event has ever seen by a longshot!"
              </div>
            </div>

          </div>

        </div>
      </div>{/* end spread 2 */}

      {/* Next project */}
      <div className="pp-next reveal">
        <span className="pp-next-label">Next Project</span>
        <Link className="pp-next-link" to="/">
          Colorado Symphony
          <span className="pp-next-arrow">→</span>
        </Link>
      </div>

      <footer>
        <p>© 2026 Lila Anson</p>
        <p>Designer — Boulder, Colorado</p>
      </footer>

    </div>
  )
}
