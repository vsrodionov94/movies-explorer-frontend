import './MoviesCard.css';
import photo1 from "./../../images/card-1.png";

export default function MoviesCard() {
  return (
    <li className="card">
      <div className="card__caption">
        <h3 className="card__title">33 слова о дизайне</h3>
        <p className="card__time">1ч 42м</p>
        <button className="card__like"> Like </button>
      </div>
      <img className="card__photo" src={photo1} alt="33 слова о дизайне" />
    </li>
  );
} 