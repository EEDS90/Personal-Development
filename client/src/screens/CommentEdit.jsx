import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CommentEdit(props) {
  const [formData, setFormData] = useState({
    comment: "",
  });

  const {comment} = formData
  const { id } = useParams();

  useEffect(() => {
    const prefillForm = () => {
      const commentItem = props.comments.find(
        (comment) => comment.id === Number(id)
      );
      console.log(commentItem)
      setFormData({
        comment: commentItem.comment,
      });
    };
    if (props.comments.length) {
      prefillForm();
    }
  }, [props.comments]);
  console.log(props.comments)
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    const editData = { [name]: value }
    setFormData((formData) => {
      return { ...formData, ...editData }
      
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.handleUpdate(id, formData);
      }}
    >
      <h3>Edit Comment</h3>
      <div className="comment-container">
        <div className="comment-1">
          <label>
            <input className= 'text'
              type="text"
              name="comment"
              value={comment}
              onChange={handleChange}
            />
          </label>
          <button className="create-button2">Update</button>
        </div>
      </div>
    </form>
  );
}
