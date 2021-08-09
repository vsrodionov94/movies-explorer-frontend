import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer__title"> Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__copyright">
        <p className="footer__text">© 2020</p>
        <ul className="footer__links">
          <li className="footer__link">Яндекс.Практикум</li>
          <li className="footer__link">Github</li>
          <li className="footer__link">Facebook</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;