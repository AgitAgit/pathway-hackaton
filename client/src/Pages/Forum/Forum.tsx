import { useState } from "react";
import styles from "./Forum.module.css";

export default function Forum() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  const addPost = (title, content) => {
    const newPost = { id: Date.now(), title, content, comments: [] };
    setPosts([...posts, newPost]);
  };

  const addComment = (postId, comment) => {
    setPosts((prevPosts) => prevPosts.map((post) => (post.id === postId ? { ...post, comments: [...post.comments, comment] } : post)));
  };

  const handleSelectPost = (post) => {
    setSelectedPost(post);
  };

  const handleBackToPosts = () => {
    setSelectedPost(null);
  };

  return (
    <div className={styles.forum}>
      <h1>פורום</h1>
      {selectedPost ? (
        <Thread post={selectedPost} addComment={addComment} onBack={handleBackToPosts} />
      ) : (
        <>
          <NewPostForm addPost={addPost} />
          <div className={styles.postList}>
            <PostList posts={posts} onSelectPost={handleSelectPost} />
          </div>
        </>
      )}
    </div>
  );
}

function NewPostForm({ addPost }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      addPost(title, content);
      setTitle("");
      setContent("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.newPostForm}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="כותרת" />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="תוכן"></textarea>
      <button type="submit">הוסף תוכן</button>
    </form>
  );
}

function PostList({ posts, onSelectPost }) {
  return (
    <>
      {posts.map((post) => (
        <div key={post.id} className={styles.post} onClick={() => onSelectPost(post)}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </>
  );
}

function Thread({ post, addComment, onBack }) {
  const [comment, setComment] = useState("");

  const handleAddComment = (e) => {
    e.preventDefault();
    if (comment) {
      addComment(post.id, comment);
      setComment("");
    }
  };

  return (
    <div className={styles.thread}>
      <button onClick={onBack}>Back to Posts</button>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <div className={styles.commentList}>
        {post.comments.map((comment, index) => (
          <p key={index} className={styles.comment}>
            {comment}
          </p>
        ))}
      </div>
      <form onSubmit={handleAddComment}>
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Add a comment"></textarea>
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}
