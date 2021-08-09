import promoLogo from "./../../images/promo-logo.svg";
import React from 'react';
import './Promo.css';

export default function Promo() {
  return (
    <section className="promo">
      <div className="promo__main">
        <div>
          <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
          <h3 className="promo__sub-title">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</h3>
        </div>
        <img className="promo__image" src={promoLogo} alt="Логотип веб факультета" />
      </div>
      <button className="promo__btn">Узнать больше</button>
    </section>
  )
}
