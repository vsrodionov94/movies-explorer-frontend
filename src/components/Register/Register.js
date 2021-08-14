import { Link } from "react-router-dom";
import { useFormWithValidation } from "../../utils/validator.js";

import './Register.css';

const Register = ({ handleRegister }) => {
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  console.log(values)
  const handleSubmit = e => {
    if (isValid) {
      e.preventDefault();
      const { name, email, password } = values;
      handleRegister(name, email, password)
    }
  }

  const classBtn = isValid ? 'register__button' : 'register__button register__button_disabled'; 
  return(
    <section className="register">
      <header className="register__header">
        <Link className="register__logo" to="/" />
        <h1 className="register__title">Добро пожаловать!</h1>
      </header>
      <form className="register__form" onSubmit={ handleSubmit }>
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
          value={ values.name }
          onChange={ handleChange }
        />
        <p className='register__field-error' id='field-name-error'>{errors.name}</p>
        <label for="field-email" className="register__label">E-mail</label>
        <input
          type="email"
          className="register__field"
          placeholder="E-mail"
          name="email"
          id="field-email"
          required
          minLength="2"
          maxLength="30"
          value={ values.email }
          onChange={ handleChange }
        />
        <p className='register__field-error' id='field-email-error'>{errors.email}</p>
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
          value={ values.password }
          onChange={ handleChange }
        />
        <p className='register__field-error' id='field-password-error'>{errors.password}</p>
        <button type="submit" className={classBtn}>Зарегистрироваться</button>
        <Link to="/signin" className="register__link">Уже зарегистрированы? <span className="register__text">Войти</span></Link>
      </form>

    </section>
  );
};

export default Register;
