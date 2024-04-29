import axios from "axios";
import React, { useState, useEffect } from "react";
import "../style/my-article.scss";
import { NavLink } from "react-router-dom";
import "../components/global/Loader.js";
import Loader from "../components/global/Loader.js";

function DataBase() {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleGetData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/article`)
      .then((response) => {
        const articleGet = response?.data?.articleList || [];
        setArticle(articleGet);
      })
      .catch((error) => {
        alert(error?.response?.data?.message || "Błąd serwera");
      });
    setLoading(false);
  };

  useEffect(() => {
    handleGetData();
  }, []);
  return (
    <div className="page">
      <div className="my-article-page">
        <h1>Lista artykułów</h1>
        <div className="my-article-table">
          <div className="my-article-header">
            <div className="my-article-cell">Tytuł</div>
            <div className="my-article-cell">Autorzy</div>
            <div className="my-article-cell">DOI Number</div>
            <div className="my-article-cell">Zasoby</div>
          </div>
          {loading ? (
            <Loader />
          ) : (
            article.map((item) => (
              <NavLink to={`/article/${item._id}`}>
                <div className="my-article-row ">
                  <div className="my-article-cell">{item.article_theme}</div>
                  <div className="my-article-cell">{item.authors}</div>
                  <div className="my-article-cell">{item.doi_number}</div>
                  <div className="my-article-cell">{item.sources}</div>
                </div>
              </NavLink>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default DataBase;
