document.addEventListener('DOMContentLoaded', () => {
    // Load images from JSON
    fetch('images.json')
        .then(response => response.json())
        .then(data => {
            const eceImagesContainer = document.getElementById('ece-images');
            const cseImagesContainer = document.getElementById('cse-images');
            const printsImagesContainer = document.getElementById('3dprints-images');

            data.ece.forEach(imgSrc => {
                const img = document.createElement('img');
                img.src = imgSrc;
                eceImagesContainer.appendChild(img);
            });

            data.cse.forEach(imgSrc => {
                const img = document.createElement('img');
                img.src = imgSrc;
                cseImagesContainer.appendChild(img);
            });

            data['3dprints'].forEach(imgSrc => {
                const img = document.createElement('img');
                img.src = imgSrc;
                printsImagesContainer.appendChild(img);
            });
        });

    // Theme toggle
    const themeToggleButton = document.getElementById('theme-toggle');
    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });

    // Event listeners for tab buttons
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', (e) => {
            const tabId = e.target.textContent.toLowerCase().replace(' ', '');
            showTab(tabId);
        });
    });

    // Load images for default tab
    showTab('ece');
});

// Function to switch tabs
function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.style.display = tab.id === tabId ? 'block' : 'none';
    });
}
