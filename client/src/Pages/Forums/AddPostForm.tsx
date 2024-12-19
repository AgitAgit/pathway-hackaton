import React from 'react'
import { useRef } from 'react'

export default function AddPostForm({ forumName, handleAddPostClick}) {
    const postTitleRef = useRef();
    const postContentRef = useRef();
  return (
    <div>
        <button onClick={() => handleAddPostClick(forumName, postTitleRef.current.value, postContentRef.current.value) }>הוסף דיון</button>
            <label>כותרת:</label>
            <input ref={postTitleRef}></input>
            <label>תוכן:</label>
            <input ref={postContentRef}></input>
    </div>
  )
}
