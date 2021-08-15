import { useRef } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

const SearchForm = ({ handleSearch }) => {
  const inputRef = useRef();
  const checkBoxRef = useRef();
  const handleSubmit = e => {
    e.preventDefault();
    handleSearch({
      name: inputRef.current.value,
      isShort: checkBoxRef.current.checked,
    })
  }
  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <div className="search__box">
          <input className="search__input" ref={inputRef} placeholder="Фильм" required={true} />
          <button className="search__btn">Найти</button>
        </div>
        <FilterCheckbox checkBoxRef={checkBoxRef} />
      </form>
    </section>
  );
};

export default SearchForm;