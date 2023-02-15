import React from "react";
import "../styles/header.css";

export default function Header() {
  return (
    <div className="header">
      <img className="logo" src={"logo.png"} alt="png" />
      <div className="input-btn">
        <input type="text" placeholder="Search any things" />
        <button>Search</button>
      </div>
      <div className="signIn-shopCart">
        <img src={"Group 3.png"} alt="sign in" />
        <img src={"Group 535.png"} alt="shop cart" />
      </div>
    </div>
  );
}
