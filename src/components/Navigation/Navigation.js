import { Link, Route } from 'react-router-dom';

import './Navigation.css';
import Sandwich from './../Sandwich/Sandwich';

export default function Navigation() {
  return (
    <nav className="navigation">
      <Link className="navigation__logo" to="/"/>
      <Sandwich />
      <div className="navigation__menu">
        <ul className="navigation__links">
          <li><Link to="/movies" className="navigation__link">Фильмы</Link></li>
          <li><Link to="/saved-movies" className="navigation__link">Сохранённые фильмы</Link></li>
        </ul>
        <Link to="/profile" className="navigation__btn">
          <p className="navigation__btn-text">Аккаунт</p>
          <div className="navigation__btn-icon"></div>
        </Link>
      </div>
    </nav>
  );
};
