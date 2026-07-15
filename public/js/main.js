const output =document.querySelector('#output');
const button =document.querySelector('#get-posts-btn');
const form =document.querySelector('#add-post-form');

async function showPosts(){
    try {
    const res = await fetch('http://localhost:8000/api/posts');
    if (!res.ok) {
        throw new Error(`Failed to fetch posts: ${res.status}`);
    }

    const posts = await res.json();
    output.innerHTML = '';

    posts.forEach((post) => {
        const postEl = document.createElement('div');
        postEl.textContent = post.title;
        output.appendChild(postEl);
    });
    } catch(error){
        console.log('Error fetching posts:', error);
    }
}

//Submit new post 
async function addPost(e){
    e.preventDefault();
    const formdata =new FormData(this);
    const title =formdata.get('title');
    try {
        const res = await fetch('http://localhost:8000/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title }),
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data?.msg || 'Failed to add post');
        }
        const newPost =await res.json();
        // // server returns the updated posts array
        // output.innerHTML = '';
        // data.forEach((post) => {
            const postEl = document.createElement('div');
            postEl.textContent = post.title;
            output.appendChild(postEl);
            showPosts();
        } catch (error) {
        console.error('Error adding post:', error);
    }
}
//event listners
button.addEventListener('click' , showPosts);
form.addEventListener('submit' , addPost);


