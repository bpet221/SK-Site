<div class="door-gallery" id="mod-sec-34-gallery">
    <div class="door-item" onclick="showFullscreenMod34('https://i0.wp.com/802cabinetry.com/wp-content/uploads/elementor/thumbs/Bolton-White-Door-qnhfirflc8eeq96hq8fomsm8xy3xh7h4d5mfcbmnk8.png?w=800&ssl=1')">
        <span>8o-5</span>
        <img src="https://i0.wp.com/802cabinetry.com/wp-content/uploads/elementor/thumbs/Bolton-White-Door-qnhfirflc8eeq96hq8fomsm8xy3xh7h4d5mfcbmnk8.png?w=800&ssl=1" alt="Bolton White Door">
    </div>
    <div class="door-item" onclick="showFullscreenMod34('https://i0.wp.com/802cabinetry.com/wp-content/uploads/elementor/thumbs/Bolton-Blue-Door-qnhffe6eulsf4k2mea0t757sb8pkw93qwhgsfmmfuw.png?w=800&ssl=1')">
        <span>8o-6</span>
        <img src="https://i0.wp.com/802cabinetry.com/wp-content/uploads/elementor/thumbs/Bolton-Blue-Door-qnhffe6eulsf4k2mea0t757sb8pkw93qwhgsfmmfuw.png?w=800&ssl=1" alt="Bolton Blue Door">
    </div>
    <div class="door-item" onclick="showFullscreenMod34('https://i0.wp.com/802cabinetry.com/wp-content/uploads/elementor/thumbs/Bolton-Green-Door-qnhfh63frc7x21hs11nfwp34pfyjfo5ht9tt2fzo3s.png?w=800&ssl=1')">
        <span>8o-7</span>
        <img src="https://i0.wp.com/802cabinetry.com/wp-content/uploads/elementor/thumbs/Bolton-Green-Door-qnhfh63frc7x21hs11nfwp34pfyjfo5ht9tt2fzo3s.png?w=800&ssl=1" alt="Bolton Green Door">
    </div>
    <div class="more-text">...plus many more, including custom options.</div>
</div>

<div id="fullscreen-overlay-mod34" class="fullscreen-overlay">
    <span class="close-btn" onclick="hideFullscreenMod34()">×</span>
    <span class="arrow-left" onclick="prevImageMod34()">‹</span>
    <img id="fullscreen-image-mod34" src="" alt="Full Screen Image">
    <span id="fullscreen-number-mod34" class="fullscreen-number"></span>
    <span class="arrow-right" onclick="nextImageMod34()">›</span>
</div>

<script>
    let currentIndexMod34 = 0;
    const galleryMod34 = document.getElementById('mod-sec-34-gallery');
    const itemsMod34 = Array.from(galleryMod34.querySelectorAll('.door-item'));
    const imagesMod34 = itemsMod34.map(item => item.getAttribute('onclick').match(/'([^']+)'/)[1]);
    const numbersMod34 = itemsMod34.map(item => item.querySelector('span').textContent);

    function showFullscreenMod34(src) {
        currentIndexMod34 = imagesMod34.indexOf(src);
        const overlay = document.getElementById('fullscreen-overlay-mod34');
        const fullscreenImg = document.getElementById('fullscreen-image-mod34');
        const fullscreenNum = document.getElementById('fullscreen-number-mod34');
        fullscreenImg.src = src;
        fullscreenNum.textContent = numbersMod34[currentIndexMod34];
        overlay.style.display = 'flex';
    }

    function hideFullscreenMod34() {
        document.getElementById('fullscreen-overlay-mod34').style.display = 'none';
    }

    function prevImageMod34() {
        currentIndexMod34 = (currentIndexMod34 > 0) ? currentIndexMod34 - 1 : imagesMod34.length - 1;
        document.getElementById('fullscreen-image-mod34').src = imagesMod34[currentIndexMod34];
        document.getElementById('fullscreen-number-mod34').textContent = numbersMod34[currentIndexMod34];
    }

    function nextImageMod34() {
        currentIndexMod34 = (currentIndexMod34 < imagesMod34.length - 1) ? currentIndexMod34 + 1 : 0;
        document.getElementById('fullscreen-image-mod34').src = imagesMod34[currentIndexMod34];
        document.getElementById('fullscreen-number-mod34').textContent = numbersMod34[currentIndexMod34];
    }
</script>