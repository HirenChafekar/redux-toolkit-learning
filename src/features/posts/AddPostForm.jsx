import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";
import { postAdded } from "./postsSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  const onFormSubmit = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
      setUserId("");
    }
  };

  const usersOption = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  return (
    <section>
      <h2>Add a new Post</h2>
      <form>
        <label htmlFor="postTitle"> Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          id="postAuthor"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        >
          {usersOption}
        </select>
        <textarea
          type="text"
          id="postContent"
          name="postContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="button" onClick={onFormSubmit} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
