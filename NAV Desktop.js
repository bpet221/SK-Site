<a href="#" class="btn" id="custom1-trigger-btn">
  <span class="dot"></span>
  <span class="label default">Let's talk</span>
  <span class="label hover">Let's talk</span>
</a>

<!-- Hidden button that needs to be clicked -->
<button id="button-vILF0UtI11" style="display: none;">Hidden Trigger</button>

<script>
window.addEventListener('load', function() {
  // Button click functionality
  document.querySelector("#custom1-trigger-btn").addEventListener("click", function(event) {
    event.preventDefault();
    const triggerButton = document.querySelector("#button-vILF0UtI11_btn");
    if (triggerButton) {
      triggerButton.click();
    } else {
      console.error("Trigger button with ID #button-vILF0UtI11_btn not found.");
    }
  });

  // Function to set widths with retry logic using requestAnimationFrame
  function setMenuWidths(items, callback) {
    let attempts = 0;
    const maxAttempts = 10;
    function trySetWidths() {
      let allWidthsSet = true;
      items.forEach(function(el) {
        const computedStyle = window.getComputedStyle(el);
        const width = computedStyle.width;
        if (width === '0px' || width === 'auto') {
          allWidthsSet = false;
        } else {
          el.style.width = width;
          el.style.height = computedStyle.height;
          el.style.flexShrink = '0'; // Prevent flexbox shrinking
          el.style.display = el.classList.contains('submenu-item') ? 'block' : 'inline-block'; // Ensure correct display
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

  // Function to duplicate the menu text and set widths
  function duplicateMenuText() {
    const items = document.querySelectorAll("#nav-menu-v2-DPDyFjSlSB .menu-item-title, #nav-menu-v2-DPDyFjSlSB .submenu-item");
    items.forEach(function(el) {
      if (el.childElementCount === 2) return;
      const text = el.textContent.trim();
      if (text) {
        el.innerHTML = `<div>${text}</div><div>${text}</div>`;
      }
    });
    setMenuWidths(items, () => {
      // Re-run after a longer delay to catch late re-renders
      setTimeout(() => setMenuWidths(items), 1000);
    });
  }

  // Function to update widths on resize
  function updateMenuWidths() {
    const items = document.querySelectorAll("#nav-menu-v2-DPDyFjSlSB .menu-item-title, #nav-menu-v2-DPDyFjSlSB .submenu-item");
    items.forEach(function(el) {
      el.style.width = '';
      el.style.height = '';
      el.style.flexShrink = '';
      el.style.display = '';
    });
    setMenuWidths(items);
  }

  // Wait for the nav menu to be available
  const waitForNavMenu = setInterval(() => {
    const navMenu = document.querySelector("#nav-menu-v2-DPDyFjSlSB");
    if (navMenu) {
      clearInterval(waitForNavMenu);
      // Run once immediately
      duplicateMenuText();

      // Add resize event listener
      window.addEventListener('resize', function() {
        clearTimeout(window.resizeTimeout);
        window.resizeTimeout = setTimeout(updateMenuWidths, 300);
      });

      // Use a MutationObserver with debouncing
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