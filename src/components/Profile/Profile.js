import Navigation from './../Navigation/Navigation';
import './Profile.css';

const Profile = () => {
  return(
    <section className="profile">
      <Navigation />
      <h1 className="profile__title">Привет, Виталий!</h1>
      <ul className="profile__list">
        <li className="profile__element"> 
          <p className="profile__name-element">Имя</p>
          <p className="profile__value-element">Виталий</p>
        </li>
        <li className="profile__element"> 
          <p className="profile__name-element">E-mail</p>
          <p className="profile__value-element">pochta@yandex.ru</p>
        </li>
      </ul>
      <button className="profile__btn">Редактировать</button>
      <button className="profile__btn profile__btn_red">Выйти из аккаунта</button>
    </section>
  );
};

export default Profile;