import "../style/menu-header.scss";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../AppContext";
import iconuser from "../images/icon-user.png";

function MenuHeader() {
  const { userInfo, isUserLogged } = useContext(AppContext);

  return (
    <div className="menu-wrapper">
      <div className="menu-header">
        <NavLink className="menu-button" to={"/home"}>
          <p>O nas</p>
        </NavLink>
        {/* <NavLink className="menu-button" to={"/tangoa"}>
          <p>Podstrona</p>
        </NavLink> */}
        <NavLink className="menu-button" to={"/apparatus"}>
          <p>Lista</p>
        </NavLink>
        <NavLink className="menu-button" to={"/database"}>
          <p>Baza artykułów</p>
        </NavLink>
        {/* <NavLink className="menu-button" to={"/materials"}>
          <p>Baza materiałów</p>
        </NavLink> */}
        <NavLink className="menu-button" to={"/contact"}>
          <p>Kontakt</p>
        </NavLink>

        {isUserLogged ? (
          <NavLink className="menu-button" to={"/account"}>
            <img alt="icon-user" className="icon-user" src={iconuser}></img>
            {userInfo.name ? userInfo.name : null}
          </NavLink>
        ) : (
          <NavLink className="menu-button" to={"/logon"}>
            <p>Zaloguj się</p>
          </NavLink>
        )}
      </div>
    </div>
  );
}
export default MenuHeader;
