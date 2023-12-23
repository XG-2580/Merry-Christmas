// Get the mustache element
const mustache = document.querySelector('.mustache');

// Variables to store initial mouse position, mustache width, and position
let isResizing = false;
let startX;
let startWidth;

// Function to handle mouse down event
function handleMouseDown(e) {
    isResizing = true;
    startX = e.clientX;
    startWidth = mustache.offsetWidth;
}

// Function to handle mouse move event
function handleMouseMove(e) {
    if (isResizing) {
        const newWidth = startWidth + (e.clientX - startX);
        const newPosition = -((newWidth - startWidth) / 1000); // Adjust the factor for larger movement

        // Limit minimum and maximum width to prevent issues
        const minWidth = 1;
        const maxWidth = 500; // Adjust the maximum width as needed
        mustache.style.width = Math.min(maxWidth, Math.max(minWidth, newWidth)) + 'px';
        mustache.style.left = newPosition + 'px';
    }
}

// Function to handle mouse up event
function handleMouseUp() {
    isResizing = false;
}

// Attach event listeners
mustache.addEventListener('mousedown', handleMouseDown);
document.addEventListener('mousemove', handleMouseMove);
document.addEventListener('mouseup', handleMouseUp);