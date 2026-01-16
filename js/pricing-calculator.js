// Pricing Calculator Logic
document.addEventListener('DOMContentLoaded', function () {
    const pagesSlider = document.getElementById('pages');
    const pagesValue = document.getElementById('pagesValue');
    const totalPriceEl = document.getElementById('totalPrice');

    const checkboxes = {
        cms: document.getElementById('cms'),
        ecommerce: document.getElementById('ecommerce'),
        seo: document.getElementById('seo'),
        automation: document.getElementById('automation')
    };

    // Animate Number Count
    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start).toLocaleString();
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    let currentTotal = 0;

    function calculatePrice() {
        // Base price calculation: €100 per page
        const pages = parseInt(pagesSlider.value);
        let total = pages * 100;

        // Add feature costs
        Object.values(checkboxes).forEach(checkbox => {
            if (checkbox && checkbox.checked) {
                total += parseInt(checkbox.value);
            }
        });

        // Update Slider Background (Fill Effect)
        if (pagesSlider) {
            const min = pagesSlider.min;
            const max = pagesSlider.max;
            const percentage = ((pages - min) / (max - min)) * 100;
            pagesSlider.style.background = `linear-gradient(to right, var(--color-accent) ${percentage}%, rgba(96, 165, 250, 0.2) ${percentage}%)`;
        }

        // Update display with animation
        if (totalPriceEl) {
            // Simple check to avoid animating on first load if desired, 
            // or just animate from previous value
            if (currentTotal !== total) {
                animateValue(totalPriceEl, currentTotal, total, 500);
                currentTotal = total;
            }
        }
    }

    // Update pages display
    if (pagesSlider && pagesValue) {
        pagesSlider.addEventListener('input', function () {
            pagesValue.textContent = this.value + ' pages';
            calculatePrice();
        });
    }

    // Attach listeners to checkboxes
    Object.values(checkboxes).forEach(checkbox => {
        if (checkbox) {
            checkbox.addEventListener('change', calculatePrice);
        }
    });

    // Initial calculation
    calculatePrice();
});
