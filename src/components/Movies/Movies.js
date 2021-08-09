import Navigation from './../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreMovies from './../MoreMovies/MoreMovies';
import './Movies.css';

const Movies = () => {
  return (
    <section className = "movies">
      <Navigation />
      <SearchForm />
      <MoviesCardList />
      <MoreMovies />
      <Footer />
    </section>
  )
};

export default Movies;
