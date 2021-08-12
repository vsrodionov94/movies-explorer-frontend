import Navigation from './../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';

const Movies = ({ getMovies, movies, onMovieLike }) => {
  return (
    <section className = "movies">
      <Navigation />
      <SearchForm handleSearch={getMovies} />
      {movies.length > 0 ? 
      <MoviesCardList 
        movies={movies}
        onMovieLike={onMovieLike}
      /> 
      : ''}
      <Footer />
    </section>
  )
};

export default Movies;
