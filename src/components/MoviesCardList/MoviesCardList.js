import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import cards from './cards';
import { Route } from 'react-router-dom';

const MoviesCardList = () => {
  return (
    <section className="cards">
      <ul className="cards__list">
        <Route path="/movies">
          {cards.map(el => {
            return (
              <MoviesCard card={el}/>
            );
          })}
        </Route>
        <Route path="/saved-movies">
          {cards.filter(el => el.isLiked).map(el => {
              return (
                <MoviesCard card={el}/>
              );
          })}
        </Route>
      </ul>
    </section>  
  );
};

export default MoviesCardList;