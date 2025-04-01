<div class="door-gallery">
    <div class="door-item" onclick="showFullscreen('https://programmingmedia.blob.core.windows.net/shiloh-images-products-doorstyles/HR_021_4a352455-9f54-4be4-9285-d01569e5fa66.jpg')"><span>S-23</span><img src="https://programmingmedia.blob.core.windows.net/shiloh-images-products-doorstyles/HR_021_4a352455-9f54-4be4-9285-d01569e5fa66.jpg" alt="HR 021"></div>
    <div class="door-item" onclick="showFullscreen('https://programmingmedia.blob.core.windows.net/shiloh-images-products-doorstyles/HR_025_03441ccf-cf01-437a-b513-e55557543f76.jpg')"><span>S-26</span><img src="https://programmingmedia.blob.core.windows.net/shiloh-images-products-doorstyles/HR_025_03441ccf-cf01-437a-b513-e55557543f76.jpg" alt="HR 025"></div>
    <div class="door-item" onclick="showFullscreen('https://programmingmedia.blob.core.windows.net/shiloh-images-products-doorstyles/NapaFFD_ab13a528-43cf-4ec1-980a-b1c4530016a8.jpg')"><span>S-56</span><img src="https://programmingmedia.blob.core.windows.net/shiloh-images-products-doorstyles/NapaFFD_ab13a528-43cf-4ec1-980a-b1c4530016a8.jpg" alt="Napa FFD"></div>
    <div class="door-item" onclick="showFullscreen('https://programmingmedia.blob.core.windows.net/shiloh-images-products-doorstyles/RCMD5pcPolarSlateMaple_903b48e3-02d2-4aa0-a081-5da76cc15b36.png')"><span>S-57</span><img src="https://programmingmedia.blob.core.windows.net/shiloh-images-products-doorstyles/RCMD5pcPolarSlateMaple_903b48e3-02d2-4aa0-a081-5da76cc15b36.png" alt="RCMD 5pc Polar Slate Maple"></div>
    <div class="door-item" onclick="showFullscreen('https://programmingmedia.blob.core.windows.net/shiloh-images-products-doorstyles/RMLBWhitewashRCWO_f341005c-dc8d-415b-9317-5e5bbb244bda.png')"><span>S-58</span><img src="https://programmingmedia.blob.core.windows.net/shiloh-images-products-doorstyles/RMLBWhitewashRCWO_f341005c-dc8d-415b-9317-5e5bbb244bda.png" alt="RMLB Whitewash RCWO"></div>
</div>

<div id="fullscreen-overlay" class="fullscreen-overlay">
    <span class="close-btn" onclick="hideFullscreen()">×</span>
    <span class="arrow-left" onclick="prevImage()">‹</span>
    <img id="fullscreen-image" src="" alt="Full Screen Image">
    <span id="fullscreen-number" class="fullscreen-number"></span>
    <span class="arrow-right" onclick="nextImage()">›</span>
</div>

<script>
    let currentIndex = 0;
    const galleryModern = document.querySelector('.door-gallery');
    const itemsModern = Array.from(galleryModern.querySelectorAll('.door-item'));
    const imagesModern = itemsModern.map(item => item.getAttribute('onclick').match(/'([^']+)'/)[1]);
    const numbersModern = itemsModern.map(item => item.querySelector('span').textContent);

    function showFullscreen(src) {
        currentIndex = imagesModern.indexOf(src);
        const overlay = document.getElementById('fullscreen-overlay');
        const fullscreenImg = document.getElementById('fullscreen-image');
        const fullscreenNum = document.getElementById('fullscreen-number');
        fullscreenImg.src = src;
        fullscreenNum.textContent = numbersModern[currentIndex];
        overlay.style.display = 'flex';
    }

    function hideFullscreen() {
        document.getElementById('fullscreen-overlay').style.display = 'none';
    }

    function prevImage() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : imagesModern.length - 1;
        document.getElementById('fullscreen-image').src = imagesModern[currentIndex];
        document.getElementById('fullscreen-number').textContent = numbersModern[currentIndex];
    }

    function nextImage() {
        currentIndex = (currentIndex < imagesModern.length - 1) ? currentIndex + 1 : 0;
        document.getElementById('fullscreen-image').src = imagesModern[currentIndex];
        document.getElementById('fullscreen-number').textContent = numbersModern[currentIndex];
    }
</script>