import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className="header">
      <ul className="header-item">
        <li className="title">My Personal Legend</li>

        {currentUser ? (
          <>
            <li className="current_logout">
              <p>{currentUser.username}</p>
              <button className="magic2" onClick={handleLogout}>
                Logout
              </button>
            </li>

            <li className="home">
              <Link to="/">
                {" "}
                <a> Home</a>
              </Link>
            </li>

            <li className="about">
              <Link to="/">
                <a>About</a>
              </Link>
            </li>
          </>
        ) : (
          <div className="before_login">
            <li className="current_user">
              <Link to="/login">
                <a>Sign In</a>
              </Link>
            </li>
            <li className="current_register">
              <Link to="/register">
                <a>Sign Up</a>
              </Link>
            </li>
          </div>
        )}
        {/* <hr /> */}
        {currentUser && (
          <>
            <li className="comment">
              <Link to="/comments">
                <a>Comments</a>
              </Link>
            </li>
            <li>
              <Link to="/questions">
                <a>Take Quiz</a>
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
