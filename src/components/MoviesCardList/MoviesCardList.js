import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import { Route } from 'react-router-dom';
import MoreMovies from './../MoreMovies/MoreMovies';

const MoviesCardList = ({ movies, onMovieLike }) => {
  return (
    <section className="cards">
      <ul className="cards__list">
        <Route path="/movies">
          {movies.map(el => {
            return (
              <MoviesCard 
              key={el.movieId}
              movie={el}
              onMovieLike={onMovieLike}
              />
            );
          })}
        </Route>
        <Route path="/saved-movies">
          {movies.map(el => {
              return (
                <MoviesCard
                  key={el._id}
                  movie={el}
                  onMovieLike={onMovieLike}
                />
              );
          })}
        </Route>
      </ul>
      <MoreMovies />
    </section>  
  );
};

export default MoviesCardList;