<div class="door-gallery" id="cont-sec-23-gallery">
    <div class="door-item" onclick="showFullscreenCont23('https://programmingmedia.blob.core.windows.net/eclipse-images-products-doorstyles/11370-F-BRST_5pc_Stratus_AmericanPoplar_9f37fc17-65ef-4e4b-a013-aa2488d794d7.png')"><span>EC-8</span><img src="https://programmingmedia.blob.core.windows.net/eclipse-images-products-doorstyles/11370-F-BRST_5pc_Stratus_AmericanPoplar_9f37fc17-65ef-4e4b-a013-aa2488d794d7.png" alt="Stratus American Poplar"></div>
    <div class="door-item" onclick="showFullscreenCont23('https://programmingmedia.blob.core.windows.net/eclipse-images-products-doorstyles/11377b-F-HMLN_5pc_MPL_IronOre_b02df0cf-725b-4770-9b1c-862001916e13.png')"><span>EC-18</span><img src="https://programmingmedia.blob.core.windows.net/eclipse-images-products-doorstyles/11377b-F-HMLN_5pc_MPL_IronOre_b02df0cf-725b-4770-9b1c-862001916e13.png" alt="Maple Iron Ore"></div>
    <div class="door-item" onclick="showFullscreenCont23('https://programmingmedia.blob.core.windows.net/eclipse-images-products-doorstyles/11383-F-HTFD_Slab_NE_Mineral(2)_03f82c4a-b316-4eaf-b970-1293095fd193.png')"><span>EC-22</span><img src="https://programmingmedia.blob.core.windows.net/eclipse-images-products-doorstyles/11383-F-HTFD_Slab_NE_Mineral(2)_03f82c4a-b316-4eaf-b970-1293095fd193.png" alt="Mineral"></div>
    <div class="door-item" onclick="showFullscreenCont23('https://programmingmedia.blob.core.windows.net/eclipse-images-products-doorstyles/SCDLWhiteOakWhitewashFFD_2f1c4b8b-6648-4767-88d3-df3026e515c8.png')"><span>EC-45</span><img src="https://programmingmedia.blob.core.windows.net/eclipse-images-products-doorstyles/SCDLWhiteOakWhitewashFFD_2f1c4b8b-6648-4767-88d3-df3026e515c8.png" alt="White Oak Whitewash FFD"></div>
    <div class="door-item" onclick="showFullscreenCont23('https://programmingmedia.blob.core.windows.net/eclipse-images-products-doorstyles/11401-F-SMST_5pc_KA_SRRA_BLK_77f9a7fc-9809-477b-80a5-44ca09754b2c.png')"><span>EC-48</span><img src="https://programmingmedia.blob.core.windows.net/eclipse-images-products-doorstyles/11401-F-SMST_5pc_KA_SRRA_BLK_77f9a7fc-9809-477b-80a5-44ca09754b2c.png" alt="Sierra Black"></div>
    <div class="door-item" onclick="showFullscreenCont23('https://programmingmedia.blob.core.windows.net/eclipse-images-products-doorstyles/11407-F-STSVL_Slab_Poplar_RiverRock(2)_56481a90-31cf-44db-b948-4c042a8c4363.png')"><span>EC-54</span><img src="https://programmingmedia.blob.core.windows.net/eclipse-images-products-doorstyles/11407-F-STSVL_Slab_Poplar_RiverRock(2)_56481a90-31cf-44db-b948-4c042a8c4363.png" alt="Poplar River Rock"></div>
    <div class="door-item" onclick="showFullscreenCont23('https://programmingmedia.blob.core.windows.net/eclipse-images-products-doorstyles/11413-F-WNSR_5pc_CHRY_COF_BLK_55c6481e-362f-4981-8f32-8a2e998fc6b7.png')"><span>EC-60</span><img src="https://programmingmedia.blob.core.windows.net/eclipse-images-products-doorstyles/11413-F-WNSR_5pc_CHRY_COF_BLK_55c6481e-362f-4981-8f32-8a2e998fc6b7.png" alt="Cherry Coffee Black"></div>
</div>

<div id="fullscreen-overlay-cont23" class="fullscreen-overlay">
    <span class="close-btn" onclick="hideFullscreenCont23()">×</span>
    <span class="arrow-left" onclick="prevImageCont23()">‹</span>
    <img id="fullscreen-image-cont23" src="" alt="Full Screen Image">
    <span id="fullscreen-number-cont23" class="fullscreen-number"></span>
    <span class="arrow-right" onclick="nextImageCont23()">›</span>
</div>

<script>
    let currentIndexCont23 = 0;
    const galleryCont23 = document.getElementById('cont-sec-23-gallery');
    const itemsCont23 = Array.from(galleryCont23.querySelectorAll('.door-item'));
    const imagesCont23 = itemsCont23.map(item => item.getAttribute('onclick').match(/'([^']+)'/)[1]);
    const numbersCont23 = itemsCont23.map(item => item.querySelector('span').textContent);

    function showFullscreenCont23(src) {
        currentIndexCont23 = imagesCont23.indexOf(src);
        const overlay = document.getElementById('fullscreen-overlay-cont23');
        const fullscreenImg = document.getElementById('fullscreen-image-cont23');
        const fullscreenNum = document.getElementById('fullscreen-number-cont23');
        fullscreenImg.src = src;
        fullscreenNum.textContent = numbersCont23[currentIndexCont23];
        overlay.style.display = 'flex';
    }

    function hideFullscreenCont23() {
        document.getElementById('fullscreen-overlay-cont23').style.display = 'none';
    }

    function prevImageCont23() {
        currentIndexCont23 = (currentIndexCont23 > 0) ? currentIndexCont23 - 1 : imagesCont23.length - 1;
        document.getElementById('fullscreen-image-cont23').src = imagesCont23[currentIndexCont23];
        document.getElementById('fullscreen-number-cont23').textContent = numbersCont23[currentIndexCont23];
    }

    function nextImageCont23() {
        currentIndexCont23 = (currentIndexCont23 < imagesCont23.length - 1) ? currentIndexCont23 + 1 : 0;
        document.getElementById('fullscreen-image-cont23').src = imagesCont23[currentIndexCont23];
        document.getElementById('fullscreen-number-cont23').textContent = numbersCont23[currentIndexCont23];
    }
</script>