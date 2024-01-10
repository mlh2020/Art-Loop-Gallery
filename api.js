export { searchArtworks };
const API_BASE_URL = 'https://api.artic.edu/api/v1';

async function searchArtworks(query) {
    try {
        const response = await axios.get(`${API_BASE_URL}/artworks/search`, {
            params: { q: query, limit: 10, fields: 'id,title,image_id' }
        });
        const artworks = response.data.data;
        return artworks.map(artwork => {
            return {
                ...artwork,
                iiif_url: `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`
            };
        });
    } catch (error) {
        console.error('Error fetching artworks:', error);
        throw error;
    }
}


