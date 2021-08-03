import Navigation from './../Navigation/Navigation';
import Footer from '../Footer/Footer';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import './SavedMovies.css';

export default function SavedMovies() {
  return (
    <div className = "saved-movies">
      <Navigation />
      <MoviesCardList />
      <Footer />
    </div>
  )
}
