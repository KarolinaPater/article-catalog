import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../AppContext";
import "../style/account.scss";
import "../style/home-page/page.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Account() {
  let navigate = useNavigate();
  const { userInfo, setUserInfo, setIsUserLogged, userRole } =
    useContext(AppContext);

  const handleLogOut = () => {
    const config = {
      headers: {
        "x-access-token": window.localStorage.getItem("token") || undefined,
      },
    };

    axios
      .post(`${process.env.REACT_APP_API_URL}/logout`, {}, config)
      .then((response) => {
        setUserInfo({
          name: "",
          last_name: "",
          email: "",
          role: "",
        });
        setIsUserLogged(false);
        window.localStorage.removeItem("token");
        navigate("/home");
        //alert(response.data.message);
      })
      .catch((error) => {
        //alert(error.response.data.message || "Błąd serwera");
      });
  };

  return (
    <div className="page">
      <div className="home-page-theme">
        <h1>Konto użytkownika</h1>
        <div className="user-info">
          <div className="user-info-label">
            Imie: <strong>{userInfo.name}</strong>
          </div>
          <div className="user-info-label">
            Nazwisko: <strong>{userInfo.last_name}</strong>
          </div>
        </div>

        <div className="button-wrapper">
          <NavLink className="form-button2" to={"/add-article"}>
            Dodaj artykuł
          </NavLink>
          <NavLink className="form-button2" to={"/my-article"}>
            Moje artykuły
          </NavLink>
          {userInfo.role === "admin" ? (
            <NavLink className="form-button2" to={"/user-list"}>
              Lista użytkowników
            </NavLink>
          ) : null}

          <button className="form-button2" onClick={handleLogOut}>
            Wyloguj
          </button>
        </div>
      </div>
    </div>
  );
}

export default Account;
