import "../style/user-list.scss";
import "../style/global/form-button.scss";
import "../style/global/form-text-input.scss";
import "../style/home-page/page.scss";

import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import EditButton from "../components/global/EditButton";
import ListButton from "../components/global/ListButton";

function UserList() {
  const navigate = useNavigate();
  const [userList, setUserList] = useState([]);

  const handleGetData = () => {
    const config = {
      headers: {
        "x-access-token": window.localStorage.getItem("token") || undefined,
      },
    };
    axios
      .get(`${process.env.REACT_APP_API_URL}/admin/get-user-list`, config)
      .then((response) => {
        const userGet = response?.data?.userList || [];
        setUserList(userGet);
      })
      .catch((error) => {
        alert(error?.response?.data?.message || "Błąd serwera");
      });
  };
  const handleRedirectToEditUser = (id) => {
    navigate(`/edit-user/${id}`);
  };

  const handleRedirectToArticle = (id) => {
    navigate(`/user-article/${id}`);
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <div className="page">
      <div className="user-page">
        <h1>Lista użytkowników</h1>
        <div className="user-table">
          <div className="user-header">
            <div className="user-cell">Id użytkownika</div>
            <div className="user-cell">Imię</div>
            <div className="user-cell">Nazwisko</div>
            <div className="user-cell">Email</div>
            <div className="user-cell"> </div>
          </div>
          {userList.map((user) => (
            <div className="user-row" key={user._id}>
              <div className="user-cell">{user._id}</div>
              <div className="user-cell">{user.name}</div>
              <div className="user-cell">{user.last_name}</div>
              <div className="user-cell">{user.email}</div>
              <div className="action-cell">
                <EditButton
                  handleClick={() => handleRedirectToEditUser(user._id)}
                  tooltip="Edytuj dane użytkownika"
                />
                <ListButton
                  handleClick={() => handleRedirectToArticle(user._id)}
                  tooltip="Lista artykułów użytkownika"
                />
              </div>
            </div>
          ))}
          <NavLink className="form-button2" to={"/account"}>
            Powrót
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default UserList;
