document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.r-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Check if the element is at least 40% visible
            if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
                entry.target.classList.add('visible');
            } else {
                // Only remove visibility if the element is completely out of view
                if (entry.intersectionRatio === 0) {
                    entry.target.classList.remove('visible');
                }
            }
        });
    }, {
        // Use multiple thresholds to track different levels of visibility
        threshold: [0, 0.4, 1.0],
        // Adjust root margin to ensure full content visibility
        rootMargin: '0px 0px -10% 0px'
    });

    timelineItems.forEach(item => observer.observe(item));
});