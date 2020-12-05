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
  console.log(comments);

  return (
    <div>
      <h3>What do you really think about me and how can I improve?</h3>

      <div className="comments-topic">
        {props.comments.map((comment) => (
          <div key={comment.id}>
            {/* <Link to={`/comments/${comment.id}`}>
              <p>{comment.name}</p>
              <p>{comment.comment}</p>
            </Link> */}

            {comment.user_id === props.currentUser?.id && (
              <>
                <div>
                  <p>{comment.comment}</p>
                  <div className="buttons-crud">
                    <Link to={`/comments/${comment.id}/edit`}>
                      <button className="edit-button">Edit</button>
                    </Link>

                    <button className="delete-button1" onClick={() => props.handleDelete(comment.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}

        <br />

        <Link to="/comments/new">
          <button className="comment-button">Comment</button>
        </Link>
      </div>
    </div>
  );
}
