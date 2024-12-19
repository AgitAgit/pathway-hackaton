import axios from "axios";

//create post function

export async function addPost(username: String, forumName: String,post) {
    const body = {
        username,
        forumName,
        posts: [
            post
        ]
    }
    // const newBody = JSON.stringify(body);
    
    // console.log(newBody);
    console.log(body);
    const response = await axios.post("http://localhost:3000/api/posts", body);
    console.log(response);
    return response;
}

export async function addComment(username: String, postTitle: String, commentContent: String) {
    const body = {
        username,
        postName: postTitle,
        comments: [
            {
                commentContent
            }
        ]
    }
    const response = await axios.post("http://localhost:3000/api/comments", body);
    console.log(response);
    return response;
}