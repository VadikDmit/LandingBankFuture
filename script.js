document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const featureImage = document.getElementById('feature-image');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');

            // Switch image with fade effect
            const newSrc = tab.getAttribute('data-image');
            featureImage.style.opacity = '0';

            setTimeout(() => {
                featureImage.src = newSrc;
                featureImage.style.opacity = '1';
            }, 300);
        });
    });
});
