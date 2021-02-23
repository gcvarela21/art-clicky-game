import React from "react";
import "./header.css";

function Header(props) {
  return (
    <header className="row">
        <h1>{props.message}</h1>
        <h2>Score: {props.Score}| Top score: {props.TopScore} </h2>
    </header>
  );
}

export default Header;