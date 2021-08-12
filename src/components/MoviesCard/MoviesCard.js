import './MoviesCard.css';
import { Route } from 'react-router-dom';

const MoviesCard = ({movie, onMovieLike}) => {
  const { nameRU, duration, image, isLiked, trailerLink } = movie;
  const time = `${Math.trunc(duration / 60)} ч ${duration % 60} мин`
  const likeClass = isLiked ? 'card__btn card__btn_active' : 'card__btn';
  
  return (
    <li className="card">
      <div className="card__caption">
        <div className="card__description">
          <h3 className="card__title">{nameRU}</h3>
          <p className="card__time">{time}</p>
        </div>
        <Route path="/movies">
          <button className={likeClass} onClick={() => {
            onMovieLike(movie);
          }} />
        </Route>
        <Route path="/saved-movies">
          <button className="card__btn card__btn_delete" onClick={() => {
            onMovieLike(movie);
          }}/>
        </Route>
      </div>
      <a target="_blank" rel="noreferrer" href={trailerLink}>
        <img className="card__photo" src={image} alt={nameRU} />
      </a>
    </li>
  );
};

export default MoviesCard;