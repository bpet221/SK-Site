<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>SETS Hero Section</title>
  <link rel="stylesheet" href="styles.css" />
  <script>
    let lastScrollPos = 0;
    let isUnsticky = false, storedFixedBottom = null;
    const manualVerticalOffset = -130;
    const downHysteresis = 0, upHysteresis = 0;
    
    function updateClipPath() {
      const scrollPos = window.scrollY;
      const factor = 0.3125;
      const effectiveScroll = scrollPos * factor;
      const vh = window.innerHeight;
      const maxCrop = vh * 0.24;
      const panRange = 300;
      const panDelayEffective = 50;
      
      let scrollFactor = Math.min(effectiveScroll / maxCrop, 1);
      let inset = 35 - Math.pow(scrollFactor, 2.7) * 35;
      document.querySelector(".hero-image").style.clipPath =
          `inset(${inset}% ${inset}% ${inset}% ${inset}%)`;
      
      if (window.innerWidth > 800) {
        document.querySelector(".hero-image").style.objectPosition = "50% 50%";
        if (scrollFactor >= 0.95) {
          document.querySelector(".hero-container-2").classList.add("slide-up");
        } else {
          document.querySelector(".hero-container-2").classList.remove("slide-up");
        }
      } else {
        if (effectiveScroll < maxCrop + panDelayEffective) {
          document.querySelector(".hero-image").style.objectPosition = "0% 50%";
          document.querySelector(".hero-container-2").classList.remove("slide-up");
        } else {
          let panProgress = Math.min((effectiveScroll - maxCrop - panDelayEffective) / panRange, 1);
          document.querySelector(".hero-image").style.objectPosition =
            (panProgress * 100) + "% 50%";
          document.querySelector(".hero-container-2").classList.add("slide-up");
        }
      }
      
      const initialScroll = 190;
      const initialMaxOffset = 1;
      const additionalDownMultiplier = 0.5;
      const additionalUpMultiplier = 0.2;
      
      let textOffset = 0;
      if (scrollPos <= initialScroll) {
        textOffset = (scrollPos / initialScroll) * initialMaxOffset;
      } else {
        textOffset = scrollPos >= lastScrollPos ?
          initialMaxOffset + (scrollPos - initialScroll) * additionalDownMultiplier :
          initialMaxOffset + (scrollPos - initialScroll) * additionalUpMultiplier;
      }
      lastScrollPos = scrollPos;
      document.querySelector(".hero-text-1").style.top = `calc(11vh - ${textOffset}px)`;
      document.querySelector(".hero-text-2").style.top = "0px";
      
      // Fade out hero down arrow when scrolling begins.
      const heroDownArrow = document.querySelector(".hero-down-arrow");
      if (scrollPos > 0) {
        heroDownArrow.classList.add("fade");
      } else {
        heroDownArrow.classList.remove("fade");
      }
    }
    
    function handleScroll() {
      updateClipPath();
      const heroImage = document.querySelector(".hero-image");
      const heroContainer = document.querySelector(".hero-container-2");
      const triggerEl = document.querySelector("#heading-VBJYPPhLuK");
      
      if (triggerEl) {
        const heroRect = heroImage.getBoundingClientRect();
        const triggerRect = triggerEl.getBoundingClientRect();
        
        if (!isUnsticky && triggerRect.top <= heroRect.bottom - downHysteresis) {
          storedFixedBottom = heroRect.bottom;
          const absTop = window.scrollY + heroRect.top + manualVerticalOffset +
            parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--abs-hero-offset'));
          heroImage.style.top = absTop + "px";
          heroImage.classList.remove("fixed-hero");
          heroImage.classList.add("absolute-hero");
          
          const absContainerOffset = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--abs-container-offset'));
          const extraOffset = window.innerWidth > 800 ? 31 : -8;
          const newTextAbsTop = absTop + heroImage.offsetHeight - absContainerOffset + extraOffset;
          heroContainer.style.position = "absolute";
          heroContainer.style.top = newTextAbsTop + "px";
          heroContainer.classList.remove("fixed");
          heroContainer.classList.add("absolute");
          isUnsticky = true;
        } else if (isUnsticky && triggerRect.top > storedFixedBottom + upHysteresis) {
          heroImage.classList.remove("absolute-hero");
          heroImage.classList.add("fixed-hero");
          heroImage.style.top = "";
          if (window.innerWidth > 800) {
              heroContainer.style.top = "calc(var(--text2-top-offset) + 40px)";
          } else {
              heroContainer.style.top = "calc(var(--text2-top-offset) + 4px)";
          }
          heroContainer.style.position = "fixed";
          heroContainer.classList.remove("absolute");
          heroContainer.classList.add("fixed");
          isUnsticky = false;
          storedFixedBottom = null;
        }
        
        if (isUnsticky) {
          const heroRect = heroImage.getBoundingClientRect();
          const absContainerOffset = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--abs-container-offset'));
          const extraOffset = window.innerWidth > 800 ? 31 : -8;
          const newTextAbsTop = window.scrollY + heroRect.bottom + 20 - absContainerOffset + 10 + extraOffset;
          heroContainer.style.top = newTextAbsTop + "px";
        }
      }
      
      // Fade out .top-bar when the hero image is no longer visible in the viewport.
      const topBar = document.querySelector(".top-bar");
      const heroImageRect = heroImage.getBoundingClientRect();
      if (heroImageRect.bottom <= 0) {
        topBar.style.opacity = "0";
      } else {
        topBar.style.opacity = "1";
      }
    }
    
    document.addEventListener("DOMContentLoaded", () => {
      document.querySelector(".hero-text-1").style.top = "14vh";
      document.querySelector(".hero-text-2").style.top = "0px";
      
      // Trigger initial update to set positions and initial state.
      setTimeout(() => {
        updateClipPath();
      }, 50);
      
      // Auto hover effect on the hero down arrow after 4 seconds.
      setTimeout(() => {
        const downArrow = document.querySelector(".hero-down-arrow");
        downArrow.classList.add("hover-animate");
        setTimeout(() => {
          downArrow.classList.remove("hover-animate");
        }, 1000);
      }, 4000);
      
      // Click event for hero down arrow.
      const downArrow = document.querySelector(".hero-down-arrow");
      downArrow.addEventListener("click", () => {
        const vh = window.innerHeight;
        let scrollTarget;
        if (window.innerWidth < 801) {
          scrollTarget = ((vh * 0.24) + 200) / 0.3125;
        } else {
          scrollTarget = vh * 0.768;
        }
        window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
      });
    });
    
    let ticking = false;
    window.addEventListener("scroll", function() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    });
    
    window.addEventListener("resize", updateClipPath);
  </script>
</head>
<body>
  <!-- TOP BAR -->
  <div class="top-bar"></div>
  
  <!-- HERO DOWN ARROW -->
  <img class="hero-down-arrow" src="https://storage.googleapis.com/msgsndr/FahnfAK4Y2D0yi846rOF/media/67bba9160f0b26304605e14c.png" alt="Down Arrow" />
  
  <!-- HERO IMAGE CONTAINER -->
  <div class="hero-container-1">
    <div class="hero-text-1">The Kitchen You’ve Always Wanted.</div>
    <img class="hero-image fixed-hero" src="https://storage.googleapis.com/msgsndr/FahnfAK4Y2D0yi846rOF/media/67e88d113792944820e8487c.jpeg" alt="Hero Image" />
  </div>
  
  <!-- TRIGGER ELEMENT -->
  <div id="heading-VBJYPPhLuK" style="margin-top:1500px; padding:0; background:#767676; font-size:2rem;"></div>
  
  <!-- HERO CONTAINER (TEXT 2 + BUTTON) -->
  <div class="hero-container-2 fixed">
    <div class="hero-text-2">Created not just for you. But with you.
</div>
    <button id="cta-btn" class="hero-button" onclick="window.open('https://sandwichkitchens.com/projects', '_blank');">
      <span class="label default">View Our Latest Projects</span>
      <span class="label hover">View Our Latest Projects</span>
    </button>
  </div>
  
  <!-- SPACER -->
  <div class="spacer"></div>
</body>
</html>