document.addEventListener('DOMContentLoaded', () => {
    // 1. Remove scroll lock
    document.body.classList.remove('antigravity-scroll-lock');

    // 2. Reveal animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // 3. Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });

    // 4. Tab switching logic (for Adaptologist page)
    const tabs = document.querySelectorAll('.tab');
    const featureImage = document.getElementById('feature-image');

    if (tabs.length > 0 && featureImage) {
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
    }
});
