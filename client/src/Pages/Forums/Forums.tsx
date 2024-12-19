import styles from "./Forums.module.css";
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

function Forums() {
    const [forums, setForums] = useState(null);
    const user = useSelector((state) => state.user.user);
    console.log(user);

    useEffect(() => {
        if (forums === null) {
            getForumsData();
        }
        console.log("use effect says:", forums);
    }, [forums]);

    async function addPost(forumName, postTitle,) {

    }

    async function getForumsData() {
        try {
            const forumsArray = await axios.get("http://localhost:3000/api/forums");
            setForums(forumsArray.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className={styles.forumContainer}>
            <h1 className={styles.forumHeader}>פורומים</h1>
            {forums &&
                forums.map((forum) => {
                    return (
                        <div className={styles.forumCard} key={forum.id}>
                            <h2>{forum.name}</h2>
                            {forum.postIds.map((post) => {
                                return (
                                    <div className={styles.postCard} key={post.id}>
                                        <h4>{post.title}</h4>
                                        <span className={styles.postContent}>{post.content}</span>
                                        {post.commentIds.map((comment) => {
                                            return (
                                                <div className={styles.comment} key={comment.id}>
                                                    <div className={styles.commentHeader}>
                                                        <span className={styles.userBadge}>
                                                            {comment.authorId.username} (
                                                            {comment.authorId.role})
                                                        </span>
                                                    </div>
                                                    <span className={styles.commentContent}>
                                                        {comment.commentContent}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
        </div>
    );
}

export default Forums;
