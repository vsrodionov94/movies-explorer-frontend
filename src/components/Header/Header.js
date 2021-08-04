import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  return(
    <header className="header header__main">
      <Link className="header__logo" to="/"/>
      <div className="header__links">
        <Link to="/signup" className="header__sign-up"> Регистрация </Link>
        <Link to="/signin" className="header__sign-in"> Войти</Link>
      </div>
    </header>
  );
};

export default Header;
