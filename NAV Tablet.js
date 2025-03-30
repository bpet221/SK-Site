<a href="#" class="btn" id="custom2-trigger-btn">
  <span class="dot"></span>
  <span class="label default">Let's talk</span>
  <span class="label hover">Let's talk</span>
</a>

<button id="button-jaoKHZF4tT" style="display: none;">Hidden Trigger</button>

<script>
window.addEventListener('load', function() {
  // Button click functionality
  const triggerBtn = document.querySelector("#custom2-trigger-btn");
  const hiddenBtn = document.querySelector("#button-jaoKHZF4tT_btn");

  if (!hiddenBtn) {
    console.error("Hidden button #button-jaoKHZF4tT_btn not found");
  } else {
    triggerBtn.addEventListener("click", function(event) {
      event.preventDefault();
      const clickEvent = new Event('click', {
        bubbles: true,
        cancelable: true
      });
      hiddenBtn.dispatchEvent(clickEvent);
    });
  }

  // Function to set widths with retry logic
  function setMenuWidths(items, callback) {
    let attempts = 0;
    const maxAttempts = 10;

    function trySetWidths() {
      let allWidthsSet = true;
      items.forEach(function(el) {
        if (el.classList.contains('submenu-item')) {
          el.style.width = 'auto';
          el.style.minWidth = 'fit-content';
          el.style.height = window.getComputedStyle(el).height;
          el.style.flexShrink = '0';
          el.style.display = 'block';
          return;
        }
        const computedStyle = window.getComputedStyle(el);
        const width = computedStyle.width;
        if (width === '0px' || width === 'auto') {
          allWidthsSet = false;
        } else {
          el.style.width = width;
          el.style.height = computedStyle.height;
          el.style.flexShrink = '0';
          el.style.display = 'inline-block';
          el.style.textAlign = 'right';
          el.style.paddingRight = '0';
          el.style.marginRight = '0';
        }
      });
      attempts++;
      if (!allWidthsSet && attempts < maxAttempts) {
        requestAnimationFrame(trySetWidths);
      } else if (callback) {
        callback();
      }
    }
    requestAnimationFrame(trySetWidths);
  }

  // Function to duplicate menu text and set widths
  function duplicateMenuText() {
    const items = document.querySelectorAll("#nav-menu-v2-a5xqWHPv2M .menu-item-title, #nav-menu-v2-a5xqWHPv2M .submenu-item");
    items.forEach(function(el) {
      if (el.childElementCount === 2) return;
      const text = el.textContent.trim();
      if (text) {
        el.innerHTML = `<div>${text}</div><div>${text}</div>`;
      }
    });
    setMenuWidths(items, () => {
      setTimeout(() => setMenuWidths(items), 1000);
    });
  }

  // Function to update widths on resize
  function updateMenuWidths() {
    const items = document.querySelectorAll("#nav-menu-v2-a5xqWHPv2M .menu-item-title, #nav-menu-v2-a5xqWHPv2M .submenu-item");
    items.forEach(function(el) {
      el.style.width = el.classList.contains('submenu-item') ? 'auto' : '';
      el.style.minWidth = el.classList.contains('submenu-item') ? 'fit-content' : '';
      el.style.height = '';
      el.style.flexShrink = '';
      el.style.display = '';
      el.style.textAlign = el.classList.contains('submenu-item') ? '' : 'right';
      el.style.paddingRight = '0';
      el.style.marginRight = '0';
    });
    setMenuWidths(items);
  }

  // Wait for nav menu
  const waitForNavMenu = setInterval(() => {
    const navMenu = document.querySelector("#nav-menu-v2-a5xqWHPv2M");
    if (navMenu) {
      clearInterval(waitForNavMenu);
      duplicateMenuText();
      
      window.addEventListener('resize', function() {
        clearTimeout(window.resizeTimeout);
        window.resizeTimeout = setTimeout(updateMenuWidths, 300);
      });

      let timeoutId;
      const observer = new MutationObserver(function(mutations) {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(duplicateMenuText, 300);
      });
      observer.observe(navMenu, { childList: true, subtree: true });
    }
  }, 100);
});
</script>