import FormTextArea from "../components/global/FormTextArea";
import FormTextInput from "../components/global/FormTextInput";
import FormButton from "../components/global/FormButton";
import "../style/home-page/page.scss";
import "../style/add-article.scss";
import "../style/global/form-button.scss";
import "../style/global/form-text-input.scss";
import { useState } from "react";
import React from "react";
import { NavLink } from "react-router-dom";
import {
  validTheme,
  validAuthors,
  validDoi,
  validSources,
  validSummary,
} from "../validator/validator.js";
import axios from "axios";
import FormImageInput from "../components/global/FormImageInput";

function AddArticle() {
  const [isDisabledButton, setIsDisabledButton] = useState(false);
  const [article, setArticle] = useState({
    doi_number: "",
    article_theme: "",
    authors: "",
    sources: "",
    summary: "",
    image: "",
  });

  const [error, setError] = useState({
    doi_number: null,
    article_theme: null,
    authors: null,
    sources: null,
    summary: null,
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setArticle({ ...article, [name]: value });
  };
  // const handleImage = (e) => {

  // }

  const handleForm = () => {
    setError({
      doi_number: null,
      article_theme: null,
      authors: null,
      sources: null,
      summary: null,
    });
    const doi_number = validDoi(article.doi_number);
    const article_theme = validTheme(article.article_theme);
    const authors = validAuthors(article.authors);
    const sources = validSources(article.sources);
    const summary = validSummary(article.summary);
    setError({ doi_number, article_theme, authors, sources, summary });
    if (doi_number || article_theme || authors || sources || summary) {
      return;
    }
    const config = {
      headers: {
        "x-access-token": window.localStorage.getItem("token") || undefined,
      },
    };
    setIsDisabledButton(true);
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/users/add-article`,
        article,
        config
      )
      .then((response) => {
        //alert("Artykuł został dodany");
        setArticle({
          doi_number: "",
          article_theme: "",
          authors: "",
          sources: "",
          summary: "",
          image: "",
        });
        setIsDisabledButton(false);
      })
      .catch((error) => {
        alert(error?.response?.data?.message || "Artykuł nie został dodany");

        setIsDisabledButton(false);
      });
  };

  return (
    <div className="page">
      <div className="home-page-theme">
        <h1>Formularz dodawania artykułu</h1>
        <div className="add-article-page">
          {article.image}
          <FormTextInput
            title="Numer Doi"
            type="text"
            name="doi_number"
            placeholder="10.1000.10/123456"
            value={article.doi_number}
            onChange={handleInput}
            error={error.doi_number}
          />
          <FormTextInput
            title="Tytuł artykułu"
            type="text"
            name="article_theme"
            value={article.article_theme}
            onChange={handleInput}
            error={error.article_theme}
          />
          <FormTextInput
            title="Autorzy"
            type="text"
            name="authors"
            placeholder="Jan Kowalski, Adam Nowak"
            value={article.authors}
            onChange={handleInput}
            error={error.authors}
          />
          <FormTextInput
            title="Źródła"
            type="text"
            name="sources"
            value={article.sources}
            onChange={handleInput}
            error={error.sources}
          />
          <FormTextArea
            title="Opis artykułu"
            type="text"
            name="summary"
            value={article.summary}
            onChange={handleInput}
            error={error.summary}
          />
          <FormImageInput
            name="image"
            value={article.image}
            onChange={handleInput}
          />
          <div className="button-wrapper">
            <FormButton
              title="Prześlij"
              handleForm={handleForm}
              disabled={isDisabledButton}
            />
            <NavLink className="form-button2" to={"/account"}>
              Powrót
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddArticle;
