import { useState } from "react";

export default function Forum() {
  const [posts, setPosts] = useState([]);

  const addPost = (title, content) => {
    const newPost = { id: Date.now(), title, content, comments: [] };
    setPosts([...posts, newPost]);
  };

  return (
    <div className="forum">
      <h1>Forum</h1>
      <NewPostForm addPost={addPost} />
      <PostList posts={posts} />
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post Title"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Post Content"
      ></textarea>
      <button type="submit">Add Post</button>
    </form>
  );
}

function PostList({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

function Post({ post }) {
  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <CommentList comments={post.comments} />
    </div>
  );
}

function CommentList({ comments }) {
  return (
    <div>
      {comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  );
}

function Comment({ comment }) {
  return <p>{comment}</p>;
}
