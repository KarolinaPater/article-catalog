import "../style/my-article.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormButton from "../components/global/FormButton";
import DeleteButton from "../components/global/DeleteButton";
import EditButton from "../components/global/EditButton";
import Confirm from "../components/global/Confirm";

function UserArticle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState([]);
  const [stateConfirm, setStateConfirm] = useState(false);
  const [activeId, setActiveId] = useState(false);

  const handleGetData = () => {
    const config = {
      headers: {
        "x-access-token": window.localStorage.getItem("token") || undefined,
      },
    };
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/admin/get-article-list/${id}`,
        config
      )
      .then((response) => {
        const articleGet = response?.data?.articleList || [];
        setArticle(articleGet);
      })
      .catch((error) => {
        alert(error?.response?.data?.message || "Błąd serwera");
      });
  };

  const handleRedirectToEditArticle = (id) => {
    navigate(`/edit-user-article/${id}`);
  };

  const handleDeleteArticle = () => {
    const config = {
      headers: {
        "x-access-token": window.localStorage.getItem("token") || undefined,
      },
    };
    axios
      .delete(
        `${process.env.REACT_APP_API_URL}/admin/delete-user-article/${activeId}`,
        config
      )
      .then((response) => {
        handleCloseDeleteConfirm();
        handleGetData();
      })
      .catch((error) => {
        alert(error?.response?.data?.message || "Błąd serwera");
      });
  };

  const handleOpenDeleteConfirm = (id) => {
    setActiveId(id);
    setStateConfirm(true);
  };
  const handleCloseDeleteConfirm = () => {
    setStateConfirm(false);
  };
  const handleRedirectToUser = () => {
    navigate(-1);
  };

  useEffect(() => {
    handleGetData();
  }, []);
  return (
    <div className="page">
      {stateConfirm && (
        <Confirm
          tekst={"Czy na pewno chcesz usunąć ten artykuł?"}
          confirm_tekst={"TAK"}
          cancel_tekst={"NIE"}
          handleConfirm={handleDeleteArticle}
          handleCancel={handleCloseDeleteConfirm}
        />
      )}
      <div className="my-article-page">
        <h1> Artykuły użytkownika</h1>
        {article.length > 0 ? (
          <div className="my-article-table">
            <div className="user-article-header">
              <div className="my-article-cell">Tytuł</div>
              <div className="my-article-cell">Autorzy</div>
              <div className="my-article-cell">Numer DOI</div>
              <div className="my-article-cell">Zasoby</div>
            </div>
            {article.map((item) => (
              <div className="user-article-row" key={item._id}>
                <div className="my-article-cell">{item.article_theme}</div>
                <div className="my-article-cell">{item.authors}</div>
                <div className="my-article-cell">{item.doi_number}</div>
                <div className="my-article-cell">{item.sources}</div>
                <div className="action-cell">
                  <EditButton
                    handleClick={() => handleRedirectToEditArticle(item._id)}
                    tooltip="Edytuj artykuły użytkownika"
                  />
                  <DeleteButton
                    handleClick={() => handleOpenDeleteConfirm(item._id)}
                    tooltip="Usuń artykuły użytkownika"
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text">Brak artykułów</div>
        )}
        <FormButton title="Powrót" handleForm={handleRedirectToUser} />
      </div>
    </div>
  );
}

export default UserArticle;
