import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);
  const currAuthor = users.find((user) => user.id == userId);
  return <span>by {currAuthor ? currAuthor.name : "Unknown Author"}</span>;
};

export default PostAuthor;
