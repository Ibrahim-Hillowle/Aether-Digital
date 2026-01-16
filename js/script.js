document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Active Link Highlighting
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('.nav-links a');
    menuItem.forEach(item => {
        if (item.href === currentLocation) {
            item.classList.add('active');
        }
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Portfolio Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter');

                portfolioItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                        setTimeout(() => item.classList.add('animate-scale'), 100);
                    } else {
                        item.style.display = 'none';
                        item.classList.remove('animate-scale');
                    }
                });
            });
        });
    }

    // --------------------------------------------------------
    // PREMIUM ANIMATION SYSTEM
    // --------------------------------------------------------

    // 1. Observer for Sections (Fade Up)
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-up');
                sectionObserver.unobserve(entry.target); // Only animate once
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section, .premium-form, .cta-section').forEach(section => {
        section.style.opacity = '0'; // Initial state
        sectionObserver.observe(section);
    });

    // 2. Observer for Cards/Features (Staggered)
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add staggered delays based on child index
                const children = Array.from(entry.target.children);
                children.forEach((child, index) => {
                    child.style.animationDelay = `${index * 150}ms`;
                    child.classList.add('animate-fade-up');
                    child.style.opacity = '1';
                });
                cardObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    // Target grids to animate their children smoothly
    document.querySelectorAll('.feature-grid, .stats-grid, .logo-grid, .timeline').forEach(grid => {
        // Prepare children for animation
        Array.from(grid.children).forEach(child => {
            child.style.opacity = '0';
        });
        cardObserver.observe(grid);
    });

});
