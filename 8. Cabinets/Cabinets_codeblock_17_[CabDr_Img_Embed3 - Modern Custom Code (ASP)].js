<div class="door-gallery" id="mod-sec-32-gallery">
    <div class="door-item" onclick="showFullscreenMod32('https://programmingmedia.blob.core.windows.net/aspect-images-products-doorstyles/11239-Maple-Shadow-Metropolitan.jpg')"><span>ASP-12</span><img src="https://programmingmedia.blob.core.windows.net/aspect-images-products-doorstyles/11239-Maple-Shadow-Metropolitan.jpg" alt="Maple Shadow Metropolitan"></div>
</div>

<div id="fullscreen-overlay-mod32" class="fullscreen-overlay">
    <span class="close-btn" onclick="hideFullscreenMod32()">×</span>
    <span class="arrow-left" onclick="prevImageMod32()">‹</span>
    <img id="fullscreen-image-mod32" src="" alt="Full Screen Image">
    <span id="fullscreen-number-mod32" class="fullscreen-number"></span>
    <span class="arrow-right" onclick="nextImageMod32()">›</span>
</div>

<script>
    let currentIndexMod32 = 0;
    const galleryMod32 = document.getElementById('mod-sec-32-gallery');
    const itemsMod32 = Array.from(galleryMod32.querySelectorAll('.door-item'));
    const imagesMod32 = itemsMod32.map(item => item.getAttribute('onclick').match(/'([^']+)'/)[1]);
    const numbersMod32 = itemsMod32.map(item => item.querySelector('span').textContent);

    function showFullscreenMod32(src) {
        currentIndexMod32 = imagesMod32.indexOf(src);
        const overlay = document.getElementById('fullscreen-overlay-mod32');
        const fullscreenImg = document.getElementById('fullscreen-image-mod32');
        const fullscreenNum = document.getElementById('fullscreen-number-mod32');
        fullscreenImg.src = src;
        fullscreenNum.textContent = numbersMod32[currentIndexMod32];
        overlay.style.display = 'flex';
    }

    function hideFullscreenMod32() {
        document.getElementById('fullscreen-overlay-mod32').style.display = 'none';
    }

    function prevImageMod32() {
        currentIndexMod32 = (currentIndexMod32 > 0) ? currentIndexMod32 - 1 : imagesMod32.length - 1;
        document.getElementById('fullscreen-image-mod32').src = imagesMod32[currentIndexMod32];
        document.getElementById('fullscreen-number-mod32').textContent = numbersMod32[currentIndexMod32];
    }

    function nextImageMod32() {
        currentIndexMod32 = (currentIndexMod32 < imagesMod32.length - 1) ? currentIndexMod32 + 1 : 0;
        document.getElementById('fullscreen-image-mod32').src = imagesMod32[currentIndexMod32];
        document.getElementById('fullscreen-number-mod32').textContent = numbersMod32[currentIndexMod32];
    }
</script>