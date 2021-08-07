import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <section className="search">
      <form className="search__form">
        <div className="search__box">
          <input className="search__input" placeholder="Фильм" required="true" />
          <button className="search__btn">Найти</button>
        </div>
        <FilterCheckbox />
      </form>
    </section>
  );
};

export default SearchForm;