(() => {
  'use strict';

  /* ============================================================
     YEAR STAMP
     ============================================================ */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ============================================================
     COPY EMAIL (header pill + footer link)
     ============================================================ */
  async function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (_) { /* fall through to legacy path */ }
    }
    // legacy fallback
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try { ok = document.execCommand('copy'); } catch (_) { ok = false; }
    document.body.removeChild(ta);
    return ok;
  }

  function wireEmailCopy(el, copiedClass, resetDelay = 2200) {
    if (!el) return;
    let resetTimer = null;

    el.addEventListener('click', async () => {
      const email = el.dataset.email;
      if (!email) return;

      const success = await copyToClipboard(email);
      if (!success) return;

      el.classList.add(copiedClass);
      el.setAttribute('aria-live', 'polite');

      clearTimeout(resetTimer);
      resetTimer = setTimeout(() => {
        el.classList.remove(copiedClass);
      }, resetDelay);
    });
  }

  wireEmailCopy(document.getElementById('emailBtn'), 'is-copied');
  document.querySelectorAll('.footer-email').forEach((btn) => {
    wireEmailCopy(btn, 'is-copied');
  });

  /* ============================================================
     ROLE-HOVER NOTE — tap-to-toggle fallback for touch devices
     ============================================================ */
  const roleHover = document.querySelector('.role-hover');
  if (roleHover) {
    const isCoarsePointer = window.matchMedia('(hover: none)').matches;
    if (isCoarsePointer) {
      roleHover.addEventListener('click', (e) => {
        e.stopPropagation();
        roleHover.classList.toggle('is-open-tap');
      });
      document.addEventListener('click', () => {
        roleHover.classList.remove('is-open-tap');
      });
      // Reuse hover CSS via a class toggle → inject minimal rule
      const styleTag = document.createElement('style');
      styleTag.textContent = `
        .role-hover.is-open-tap .role-note{
          opacity:1 !important;
          visibility:visible !important;
          transform:translate(-50%,0) !important;
        }
      `;
      document.head.appendChild(styleTag);
    }
  }

  /* ============================================================
     SCROLL REVEAL
     ============================================================ */
  const revealEls = document.querySelectorAll('.reveal-up');
  if ('IntersectionObserver' in window && revealEls.length) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* ============================================================
     WORK GALLERY — floating dot nav
     - nav appears once first work item enters viewport
     - nav hides once user scrolls past the gallery section
     - the dot for whichever image is most "featured" (closest to
       viewport center) grows; only ever one wide dot at a time
     - clicking a dot smooth-scrolls to that image
     ============================================================ */
  const workTrack = document.getElementById('workTrack');
  const galleryNav = document.getElementById('galleryNav');
  const workItems = Array.from(document.querySelectorAll('.work-item'));
  const galleryDots = Array.from(document.querySelectorAll('.gallery-dot'));

  if (workTrack && galleryNav && workItems.length && galleryDots.length) {

    /* -- show/hide the whole nav based on the work section's visibility -- */
    const navVisibilityObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          galleryNav.classList.toggle('is-active', entry.isIntersecting);
        });
      },
      { threshold: 0.01 }
    );
    navVisibilityObserver.observe(workTrack);

    /* -- track which item is closest to viewport center -- */
    let currentIndex = 0;
    let ticking = false;

    function updateCurrentDot() {
      ticking = false;
      const viewportCenter = window.innerHeight / 2;
      let closestIndex = 0;
      let closestDistance = Infinity;

      workItems.forEach((item, i) => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const distance = Math.abs(itemCenter - viewportCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i;
        }
      });

      if (closestIndex !== currentIndex) {
        currentIndex = closestIndex;
        setCurrentDot(currentIndex);
      }
    }

    function setCurrentDot(index) {
      galleryDots.forEach((dot, i) => {
        const isCurrent = i === index;
        dot.classList.toggle('is-current', isCurrent);
        dot.setAttribute('aria-current', isCurrent ? 'true' : 'false');
      });
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateCurrentDot);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    /* -- click a dot → smooth scroll to matching image, dot widens immediately -- */
    galleryDots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        const target = workItems[i];
        if (!target) return;

        setCurrentDot(i);
        currentIndex = i;

        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    });

    // initialize on load
    setCurrentDot(0);
  }

  /* ============================================================
     FAQ ACCORDION
     ============================================================ */
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach((btn) => {
    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      // single-open accordion: close any other open item
      faqQuestions.forEach((other) => {
        if (other !== btn) other.setAttribute('aria-expanded', 'false');
      });

      btn.setAttribute('aria-expanded', String(!isOpen));
    });
  });

})();