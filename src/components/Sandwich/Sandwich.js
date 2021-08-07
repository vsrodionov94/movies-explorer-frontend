import { Link, Route } from 'react-router-dom';
import './Sandwich.css';

const Sandwich = () => {
  return (
    <div class="sandwich">
      
      <input id="sandwich__toggle" type="checkbox" className="sandwich__toggle" />
      <label class="sandwich__btn" for="sandwich__toggle">
        <span></span>
      </label>
      <section className="sandwich__box">
        <ul className="sandwich__list">
          <Route path="/movies">
            <li><Link to="/" className="sandwich__link">Главная</Link></li>
            <li className=""><Link to="/movies" className="sandwich__link sandwich__link_active">Фильмы</Link></li>
            <li><Link to="/saved-movies" className="sandwich__link">Сохранённые фильмы</Link></li>
          </Route>
          <Route path="/saved-movies">
            <li><Link to="/" className="sandwich__link">Главная</Link></li>
            <li><Link to="/movies" className="sandwich__link">Фильмы</Link></li>
            <li><Link to="/saved-movies" className="sandwich__link sandwich__link_active">Сохранённые фильмы</Link></li>
          </Route>
          <Route path="/movies">
            <li><Link to="/" className="sandwich__link">Главная</Link></li>
            <li className=""><Link to="/movies" className="sandwich__link sandwich__link_active">Фильмы</Link></li>
            <li><Link to="/saved-movies" className="sandwich__link">Сохранённые фильмы</Link></li>
          </Route>
          <Route path="/profile">
            <li><Link to="/" className="sandwich__link">Главная</Link></li>
            <li><Link to="/movies" className="sandwich__link">Фильмы</Link></li>
            <li><Link to="/saved-movies" className="sandwich__link">Сохранённые фильмы</Link></li>
          </Route>
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
