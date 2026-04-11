document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loading');

  gsap.registerPlugin(ScrollTrigger);

  const cursor = document.querySelector('.custom-cursor');
  const cursorFollower = document.querySelector('.cursor-follower');
  const loader = document.querySelector('.loader');

  let mouseX = 0;
  let mouseY = 0;
  let followerX = 0;
  let followerY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  });

  function animateFollower() {
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;

    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top = followerY + 'px';

    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  const clickables = document.querySelectorAll('a, button, .item-link');
  clickables.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('active'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
  });

  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
      document.body.classList.remove('loading');

      initAnimations();
    }, 2000);
  });

  function initAnimations() {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const titleLines = heroTitle.querySelectorAll('.line');

    gsap.to(titleLines, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      stagger: 0.15,
      ease: 'power4.out',
      delay: 0.3
    });

    gsap.to(heroSubtitle, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      delay: 1
    });

    gsap.to(scrollIndicator, {
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      delay: 1.5
    });

    const wishlistItems = document.querySelectorAll('.wishlist-item');
    wishlistItems.forEach((item, index) => {
      gsap.to(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          end: 'top 50%',
          scrub: 1,
          toggleActions: 'play none none reverse'
        },
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out'
      });

      const image = item.querySelector('.item-image');
      gsap.to(image, {
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 2
        },
        scale: 1,
        ease: 'none'
      });

      const title = item.querySelector('.item-title');
      gsap.from(title, {
        scrollTrigger: {
          trigger: item,
          start: 'top 75%',
          end: 'top 50%',
          scrub: 1
        },
        x: -100,
        opacity: 0,
        ease: 'power2.out'
      });

      const meta = item.querySelector('.item-meta');
      gsap.from(meta, {
        scrollTrigger: {
          trigger: item,
          start: 'top 70%',
          end: 'top 50%',
          scrub: 1
        },
        x: 100,
        opacity: 0,
        ease: 'power2.out'
      });
    });

    const banners = document.querySelectorAll('.banner');
    banners.forEach(banner => {
      const bannerText = banner.querySelector('.banner-text');

      gsap.to(banner, {
        scrollTrigger: {
          trigger: banner,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        },
        scale: 1.1,
        ease: 'none'
      });

      gsap.to(bannerText, {
        scrollTrigger: {
          trigger: banner,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2
        },
        x: '-20%',
        ease: 'none'
      });
    });

    gsap.to('.hero-bg', {
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      },
      scale: 1.5,
      rotation: 15,
      ease: 'none'
    });

    gsap.to('.hero-title', {
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      },
      y: -200,
      scale: 0.8,
      opacity: 0.3,
      ease: 'none'
    });

    gsap.to('.hero-subtitle', {
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      },
      y: -150,
      opacity: 0,
      ease: 'none'
    });

    const priorityBadges = document.querySelectorAll('.priority-badge');
    priorityBadges.forEach(badge => {
      gsap.from(badge, {
        scrollTrigger: {
          trigger: badge,
          start: 'top 85%',
          end: 'top 65%',
          scrub: 1
        },
        rotation: 180,
        opacity: 0,
        ease: 'back.out(1.7)'
      });
    });

    const priorityNumbers = document.querySelectorAll('.priority-number');
    priorityNumbers.forEach(num => {
      gsap.from(num, {
        scrollTrigger: {
          trigger: num,
          start: 'top 85%',
          end: 'top 60%',
          scrub: 1
        },
        scale: 0,
        rotation: 360,
        ease: 'elastic.out(1, 0.5)'
      });
    });

    gsap.from('.footer-line', {
      scrollTrigger: {
        trigger: '.footer',
        start: 'top 80%',
        end: 'top 60%',
        scrub: 1
      },
      scaleX: 0,
      transformOrigin: 'left',
      ease: 'power2.out'
    });

    gsap.from('.footer-text', {
      scrollTrigger: {
        trigger: '.footer',
        start: 'top 75%',
        end: 'top 55%',
        scrub: 1
      },
      x: -100,
      opacity: 0,
      ease: 'power2.out'
    });

    gsap.from('.footer-counter', {
      scrollTrigger: {
        trigger: '.footer',
        start: 'top 75%',
        end: 'top 55%',
        scrub: 1
      },
      x: 100,
      opacity: 0,
      ease: 'power2.out'
    });

    ScrollTrigger.create({
      trigger: '.wishlist',
      start: 'top 80%',
      onEnter: () => {
        document.body.style.background = '#FFFFFF';
      },
      onLeaveBack: () => {
        document.body.style.background = '#FFFFFF';
      }
    });

    const imageWrappers = document.querySelectorAll('.item-image-wrapper');
    imageWrappers.forEach(wrapper => {
      const image = wrapper.querySelector('.item-image');

      gsap.to(image, {
        scrollTrigger: {
          trigger: wrapper,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5
        },
        y: '15%',
        ease: 'none'
      });
    });

    wishlistItems.forEach((item, index) => {
      const direction = index % 2 === 0 ? 100 : -100;

      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 90%',
          end: 'top 60%',
          scrub: 1
        },
        x: direction,
        rotation: index % 2 === 0 ? 5 : -5,
        ease: 'power2.out'
      });
    });

    const descriptions = document.querySelectorAll('.item-description');
    descriptions.forEach(desc => {
      gsap.from(desc, {
        scrollTrigger: {
          trigger: desc,
          start: 'top 85%',
          end: 'top 70%',
          scrub: 1
        },
        y: 30,
        opacity: 0,
        ease: 'power2.out'
      });
    });
  }

  let mouseXPos = 0;
  let mouseYPos = 0;

  document.addEventListener('mousemove', (e) => {
    mouseXPos = (e.clientX / window.innerWidth - 0.5) * 20;
    mouseYPos = (e.clientY / window.innerHeight - 0.5) * 20;
  });

  function parallaxEffect() {
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
      gsap.to(heroBg, {
        x: mouseXPos,
        y: mouseYPos,
        duration: 1,
        ease: 'power2.out'
      });
    }

    requestAnimationFrame(parallaxEffect);
  }
  parallaxEffect();

  const itemLinks = document.querySelectorAll('.item-link');
  itemLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      gsap.to(this, {
        scale: 1.1,
        duration: 0.3,
        ease: 'back.out(1.7)'
      });
    });

    link.addEventListener('mouseleave', function() {
      gsap.to(this, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  });

  const wishlistItemsHover = document.querySelectorAll('.wishlist-item');
  wishlistItemsHover.forEach(item => {
    item.addEventListener('mouseenter', function() {
      const image = this.querySelector('.item-image');
      gsap.to(image, {
        scale: 1.1,
        duration: 0.6,
        ease: 'power2.out'
      });
    });

    item.addEventListener('mouseleave', function() {
      const image = this.querySelector('.item-image');
      gsap.to(image, {
        scale: 1,
        duration: 0.6,
        ease: 'power2.out'
      });
    });
  });

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const noise = document.querySelector('.noise');
    if (noise) {
      noise.style.transform = `translateY(${scrolled * 0.5}px) rotate(${scrolled * 0.05}deg)`;
    }
  });
});
