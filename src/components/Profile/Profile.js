import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../utils/validator";
import Navigation from "../Navigation/Navigation";

import './Profile.css';

const Profile = ({ logOut, handleUpdateUser }) => {
  const currentUser = useContext(CurrentUserContext);

  const { values, handleChange, errors, isValid } = useFormWithValidation();
  console.log(values)
  const classBtn = isValid && values.name && values.email && values.name !== currentUser.name && values.email !== currentUser.email 
  ? 'profile__btn' : 'profile__btn profile__btn_disabled';

  const handleSubmit = e => {
    if (isValid) {
      e.preventDefault();
      handleUpdateUser(values);
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
              name="name"
              id="field-name"    
              value={ values.name } 
              className="profile__value-element" 
              placeholder='Введите имя'
              defaultValue={ currentUser.name }
              onChange={ handleChange }>
            </input>
          </li>
          <li className="profile__element"> 
            <p className="profile__name-element">E-mail</p>
            <input 
              type="email" 
              required minLength="2" 
              maxLength="30"
              name="email"
              id="field-email"    
              value={ values.email } 
              className="profile__value-element"
              placeholder='Введите email'
              defaultValue={ currentUser.email }
              onChange={ handleChange }>
            </input>
          </li>
        </ul>
        <button className={ classBtn }>Редактировать</button>
        <button className="profile__btn profile__btn_red" type="button" onClick={logOut}>Выйти из аккаунта</button>
      </form>
    </section>
  );
};

export default Profile;