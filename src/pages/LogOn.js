import { useState } from "react";
import "../style/login-page/login-page.scss";
import LoginForm from "../components/login-page/LoginForm.js";
import RegisterForm from "../components/login-page/RegisterForm.js";

function LogOn() {
  const [isActiveLoginForm, setIsActiveLoginForm] = useState(true);
  // isActiveLoginForm - stan, który odpowiada za to ktory formularz jest wyswietlony
  // setIsActiveLoginForm - funkcja za pomoca ktrej ustawiamy/zmienamy stan

  const changeForm = () => {
    setIsActiveLoginForm((current) => !current);
  };
  return (
    <div className="page">
      <div className="form-wrapper">
        {isActiveLoginForm ? <LoginForm /> : <RegisterForm />}
        <button className="change-form-button" onClick={changeForm}>
          {isActiveLoginForm ? "Zarejestruj się" : "Zaloguj się"}
        </button>
      </div>
    </div>
  );
}
export default LogOn;
