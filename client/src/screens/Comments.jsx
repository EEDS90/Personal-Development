import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {  getAllComments } from "../services/comments.js";
import "./Comments.css";

export default function Comments(props) {
  
  const [comments, setComments] = useState([]);

useEffect(() => {
  const fetchComments = async () => {
    const commentData = await getAllComments();
    setComments(commentData);
  };
  fetchComments();
}, []);
  return (
    <div>
      <ul className="comment-container1">
        
      <h3>What do you really think about me and how can I improve?</h3>
      
      {props.comments.map((comment) => (
        <React.Fragment key={comment.id}>
          <Link to={`/comments/${comment.id}`}>
            <p>{comment.text}</p>
          </Link>
          {comment.user_id === props.currentUser?.id && (
            <>
              <Link to={`/comments/${comment.id}/edit`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => props.handleDelete(comment.id)}>
                Delete
              </button>
              {comments.map((comment) => (
                <p>{comment.comment}</p>
              ))}
            </>
          )}
        </React.Fragment>
      ))}
      <br />
      <Link to="/comments/new">
        <button className= "comment-button">Comment</button>
        </Link>
        </ul>
    </div>
  );
}
