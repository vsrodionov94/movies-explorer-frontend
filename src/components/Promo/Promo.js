import logo from "./../../images/logo.svg";
import promoLogo from "./../../images/promo-logo.svg";
import React from 'react';
import './Promo.css';

function Promo() {
  return (
    <div className="promo">
      <header className="promo__header">
        <img className="promo__logo" src={logo} alt="Логотип"/>
        <div className="promo__links">
          <a href="/sign-in" className="promo__sign-up"> Регистрация </a>
          <a href="/sign-in" className="promo__sign-in"> Войти </a>
        </div>
      </header>
      <div className="promo__main">
        <div>
          <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
          <h3 className="promo__sub-title">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</h3>
        </div>
        <img className="promo__image" src={promoLogo} alt="Логотип веб факультета" />
      </div>
      <button className="promo__btn">Узнать больше</button>
    </div>
  )
}

export default Promo;