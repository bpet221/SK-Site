<a href="#" class="btn-cabinets-desktop-1" data-section="section--epdMQbZ3w">
  <span class="dot"></span>
  <span class="label default">VIEW DOORS + FINISHES</span>
  <span class="label hover">VIEW DOORS + FINISHES</span>
</a>

<script>
(function() {
    function init() {
        const section = document.getElementById('section--epdMQbZ3w');
        if (section) {
            section.classList.remove('open');
            section.style.maxHeight = '';
        }

        document.addEventListener('click', (e) => {
            const button = e.target.closest('.btn-cabinets-desktop-1');
            if (!button) return;
            e.preventDefault();
            const section = document.getElementById('section--epdMQbZ3w');
            if (!section) {
                console.error('Section section--epdMQbZ3w not found');
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