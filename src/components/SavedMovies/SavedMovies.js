import Navigation from './../Navigation/Navigation';
import Footer from '../Footer/Footer';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import './SavedMovies.css';
import SearchForm from './../SearchForm/SearchForm';

const SavedMovies = ({ getMovies, movies, onMovieLike }) => {
  return (
    <section className = "saved-movies">
      <Navigation />
      <SearchForm handleSearch={getMovies}/>
      {movies.length > 0 ? 
      <MoviesCardList 
        movies={movies} 
        onMovieLike={onMovieLike}
        userMovies={movies}
      /> 
      : ''}
      <Footer />
    </section>
  );
};

export default SavedMovies;
