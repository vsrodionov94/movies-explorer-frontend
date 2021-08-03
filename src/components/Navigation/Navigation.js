import { Link } from 'react-router-dom';

import './Navigation.css';

export default function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__links">
      <Link className="navigation__logo" to="/"/>
        <li><Link to="/movies" className="navigation__link">Фильмы</Link></li>
        <li><Link to="/saved-movies" className="navigation__link">Сохранённые фильмы</Link></li>
      </ul>
      <Link to="/profile" className="navigation__btn">
        <p className="navigation__btn-text">Аккаунт</p>
        <div className="navigation__btn-icon"></div>
      </Link>
    </nav>
  );
};
