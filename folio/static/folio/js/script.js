document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;

    // Function to check if element is in viewport
    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= 0 &&
            rect.bottom >= 0
        );
    };

    window.addEventListener('scroll', () => {
        const section3 = document.querySelectorAll('section')[2]; // Third section
        
        if (isElementInViewport(section3)) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Show navbar when scrolling up
            if (window.scrollY < lastScrollY) {
                navbar.style.transform = 'translateY(0)';
            }
        }
        
        lastScrollY = window.scrollY;
    });
}); 

function createTypingAnimation(text) {
  const element = document.getElementById('target');
  if (!element) {
    console.error("Element with id 'target' not found!");
    return;
  }

  const cursor = document.createElement('span');
  cursor.className = 'cursor';
  cursor.textContent = '|';
  
  element.textContent = text;
  element.appendChild(cursor);
  
  const textLength = text.length;
  const chWidth = 1;
  
  const typeSpeed = 100;
  const eraseSpeed = 50;
  const typeDuration = textLength * typeSpeed;
  const eraseDuration = textLength * eraseSpeed;
  
  let cycles = 0;
  
function animate() {
  if (cycles >= 2) {
    element.style.animation = 'none';
    const cursor = element.querySelector('span');
    if (cursor) {
      cursor.remove();
    }
    element.style.width = `${(textLength + 19) * chWidth}ch`;
    return;
  }

  element.style.animation = `typing ${typeDuration}ms steps(${textLength}) forwards`;

  setTimeout(() => {
    if (cycles < 1) { // Only erase if we haven't completed the first cycle
      element.style.animation = `erase ${eraseDuration}ms steps(${textLength}) forwards`;

      setTimeout(() => {
        cycles++;
        animate();
      }, eraseDuration);
    } else {
      cycles++;
      animate();
    }
  }, typeDuration);
}

  element.style.setProperty('--text-width', `${textLength * chWidth}ch`);
  animate();
}

document.addEventListener('DOMContentLoaded', () => {
    createTypingAnimation("My name is ELMON ");
});

document.addEventListener('DOMContentLoaded', function() {
    const hirElement = document.querySelector('.hir');
    const servicesElement = document.querySelector('.Services');
    
    hirElement.addEventListener('mouseenter', function() {
        servicesElement.classList.add('visible');
    });
    
    hirElement.addEventListener('mouseleave', function(e) {
        // Check if mouse is moving upward
        if (e.clientY < hirElement.getBoundingClientRect().top) {
            servicesElement.classList.remove('visible');
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const welcomeText = document.getElementById('welcome-text');
    
    if (!welcomeText) return;

    const texts = {
        'web': welcomeText.dataset.web,
        'ud': welcomeText.dataset.ux,
        'gd': welcomeText.dataset.graphics
    };

    // Function to change text with fade effect
    function changeText(newText) {
        welcomeText.style.opacity = '0';
        setTimeout(() => {
            welcomeText.textContent = newText;
            welcomeText.style.opacity = '1';
        }, 200);
    }

    // Add hover listeners to service items
    ['web', 'ud', 'gd'].forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('mouseenter', () => {
                changeText(texts[id]);
            });

            element.addEventListener('mouseleave', () => {
                changeText(texts['web']); // Reset to default text
            });
        }
    });
});

