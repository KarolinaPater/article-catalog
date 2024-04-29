import "../style/my-article.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import EditButton from "../components/global/EditButton";

function MyArticle() {
  const navigate = useNavigate();
  const [article, setArticle] = useState([]);

  const handleGetData = () => {
    const config = {
      headers: {
        "x-access-token": window.localStorage.getItem("token") || undefined,
      },
    };
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/get-article-list`, config)
      .then((response) => {
        const articleGet = response?.data?.articleList || [];
        setArticle(articleGet);
      })
      .catch((error) => {
        alert(error?.response?.data?.message || "Błąd serwera");
      });
  };

  const handleRedirect = (id) => {
    navigate(`/edit-article/${id}`);
  };

  useEffect(() => {
    handleGetData();
  }, []);
  return (
    <div className="page">
      <div className="my-article-page">
        <h1>Moje artykuły</h1>
        {article.length > 0 ? (
          <div className="my-article-table">
            <div className="my-article-header">
              <div className="my-article-cell">Tytuł</div>
              <div className="my-article-cell">Autorzy</div>
              <div className="my-article-cell">Numer DOI</div>
              <div className="my-article-cell">Zasoby</div>
            </div>
            {article.map((item) => (
              <div className="my-article-row" key={item._id}>
                <div className="my-article-cell">{item.article_theme}</div>
                <div className="my-article-cell">{item.authors}</div>
                <div className="my-article-cell">{item.doi_number}</div>
                <div className="my-article-cell">{item.sources}</div>
                <div className="action-cell">
                  <EditButton
                    handleClick={() => handleRedirect(item._id)}
                    tooltip="Edytuj artykuł"
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text">Brak artykułów</div>
        )}

        <NavLink className="form-button2" to={"/account"}>
          Powrót
        </NavLink>
      </div>
    </div>
  );
}

export default MyArticle;
