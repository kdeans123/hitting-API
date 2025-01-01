const postListEl = document.querySelector('.post-list');


async function main() {
    const id = localStorage.getItem("id")
    const posts = await fetch (`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    const postsData = await posts.json();

    postListEl.innerHTML = postsData.map (post => 
        `<div class="post">
            <div class="${post.title}">
                Post Title
            </div>
            <p class="${post.body}">
                Post Body
            </p>
        </div>`
    ).join('');
}

main();