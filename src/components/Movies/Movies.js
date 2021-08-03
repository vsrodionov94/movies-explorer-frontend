import Navigation from './../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import './Movies.css';
import Preloader from './../Preloader/Preloader';

export default function Movies(){
  return (
    <div className = "movies">
      <Navigation />
      <SearchForm />
      <MoviesCardList />
      <Preloader />
      <Footer />
    </div>
  )
}
