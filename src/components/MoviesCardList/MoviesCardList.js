import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const MoviesCardList = () => {
  return (
    <section className="cards">
      <ul className="cards__list">
        <MoviesCard />
      </ul>
    </section>  
  );
};

export default MoviesCardList;