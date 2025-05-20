// Matrix rain effect setup

// Create a canvas element for the matrix effect
const canvas = document.createElement('canvas');
// Get the 2D drawing context from the canvas
const ctx = canvas.getContext('2d');
// Append the canvas to the element with id 'matrixText'
document.getElementById('matrixText').appendChild(canvas);

// Set canvas size

// Function to set the canvas size to fill the window
function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
setCanvasSize(); // Set initial size
window.addEventListener('resize', setCanvasSize); // Adjust size on window resize

// Matrix characters and configuration

// Characters used in the matrix rain
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*';
// The name to highlight in the matrix
const name = 'ELMON';
// Font size for the matrix characters
const fontSize = 16;
// Number of columns based on canvas width and font size
const columns = canvas.width / fontSize;
// Array to track the vertical position of drops for each column
const drops = new Array(Math.floor(columns)).fill(1);
// Set to track columns that will display the name
const nameColumns = new Set(); // Tracks columns that show ELMON

// Initialize columns that will show ELMON (every 8 columns)
for (let i = 0; i < columns; i += 8) {
    nameColumns.add(i);
}

// Function to draw the matrix effect on the canvas
function drawMatrix() {
    // Draw a semi-transparent black rectangle to create the fading effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Set the font for the matrix characters
    ctx.font = `${fontSize}px monospace`;

    // Loop through each column
    for (let i = 0; i < drops.length; i++) {
        let text;
        let isNameChar = false;

        // Check if this column should display a character from the name
        if (nameColumns.has(i)) {
            // For ELMON columns, randomly decide whether to show name char or matrix char
            if (Math.random() < 0.7) { // 70% chance to show ELMON character
                // Pick a character from the name based on the drop position
                const nameIndex = Math.floor((drops[i] * 3) % name.length);
                text = name[nameIndex];
                isNameChar = true;
            }
        }

        // If not showing a name character, pick a random matrix character
        if (!isNameChar) {
            text = chars[Math.floor(Math.random() * chars.length)];
        }

        // Set brighter color for ELMON characters, normal green for others
        ctx.fillStyle = isNameChar ? '#00FF00' : '#008800';
        
        // Draw the character at the current position
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        // Reset drop to top randomly if it has moved past the bottom
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        // Move the drop down for the next frame
        drops[i]++;
    }
}

// Typing effect
const text = "I am a Developer";
const typingSpeed = 100; // Speed of typing in milliseconds
const pauseDuration = 60000; // One minute pause before erasing
const typedElement = document.getElementById('typed-text');

async function typeText() {
    // Type the text
    for (let i = 0; i <= text.length; i++) {
        typedElement.textContent = text.substring(0, i);
        await new Promise(resolve => setTimeout(resolve, typingSpeed));
    }

    // Wait for one minute
    await new Promise(resolve => setTimeout(resolve, pauseDuration));

    // Erase the text
    for (let i = text.length; i >= 0; i--) {
        typedElement.textContent = text.substring(0, i);
        await new Promise(resolve => setTimeout(resolve, typingSpeed/2));
    }

    // Small pause before restarting
    await new Promise(resolve => setTimeout(resolve, 500));

    // Restart the animation
    typeText();
}

// Start the typing animation
typeText();

// Start both animations
setInterval(drawMatrix, 50);
setTimeout(typeText, 1000); // Start typing after 1 second