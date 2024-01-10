export { addArtworkToGallery, removeArtworkFromGallery, selectedArtworks };

let selectedArtworks = [];

function updateCarousel() {
    // Trigger the update of the p5.js canvas
    if (window.updateCarouselDisplay) {
        window.updateCarouselDisplay();
    }
}

function updateGalleryUI() {
    const galleryContainer = document.querySelector('#selected-artworks');
    galleryContainer.innerHTML = ''; // Clear previous selection

    selectedArtworks.forEach(artwork => {
        const artDiv = document.createElement('div');
        artDiv.className = 'selected-artwork';
        artDiv.innerHTML = `
            <h4>${artwork.title}</h4>
            <button onclick="removeArtworkFromGallery(${artwork.id})">Remove</button>
        `;
        galleryContainer.appendChild(artDiv);
    });
}

function addArtworkToGallery(artwork) {
    selectedArtworks.push(artwork);
    updateGalleryUI();
}

function removeArtworkFromGallery(id) {
    selectedArtworks = selectedArtworks.filter(art => art.id !== id);
    updateGalleryUI();
}

