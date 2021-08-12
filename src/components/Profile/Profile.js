import { useContext, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../utils/validator";
import Navigation from "../Navigation/Navigation";

import './Profile.css';

const Profile = ({ logOut, handleUpdateUser }) => {
  const currentUser = useContext(CurrentUserContext);

  const { values, handleChange, errors, isValid } = useFormWithValidation();
  let { name, email } = values;
  name = currentUser.name;
  email = currentUser.email;

  const classBtn = isValid && (values.name !== currentUser.name || values.email !== currentUser.name) ? 'profile__btn' : 'profile__btn profile__btn_disabled';

  const handleSubmit = e => {
    if (isValid) {
      e.preventDefault();
      const { name, email, password } = values;
      handleUpdateUser(name, email, password)
    }
  }
  return(
    <section className="profile">
      <Navigation />
      <h1 className="profile__title">Привет, {currentUser.name}!</h1>
      <form className="profile__form" onSubmit={ handleSubmit }>
        <ul className="profile__list">
          <li className="profile__element"> 
            <p className="profile__name-element">Имя</p>
            <input 
              type="text" 
              required 
              minLength="2" 
              maxLength="30" 
              value={ values.name } 
              className="profile__value-element" 
              placeholder='Введите имя'
              onChange={ handleChange }>
            </input>
          </li>
          <li className="profile__element"> 
            <p className="profile__name-element">E-mail</p>
            <input 
              type="text" 
              required minLength="2" 
              maxLength="30" 
              value={ values.email } 
              className="profile__value-element"
              placeholder='Введите email'
              onChange={ handleChange }>
            </input>
          </li>
        </ul>
        <button className={classBtn}>Редактировать</button>
      </form>
      <button className="profile__btn profile__btn_red" onClick={logOut}>Выйти из аккаунта</button>
    </section>
  );
};

export default Profile;