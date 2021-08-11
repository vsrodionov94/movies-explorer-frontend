import { useState } from "react";
import { Link } from "react-router-dom";

import './Register.css';

const Register = ({ handleRegister }) => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    message: ''
  });

  const handleChange = e => {
    const {name, value} = e.target;
    setData({
      ...data,
      [name]: value 
    });
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, password } = data;
    handleRegister(name, email, password)
  }

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
          value={ data.name }
          onChange={ handleChange}
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
          value={ data.email }
          onChange={ handleChange }
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
          value={ data.password }
          onChange={ handleChange }
        />
      <button type="submit" className="register__button">Зарегистрироваться</button>
      <Link to="/signin" className="register__link">Уже зарегистрированы? <span className="register__text">Войти</span></Link>
      </form>

    </section>
  );
};

export default Register;
