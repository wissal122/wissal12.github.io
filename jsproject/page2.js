// Get the necessary elements
const previewImage = document.getElementById('image');
const previewText = document.getElementById('image-text');

// Function to update the preview
function update(imageSource, altText) {
    console.log('Event triggered.'); // Check if the event is triggering

    // Update the text
    previewText.textContent = altText;

    // Update the background image
    previewImage.style.backgroundImage = `url('${imageSource}')`;
}

// Function to undo changes
function undo() {
    console.log('Undo triggered.'); // Check if the event is triggering

    // Reset the background image and text
    previewImage.style.backgroundImage = "url('')";
    previewText.textContent = "Hover over an image below to display here.";
}
