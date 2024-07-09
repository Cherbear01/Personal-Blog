// Function to retrieve blog posts from localStorage
function getBlogPosts() {
    return JSON.parse(localStorage.getItem('posts')) || [];
}

// Function to store blog posts to localStorage
function storeBlogPost(post) {
    let posts = getBlogPosts();
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
}

// Function to toggle between light mode and dark mode
function toggleMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

// Function to display blog posts dynamically on the page
function displayBlogPosts() {
    const blogPosts = document.getElementById('blogPosts');
    const posts = getBlogPosts();

    if (posts.length === 0) {
        blogPosts.innerHTML = '<p>No posts available</p>';
    } else {
        blogPosts.innerHTML = ''; // Clear existing content
        posts.forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');
            postDiv.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <p><em>By ${post.username}</em></p>
                <hr>
            `;
            blogPosts.appendChild(postDiv);
        });
    }
}

// Function to redirect to another page
function redirectToPage(page) {
    window.location.href = page;
}