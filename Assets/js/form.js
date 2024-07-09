document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    
    if (!username || !title || !content) {
        document.getElementById('formMessage').classList.remove('hidden');
        return;
    }
    
    const post = {
        username: username,
        title: title,
        content: content
    };
    
    storeBlogPost(post); // Call function from logic.js to store the blog post
    redirectToPage('blog.html'); // Call function from logic.js to redirect to the posts page
});