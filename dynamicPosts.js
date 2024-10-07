let postContainer = document.getElementById('post-container');
let postCount = 0;




async function loadPosts() {

    if (loading) return;
    loading =true;


    let response = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${postCount}&_limit=3`);
    let posts = await response.json();


   
posts.forEach(post => {
    let postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.body}</p>
    `;

    postContainer.appendChild(postElement);
    
});

postCount += 3;
}

loadPosts();

window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        loadPosts();
    }
});