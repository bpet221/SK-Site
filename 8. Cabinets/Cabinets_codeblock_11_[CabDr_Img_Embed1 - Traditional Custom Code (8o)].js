<div class="door-gallery" id="door-gallery-trad4">
    <div class="door-item" onclick="showFullscreenTrad4('https://i0.wp.com/802cabinetry.com/wp-content/uploads/elementor/thumbs/Stowe-White-Door-qnhfn2iynwapxwx7klh4k7hayivhr9ktyh9jiz8p1k.png?w=800&ssl=1')">
        <span>8o-1</span>
        <img src="https://i0.wp.com/802cabinetry.com/wp-content/uploads/elementor/thumbs/Stowe-White-Door-qnhfn2iynwapxwx7klh4k7hayivhr9ktyh9jiz8p1k.png?w=800&ssl=1" alt="Stowe White Door">
    </div>
    <div class="door-item" onclick="showFullscreenTrad4('https://i0.wp.com/802cabinetry.com/wp-content/uploads/elementor/thumbs/Stowe-Light-Gray-Door-qnhfktouc5827g6momj7lrvnvdxxdanwzd5s96kjwo.png?w=800&ssl=1')">
        <span>8o-2</span>
        <img src="https://i0.wp.com/802cabinetry.com/wp-content/uploads/elementor/thumbs/Stowe-Light-Gray-Door-qnhfktouc5827g6momj7lrvnvdxxdanwzd5s96kjwo.png?w=800&ssl=1" alt="Stowe Light Gray Door">
    </div>
    <div class="door-item" onclick="showFullscreenTrad4('https://i0.wp.com/802cabinetry.com/wp-content/uploads/elementor/thumbs/Stowe-Driftwood-Door-qnhfjiowuffq2y2wb27v53qm64dkofhc4wji9ci8js.png?w=800&ssl=1')">
        <span>8o-3</span>
        <img src="https://i0.wp.com/802cabinetry.com/wp-content/uploads/elementor/thumbs/Stowe-Driftwood-Door-qnhfjiowuffq2y2wb27v53qm64dkofhc4wji9ci8js.png?w=800&ssl=1" alt="Stowe Driftwood Door">
    </div>
    <div class="door-item" onclick="showFullscreenTrad4('https://i0.wp.com/802cabinetry.com/wp-content/uploads/elementor/thumbs/Stowe-Natural-Door-qnhflw884cotfgmnfl6wy05k86nz4vwwsnwoxizetk.png?w=800&ssl=1')">
        <span>8o-4</span>
        <img src="https://i0.wp.com/802cabinetry.com/wp-content/uploads/elementor/thumbs/Stowe-Natural-Door-qnhflw884cotfgmnfl6wy05k86nz4vwwsnwoxizetk.png?w=800&ssl=1" alt="Stowe Natural Door">
    </div>
    <div class="more-text">...plus many more, including custom options.</div>
</div>

<div id="fullscreen-overlay-trad4" class="fullscreen-overlay">
    <span class="close-btn" onclick="hideFullscreenTrad4()">×</span>
    <span class="arrow-left" onclick="prevImageTrad4()">‹</span>
    <img id="fullscreen-image-trad4" src="" alt="Full Screen Image">
    <span id="fullscreen-number-trad4" class="fullscreen-number"></span>
    <span class="arrow-right" onclick="nextImageTrad4()">›</span>
</div>

<script>
    let currentIndexTrad4 = 0;
    const galleryTrad4 = document.getElementById('door-gallery-trad4');
    const itemsTrad4 = Array.from(galleryTrad4.querySelectorAll('.door-item'));
    const imagesTrad4 = itemsTrad4.map(item => item.getAttribute('onclick').match(/'([^']+)'/)[1]);
    const numbersTrad4 = itemsTrad4.map(item => item.querySelector('span').textContent);

    function showFullscreenTrad4(src) {
        currentIndexTrad4 = imagesTrad4.indexOf(src);
        const overlay = document.getElementById('fullscreen-overlay-trad4');
        const fullscreenImg = document.getElementById('fullscreen-image-trad4');
        const fullscreenNum = document.getElementById('fullscreen-number-trad4');
        fullscreenImg.src = src;
        fullscreenNum.textContent = numbersTrad4[currentIndexTrad4];
        overlay.style.display = 'flex';
    }

    function hideFullscreenTrad4() {
        document.getElementById('fullscreen-overlay-trad4').style.display = 'none';
    }

    function prevImageTrad4() {
        currentIndexTrad4 = (currentIndexTrad4 > 0) ? currentIndexTrad4 - 1 : imagesTrad4.length - 1;
        document.getElementById('fullscreen-image-trad4').src = imagesTrad4[currentIndexTrad4];
        document.getElementById('fullscreen-number-trad4').textContent = numbersTrad4[currentIndexTrad4];
    }

    function nextImageTrad4() {
        currentIndexTrad4 = (currentIndexTrad4 < imagesTrad4.length - 1) ? currentIndexTrad4 + 1 : 0;
        document.getElementById('fullscreen-image-trad4').src = imagesTrad4[currentIndexTrad4];
        document.getElementById('fullscreen-number-trad4').textContent = numbersTrad4[currentIndexTrad4];
    }
</script>