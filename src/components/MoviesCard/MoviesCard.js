import './MoviesCard.css';
import photo1 from "./../../images/card-1.png";
import { Route } from 'react-router-dom';

const MoviesCard = ({card}) => {
  return (
    <li className="card">
      <div className="card__caption">
        <h3 className="card__title">33 слова о дизайне</h3>
        <p className="card__time">1ч 42м</p>
        <Route path="/movies">
          <button className="card__btn" />
        </Route>
        <Route path="/saved-movies">
          <button className="card__btn card__btn_delete" />
        </Route>
      </div>
      <img className="card__photo" src={photo1} alt="33 слова о дизайне" />
    </li>
  );
};

export default MoviesCard;