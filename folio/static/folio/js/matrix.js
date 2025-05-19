// This file contains the JavaScript code that implements the matrix-like display and the typing effect for the text "I am a developer."

const text = "I am a developer";
const matrixContainer = document.createElement('div');
const matrixText = document.createElement('div');
const rows = 20; // Number of rows in the matrix
const columns = 40; // Number of columns in the matrix
const typingSpeed = 100; // Speed of typing effect in milliseconds

document.body.appendChild(matrixContainer);
matrixContainer.style.position = 'relative';
matrixContainer.style.overflow = 'hidden';
matrixContainer.style.height = '100vh';
matrixContainer.style.backgroundColor = 'black';
matrixContainer.style.color = 'green';
matrixContainer.style.fontFamily = 'monospace';
matrixContainer.style.fontSize = '20px';
matrixContainer.style.lineHeight = '1.5';

for (let i = 0; i < rows; i++) {
    const row = document.createElement('div');
    row.style.whiteSpace = 'pre';
    matrixContainer.appendChild(row);
}

function dropText() {
    const rows = matrixContainer.children;
    let currentRow = 0;

    function type() {
        if (currentRow < rows.length) {
            const row = rows[currentRow];
            let charIndex = 0;

            function typeChar() {
                if (charIndex < text.length) {
                    row.textContent += text.charAt(charIndex);
                    charIndex++;
                    setTimeout(typeChar, typingSpeed);
                } else {
                    currentRow++;
                    setTimeout(() => {
                        row.textContent = ''; // Clear the row for the next drop
                        type();
                    }, 1000); // Wait before dropping the next text
                }
            }

            typeChar();
        }
    }

    type();
}

dropText();