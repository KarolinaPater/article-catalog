import "../style/edit-user.scss";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  validName,
  validEmail,
  validOrcidNumber,
  validAffiliation,
} from "../validator/validator";
import axios from "axios";
import FormButton from "../components/global/FormButton";
import FormTextInput from "../components/global/FormTextInput";
import { useNavigate } from "react-router-dom";

function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isDisabledButton, setIsDisabledButton] = useState(false);

  const [user, setUser] = useState({
    name: "",
    last_name: "",
    email: "",
    orcid_number: "",
    affiliation: "",
  });

  const [error, setError] = useState({
    name: "",
    last_name: "",
    email: "",
    orcid_number: "",
    affiliation: "",
  });

  const handleGetData = () => {
    const config = {
      headers: {
        "x-access-token": window.localStorage.getItem("token") || undefined,
      },
    };
    axios
      .get(`${process.env.REACT_APP_API_URL}/admin/get-user/${id}`, config)
      .then((response) => {
        const userGet = response?.data?.user || [];
        setUser(userGet);
      })
      .catch((error) => {
        alert(error?.response?.data?.message || "Błąd serwera");
      });
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleForm = () => {
    setError({
      name: null,
      last_name: null,
      email: null,
      orcid_number: null,
      affiliation: null,
    });

    //walidacja
    const name_error = validName(user.name);
    const last_name_error = validName(user.last_name);
    const email_error = validEmail(user.email);
    const orcid_number_error = validOrcidNumber(user.orcid_number);
    const affiliation_error = validAffiliation(user.affiliation);

    //wyświetlanie błędów walidacji
    setError({
      name: name_error,
      last_name: last_name_error,
      email: email_error,
      orcid_number: orcid_number_error,
      affiliation: affiliation_error,
    });

    //if wystąpił jakikolwiek error to wyjdź z funckji
    if (
      name_error ||
      last_name_error ||
      email_error ||
      orcid_number_error ||
      affiliation_error
    ) {
      return;
    }
    //if brak błędu, ustaw disabledbutton na true
    setIsDisabledButton(true);
    //wysyłanie danych do backendu
    const config = {
      headers: {
        "x-access-token": window.localStorage.getItem("token") || undefined,
      },
    };
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/admin/edit-user/${id}`,
        user,
        config
      )
      .then((response) => {
        //if rejestracja się powiodła then, stan przycisku na false
        setIsDisabledButton(false);
        handleRedirectToUserList();
      })
      .catch((error) => {
        // if rejestracja się nie powiodła lub wyskoczył błąd wtedy wyświetl i ustaw button na false
        alert(error.response.data.message || "Błąd serwera");
        setIsDisabledButton(false);
      });
  };

  const handleRedirectToUserList = () => {
    navigate(`/user-list`);
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <div className="page">
      <div className="form">
        <div className="form-title">
          <h1>Edycja danych użytkownika</h1>
        </div>

        <FormTextInput
          title="Imię*"
          type="text"
          name="name"
          placeholder="Jan"
          value={user.name}
          onChange={handleInput}
          error={error.name}
        />
        <FormTextInput
          title="Nazwisko*"
          type="text"
          name="last_name"
          placeholder="Kowalski"
          value={user.last_name}
          onChange={handleInput}
          error={error.last_name}
        />
        <FormTextInput
          title="Adres email*"
          type="email"
          name="email"
          placeholder="jankowalski@edu.pl"
          value={user.email}
          onChange={handleInput}
          error={error.email}
        />

        <FormTextInput
          title="Numer ORCID"
          type="string"
          name="orcid_number"
          value={user.orcid_number}
          onChange={handleInput}
          error={error.orcid_number}
        />

        <FormTextInput
          title="Afiliacja"
          type="string"
          name="affiliation"
          value={user.affiliation}
          onChange={handleInput}
          error={error.affiliation}
        />

        <FormButton
          title="Zatwierdź zmiany"
          handleForm={handleForm}
          disabled={isDisabledButton}
        />
        <FormButton title="Powrót" handleForm={handleRedirectToUserList} />
      </div>
    </div>
  );
}

export default EditUser;
