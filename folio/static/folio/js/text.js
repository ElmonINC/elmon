document.addEventListener('DOMContentLoaded', function() {
    const welcomeText = document.getElementById('welcome');
    
    if (!welcomeText) {
        console.log('Welcome text element not found');
        return;
    }

    const texts = {
        'web': welcomeText.getAttribute('web'),
        'ud': welcomeText.getAttribute('ux'),
        'gd': welcomeText.getAttribute('gdx')
    };

    // Debug log to check values
    console.log('Loaded texts:', texts);

    function changeText(newText) {
        if (!newText) {
            console.log('No text provided for change');
            return;
        }
        welcomeText.style.opacity = '0';
        setTimeout(() => {
            welcomeText.textContent = newText;
            welcomeText.style.opacity = '1';
        }, 200);
    }

    ['web', 'ud', 'gd'].forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('mouseenter', () => {
                console.log(`Hovering over ${id}`);
                changeText(texts[id]);
            });

            element.addEventListener('mouseleave', () => {
                changeText(texts['web']); // Reset to default text
            });
        } else {
            console.log(`Element with id ${id} not found`);
        }
    });
});