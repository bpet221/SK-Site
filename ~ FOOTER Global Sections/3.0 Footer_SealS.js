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
    <a href="#" data-popup="popup1">
      <div class="image-wrapper">
        <img class="image-item" src="https://assets.cdn.filesafe.space/FahnfAK4Y2D0yi846rOF/media/67e0bf107c855444b8d01a0f.png" alt="Image 4">
      </div>
    </a>
    <a href="#" data-popup="popup2">
      <div class="image-wrapper">
        <img class="image-item" src="https://assets.cdn.filesafe.space/FahnfAK4Y2D0yi846rOF/media/67e0bf107c8554332bd01a10.png" alt="Image 5">
      </div>
    </a>
  </div>

  <div id="popup1" class="popup-overlay">
    <img class="popup-image" src="https://assets.cdn.filesafe.space/FahnfAK4Y2D0yi846rOF/media/67e0bf107c855444b8d01a0f.png" alt="Image 4 Large">
  </div>
  <div id="popup2" class="popup-overlay">
    <img class="popup-image" src="https://assets.cdn.filesafe.space/FahnfAK4Y2D0yi846rOF/media/67e0bf107c8554332bd01a10.png" alt="Image 5 Large">
  </div>
</div>

<script>
  window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      document.querySelectorAll('.image-wrapper').forEach(wrapper => {
        const parentLink = wrapper.parentElement;
        wrapper.addEventListener('touchstart', function(e) {
          this.classList.add('active');
        }, { passive: true });
        wrapper.addEventListener('touchend', function(e) {
          this.classList.remove('active');
          if (parentLink.href.includes('#')) {
            const popupId = parentLink.getAttribute('data-popup');
            if (popupId) document.getElementById(popupId).style.display = 'flex';
          } else {
            window.open(parentLink.href, '_blank');
          }
        }, { passive: true });
        wrapper.addEventListener('click', function(e) {
          e.preventDefault();
          if (parentLink.href.includes('#')) {
            const popupId = parentLink.getAttribute('data-popup');
            if (popupId) document.getElementById(popupId).style.display = 'flex';
          } else {
            window.open(parentLink.href, '_blank');
          }
        });
      });

      document.querySelectorAll('.popup-overlay').forEach(popup => {
        popup.addEventListener('click', () => {
          popup.style.display = 'none';
        });
      });

      function adjustImageSizes() {
        const codeSection = document.querySelector('#custom-code-bQNqrT9J15');
        const images = document.querySelectorAll('.image-item');
        const viewportWidth = window.innerWidth;
        const minMarginPx = viewportWidth * 0.15;
        const codeSectionStyle = window.getComputedStyle(codeSection);
        const currentMarginLeft = parseFloat(codeSectionStyle.marginLeft);
        const currentMarginRight = parseFloat(codeSectionStyle.marginRight);
        if (currentMarginLeft < minMarginPx || currentMarginRight < minMarginPx) {
          const availableWidth = viewportWidth * 0.7;
          const numImages = images.length;
          const gapPx = (numImages - 1) * (viewportWidth * 0.02);
          const maxImageWidth = (availableWidth - gapPx) / numImages;
          images.forEach(image => {
            image.style.maxWidth = `${Math.min(Math.max(maxImageWidth, 40), 100)}px`;
          });
        } else {
          images.forEach(image => {
            image.style.maxWidth = viewportWidth <= 767.9 ? '60px' : '100px';
          });
        }
      }

      adjustImageSizes();
      window.addEventListener('resize', adjustImageSizes);
    }, 100);
  });
</script>