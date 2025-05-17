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
  const chWidth = 1; // For monospace fonts, 1ch = 1 character width
  
  // Calculate animation durations
  const typeSpeed = 100; // ms per character
  const eraseSpeed = 50; // ms per character
  const typeDuration = textLength * typeSpeed;
  const eraseDuration = textLength * eraseSpeed;
  
  let cycles = 0;
  
  function animate() {
    if (cycles >= 2) {
      element.style.animation = 'none';
      element.style.width = `${textLength * chWidth}ch`;
      cursor.remove();
      return;
    }

    // Typing phase
    element.style.animation = `typing ${typeDuration}ms steps(${textLength}) forwards`;
    
    setTimeout(() => {
      // Erase phase
      element.style.animation = `erase ${eraseDuration}ms steps(${textLength}) forwards`;
      
      setTimeout(() => {
        cycles++;
        animate();
      }, eraseDuration);
    }, typeDuration);
  }

  // Set initial CSS custom property
  element.style.setProperty('--text-width', `${textLength * chWidth}ch`);
  
  animate();
}
 
// Initialize with your desired text
document.addEventListener('DOMContentLoaded', () => {
    createTypingAnimation("My name is ELMON");
});   