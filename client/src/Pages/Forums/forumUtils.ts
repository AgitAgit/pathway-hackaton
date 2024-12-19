import axios from "axios";

//create post function

export async function addPost(username:String, forumName:String, post:{title:String, content:string}){
    const body = {
        username,
        forumName,
        posts:[
            post
        ]
    }
    const response = await axios.post("http://localhost:3000/api/posts", body);
    console.log(response);
    return response;
}

export async function addComment(username:String, postTitle:String, commentContent:String){
    const body = {
        username,
        postName: postTitle,
        comments:[
            {
                commentContent
            }
        ]
    }
    const response = await axios.post("http://localhost:3000/api/comments", body);
    console.log(response);
    return response;
}