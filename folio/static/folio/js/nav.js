document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-b');
    
    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const url = e.target.dataset.url;
            if (url) {
                window.location.href = url;
            }
        });
    });
});