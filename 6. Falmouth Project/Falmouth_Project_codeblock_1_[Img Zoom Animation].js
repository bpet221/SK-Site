<script>
  document.addEventListener("DOMContentLoaded", function() {
    // Only apply on screens smaller than 768px
    if (window.innerWidth < 768) {
      // Select all image containers for our targets on small screens
      const containers = document.querySelectorAll(
        "#image-xlmsv-37NS .image-container, " +
        "#image-lMxbcPRFPW .image-container, " +
        "#image-QWGtjkBzR9 .image-container, " +
        "#image-VJPg-LvPD6 .image-container, " +
        "#image-5VwlpHKoaK .image-container, " +
        "#image-THXwOKxfK4 .image-container, " +
        "#image-olSyE2sCJ5 .image-container, " +
        "#image-5ox58kau0n .image-container, " +
        "#image-ekE1vun9jx .image-container, " +
        "#image--8No4zPaSN .image-container, " +
        "#image-Q1zmquTTvJ .image-container"
      );
      
      function recalcZoom() {
        let closestContainer = null;
        let minDistance = Infinity;
        
        containers.forEach(container => {
          const rect = container.getBoundingClientRect();
          // Calculate how much of the container is visible
          const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
          const visibilityRatio = visibleHeight / rect.height;
          
          // Only consider containers that are at least 90% visible
          if (visibilityRatio >= 0.9) {
            const containerCenter = rect.top + rect.height / 2;
            const viewportCenter = window.innerHeight / 2;
            const distance = Math.abs(containerCenter - viewportCenter);
            if (distance < minDistance) {
              minDistance = distance;
              closestContainer = container;
            }
          }
        });
        
        // Remove zoom effect from all images
        containers.forEach(container => {
          const img = container.querySelector("img");
          if (img) {
            img.classList.remove("zoomed");
          }
        });
        
        // Apply zoom to the image in the container closest to the viewport center
        if (closestContainer) {
          const img = closestContainer.querySelector("img");
          if (img) {
            img.classList.add("zoomed");
          }
        }
      }
      
      // Initial calculation
      recalcZoom();
      
      // Recalculate on scroll and resize
      window.addEventListener("scroll", recalcZoom);
      window.addEventListener("resize", recalcZoom);
    }
  });
</script>