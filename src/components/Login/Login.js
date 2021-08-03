import { Link } from "react-router-dom";

import './Login.css';

export default function Login() {
  return(
    <div className="login">
      <header className="login__header">
        <Link to="/" className="login__logo"/>
        <h1 className="login__title">Рады видеть!</h1>
      </header>
      <form className="login__form">
        <label for="field-email" className="login__label">E-mail</label>
        <input
          type="text"
          className="login__field"
          placeholder="E-mail"
          name="email"
          id="field-email"
          required
          minLength="2"
          maxLength="30"
        />
        <label for="field-password" className="login__label">Пароль</label>
        <input
          type="password"
          className="login__field"
          placeholder="Пароль"
          name="password"
          id="field-password"
          required
          minLength="2"
          maxLength="20"
        />
      </form>

      <button type="submit" className="login__button">Войти</button>
      <Link to="/signup" className="login__link">Ещё не зарегистрированы? <span className="login__text">Регистрация</span></Link>
    </div>
  );
};
