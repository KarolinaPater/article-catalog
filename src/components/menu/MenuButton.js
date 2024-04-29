import React from "react";
import { NavLink } from "react-router-dom";

function MenuButton(props) {
  return (
    <NavLink to={props.link} className="menu-button">
      <p>{props.text}</p>
    </NavLink>
  );
}

export default MenuButton;
