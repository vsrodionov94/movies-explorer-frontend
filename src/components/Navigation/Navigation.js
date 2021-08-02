import logo from "./../../images/logo.svg";

import './Navigation.css';

export default function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__links">
      <img className="navigation__logo" src={logo} alt="Логотип"/>
        <li><a href="/movies" className="navigation__link">Фильмы</a></li>
        <li><a href="/savedMovies" className="navigation__link">Сохранённые фильмы</a></li>
      </ul>
      <div className="navigation__btn">
        <p className="navigation__btn-text">Аккаунт</p>
        <div className="navigation__btn-icon"></div>
      </div>
    </nav>
  );
};
