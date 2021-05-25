import logo from "./../../images/logo.svg";
import React from 'react';
import { Link, Route } from "react-router-dom";

function Promo() {
  return (
    <div className="promo">
      <header className="promo__header">
        <img className="promo__logo" />
        <a href="/sign-in" className="promo__link"> Зарегистрироваться </a>
        <a href="/sign-in" className="promo__link"> Войти </a>
      </header>
      
    </div>
  )
}

export default Promo;