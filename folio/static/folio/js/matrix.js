// Create a new canvas element in memory
const canvas = document.createElement('canvas');
// Get the 2D rendering context for the canvas
const context = canvas.getContext('2d');
// Add the canvas to the element with class 'matrix-text'
document.querySelector('.matrix-text').appendChild(canvas);

// Function to handle canvas resizing
function resizeCanvas() {
    // Set canvas width to window's inner width
    canvas.width = window.innerWidth;
    // Set canvas height to window's inner height
    canvas.height = window.innerHeight;
}
// Call resizeCanvas initially
resizeCanvas();
// Add event listener to resize canvas when window is resized
window.addEventListener('resize', resizeCanvas);

// Define the characters that will be used in the matrix animation
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
// Set the font size for the characters
const fontSize = 16;
// Calculate number of columns based on canvas width and font size
const columns = canvas.width/fontSize;
// Array to store the y-position of each drop
const drops = [];

// Initialize the drops array
for(let x = 0; x < columns; x++) {
    // Set initial position for each drop
    drops[x] = 1.5 + Math.random() * canvas.height;
}

// Main drawing function for the matrix effect
function draw() {
    // Create a semi-transparent black rectangle to create fade effect
    context.fillStyle = 'rgba(0, 0, 0, 0.04)';
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    // Set the color of the matrix characters to green
    context.fillStyle = '#0A0';
    // Set the font style
    context.font = fontSize + 'px monospace';

    // Loop through each column
    for(let i = 0; i < drops.length; i++) {
        // Get a random character from the characters string
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        // Draw the character at its position
        context.fillText(text, i*fontSize, drops[i]*fontSize);
        
        // Reset drop position when it reaches bottom with a random chance
        if(drops[i]*fontSize > canvas.height && Math.random() > 0.920)
            drops[i] = 0;
        
        // Move the drop down
        drops[i]++;
    }
}

// Function to create typing effect
async function typeText(text, element, speed = 200) {
    // Clear the element's content
    element.textContent = '';
    // Loop through each character in the text
    for (let char of text) {
        // Add character to the element
        element.textContent += char;
        // Wait for specified time before next character
        await new Promise(resolve => setTimeout(resolve, speed));
    }
}

// Function to create deleting effect
async function deleteText(element, speed = 70) {
    // Get current text
    const text = element.textContent;
    // Remove characters one by one
    while (element.textContent.length > 0) {
        element.textContent = element.textContent.slice(0, -1);
        // Wait for specified time before deleting next character
        await new Promise(resolve => setTimeout(resolve, speed));
    }
}

// Main sequence function that controls the typing animation
async function startSequence() {
    const typedTextElement = document.getElementById('typed-text');
    const cursor = document.querySelector('.cursor');
    const typingOverlay = document.querySelector('.typing-overlay');
    const nameElement = document.createElement('div');
    nameElement.classList.add('name');
    nameElement.textContent = 'ELMON';

    // Initially hide the typing overlay
    typingOverlay.style.opacity = '0';
    typingOverlay.appendChild(nameElement);

     // Add initial delay before first message
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Show the typing overlay with a smooth transition
    typingOverlay.style.transition = 'opacity 0.8s ease';
    typingOverlay.style.opacity = '1';
    if (cursor) {
        // Show the cursor
        cursor.style.display = 'inline-block';
    }

    // First message with blinking cursor
    await typeText('I am a Developer', typedTextElement);
    await new Promise(resolve => setTimeout(resolve, 2000));
    await deleteText(typedTextElement);    
    
    await typeText('and', typedTextElement);
    await new Promise(resolve => setTimeout(resolve, 600));
    await deleteText(typedTextElement);

    // Second message
    await typeText('My name is', typedTextElement);
    // Stop cursor blinking after "My name is" is typed
    if (cursor) {cursor.style.display = 'none';}
    await new Promise(resolve => setTimeout(resolve, 800));
    await deleteText(typedTextElement);

    // Make the name visible
    typedTextElement.style.visibility = 'hidden';
    typingOverlay.style.backgroundColor = 'transparent';
    nameElement.style.opacity = '1';

    //typingOverlay.style.opacity = '0';

}

// Start the matrix animation (runs every 33ms)
setInterval(draw, 33);
// Start the typing sequence
setTimeout(() => {
    startSequence();
}, 900);