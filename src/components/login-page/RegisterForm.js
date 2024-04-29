import "../../style/login-page/login-page.scss";
import { useState } from "react";
import {
  validName,
  validEmail,
  validOrcidNumber,
  validAffiliation,
  validRegisterPassword,
  validConfirmPassword,
} from "../../validator/validator";
import axios from "axios";
import FormButton from "../global/FormButton";
import FormTextInput from "../global/FormTextInput";

function RegisterForm() {
  const [isDisabledButton, setIsDisabledButton] = useState(false);

  const [user, setUser] = useState({
    name: "",
    last_name: "",
    email: "",
    orcid_number: "",
    affiliation: "",
    password: "",
    confirm_password: "",
  });

  const [error, setError] = useState({
    name: "",
    last_name: "",
    email: "",
    orcid_number: "",
    affiliation: "",
    password: "",
    confirm_password: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleForm = () => {
    //zerowane błędy za pomocą setError
    setError({
      name: null,
      last_name: null,
      email: null,
      orcid_number: null,
      affiliation: null,
      password: null,
      confirm_password: null,
    });

    //walidacja
    const name_error = validName(user.name);
    const last_name_error = validName(user.last_name);
    const email_error = validEmail(user.email);
    const orcid_number_error = validOrcidNumber(user.orcid_number);
    const affiliation_error = validAffiliation(user.affiliation);
    const password_error = validRegisterPassword(user.password);
    const confirm_password_error = validConfirmPassword(
      user.password,
      user.confirm_password
    );

    //wyświetlanie błędów walidacji
    setError({
      name: name_error,
      last_name: last_name_error,
      email: email_error,
      orcid_number: orcid_number_error,
      affiliation: affiliation_error,
      password: password_error,
      confirm_password: confirm_password_error,
    });

    //jeśli wystąpił error wtedy wyjdź z funckji
    if (
      name_error ||
      last_name_error ||
      email_error ||
      orcid_number_error ||
      affiliation_error ||
      password_error ||
      confirm_password_error
    ) {
      return;
    }
    // jesli brak błędu, ustaw disabledbutton na true
    setIsDisabledButton(true);
    //wysyłanie danych do backendu
    axios
      .post(`${process.env.REACT_APP_API_URL}/register`, user)
      .then((response) => {
        //if rejestracja się powiodła then, stan przycisku na false
        //alert(response.data.message);
        setIsDisabledButton(false);
      })
      .catch((error) => {
        // if rejestracja się nie powiodła lub wyskoczył błąd wtedy wyświetl i ustaw button na false
        //alert(error.response.data.message || "Błąd serwera");

        setIsDisabledButton(false);
      });
  };

  return (
    <div className="form">
      <div className="form-title">
        <h1>Formularz rejestracji</h1>
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
        placeholder="0000111122223333"
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

      <FormTextInput
        title="Hasło*"
        type="password"
        name="password"
        placeholder="*******"
        value={user.password}
        onChange={handleInput}
        error={error.password}
      />
      <FormTextInput
        title="Powtórz hasło*"
        type="password"
        name="confirm_password"
        placeholder="*******"
        value={user.confirm_password}
        onChange={handleInput}
        error={error.confirm_password}
      />

      <FormButton
        title="Zarejestruj się"
        handleForm={handleForm}
        disabled={isDisabledButton}
      />
    </div>
  );
}

export default RegisterForm;
