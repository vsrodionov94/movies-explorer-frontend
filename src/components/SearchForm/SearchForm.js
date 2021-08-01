import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

export default function SearchForm() {
  return (
    <div className="search">
      <form className="search__form">
        <div className="search__box">
          <input className="search__input" placeholder="Фильм"/>
          <button className="search__btn">Найти</button>
        </div>
        <FilterCheckbox />
      </form>
    </div>
  );
}