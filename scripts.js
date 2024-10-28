document.addEventListener('DOMContentLoaded', () => {
    // Load images from JSON
    fetch('images.json')
        .then(response => response.json())
        .then(data => {
            const eceImagesContainer = document.getElementById('ece-images');
            const cseImagesContainer = document.getElementById('cse-images');
            const printsImagesContainer = document.getElementById('3dprints-images');

            function createImageElement(imageData) {
                const img = document.createElement('img');
                img.src = imageData.src;
                img.alt = imageData.title;
                img.addEventListener('click', () => {
                    showPopup(imageData);
                });
                return img;
            }

            function appendImages(container, images) {
                images.forEach(imageData => {
                    container.appendChild(createImageElement(imageData));
                });
                // Duplicate images for seamless scrolling
                images.forEach(imageData => {
                    container.appendChild(createImageElement(imageData));
                });
            }

            appendImages(eceImagesContainer, data.ece);
            appendImages(cseImagesContainer, data.cse);
            appendImages(printsImagesContainer, data['3dprints']);
        });

    // Show popup
    function showPopup(imageData) {
        const popup = document.getElementById('image-popup');
        document.getElementById('popup-img').src = imageData.src;
        document.getElementById('popup-title').textContent = imageData.title;
        document.getElementById('popup-description').textContent = imageData.description;
        document.getElementById('popup-url').href = imageData.url;
        popup.style.display = 'flex';
    }

    // Close popup
    document.querySelector('.image-popup-close').addEventListener('click', () => {
        document.getElementById('image-popup').style.display = 'none';
    });
});
