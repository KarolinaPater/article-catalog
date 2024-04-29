import "../style/layout.scss";
import axios from "axios";
import React, { useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContext } from "../AppContext";
import Footer from "./Footer.js";
import MenuHeader from "./MenuHeader.js";
import HomePage from "../pages/HomePage.js";
import TangoA from "../pages/TangoA.js";
import Apparatus from "../pages/Apparatus.js";
import DataBase from "../pages/DataBase.js";
// import MaterialsBase from "../pages/MaterialsBase.js";
import Contact from "../pages/Contact.js";
import ErrorPage from "../pages/ErrorPage.js";
import LogOn from "../pages/LogOn.js";
import Account from "../pages/Account.js";
import AddArticle from "../pages/AddArticle.js";
import Article from "../pages/Article.js";
import MyArticle from "../pages/MyArticle.js";
import EditArticle from "../pages/EditArticle.js";
import UserList from "../pages/UserList.js";
import EditUser from "../pages/EditUser.js";
import UserArticle from "../pages/UserArticle.js";
import EditUserArticle from "../pages/EditUserArticle.js";

function Layout() {
  const { setIsUserLogged, setUserInfo } = useContext(AppContext);

  const checkSession = () => {
    const config = {
      headers: {
        "x-access-token": window.localStorage.getItem("token") || undefined,
      },
    };
    axios
      .post(`${process.env.REACT_APP_API_URL}/session`, {}, config)
      .then((response) => {
        setUserInfo(response.data.user);
        setIsUserLogged(true);
        window.localStorage.setItem("token", response.data.accessToken);
      })
      .catch((error) => {
        setUserInfo({
          name: "",
          last_name: "",
          email: "",
          role: "",
        });
        setIsUserLogged(false);
        window.localStorage.removeItem("token");
      });
  };
  useEffect(() => {
    checkSession();
  }, []);

  return (
    <div className="layout">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <MenuHeader />
        <Routes>
          {/* <Route exact path="/">
            <Navigate to="/home" />
          </Route> */}
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/tangoa" element={<TangoA />}></Route>
          <Route path="/apparatus" element={<Apparatus />}></Route>
          <Route path="/database" element={<DataBase />}></Route>
          {/* <Route path="/materials" element={<MaterialsBase />}></Route> */}
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/logon" element={<LogOn />}></Route>
          <Route path="/account" element={<Account />}></Route>
          <Route path="/add-article" element={<AddArticle />}></Route>
          <Route path="/my-article" element={<MyArticle />}></Route>
          <Route path="/article/:id" element={<Article />}></Route>
          <Route path="/edit-article/:id" element={<EditArticle />}></Route>
          <Route path="/user-list" element={<UserList />}></Route>
          <Route path="/edit-user/:id" element={<EditUser />}></Route>
          <Route
            path="/edit-user-article/:id"
            element={<EditUserArticle />}
          ></Route>
          <Route path="/user-article/:id" element={<UserArticle />}></Route>
          <Route element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default Layout;
