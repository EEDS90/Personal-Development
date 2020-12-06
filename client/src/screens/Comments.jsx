import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllComments } from "../services/comments.js";
import "./Comments.css";
import Books from "../assets/Books.jpeg"


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
    <div style={{backgroundImage: `url(${Books})`}}>
      
      <h3>What do you really think about me and how can I improve?</h3>

      <div className="comments-topic">
        {props.comments.map((comment) => (
          <div key={comment.id}>
            {comment.user_id === props.currentUser?.id && (
              <>
                <div className="comment4">
                  <div >
                    <p className="comment3">{comment.comment}</p>
                  </div>
                  <div className="buttons-crud">
                    <Link to={`/comments/${comment.id}/edit`}>
                      <button id="edit-button">Edit</button>
                    </Link>

                    <button
                      id="del-button"
                      onClick={() => props.handleDelete(comment.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}

        <br />
        <div className="comment-button">
          <Link to="/comments/new">
            <button className="comment-button">Comment</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
