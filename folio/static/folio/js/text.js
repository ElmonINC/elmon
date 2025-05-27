document.addEventListener('DOMContentLoaded', function() {
    const welcomeText = document.getElementById('welcome');
    const servicesSection = document.querySelector('.Services');
    
    if (!welcomeText || !servicesSection) {
        console.log('Required elements not found');
        return;
    }

    const texts = {
        'web': welcomeText.getAttribute('web'),
        'ud': welcomeText.getAttribute('ux'),
        'gd': welcomeText.getAttribute('gdx')
    };

    let currentText = texts['web']; // Track current text

    function changeText(newText) {
        if (!newText || newText === currentText) {
            return; // Don't change if same text or no text
        }

        welcomeText.style.opacity = '0';
        setTimeout(() => {
            welcomeText.textContent = newText;
            welcomeText.style.opacity = '1';
            currentText = newText; // Update current text
        }, 500);
    }

    // Handle service item hovers
    ['web', 'ud', 'gd'].forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('mouseenter', () => {
                changeText(texts[id]);
            });
        }
    });

    // Remove any mouseleave handlers to prevent text reset
});