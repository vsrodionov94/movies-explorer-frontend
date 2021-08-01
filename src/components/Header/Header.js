import React from 'react';
import logo from "./../../images/logo.svg";
import './Header.css';

export default function Header() {
  return(
    <header className="header header__main">
      <img className="header__logo" src={logo} alt="Логотип"/>
      <div className="header__links">
        <a href="/sign-in" className="header__sign-up"> Регистрация </a>
        <a href="/sign-in" className="header__sign-in"> Войти </a>
      </div>
    </header>
  );
}