import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="container2">
      <div className="image">
        <p>Everything You Need to Know to Improve Your Life</p>

        <div>
          <img id="image1" src="/assets2/Journey.jpeg" />
          <p className="quote">
            “I wish for you a life of wealth, health and happiness; a life in
            which you give to yourself the gift of patience, the virtue of
            reason, the value of knowledge, and the influence of faith in your
            own ability to dream about and to achieve worthy rewards.” – Jim
            Rohn
          </p>
        </div>
      </div>
    </div>
  );
}
