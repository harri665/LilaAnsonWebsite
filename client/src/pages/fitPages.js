const NAV_H = 48

export function fitPages() {
  const available = window.innerHeight - NAV_H
  document.querySelectorAll('.tedx-pg').forEach(pg => {
    const inner = pg.querySelector('.tedx-pg-inner')
    if (!inner) return
    inner.style.zoom = ''
    const natural = inner.scrollHeight
    if (natural > available) {
      inner.style.zoom = Math.max(0.82, available / natural)
    }
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
