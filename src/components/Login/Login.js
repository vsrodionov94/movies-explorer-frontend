import { Link } from "react-router-dom";
import { useFormWithValidation } from "../../utils/validator";

import './Login.css';

const Login = ({ handleLogin }) => {
  const { values, handleChange, errors, isValid } = useFormWithValidation();


  const handleSubmit = e => {
    e.preventDefault();
      const { email, password } = values;
      handleLogin(email, password);
  };

  const classBtn = isValid ? 'login__button' : 'login__button login__button_disabled'; 

  return (
    <section className="login">
      <header className="login__header">
        <Link to="/" className="login__logo"/>
        <h1 className="login__title">Рады видеть!</h1>
      </header>
      <form className="login__form" onSubmit={handleSubmit}>
        <label for="field-email" className="login__label">E-mail</label>
        <input
          type="email"
          className="login__field"
          placeholder="E-mail"
          name="email"
          id="field-email"
          required
          minLength="2"
          maxLength="30"
          value={values.email}
          onChange={handleChange}  
        />
        <p class='login__field-error' id='field-email-error'>{errors.email}</p>
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
          value={values.password}
          onChange={handleChange}  
        />
        <p class='login__field-error' id='field-password-error'>{errors.password}</p>
        <button type="submit" className={classBtn}>Войти</button>
        <Link to="/signup" className="login__link">Ещё не зарегистрированы? <span className="login__text">Регистрация</span></Link>
      </form>
    </section>
  );
};

export default Login;
