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

            data.ece.forEach(imageData => {
                eceImagesContainer.appendChild(createImageElement(imageData));
            });

            data.cse.forEach(imageData => {
                cseImagesContainer.appendChild(createImageElement(imageData));
            });

            data['3dprints'].forEach(imageData => {
                printsImagesContainer.appendChild(createImageElement(imageData));
            });
        });

    // Theme toggle
    /*
    const themeToggleButton = document.getElementById('theme-toggle');
    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });
    */

    // Event listeners for tab buttons
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', (e) => {
            const tabId = e.target.textContent.toLowerCase().replace(' ', '');
            showTab(tabId);
        });
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

    // Function to switch tabs
    function showTab(tabId) {
        const tabs = document.querySelectorAll('.tab-content');
        tabs.forEach(tab => {
            tab.style.display = tab.id === tabId ? 'block' : 'none';
        });
    }

    // Load images for default tab
    showTab('ece');
});
