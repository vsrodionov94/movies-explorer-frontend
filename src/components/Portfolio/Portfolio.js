import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__element"><a href="321" className="portfolio__link"><p>Статичный сайт</p> <p>↗</p></a></li>
        <li className="portfolio__element"><a href="321" className="portfolio__link"><p>Адаптивный сайт</p> <p>↗</p></a></li>
        <li className="portfolio__element"><a href="321" className="portfolio__link"><p>Одностраничное приложение</p> <p>↗</p></a></li>
      </ul>
    </div>
  )
}

export default Portfolio;