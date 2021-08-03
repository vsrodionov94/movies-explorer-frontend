import './FilterCheckbox.css';

export default function FilterCheckbox() {
  return (
    <div className="filter">
      <p className="filter__name">Короткометражки</p>
      <input type="checkbox" className="filter__checkbox" id="box"/>
      <label for="box" className="filter__label" ></label>
    </div>
    );
  }