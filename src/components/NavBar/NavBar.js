import React from "react";
import "./NavBar.css";


const NavBar = props => (
    <nav className="navbar navbar-light bg-light">
  <span className="navbar-brand mb-0 h1">Clicky Game</span>
  <span className="scoreDisplay">Your Score: {props.score} </span>
  <span className="scoreDisplay">Top Score: {props.topScore} </span>
</nav>
   
);

export default NavBar;



