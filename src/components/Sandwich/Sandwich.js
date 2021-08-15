import { Link, NavLink } from 'react-router-dom';
import './Sandwich.css';

const Sandwich = () => {
  return (
    <div className="sandwich">
      <input id="sandwich__toggle" type="checkbox" className="sandwich__toggle" />
      <label className="sandwich__btn" for="sandwich__toggle">
        <span></span>
      </label>
      <section className="sandwich__box">
        <ul className="sandwich__list">
            <li><NavLink exact to="/" activeClassName="sandwich__link_active" className="sandwich__link">Главная</NavLink></li>
            <li><NavLink exact to="/movies" activeClassName="sandwich__link_active" className="sandwich__link">Фильмы</NavLink></li>
            <li><NavLink exact to="/saved-movies" activeClassName="sandwich__link_active" className="sandwich__link">Сохранённые фильмы</NavLink></li>
        </ul>
        <Link to="/profile" className="navigation__btn">
          <p className="navigation__btn-text">Аккаунт</p>
          <div className="navigation__btn-icon"></div>
        </Link>
      </section>
    </div>
  );
};

export default Sandwich;
