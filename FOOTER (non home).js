<!-- Navigation Sections (Ensure these exist on your page) -->
<div id="section-4hcS9sD17J" style="display:none;"></div>
<div id="section-gs7_Vr7US1" style="display:none;"></div>
<div id="section-p-41UvcD17" style="display:none;"></div>

<!-- Second Background Element -->
<div id="second-bg"></div>

<!-- Scroll Up Arrow Element -->
<img class="scroll-up-arrow" src="https://storage.googleapis.com/msgsndr/FahnfAK4Y2D0yi846rOF/media/67bcccc4c3edf624fc05abe5.png" alt="Scroll Up Arrow" />

<script>
  document.addEventListener("DOMContentLoaded", function () {
    // Detect GHL Funnel Builder and apply a class
    if (document.querySelector("iframe[name='funnel-builder']")) {
      document.body.classList.add("has-funnel-builder");
    }

    // Scroll Up Arrow Functionality
    var scrollUpButton = document.querySelector('.scroll-up-arrow');
    if (scrollUpButton) {
      scrollUpButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Function to toggle the correct navbar section
    function toggleNav() {
      var width = window.innerWidth;
      var navIds = ["section-4hcS9sD17J", "section-gs7_Vr7US1", "section-p-41UvcD17"];
      
      navIds.forEach(function (id) {
        var el = document.getElementById(id);
        if (el) {
          el.classList.remove("show");
          el.style.display = "none";
        }
      });

      var secondBg = document.getElementById("second-bg");
      var nav = null;

      if (width > 1250) {
        nav = document.getElementById("section-4hcS9sD17J");
      } else if (width >= 481 && width <= 1250) {
        nav = document.getElementById("section-gs7_Vr7US1");
      } else {
        nav = document.getElementById("section-p-41UvcD17");
      }

      if (nav) {
        nav.style.display = "block";
        requestAnimationFrame(() => {
          nav.classList.add("show");
          if (secondBg) secondBg.classList.add("moved");
        });
      }
    }

    // Function to ensure animations execute properly
    function runLoaderSequence() {
      requestAnimationFrame(() => {
        toggleNav();
        setTimeout(() => {
          document.getElementById("second-bg").classList.add("fade");
        }, 900);
      });
    }

    // Ensure animations run properly when switching to an inactive tab
    document.addEventListener("visibilitychange", function () {
      if (!document.hidden) {
        requestAnimationFrame(runLoaderSequence);
      }
    });

    // Start loader sequence after page load
    setTimeout(runLoaderSequence, 750);

    // Event Listeners for resizing and scrolling
    window.addEventListener('resize', toggleNav);
    window.addEventListener("scroll", function () {
      var scrollUpArrow = document.querySelector(".scroll-up-arrow");
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        scrollUpArrow.classList.add("visible");
      } else {
        scrollUpArrow.classList.remove("visible");
      }
    });
  });
</script>