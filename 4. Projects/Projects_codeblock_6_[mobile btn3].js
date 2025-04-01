<a href="https://sandwichkitchens.com/accessory-dwelling-project" class="btn-cabinets-mobile-3" target="_blank" rel="noopener noreferrer">
  <span class="dot"></span>
  <span class="label default">VIEW PROJECT</span>
  <span class="label hover">VIEW PROJECT</span>
</a>

<script>
document.addEventListener('DOMContentLoaded', function() {
  if (window.innerWidth < 768) {
    const btn = document.querySelector('.btn-cabinets-mobile-3');
    let timer;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          timer = setTimeout(() => {
            btn.classList.add('animate');
          }, 3500);
        } else {
          clearTimeout(timer);
          btn.classList.remove('animate');
        }
      });
    }, { threshold: 0.5 });
    observer.observe(btn);
  }
});
</script>