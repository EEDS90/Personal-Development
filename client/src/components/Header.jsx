import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

export default function Header(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className="header">
      
        <h1>Personal Development</h1>
        
      {currentUser ? (
        <>
          <p>{currentUser.username}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
      <hr />
      {currentUser && (
        <>
          <Link to="/comments">comments</Link>
          <Link to="/questions">questions</Link>
        </>
      )}
    </div>
  );
}