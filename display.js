import { selectedArtworks } from './gallery.js';
import { searchArtworks } from './api.js';
import { addArtworkToGallery } from './gallery.js';

/*
let currentArtworkIndex = 0;
let artworkChangeTimer = 0;
const artworkDisplayDuration = 5; // Duration to display each artwork in seconds
let alpha = 255; // Opacity for fade effect
*/
let currentArtworkIndex = 0;
let artworkChangeInterval = 3000; // Interval to change artwork (in milliseconds)
let lastArtworkChangeTime = 0;

new p5((sketch) => {
    sketch.setup = () => {
        sketch.createCanvas(window.innerWidth, window.innerHeight);
        lastArtworkChangeTime = sketch.millis();
    };

    sketch.draw = () => {
        sketch.background(255); // Clear with white background

        if (selectedArtworks.length > 0) {
            const artwork = selectedArtworks[currentArtworkIndex];
            sketch.loadImage(artwork.iiif_url, (img) => {
                // Resize and display image
                let imgWidth = img.width;
                let imgHeight = img.height;
                const aspectRatio = img.width / img.height;

                if (imgWidth > sketch.width) {
                    imgWidth = sketch.width;
                    imgHeight = imgWidth / aspectRatio;
                }

                if (imgHeight > sketch.height) {
                    imgHeight = sketch.height;
                    imgWidth = imgHeight * aspectRatio;
                }

                sketch.image(img, (sketch.width - imgWidth) / 2, (sketch.height - imgHeight) / 2, imgWidth, imgHeight);
            });

            // Change to the next artwork after the interval
            if (sketch.millis() - lastArtworkChangeTime > artworkChangeInterval) {
                currentArtworkIndex = (currentArtworkIndex + 1) % selectedArtworks.length;
                lastArtworkChangeTime = sketch.millis();
            }
        }
    };
});
