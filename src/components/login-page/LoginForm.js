import "../../style/login-page/login-page.scss";
import { useState, useContext } from "react";
import { validEmail, validPassword } from "../../validator/validator.js";
import axios from "axios";
import { AppContext } from "../../AppContext";
import { useNavigate } from "react-router-dom";
import FormButton from "../global/FormButton";
import FormTextInput from "../global/FormTextInput";

function LoginForm() {
  let navigate = useNavigate();
  const { setUserInfo, setIsUserLogged } = useContext(AppContext);
  const [isDisabledButton, setIsDisabledButton] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: null,
    password: null,
  });

  const [backendError, setBackendError] = useState(null);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleForm = () => {
    setError({ email: null, password: null });
    const email_error = validEmail(user.email);
    const password_error = validPassword(user.password);
    setError({ email: email_error, password: password_error });
    if (email_error || password_error) {
      return;
    }
    setIsDisabledButton(true);

    axios
      .post(`${process.env.REACT_APP_API_URL}/login`, user)
      .then((response) => {
        setUserInfo(response.data.user);
        setIsUserLogged(true);
        window.localStorage.setItem("token", response.data.accessToken);
        setIsDisabledButton(false);
        navigate("/account");
      })
      .catch((error) => {
        // alert(error.response.data.message || "Błąd serwera");
        setBackendError(error.response.data.message || "Błąd serwera");
        setIsDisabledButton(false);
      });
  };

  return (
    <div className="form">
      <div className="form-title">
        <h1>Formularz logowania</h1>
      </div>

      <FormTextInput
        title="Nazwa użytkownika"
        type="email"
        name="email"
        placeholder="nazwa@edu.pl"
        value={user.email}
        onChange={handleInput}
        error={error.email}
      />
      <FormTextInput
        title="Hasło"
        className="text-input-input"
        type="password"
        name="password"
        placeholder="*******"
        value={user.password}
        onChange={handleInput}
        error={error.password}
      />
      <FormButton
        title="Zaloguj się"
        handleForm={handleForm}
        disabled={isDisabledButton}
      />
      <div className="text-input-error2">
        {backendError ? backendError : null}
      </div>
    </div>
  );
}

export default LoginForm;
