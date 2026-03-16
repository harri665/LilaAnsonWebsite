const NAV_H = 48

export function fitPages() {
  const epsilon = 2

  document.querySelectorAll('.tedx-pg').forEach(pg => {
    const inner = pg.querySelector('.tedx-pg-inner')
    if (!inner) return

    if (pg.classList.contains('cs-force-zoom-1')) {
      inner.style.zoom = '1'
      pg.style.setProperty('--wb-page-zoom', '1')
      return
    }

    // Reset before measuring so previous pass transforms do not skew available space.
    inner.style.zoom = '1'
    pg.style.setProperty('--wb-page-zoom', '1')

    let availableH = pg.clientHeight
    if (!availableH) availableH = window.innerHeight - NAV_H

    let availableW = pg.clientWidth
    if (!availableW) availableW = window.innerWidth

    availableH = Math.max(0, availableH - epsilon)
    availableW = Math.max(0, availableW - epsilon)

    if (!availableH || !availableW) return

    let lo = 0.1
    let hi = 1

    for (let i = 0; i < 24; i++) {
      const mid = (lo + hi) / 2
      inner.style.zoom = String(mid)
      const rect = inner.getBoundingClientRect()
      const fitsH = rect.height <= availableH
      const fitsW = rect.width <= availableW + 12
      const fits = fitsH && fitsW
      if (fits) lo = mid
      else hi = mid
    }

    let finalScale = Math.max(0.1, lo)
    inner.style.zoom = String(finalScale)
    pg.style.setProperty('--wb-page-zoom', String(finalScale))

    // Final clamp for rounding differences under browser/page zoom.
    let guard = 0
    while (guard < 8) {
      const rect = inner.getBoundingClientRect()
      if (rect.height <= availableH && rect.width <= availableW + 8) break
      const byH = availableH / rect.height
      const byW = availableW / rect.width

      // Height is the dominant constraint; width gets a small tolerance to avoid over-shrinking.
      const factor = rect.height > availableH
        ? Math.min(byH, Math.min(1, byW + 0.02))
        : Math.min(1, byW)

      finalScale = Math.max(0.1, finalScale * Math.min(0.999, factor))
      inner.style.zoom = String(finalScale)
      pg.style.setProperty('--wb-page-zoom', String(finalScale))
      guard += 1
    }

  })
}

export function fitFillText() {
  const isMobile = window.matchMedia('(max-width: 900px)').matches
  if (isMobile) {
    document.querySelectorAll('.tedx-fill-text').forEach(el => {
      el.style.fontSize = ''
    })
    return
  }

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
  const vv = window.visualViewport
  const loop = () => {
    fitAll()
    if (count++ < 10) frame = requestAnimationFrame(loop)
  }
  frame = requestAnimationFrame(loop)

  window.addEventListener('resize', fitAll)
  vv?.addEventListener('resize', fitAll)
  vv?.addEventListener('scroll', fitAll)
  const imgs = document.querySelectorAll('.tedx-pg img')
  imgs.forEach(img => {
    if (!img.complete) img.addEventListener('load', fitAll)
  })

  return () => {
    cancelAnimationFrame(frame)
    window.removeEventListener('resize', fitAll)
    vv?.removeEventListener('resize', fitAll)
    vv?.removeEventListener('scroll', fitAll)
    imgs.forEach(img => img.removeEventListener('load', fitAll))
  }
}
