import styles from "./Forums.module.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function Forums() {
  const [forums, setForums] = useState(null);
  const [openForum, setOpenForum] = useState(null);
  const [openPost, setOpenPost] = useState(null);
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (forums === null) {
      getForumsData();
    }
  }, [forums]);

  async function getForumsData() {
    try {
      const forumsArray = await axios.get("http://localhost:3000/api/forums");
      setForums(forumsArray.data);
    } catch (error) {
      console.error(error);
    }
  }

  const toggleForum = (forumId) => {
    setOpenForum(openForum === forumId ? null : forumId);
    setOpenPost(null);
  };

  const togglePost = (postId) => {
    setOpenPost(openPost === postId ? null : postId);
  };

  return (
    <div className={styles.forumContainer}>
      <h1 className={styles.forumHeader}>פורומים</h1>
      {forums &&
        forums.map((forum) => (
          <div
            className={styles.forumCard}
            key={forum._id}
            style={{
              backgroundColor: openForum === forum._id ? "#e0e0e0" : "#f4f4f4",
            }}
          >
            <h2 onClick={() => toggleForum(forum._id)}>{forum.name}</h2>
            {openForum === forum._id && (
              <div>
                {forum.postIds.map((post) => (
                  <div
                    className={styles.postCard}
                    key={post._id}
                    style={{
                      backgroundColor:
                        openPost === post._id ? "#d3ffd3" : "#ffffff",
                    }}
                  >
                    {console.log(post)}
                    <h4 onClick={() => togglePost(post._id)}>{post.title}</h4>
                    {openPost === post._id && (
                      <div>
                        <span className={styles.postContent}>
                          {post.content}
                        </span>
                        {post.commentIds.map((comment) => (
                          <div
                            className={styles.comment}
                            key={comment._id}
                            style={{
                              backgroundColor: "#f0f0f0",
                            }}
                          >
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
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
    </div>
  );
}

export default Forums;
