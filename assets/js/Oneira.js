// Click to fullscreen feature for gallery photos
document.addEventListener('DOMContentLoaded', () => {
    const galleryImages = document.querySelectorAll('.gallery-photo img');

    galleryImages.forEach((img) => {
        img.addEventListener('click', () => {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            } else {
                img.requestFullscreen();
            }
        });
    });
});
