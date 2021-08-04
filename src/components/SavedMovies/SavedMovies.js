import Navigation from './../Navigation/Navigation';
import Footer from '../Footer/Footer';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import './SavedMovies.css';

const SavedMovies = () => {
  return (
    <section className = "saved-movies">
      <Navigation />
      <MoviesCardList />
      <Footer />
    </section>
  );
};

export default SavedMovies;
