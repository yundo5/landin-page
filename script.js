document.addEventListener('DOMContentLoaded', () => {
    // Scroll Animation for Nav Links
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.style.color = '');
            link.style.color = '#fff';
        });
    });

    // Form submission mock
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('문의가 접수되었습니다. 곧 연락드리겠습니다!');
            form.reset();
        });
    }

    // Header interaction on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.padding = '1rem 0';
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        } else {
            navbar.style.padding = '1.5rem 0';
            navbar.style.background = 'rgba(15, 23, 42, 0.8)';
        }
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinksList = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinksList.classList.toggle('active');
            hamburger.classList.toggle('toggle');
        });
    }

    // Close menu when link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinksList.classList.remove('active');
        });
    });
});
