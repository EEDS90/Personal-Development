import React, { useState } from "react";
import "./Comment.css";
import { Link } from "react-router-dom";
import { destroyComment } from "../services/comments.js";
import { getUser } from "../../services/users";

const Comment = (props) => {
  const { content, imgURL, date } = props;
  const [name, setName] = useState("");
  

  function populateName(user) {
    setName(`${user.name.first} ${user.name.last}`);
   
  }

  async function fetchName() {
    try {
      const user = await getUser(props.user);
      populateName(user);
    } catch (error) {
      setName(`Author has been deleted`);
    }
  }

  async function handleDelete() {
    await destroyComment(props.id);
    props.set((prev) => !prev);
  }

  fetchName();

  const alphaMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let timeStamp = date.split("-", 3);
  let numericDate = timeStamp[2].split("T", 1);
  let numericMonth = timeStamp[1];
  let alphaMonth = alphaMonths[numericMonth - 1];

  return (
    <div className="comment-single-comment">
      <div className="comment-user-data">
        <img
          className="comment-profile-pic"
          src="./assets/images/blank-profile-picture.png"
          alt="user's face"
        />
        <h3 className="comment-name">{name}</h3>
        <h3 className="comment-date">
          {alphaMonth} {numericDate}, {timeStamp[0]}
        </h3>
      </div>
      <div className="comment-content-data">
        <h3 className="comment-content">{content}</h3>
        {/.+\.(jpg|jpeg|png|apng|gif|bmp|svg)$/.test(imgURL) ? (
          <img className="comment-image" src={imgURL} alt="comment" />
        ) : (
          <div></div>
        )}
        <div>
            <Link className="edit-link" to={`/comments/${props.id}/edit`}>
              <img className="comment-edit-button" src="./assets/images/edit-icon.png" alt="edit"></img>
            </Link>
        </div>
        <div>
          <img className="comment-delete-button" src="./assets/images/delete-icon.png" alt="edit" onClick={handleDelete}></img>
        </div>
      </div>
    </div>
  );
};

export default Comment;