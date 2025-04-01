<a href="#" class="btn-cabinets-mobile-3" data-section="section-DDO7pHGYO9">
  <span class="dot"></span>
  <span class="label default">VIEW DOORS + FINISHES</span>
  <span class="label hover">VIEW DOORS + FINISHES</span>
</a>

<script>
(function() {
    function init() {
        const section = document.getElementById('section-DDO7pHGYO9');
        if (section) {
            section.classList.remove('open');
            section.style.maxHeight = '';
        }

        document.addEventListener('click', (e) => {
            const button = e.target.closest('.btn-cabinets-mobile-3');
            if (!button) return;
            e.preventDefault();
            const section = document.getElementById('section-DDO7pHGYO9');
            if (!section) {
                console.error('Section section-DDO7pHGYO9 not found');
                return;
            }
            section.classList.toggle('open');
        });
    }

    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        setTimeout(init, 500);
    } else {
        document.addEventListener('DOMContentLoaded', () => setTimeout(init, 500));
    }
})();
</script>