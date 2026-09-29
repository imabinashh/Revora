/**
 * REVORA — Luxury Automotive Platform
 * Hero Spotlight Character Reveal & Core Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeroSpotlightReveal();
  initNavbarScroll();
  initMobileMenu();
  initStoryScrollExhibition();
});

/**
 * 01. HERO SPOTLIGHT CHARACTER REVEAL
 * Exclusively implements the cursor-following circular reveal of REVEAL_IMAGE
 * over the BASE_IMAGE using hardware-accelerated CSS radial-gradient masks and lerping.
 */
function initHeroSpotlightReveal() {
  const hero = document.getElementById('hero');
  const revealLayer = document.getElementById('heroRevealLayer');

  if (!hero || !revealLayer) return;

  // Reveal Configuration
  const REVEAL_RADIUS_PX = 200; // Refined spotlight radius (400px diameter)
  const LERP_FACTOR = 0.14;     // Smooth luxury inertia

  // Coordinates
  let targetX = -9999;
  let targetY = -9999;
  let currentX = -9999;
  let currentY = -9999;
  let isHovered = false;
  let rafId = null;

  // Linear Interpolation helper
  const lerp = (start, end, factor) => start + (end - start) * factor;

  // Animation Loop for fluid, butter-smooth cursor following
  function renderLoop() {
    currentX = lerp(currentX, targetX, LERP_FACTOR);
    currentY = lerp(currentY, targetY, LERP_FACTOR);

    // Update CSS custom properties for radial-gradient mask & glow ring
    revealLayer.style.setProperty('--mouse-x', `${currentX.toFixed(2)}px`);
    revealLayer.style.setProperty('--mouse-y', `${currentY.toFixed(2)}px`);

    const deltaX = Math.abs(targetX - currentX);
    const deltaY = Math.abs(targetY - currentY);

    // Keep RAF running as long as hovered or until settled
    if (isHovered || deltaX > 0.05 || deltaY > 0.05) {
      rafId = requestAnimationFrame(renderLoop);
    } else {
      rafId = null;
      // When cursor has left and settled, safely move coordinates away
      if (!isHovered) {
        revealLayer.style.setProperty('--mouse-x', '-9999px');
        revealLayer.style.setProperty('--mouse-y', '-9999px');
      }
    }
  }

  // Pointer Enter: Activate spotlight and snap starting position to cursor
  function handlePointerEnter(e) {
    const rect = hero.getBoundingClientRect();
    targetX = e.clientX - rect.left;
    targetY = e.clientY - rect.top;

    if (!isHovered) {
      // Snap initial coordinates to cursor so it fades in right under pointer
      currentX = targetX;
      currentY = targetY;
      revealLayer.style.setProperty('--mouse-x', `${currentX.toFixed(2)}px`);
      revealLayer.style.setProperty('--mouse-y', `${currentY.toFixed(2)}px`);
    }

    isHovered = true;
    revealLayer.classList.add('is-active');

    if (!rafId) {
      rafId = requestAnimationFrame(renderLoop);
    }
  }

  // Pointer Move: Update destination coordinates smoothly
  function handlePointerMove(e) {
    const rect = hero.getBoundingClientRect();
    targetX = e.clientX - rect.left;
    targetY = e.clientY - rect.top;

    if (!isHovered) {
      isHovered = true;
      revealLayer.classList.add('is-active');
    }

    if (!rafId) {
      rafId = requestAnimationFrame(renderLoop);
    }
  }

  // Pointer Leave: Completely hide reveal layer outside the hero
  function handlePointerLeave() {
    isHovered = false;
    revealLayer.classList.remove('is-active');
    // Ensure animation keeps running briefly to allow smooth fade-out
    if (!rafId) {
      rafId = requestAnimationFrame(renderLoop);
    }
  }

  // Touch handlers for mobile and tablet drag interaction
  function handleTouchMove(e) {
    if (e.touches && e.touches.length > 0) {
      const touch = e.touches[0];
      const rect = hero.getBoundingClientRect();
      targetX = touch.clientX - rect.left;
      targetY = touch.clientY - rect.top;

      if (!isHovered) {
        currentX = targetX;
        currentY = targetY;
        isHovered = true;
        revealLayer.classList.add('is-active');
      }

      if (!rafId) {
        rafId = requestAnimationFrame(renderLoop);
      }
    }
  }

  // Event Listeners
  hero.addEventListener('pointerenter', handlePointerEnter);
  hero.addEventListener('pointermove', handlePointerMove);
  hero.addEventListener('pointerleave', handlePointerLeave);

  // Touch support
  hero.addEventListener('touchstart', handlePointerEnter, { passive: true });
  hero.addEventListener('touchmove', handleTouchMove, { passive: true });
  hero.addEventListener('touchend', handlePointerLeave, { passive: true });

  // Handle window resize dynamically
  window.addEventListener('resize', () => {
    if (!isHovered) {
      targetX = -9999;
      targetY = -9999;
    }
  }, { passive: true });
}

/**
 * 02. NAVBAR SCROLL EFFECT
 * Adds high-end frosted glass backdrop blur when scrolling past threshold.
 */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const onScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/**
 * 03. MOBILE DRAWER TOGGLE
 */
function initMobileMenu() {
  const toggle = document.getElementById('mobileMenuBtn');
  const links = document.querySelector('.nav-links-slick') || document.querySelector('.nav-links');

  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const isOpen = links.style.display === 'flex';
    links.style.display = isOpen ? 'none' : 'flex';
    if (!isOpen) {
      links.style.flexDirection = 'column';
      links.style.position = 'absolute';
      links.style.top = '100%';
      links.style.left = '20px';
      links.style.right = '20px';
      links.style.background = 'rgba(8, 12, 20, 0.95)';
      links.style.backdropFilter = 'blur(20px)';
      links.style.padding = '24px';
      links.style.borderRadius = '12px';
      links.style.border = '1px solid rgba(255, 255, 255, 0.12)';
      links.style.marginTop = '12px';
      links.style.gap = '20px';
    }
  });
}

/**
 * 04. SCROLL-DRIVEN STORYTELLING EXHIBITION (SAKURA HORIZON // SCENE 02)
 * Smoothly scales the 9:16 portrait image into a full-screen immersive canvas
 * while gracefully fading and dispersing the surrounding asymmetric editorial UI elements.
 */
function initStoryScrollExhibition() {
  const section = document.getElementById('story-exhibition');
  const frame = document.getElementById('storyPortraitFrame');
  const heroImage = document.getElementById('storyHeroImage');
  const elements = document.querySelectorAll('.story-elem');

  if (!section || !frame) return;

  let targetProgress = 0;
  let currentProgress = 0;
  let isTicking = false;

  // Base portrait dimensions depending on viewport breakpoint
  function getBaseDimensions() {
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth <= 1024 && !isMobile;
    let w0;
    if (isMobile) {
      w0 = Math.min(Math.max(window.innerWidth * 0.58, 200), 240);
    } else if (isTablet) {
      w0 = Math.min(Math.max(window.innerWidth * 0.28, 230), 280);
    } else {
      w0 = Math.min(Math.max(window.innerWidth * 0.20, 260), 320);
    }
    const h0 = w0 * (16 / 9);
    return { w0, h0 };
  }

  // Update loop with linear interpolation for cinematic fluidity
  function updateStoryAnimation() {
    // Lerp progress smoothly
    currentProgress += (targetProgress - currentProgress) * 0.12;
    if (Math.abs(targetProgress - currentProgress) < 0.0004) {
      currentProgress = targetProgress;
    }

    const { w0, h0 } = getBaseDimensions();
    const w1 = window.innerWidth;
    const h1 = window.innerHeight;

    // Remap expansion so it begins gently after initial reading phase and reaches full screen
    const expandT = Math.max(0, Math.min(1, (currentProgress - 0.04) / 0.88));
    // Smooth quadratic ease-in-out
    const easeExpand = expandT < 0.5
      ? 2 * expandT * expandT
      : 1 - Math.pow(-2 * expandT + 2, 2) / 2;

    const curW = w0 + (w1 - w0) * easeExpand;
    const curH = h0 + (h1 - h0) * easeExpand;
    const curR = Math.max(0, 28 * (1 - easeExpand * 1.25));

    frame.style.width = `${curW.toFixed(1)}px`;
    frame.style.height = `${curH.toFixed(1)}px`;
    frame.style.borderRadius = `${curR.toFixed(1)}px`;

    // Subtle image scale settle
    if (heroImage) {
      const imgScale = 1.05 - 0.05 * easeExpand;
      heroImage.style.transform = `scale(${imgScale.toFixed(3)})`;
    }

    // Border & Glow fade
    const glowFade = Math.max(0, 1 - easeExpand * 1.6);
    if (curR > 0.5) {
      frame.style.border = `1px solid rgba(255, 255, 255, ${(0.14 * glowFade).toFixed(3)})`;
      frame.style.boxShadow = `0 30px 100px rgba(0, 0, 0, ${(0.95 * glowFade).toFixed(3)}), 0 0 50px rgba(255, 255, 255, ${(0.18 * glowFade).toFixed(3)})`;
    } else {
      frame.style.border = 'none';
      frame.style.boxShadow = 'none';
    }

    // Animate surrounding asymmetric editorial UI elements
    elements.forEach(elem => {
      const fStart = parseFloat(elem.dataset.fadeStart || 0.05);
      const fEnd = parseFloat(elem.dataset.fadeEnd || 0.5);
      const driftX = parseFloat(elem.dataset.driftX || 0);
      const driftY = parseFloat(elem.dataset.driftY || 0);
      const driftRot = parseFloat(elem.dataset.driftRot || 0);

      const elemT = Math.max(0, Math.min(1, (currentProgress - fStart) / (fEnd - fStart)));
      const opacity = Math.max(0, 1 - elemT);
      const curDriftX = driftX * elemT;
      const curDriftY = driftY * elemT;
      const curRot = driftRot * elemT;
      const curScale = 1 - 0.08 * elemT;

      const isCenterX = elem.classList.contains('story-badge-top') || elem.classList.contains('story-elem-bottom-center');
      const baseCenter = isCenterX ? 'translateX(-50%) ' : '';
      elem.style.opacity = opacity.toFixed(3);
      elem.style.transform = `${baseCenter}translate3d(${curDriftX.toFixed(1)}px, ${curDriftY.toFixed(1)}px, 0) rotate(${curRot.toFixed(1)}deg) scale(${curScale.toFixed(3)})`;
      elem.style.pointerEvents = opacity < 0.08 ? 'none' : 'auto';
    });

    // Global navbar immersion handling: Fades out completely in the exhibition climax
    const navbar = document.getElementById('navbar');
    if (navbar) {
      if (currentProgress > 0.35 && currentProgress < 0.96) {
        const navOpacity = Math.max(0, 1 - (currentProgress - 0.35) / 0.25);
        navbar.style.opacity = navOpacity.toFixed(2);
        navbar.style.pointerEvents = navOpacity < 0.1 ? 'none' : 'auto';
      } else {
        navbar.style.opacity = '1';
        navbar.style.pointerEvents = 'auto';
      }
    }

    // Continue ticking until settled
    if (Math.abs(targetProgress - currentProgress) > 0.0004) {
      requestAnimationFrame(updateStoryAnimation);
    } else {
      isTicking = false;
    }
  }

  // Scroll handler computes progress through sticky travel track
  function handleScroll() {
    const rect = section.getBoundingClientRect();
    const scrollDistance = section.offsetHeight - window.innerHeight;
    if (scrollDistance <= 0) return;

    const rawProgress = -rect.top / scrollDistance;
    targetProgress = Math.max(0, Math.min(1, rawProgress));

    if (!isTicking) {
      isTicking = true;
      requestAnimationFrame(updateStoryAnimation);
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', () => {
    handleScroll();
    if (!isTicking) {
      isTicking = true;
      requestAnimationFrame(updateStoryAnimation);
    }
  }, { passive: true });

  // Subtle interactive mouse parallax during initial unscaled phase
  section.addEventListener('pointermove', (e) => {
    if (currentProgress > 0.12) return;
    const nx = (e.clientX / window.innerWidth - 0.5) * 14;
    const ny = (e.clientY / window.innerHeight - 0.5) * 14;
    frame.style.transform = `translate3d(${nx.toFixed(1)}px, ${ny.toFixed(1)}px, 0)`;
  }, { passive: true });

  // Reset transform when scrolling away
  window.addEventListener('scroll', () => {
    if (currentProgress > 0.12) {
      frame.style.transform = 'translate3d(0, 0, 0)';
    }
  }, { passive: true });

  // Initial calculation
  handleScroll();
}
