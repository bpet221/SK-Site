<div id="custom-code-bQNqrT9J15">
  <div class="image-section">
    <a href="https://www.angi.com/companylist/us/ma/east-sandwich/sandwich-kitchens-and-construction-reviews-8328076.htm" target="_blank">
      <div class="image-wrapper">
        <img class="image-item" src="https://assets.cdn.filesafe.space/FahnfAK4Y2D0yi846rOF/media/67e0bf10f31f8f2752a6ad53.png" alt="Image 1">
      </div>
    </a>
    <a href="https://www.angi.com/companylist/us/ma/east-sandwich/sandwich-kitchens-and-construction-reviews-8328076.htm" target="_blank">
      <div class="image-wrapper">
        <img class="image-item" src="https://assets.cdn.filesafe.space/FahnfAK4Y2D0yi846rOF/media/67e0bf10f31f8f821ba6ad52.png" alt="Image 2">
      </div>
    </a>
    <a href="https://www.angi.com/companylist/us/ma/east-sandwich/sandwich-kitchens-and-construction-reviews-8328076.htm" target="_blank">
      <div class="image-wrapper">
        <img class="image-item" src="https://assets.cdn.filesafe.space/FahnfAK4Y2D0yi846rOF/media/67e0bf107c855478e2d01a0e.png" alt="Image 3">
      </div>
    </a>
    <a href="#" onclick="document.getElementById('popup1').style.display='flex'; return false;">
      <div class="image-wrapper">
        <img class="image-item" src="https://assets.cdn.filesafe.space/FahnfAK4Y2D0yi846rOF/media/67e0bf107c855444b8d01a0f.png" alt="Image 4">
      </div>
    </a>
    <a href="#" onclick="document.getElementById('popup2').style.display='flex'; return false;">
      <div class="image-wrapper">
        <img class="image-item" src="https://assets.cdn.filesafe.space/FahnfAK4Y2D0yi846rOF/media/67e0bf107c8554332bd01a10.png" alt="Image 5">
      </div>
    </a>
  </div>

  <div id="popup1" class="popup-overlay" onclick="this.style.display='none';">
    <img class="popup-image" src="https://assets.cdn.filesafe.space/FahnfAK4Y2D0yi846rOF/media/67e0bf107c855444b8d01a0f.png" alt="Image 4 Large">
  </div>
  <div id="popup2" class="popup-overlay" onclick="this.style.display='none';">
    <img class="popup-image" src="https://assets.cdn.filesafe.space/FahnfAK4Y2D0yi846rOF/media/67e0bf107c8554332bd01a10.png" alt="Image 5 Large">
  </div>
</div>

<script>
    // Handle touch events for mobile animation
    document.querySelectorAll('.image-wrapper').forEach(wrapper => {
        wrapper.addEventListener('touchstart', function(e) {
            this.classList.add('active');
        });

        wrapper.addEventListener('touchend', function(e) {
            this.classList.remove('active');
            const parentLink = this.parentElement;
            if (parentLink.href.includes('#')) {
                parentLink.click();
            } else {
                window.open(parentLink.href, '_blank');
            }
        });

        wrapper.addEventListener('click', function(e) {
            e.preventDefault();
            const parentLink = this.parentElement;
            if (parentLink.href.includes('#')) {
                parentLink.click();
            } else {
                window.open(parentLink.href, '_blank');
            }
        });
    });

    // Dynamically adjust image sizes to maintain 15% margin
    function adjustImageSizes() {
        const codeSection = document.querySelector('#custom-code-bQNqrT9J15');
        const images = document.querySelectorAll('.image-item');
        const viewportWidth = window.innerWidth;
        
        // Calculate 15% of viewport width in pixels
        const minMarginPx = viewportWidth * 0.15;
        
        // Get the code section's width and margins
        const codeSectionStyle = window.getComputedStyle(codeSection);
        const currentMarginLeft = parseFloat(codeSectionStyle.marginLeft);
        const currentMarginRight = parseFloat(codeSectionStyle.marginRight);
        
        // If margins are less than 15% of viewport, adjust image sizes
        if (currentMarginLeft < minMarginPx || currentMarginRight < minMarginPx) {
            // Calculate the total width available for images (viewport - 30% for margins)
            const availableWidth = viewportWidth * 0.7; // 70% of viewport after 15% margins on each side
            const numImages = images.length;
            const gapPx = (numImages - 1) * (viewportWidth * 0.02); // 2% gap between images
            const maxImageWidth = (availableWidth - gapPx) / numImages;

            // Apply the new max-width, but cap at 100px
            images.forEach(image => {
                image.style.maxWidth = `${Math.min(Math.max(maxImageWidth, 40), 100)}px`; // Cap at 100px, min 40px
            });
        } else {
            // Reset to default max-width (capped at 100px)
            images.forEach(image => {
                image.style.maxWidth = viewportWidth <= 767.9 ? '60px' : '100px';
            });
        }
    }

    // Run on load and resize
    window.addEventListener('load', adjustImageSizes);
    window.addEventListener('resize', adjustImageSizes);
</script>