import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Navigation from "../Navigation/Navigation";

import './Profile.css';

const Profile = ({ logOut }) => {
  const currentUser = useContext(CurrentUserContext);
  console.log(currentUser)
  return(
    <section className="profile">
      <Navigation />
      <h1 className="profile__title">Привет, {currentUser.name}!</h1>
      <ul className="profile__list">
        <li className="profile__element"> 
          <p className="profile__name-element">Имя</p>
          <p className="profile__value-element">{currentUser.name}</p>
        </li>
        <li className="profile__element"> 
          <p className="profile__name-element">E-mail</p>
          <p className="profile__value-element">{currentUser.email}</p>
        </li>
      </ul>
      <button className="profile__btn">Редактировать</button>
      <button className="profile__btn profile__btn_red" onClick={logOut}>Выйти из аккаунта</button>
    </section>
  );
};

export default Profile;