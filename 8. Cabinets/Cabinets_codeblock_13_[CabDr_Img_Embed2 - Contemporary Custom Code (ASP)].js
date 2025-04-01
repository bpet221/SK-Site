<div class="door-gallery" id="cont-sec-22-gallery">
    <div class="door-item" onclick="showFullscreenCont22('https://programmingmedia.blob.core.windows.net/aspect-images-products-doorstyles/11229-American%20Poplar-Kona-Essex.jpg')"><span>ASP-8</span><img src="https://programmingmedia.blob.core.windows.net/aspect-images-products-doorstyles/11229-American%20Poplar-Kona-Essex.jpg" alt="American Poplar Kona Essex"></div>
    <div class="door-item" onclick="showFullscreenCont22('https://programmingmedia.blob.core.windows.net/aspect-images-products-doorstyles/LNCRIndigoAmericanPoplar_72540e21-df8a-4298-9c18-d4fc5fd1a174.jpg')"><span>ASP-19</span><img src="https://programmingmedia.blob.core.windows.net/aspect-images-products-doorstyles/LNCRIndigoAmericanPoplar_72540e21-df8a-4298-9c18-d4fc5fd1a174.jpg" alt="Indigo American Poplar"></div>
    <div class="door-item" onclick="showFullscreenCont22('https://programmingmedia.blob.core.windows.net/aspect-images-products-doorstyles/PfpSlabDfSedonaMaple_b32b7476-d321-4f2e-b89a-735b0e692c07.jpg')"><span>ASP-22</span><img src="https://programmingmedia.blob.core.windows.net/aspect-images-products-doorstyles/PfpSlabDfSedonaMaple_b32b7476-d321-4f2e-b89a-735b0e692c07.jpg" alt="Sedona Maple"></div>
</div>

<div id="fullscreen-overlay-cont22" class="fullscreen-overlay">
    <span class="close-btn" onclick="hideFullscreenCont22()">×</span>
    <span class="arrow-left" onclick="prevImageCont22()">‹</span>
    <img id="fullscreen-image-cont22" src="" alt="Full Screen Image">
    <span id="fullscreen-number-cont22" class="fullscreen-number"></span>
    <span class="arrow-right" onclick="nextImageCont22()">›</span>
</div>

<script>
    let currentIndexCont22 = 0;
    const galleryCont22 = document.getElementById('cont-sec-22-gallery');
    const itemsCont22 = Array.from(galleryCont22.querySelectorAll('.door-item'));
    const imagesCont22 = itemsCont22.map(item => item.getAttribute('onclick').match(/'([^']+)'/)[1]);
    const numbersCont22 = itemsCont22.map(item => item.querySelector('span').textContent);

    function showFullscreenCont22(src) {
        currentIndexCont22 = imagesCont22.indexOf(src);
        const overlay = document.getElementById('fullscreen-overlay-cont22');
        const fullscreenImg = document.getElementById('fullscreen-image-cont22');
        const fullscreenNum = document.getElementById('fullscreen-number-cont22');
        fullscreenImg.src = src;
        fullscreenNum.textContent = numbersCont22[currentIndexCont22];
        overlay.style.display = 'flex';
    }

    function hideFullscreenCont22() {
        document.getElementById('fullscreen-overlay-cont22').style.display = 'none';
    }

    function prevImageCont22() {
        currentIndexCont22 = (currentIndexCont22 > 0) ? currentIndexCont22 - 1 : imagesCont22.length - 1;
        document.getElementById('fullscreen-image-cont22').src = imagesCont22[currentIndexCont22];
        document.getElementById('fullscreen-number-cont22').textContent = numbersCont22[currentIndexCont22];
    }

    function nextImageCont22() {
        currentIndexCont22 = (currentIndexCont22 < imagesCont22.length - 1) ? currentIndexCont22 + 1 : 0;
        document.getElementById('fullscreen-image-cont22').src = imagesCont22[currentIndexCont22];
        document.getElementById('fullscreen-number-cont22').textContent = numbersCont22[currentIndexCont22];
    }
</script>