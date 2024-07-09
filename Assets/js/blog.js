// Function to load blog posts when the page is loaded
window.onload = function() {
    displayBlogPosts(); // Call function from logic.js to display blog posts
};

// Event listener for the toggle mode button
document.getElementById('toggleMode').addEventListener('click', function() {
    toggleMode(); // Call function from logic.js to toggle between light mode and dark mode
});

function toggleMode() {
    const body = document.body;
    const modeIcon = document.getElementById('modeIcon');

    // Toggle dark mode class on body
    body.classList.toggle('dark-mode');

    // Update button text and icon based on current mode
    if (body.classList.contains('dark-mode')) {
        modeIcon.textContent = '🌛'; // Moon emoji for dark mode
    } else {
        modeIcon.textContent = '🌞'; // Sun emoji for light mode
    }
}

// Event listener for the back button
document.querySelector('header a').addEventListener('click', function(event) {
    event.preventDefault();
    redirectToPage('index.html'); // Call function from logic.js to redirect to the landing page
});