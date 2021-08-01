import Header from "../Header/Header";
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import './Movies.css';

export default function Movies(){
  return (
    <div className = "movies">
      <Header />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </div>
  )
}
