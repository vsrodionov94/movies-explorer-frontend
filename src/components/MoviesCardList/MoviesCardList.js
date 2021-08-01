import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

export default function MoviesCardList () {
  return (
    <section className="cards">
      <ul className="cards__list">
        <MoviesCard />
      </ul>
    </section>  
  );
};