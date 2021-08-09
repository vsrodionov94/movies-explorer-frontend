import './MoviesCard.css';
import { Route } from 'react-router-dom';

const MoviesCard = ({card}) => {
  const { title, time, photo, isLiked } = card; 
  const likeClass = isLiked ? 'card__btn card__btn_active' : 'card__btn';
  return (
    <li className="card">
      <div className="card__caption">
        <div className="card__description">
          <h3 className="card__title">{title}</h3>
          <p className="card__time">{time}</p>
        </div>
        <Route path="/movies">
          <button className={likeClass} />
        </Route>
        <Route path="/saved-movies">
          <button className="card__btn card__btn_delete" />
        </Route>
      </div>
      <img className="card__photo" src={photo} alt={title} />
    </li>
  );
};

export default MoviesCard;