import FormTextArea from "../components/global/FormTextArea";
import FormTextInput from "../components/global/FormTextInput";
import FormButton from "../components/global/FormButton";
import FormImageInput from "../components/global/FormImageInput";
import "../style/home-page/page.scss";
import "../style/add-article.scss";
import "../style/global/form-button.scss";
import "../style/global/form-text-input.scss";
import { useState, useEffect } from "react";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  validTheme,
  validAuthors,
  validDoi,
  validSources,
  validSummary,
} from "../validator/validator.js";
import axios from "axios";

function EditUserArticle() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isDisabledButton, setIsDisabledButton] = useState(false);
  const [article, setArticle] = useState({
    _id: "",
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
      .put(
        `${process.env.REACT_APP_API_URL}/users/edit-article`,
        article,
        config
      )
      .then((response) => {
        setIsDisabledButton(false);
      })
      .catch((error) => {
        alert(error.response.data.message || "Artykuł nie został zedytowany");

        setIsDisabledButton(false);
      });
  };

  const handleGetData = () => {
    const config = {
      headers: {
        "x-access-token": window.localStorage.getItem("token") || undefined,
      },
    };
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/get-article/${id}`, config)
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
  };

  const handleRedirectToArticle = () => {
    navigate(-1);
  };
  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <div className="page">
      <div className="home-page-theme">
        <h1>Formularz edycji artykułu: {id}</h1>
        <div className="add-article-page">
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
              title="Zatwierdź zmiany"
              handleForm={handleForm}
              disabled={isDisabledButton}
            />
            <FormButton title="Powrót" handleForm={handleRedirectToArticle} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditUserArticle;
