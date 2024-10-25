// Click to fullscreen feature for gallery photos
document.addEventListener('DOMContentLoaded', () => {
    const galleryImages = document.querySelectorAll('.gallery-photo img');

    galleryImages.forEach((img) => {
        img.addEventListener('click', () => {
            // Check if any element is already in fullscreen
            if (document.fullscreenElement) {
                // Exit fullscreen if an image is already in fullscreen mode
                document.exitFullscreen();
            } else {
                // Request fullscreen for the clicked image
                img.requestFullscreen().catch(err => {
                    console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
                });
            }
        });
    });

    // Listen for fullscreen change event to adjust behavior
    document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement) {
            // No element in fullscreen, all images should be back to normal
            galleryImages.forEach((img) => {
                img.classList.remove('expanded');
            });
        }
    });
});
