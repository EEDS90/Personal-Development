import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className="header">
      <ul className="header_item">
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
              <button id="magic1">
                <Link to="/">Home</Link>
              </button>
            </li>

            <li className="about">
              <button id="magic1">
                <Link to="/">About</Link>
              </button>
            </li>

          </>
        ) : (
          <div className="before_login">
            <li className="current_user">
              <button id="magic1">
                <Link to="/login">Login</Link>
              </button>
            </li>
            <li className="current_register">
              <button id="magic1">
                <Link to="/register">Register</Link>
              </button>
            </li>
          </div>
        )}
        {/* <hr /> */}
        {currentUser && (
          <>
            <li className="comment">
              <button id="magic1">
                <Link to="/comments">comments</Link>
              </button>
            </li>
            <li className="question">
              <button id="magic1">
                <Link to="/questions">questions</Link>
              </button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}