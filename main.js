import { selectedArtworks } from './gallery.js';
import { searchArtworks } from './api.js';
import { addArtworkToGallery } from './gallery.js';

// Event listener for the search form submission
document.querySelector('#search-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const query = document.querySelector('#search-input').value;
    try {
        const artworks = await searchArtworks(query);
        const resultsContainer = document.querySelector('#search-results');
        resultsContainer.innerHTML = ''; // Clear previous results

        artworks.forEach(artwork => {
            const artDiv = document.createElement('div');
            artDiv.className = 'artwork';
            artDiv.innerHTML = `
                <h3>${artwork.title}</h3>
                <img src="${artwork.iiif_url}" alt="${artwork.title}" height="100">
                <button onclick="addArtworkToGallery(${JSON.stringify(artwork)})">Add to Gallery</button>
            `;
            resultsContainer.appendChild(artDiv);
        });
    } catch (error) {
        console.error('Search error:', error);
        // Handle and display search errors
    }
});


artDiv.innerHTML = `
    <h3>${artwork.title}</h3>
    <img src="${artwork.iiif_url}" alt="${artwork.title}">
    <button onclick="addArtworkToGallery(${JSON.stringify(artwork)})">Add to Gallery</button>
`;
