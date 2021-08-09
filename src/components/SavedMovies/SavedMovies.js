import Navigation from './../Navigation/Navigation';
import Footer from '../Footer/Footer';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import './SavedMovies.css';
import SearchForm from './../SearchForm/SearchForm';

const SavedMovies = () => {
  return (
    <section className = "saved-movies">
      <Navigation />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </section>
  );
};

export default SavedMovies;
