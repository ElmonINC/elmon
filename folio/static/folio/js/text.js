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

    let currentText = texts['web']; // Keep track of current text

    function changeText(newText) {
        if (!newText) {
            console.log('No text provided for change');
            return;
        }
        welcomeText.style.opacity = '0';
        setTimeout(() => {
            welcomeText.textContent = newText;
            welcomeText.style.opacity = '1';
            currentText = newText;
        }, 500);
    }

    // Handle service item hovers
    ['web', 'ud', 'gd'].forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('mouseenter', () => {
                console.log(`Hovering over ${id}`);
                changeText(texts[id]);
            });
        }
    });

    // Only reset text when leaving the entire services section
    servicesSection.addEventListener('mouseleave', () => {
        changeText(texts['web']);
    });
});