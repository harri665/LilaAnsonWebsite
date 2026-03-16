const NAV_H = 48

export function fitPages() {
  const isMobile = window.matchMedia('(max-width: 900px)').matches

  document.querySelectorAll('.tedx-pg').forEach(pg => {
    const inner = pg.querySelector('.tedx-pg-inner')
    if (!inner) return

    if (!isMobile) {
      inner.style.zoom = '1'
      pg.style.setProperty('--wb-page-zoom', '1')
      return
    }

    let availableH = pg.clientHeight
    if (!availableH) availableH = window.innerHeight - NAV_H

    let availableW = pg.clientWidth
    if (!availableW) availableW = window.innerWidth

    let lo = 0.2
    let hi = 1
    let best = lo

    for (let i = 0; i < 20; i++) {
      const mid = (lo + hi) / 2
      inner.style.zoom = String(mid)
      pg.style.setProperty('--wb-page-zoom', String(mid))

      if (inner.scrollHeight <= availableH && inner.scrollWidth <= availableW) {
        best = mid
        lo = mid
      } else {
        hi = mid
      }
    }

    inner.style.zoom = String(best)
    pg.style.setProperty('--wb-page-zoom', String(best))
  })
}

export function fitFillText() {
  document.querySelectorAll('.tedx-fill-text').forEach(el => {
    const col = el.closest('.tedx-fill-col')
    if (!col) return
    const grid = col.parentElement
    // Measure siblings to get stable height reference (not affected by el's font-size)
    const siblings = Array.from(grid.children).filter(c => c !== col)
    const available = siblings.reduce((max, s) => Math.max(max, s.scrollHeight), 0) || col.clientHeight
    if (!available) return
    el.style.fontSize = ''
    let lo = 0.5, hi = 6
    for (let i = 0; i < 20; i++) {
      const mid = (lo + hi) / 2
      el.style.fontSize = mid + 'rem'
      if (el.scrollHeight <= available) lo = mid
      else hi = mid
    }
    el.style.fontSize = lo + 'rem'
  })
}

const fitAll = () => { fitPages(); fitFillText() }

export function setupFitPages() {
  let frame
  let count = 0
  const loop = () => {
    fitAll()
    if (count++ < 10) frame = requestAnimationFrame(loop)
  }
  frame = requestAnimationFrame(loop)

  window.addEventListener('resize', fitAll)
  const imgs = document.querySelectorAll('.tedx-pg img')
  imgs.forEach(img => {
    if (!img.complete) img.addEventListener('load', fitAll)
  })

  return () => {
    cancelAnimationFrame(frame)
    window.removeEventListener('resize', fitAll)
    imgs.forEach(img => img.removeEventListener('load', fitAll))
  }
}
