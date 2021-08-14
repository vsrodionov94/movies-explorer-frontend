import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import { Route } from 'react-router-dom';
import MoreMovies from './../MoreMovies/MoreMovies';

const MoviesCardList = ({ movies, onMovieLike, userMovies, onMoreMovies }) => {
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
              userMovies={userMovies}
              />
            );
          })}
        </Route>
        <Route path="/saved-movies">
          {movies.map(el => {
              return (
                <MoviesCard
                  key={el.movieId}
                  movie={el}
                  onMovieLike={onMovieLike}
                  userMovies={movies}
                />
              );
          })}
        </Route>
      </ul>
      <Route path="/movies">
        <MoreMovies onMoreMovies={onMoreMovies}/> 
      </Route>
    </section>  
  );
};

export default MoviesCardList;