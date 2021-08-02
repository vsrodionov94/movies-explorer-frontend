import './Login.css';
import logo from "./../../images/logo.svg";

export default function Login() {
  return(
    <div className="login">
      <header className="login__header">
        <img alt="Логотип" src={logo} className="login__logo"/>
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
      <a href="#ss" className="login__link">Ещё не зарегистрированы? <span className="login__text">Регистрация</span></a>
    </div>
  );
};
