import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllComments } from "../services/comments.js";
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
      <h3>What do you really think about me and how can I improve?</h3>

      <div className="comments-topic">
        {props.comments.map((comment) => (
          <React.Fragment key={comment.id}>
            <Link to={`/comments/${comment.id}`}>
              <p>{comment.name}</p>
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
      </div>
      <Link to="/comments/new">
        <button className="comment-button">Comment</button>
      </Link>
    </div>
  );
}
