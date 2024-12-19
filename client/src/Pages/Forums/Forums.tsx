import styles from './Forums.module.css';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";


//get logged in user data
//fetch forums function

// const response = await axios.post(
//     "http://localhost:3000/api/users/login",
//     {
//       username,
//       password,
//     }
//   );
//create post function
//create comment function

function Forums({}){
    const [forums, setForums] = useState(null);
    const user = useSelector((state) => state.user.user);
    console.log(user);
    
    useEffect(() => {
        if(forums === null){
            getForumsData();
        }
        console.log("use effect says:",forums);
    },[forums]);

    async function getForumsData(){
        try {
            const forumsArray = await axios.get("http://localhost:3000/api/forums");
            setForums(forumsArray.data);
            // console.log(forumsArray);
        } catch (error) {
            
        }
    }

    async function addPost(forumName, postTitle,){

    }

    return<>
        {forums && forums.map(forum => {
            return <div>
                <h2>{forum.name}</h2>
                {forum.postIds.map(post => {
                    return <div>
                        <h4>{post.title}</h4>
                        <span>{post.content}</span>
                        {post.commentIds.map(comment => {
                            return <div>
                                <span>{comment.authorId.username}:{comment.authorId.role}</span>
                                <br></br>
                                <span>{comment.commentContent}</span>
                            </div>
                        })}
                    </div>
                })}
            </div>
        })}
    </>
}

export default Forums;