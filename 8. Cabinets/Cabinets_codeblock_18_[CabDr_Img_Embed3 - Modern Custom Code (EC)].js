<div class="door-gallery" id="mod-sec-33-gallery">
    <div class="door-item" onclick="showFullscreenMod33('https://programmingmedia.blob.core.windows.net/eclipse-images-products-doorstyles/MLBU5pcWhitewashRCWO_a02a15b5-fcb3-4b4c-8191-1c42411ecac4.png')">
        <span>EC-28</span>
        <img src="https://programmingmedia.blob.core.windows.net/eclipse-images-products-doorstyles/MLBU5pcWhitewashRCWO_a02a15b5-fcb3-4b4c-8191-1c42411ecac4.png" alt="Whitewash RCWO">
    </div>
    <div class="door-item" onclick="showFullscreenMod33('https://programmingmedia.blob.core.windows.net/eclipse-images-products-doorstyles/MalibuFFDFrameless_d3ecdc6c-9a15-44d7-82d0-c38f12d4b442.jpg')">
        <span>EC-29</span>
        <img src="https://programmingmedia.blob.core.windows.net/eclipse-images-products-doorstyles/MalibuFFDFrameless_d3ecdc6c-9a15-44d7-82d0-c38f12d4b442.jpg" alt="Malibu FFD Frameless">
    </div>
    <div class="door-item" onclick="showFullscreenMod33('https://programmingmedia.blob.core.windows.net/eclipse-images-products-doorstyles/11387-F-METRO_TAK_0e711c3a-f8d6-4b73-b09f-4aa6c226bef2.png')">
        <span>EC-31</span>
        <img src="https://programmingmedia.blob.core.windows.net/eclipse-images-products-doorstyles/11387-F-METRO_TAK_0e711c3a-f8d6-4b73-b09f-4aa6c226bef2.png" alt="Metro TAK">
    </div>
    <div class="door-item" onclick="showFullscreenMod33('https://programmingmedia.blob.core.windows.net/eclipse-images-products-doorstyles/NAPA5pcDfHudsonAmericanPoplar_2bc73528-a7a7-4431-9643-f5bc191dbab6.png')">
        <span>EC-34</span>
        <img src="https://programmingmedia.blob.core.windows.net/eclipse-images-products-doorstyles/NAPA5pcDfHudsonAmericanPoplar_2bc73528-a7a7-4431-9643-f5bc191dbab6.png" alt="Hudson American Poplar">
    </div>
    <div class="door-item" onclick="showFullscreenMod33('https://programmingmedia.blob.core.windows.net/eclipse-images-products-doorstyles/11414-F-WNSR_SLab_ClearAlder_Umber_5740bc7c-5fae-4a52-ab6d-8450c26d74db.png')">
        <span>EC-61</span>
        <img src="https://programmingmedia.blob.core.windows.net/eclipse-images-products-doorstyles/11414-F-WNSR_SLab_ClearAlder_Umber_5740bc7c-5fae-4a52-ab6d-8450c26d74db.png" alt="Clear Alder Umber">
    </div>
    <div class="more-text">...plus many more, including custom options.</div>
</div>

<div id="fullscreen-overlay-mod33" class="fullscreen-overlay">
    <span class="close-btn" onclick="hideFullscreenMod33()">×</span>
    <span class="arrow-left" onclick="prevImageMod33()">‹</span>
    <img id="fullscreen-image-mod33" src="" alt="Full Screen Image">
    <span id="fullscreen-number-mod33" class="fullscreen-number"></span>
    <span class="arrow-right" onclick="nextImageMod33()">›</span>
</div>

<script>
    let currentIndexMod33 = 0;
    const galleryMod33 = document.getElementById('mod-sec-33-gallery');
    const itemsMod33 = Array.from(galleryMod33.querySelectorAll('.door-item'));
    const imagesMod33 = itemsMod33.map(item => item.getAttribute('onclick').match(/'([^']+)'/)[1]);
    const numbersMod33 = itemsMod33.map(item => item.querySelector('span').textContent);

    function showFullscreenMod33(src) {
        currentIndexMod33 = imagesMod33.indexOf(src);
        const overlay = document.getElementById('fullscreen-overlay-mod33');
        const fullscreenImg = document.getElementById('fullscreen-image-mod33');
        const fullscreenNum = document.getElementById('fullscreen-number-mod33');
        fullscreenImg.src = src;
        fullscreenNum.textContent = numbersMod33[currentIndexMod33];
        overlay.style.display = 'flex';
    }

    function hideFullscreenMod33() {
        document.getElementById('fullscreen-overlay-mod33').style.display = 'none';
    }

    function prevImageMod33() {
        currentIndexMod33 = (currentIndexMod33 > 0) ? currentIndexMod33 - 1 : imagesMod33.length - 1;
        document.getElementById('fullscreen-image-mod33').src = imagesMod33[currentIndexMod33];
        document.getElementById('fullscreen-number-mod33').textContent = numbersMod33[currentIndexMod33];
    }

    function nextImageMod33() {
        currentIndexMod33 = (currentIndexMod33 < imagesMod33.length - 1) ? currentIndexMod33 + 1 : 0;
        document.getElementById('fullscreen-image-mod33').src = imagesMod33[currentIndexMod33];
        document.getElementById('fullscreen-number-mod33').textContent = numbersMod33[currentIndexMod33];
    }
</script>