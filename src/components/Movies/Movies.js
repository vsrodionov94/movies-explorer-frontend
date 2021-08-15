import Navigation from './../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from './../Preloader/Preloader';
import './Movies.css';

const Movies = ({
  setSearch,
  movies,
  onMovieLike,
  userMovies,
  loading,
  searchError,
  onMoreMovies,
  search,
  foundMovies,
}) => {
  const text = searchError ? 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз' : 'Ничего не найдено';
  return (
    <section className = "movies">
      <Navigation />
      <SearchForm handleSearch={setSearch} />
      {loading ? <Preloader /> : 
        movies.length > 0 ? 
        <MoviesCardList 
          movies={movies}
          onMovieLike={onMovieLike}
          userMovies={userMovies}
          onMoreMovies={onMoreMovies}
          foundMovies={foundMovies}
        /> 
      : search ? <p className="movies__result">{text}</p> : ''}
      <Footer />
    </section>
  )
};

export default Movies;
