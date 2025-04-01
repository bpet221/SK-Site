<script>
window.addEventListener('load', function() {
    setTimeout(function() {
        const spaceBelowFooter = window.innerHeight - document.querySelector('#section-bsHacmtKd-').getBoundingClientRect().bottom;
        const colElement = document.querySelector('#col-h6q9-tCNL6');
        const currentPaddingBottom = parseFloat(window.getComputedStyle(colElement).paddingBottom) || 0;
        const newPaddingBottom = spaceBelowFooter + currentPaddingBottom + 2; // Adds 2px
        colElement.style.paddingBottom = `${newPaddingBottom}px`;
    }, 1000);
});
</script>