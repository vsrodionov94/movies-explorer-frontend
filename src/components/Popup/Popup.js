import './Popup.css';

const Popup = ({ isOpen, message, onClose }) => {
  const classSelector = `popup ${
    isOpen ? "popup_opened" : ""
  }`;
  return (
    <section className={ classSelector }>
      <div className="popup__block">
        <h3 className="popup__title"> { message } </h3>                 
        <button
          className="popup__esc-button"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        />
      </div>
    </section>
  );
}

export default Popup;
