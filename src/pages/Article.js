import "../style/home-page/page.scss";
import "../style/article.scss";
import "../style/global/form-button.scss";
import "../style/global/form-text-input.scss";
import { useState, useEffect } from "react";
import React from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
//import Loader from "../components/global/Loader.js";

function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState({
    _id: "",
    doi_number: "",
    article_theme: "",
    authors: "",
    sources: "",
    summary: "",
    image: "",
  });
  //const [loading, setLoading] = useState(true);

  const handleGetData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/get-article/${id}`)
      .then((response) => {
        const articleGet = response?.data?.article;

        setArticle({
          _id: articleGet._id,
          doi_number: articleGet?.doi_number,
          article_theme: articleGet?.article_theme,
          authors: articleGet?.authors,
          sources: articleGet?.sources,
          summary: articleGet?.summary,
          image: articleGet?.image,
        });
      })
      .catch((error) => {
        alert(error?.response?.data?.message || "Błąd serwera");
      });
    //setLoading(false);
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <div className="page">
      <div className="home-page-theme">
        {/* {loading ? <Loader /> : article} */}
        <div className="article-theme">{article.article_theme}</div>
        <div className="article-summary">{article.summary} </div>
        {article.image && (
          <div className="article-image-wrapper">
            <img className="article-image" src={article.image}></img>
          </div>
        )}
        <div className="article-field">Numer DOI: {article.doi_number}</div>
        <div className="article-field">Autorzy: {article.authors}</div>
        <div className="article-field">Bibliografia: {article.sources}</div>
        <div className="button-wrapper">
          <NavLink className="form-button2" to={"/database"}>
            Powrót
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Article;
