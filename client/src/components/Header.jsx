import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Journey from "../assets/Journey.jpeg";

export default function Header(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className="header">
      <div className="title">iAlchemy</div>
      <hr />
      <ul className="header-item">
        

        {currentUser ? (
          <>
            <li className="home">
              <Link to="/">
                {" "}
                <a> Home</a>
              </Link>
            </li>

            <li className="about">
              <Link to="/">
                <a>About Us</a>
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

            <li className="current_logout">
              <p>{currentUser.username}</p>
              <button className="magic2" onClick={handleLogout}>
                Sign Out
              </button>
              
            </li>
            
          </>
        )}
        
      </ul>
      
      <div style={{ backgroundImage: `url(${Journey})` }}></div>
    </div>
  );
}
