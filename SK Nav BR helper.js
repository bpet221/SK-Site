<script>
(function() {
    function init() {
        const section = document.getElementById('section-kYksPsq7_h');
        if (!section) {
            console.error('Section #section-kYksPsq7_h not found');
            return;
        }

        // Set initial state
        section.style.backgroundColor = ''; // Default (non-transparent)

        // Scroll event listener
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                section.style.backgroundColor = 'transparent';
            } else {
                section.style.backgroundColor = ''; // Reset to default
            }
        });
    }

    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        setTimeout(init, 500);
    } else {
        document.addEventListener('DOMContentLoaded', () => setTimeout(init, 500));
    }
})();
</script>