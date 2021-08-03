import Navigation from './../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import './Movies.css';

export default function Movies(){
  return (
    <div className = "movies">
      <Navigation />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </div>
  )
}
