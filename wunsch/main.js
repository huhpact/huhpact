const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
const isTouchDevice = window.matchMedia('(hover: none)').matches
const isDesktop = window.matchMedia('(min-width: 821px) and (hover: hover)').matches

// ================================================================
// SCROLL PROGRESS BAR
// ================================================================
const progressBar = document.getElementById('progressBar')

// ================================================================
// SIDE NAV
// ================================================================
const sideNav = document.getElementById('sideNav')
const sideNavItems = document.querySelectorAll('.side-nav__item')

const sectionIds = ['hero', 'item-1', 'item-2', 'item-3']

// Map each nav item to its target section
const sectionEls = sectionIds.map(id => document.getElementById(id))

// ================================================================
// CUSTOM CURSOR  (desktop only)
// ================================================================
let cursorDot, cursorRing, mouseX = 0, mouseY = 0, ringX = 0, ringY = 0, rafCursor = null

if (isDesktop) {
  cursorDot = document.createElement('div')
  cursorRing = document.createElement('div')
  cursorDot.className = 'cursor-dot'
  cursorRing.className = 'cursor-ring'
  document.body.append(cursorDot, cursorRing)

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
    cursorDot.style.left = mouseX + 'px'
    cursorDot.style.top  = mouseY + 'px'
    if (!rafCursor) rafCursor = requestAnimationFrame(animateCursorRing)
  })

  function animateCursorRing() {
    ringX += (mouseX - ringX) * 0.13
    ringY += (mouseY - ringY) * 0.13
    cursorRing.style.left = ringX + 'px'
    cursorRing.style.top  = ringY + 'px'
    rafCursor = requestAnimationFrame(animateCursorRing)
  }

  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => cursorRing.classList.add('on-link'))
    el.addEventListener('mouseleave', () => cursorRing.classList.remove('on-link'))
  })

  document.querySelectorAll('.item-image-wrap').forEach(el => {
    el.addEventListener('mouseenter', () => cursorRing.classList.add('on-image'))
    el.addEventListener('mouseleave', () => cursorRing.classList.remove('on-image'))
  })
}

// ================================================================
// HERO ENTRANCE — fire once immediately
// ================================================================
;(function heroEntrance() {
  const heroRevealInners = document.querySelectorAll('.hero-panel .reveal-inner')
  const heroRevealFades  = document.querySelectorAll('.hero-panel .reveal-fade')

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      heroRevealInners.forEach(el => el.style.transitionDelay = el.style.getPropertyValue('--delay') || '0s')
      heroRevealFades.forEach(el  => el.style.transitionDelay = el.style.getPropertyValue('--delay') || '0s')
      // Adding a class to hero-panel triggers the CSS [.hero-panel .reveal-inner] rule
      // but hero-panel always has those rules active — force by setting inline
      heroRevealInners.forEach(el => {
        el.style.transform = 'translateY(0)'
        el.style.opacity   = '1'
      })
      heroRevealFades.forEach(el => {
        el.style.opacity   = '1'
        el.style.transform = 'translateY(0)'
      })
    })
  })
})()

// ================================================================
// SPLIT ITEM TITLES into line-reveal spans
// ================================================================
document.querySelectorAll('.js-split-title').forEach(el => {
  const rawLines = el.innerHTML.split(/<br\s*\/?>/i)
  el.innerHTML = rawLines.map((line, i) =>
    `<span class="title-line-outer">` +
    `<span class="title-line-inner" style="transition-delay:${0.5 + i * 0.1}s">${line}</span>` +
    `</span>`
  ).join('')
})

// ================================================================
// INTERSECTION OBSERVER — panel visibility
// ================================================================
const itemPanels = document.querySelectorAll('.item-panel')

const panelObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
    }
  })
}, { threshold: 0.02, rootMargin: '0px 0px 0px 0px' })

itemPanels.forEach(p => panelObserver.observe(p))

// ================================================================
// SIDE NAV active state
// ================================================================
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.id
    const navEl = sideNav.querySelector(`[href="#${id}"]`)
    if (!navEl) return
    if (entry.isIntersecting) {
      sideNavItems.forEach(n => n.classList.remove('active'))
      navEl.classList.add('active')
    }
  })
}, { threshold: 0.4 })

sectionEls.forEach(el => el && navObserver.observe(el))

// Show side nav after first scroll
let sideNavShown = false
window.addEventListener('scroll', () => {
  if (!sideNavShown && window.scrollY > window.innerHeight * 0.3) {
    sideNav.classList.add('visible')
    sideNavShown = true
  }
}, { passive: true })

// ================================================================
// SCROLL DRIVER — progress bar + parallax bg numbers + glow sync
// ================================================================
const bgNumbers = document.querySelectorAll('.bg-number')
let scrollTicking = false

window.addEventListener('scroll', onScroll, { passive: true })

function onScroll() {
  if (scrollTicking) return
  scrollTicking = true
  requestAnimationFrame(processScroll)
}

function processScroll() {
  const scrollY   = window.scrollY
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight

  // Progress bar
  progressBar.style.transform = `scaleX(${scrollY / maxScroll})`

  // Per-item effects
  itemPanels.forEach((panel, i) => {
    if (!panel.classList.contains('visible')) { scrollTicking = false; return }

    const rect      = panel.getBoundingClientRect()
    const vH        = window.innerHeight
    const progress  = 1 - Math.max(0, Math.min(1, rect.top / vH))

    // Glow intensity sync
    const img = panel.querySelector('.item-img')
    if (img) {
      const a = 0.14 + progress * 0.1
      const b = 0.06 + progress * 0.06
      const c = 0.03 + progress * 0.02
      img.style.filter = `
        drop-shadow(0 0 ${45 + progress * 25}px rgba(255,255,255,${a}))
        drop-shadow(0 0 ${100 + progress * 50}px rgba(255,255,255,${b}))
        drop-shadow(0 0 ${200 + progress * 60}px rgba(255,255,255,${c}))
      `
    }

    // Subtle bg-number parallax
    const bgNum = panel.querySelector('.bg-number')
    if (bgNum) {
      const shift = (progress - 0.5) * 30
      bgNum.style.transform = `translateY(calc(-50% + ${shift}px))`
    }
  })

  scrollTicking = false
}

// ================================================================
// 3D TILT on image — desktop only
// ================================================================
if (isDesktop && !prefersReducedMotion) {
  document.querySelectorAll('.js-tilt').forEach(wrap => {
    const MAX_TILT = 5 // degrees

    wrap.addEventListener('mousemove', (e) => {
      const rect = wrap.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 2
      const y = ((e.clientY - rect.top)  / rect.height - 0.5) * 2

      wrap.style.transition = 'transform 0.12s ease'
      wrap.style.transform  = `
        perspective(900px)
        rotateY(${x * MAX_TILT}deg)
        rotateX(${-y * MAX_TILT}deg)
        scale(1.025)
      `

      // Move the glow spotlight with mouse
      const glow = wrap.querySelector('.img-glow')
      if (glow) {
        const gx = 50 + x * 20
        const gy = 50 + y * 20
        glow.style.background = `radial-gradient(
          ellipse 60% 50% at ${gx}% ${gy}%,
          rgba(255,255,255,0.07) 0%,
          rgba(255,255,255,0.018) 50%,
          transparent 70%
        )`
      }
    })

    wrap.addEventListener('mouseleave', () => {
      wrap.style.transition = 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)'
      wrap.style.transform  = 'perspective(900px) rotateY(0deg) rotateX(0deg) scale(1)'

      const glow = wrap.querySelector('.img-glow')
      if (glow) {
        glow.style.background = ''
      }
    })
  })
}

// ================================================================
// SMOOTH SCROLL for side nav links
// ================================================================
sideNavItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault()
    const target = document.querySelector(item.getAttribute('href'))
    if (!target) return
    // On mobile (non-sticky) scroll to the panel itself; on desktop scroll to the wrap
    const isMobile = window.innerWidth <= 820
    const el   = isMobile ? target : (target.closest('.panel-wrap') || target)
    const top  = el.getBoundingClientRect().top + window.scrollY
    window.scrollTo({ top, behavior: 'smooth' })
  })
})
