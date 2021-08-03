import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

export default function Header() {
  return(
    <header className="header header__main">
      <Link className="header__logo" to="/"/>
      <div className="header__links">
      <Link to="/signin" className="header__link"> Войти</Link>
      <Link to="/signup" className="header__sign-up"> Регистрация </Link>
      </div>
    </header>
  );
}