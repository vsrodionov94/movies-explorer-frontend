import './FilterCheckbox.css';

const FilterCheckbox = () => {
  return (
    <div className="filter">
      <p className="filter__name">Короткометражки</p>
      <input type="checkbox" className="filter__checkbox" id="box"/>
      <label for="box" className="filter__label" ></label>
    </div>
    );
  };

export default FilterCheckbox;
