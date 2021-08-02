import './Register.css';
import logo from "./../../images/logo.svg";

export default function Register() {
  return(
    <div className="register">
      <header className="register__header">
        <img alt="Логотип" src={logo} className="register__logo"/>
        <h1 className="register__title">Добро пожаловать!</h1>
      </header>
      <form className="register__form">
        <label for="field-name" className="register__label">Имя</label>
        <input
          type="text"
          className="register__field"
          placeholder="Имя"
          name="name"
          id="field-name"
          required
          minLength="2"
          maxLength="30"
        />
        <label for="field-email" className="register__label">E-mail</label>
        <input
          type="text"
          className="register__field"
          placeholder="E-mail"
          name="email"
          id="field-email"
          required
          minLength="2"
          maxLength="30"
        />
        <label for="field-password" className="register__label">Пароль</label>
        <input
          type="password"
          className="register__field"
          placeholder="Пароль"
          name="password"
          id="field-password"
          required
          minLength="2"
          maxLength="20"
        />
      </form>

      <button type="submit" className="register__button">Зарегистрироваться</button>
      <a href="#ss" className="register__link">Уже зарегистрированы? <span className="register__text">Войти</span></a>
    </div>
  );
};
