import React from "react";
import NavMessage from "../NavMessage";
import "./style.css";

// Component for the Navbar

function Nav(props) {
  //score and topScore are props
  return (
    <nav className="navbar">
      <ul>
        <li className="brand">
          <a href="/">Memory</a>
        </li>
        <NavMessage score={props.score} topScore={props.topScore} />
        <li>
          Score: {props.score} | Top Score: {props.topScore}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
