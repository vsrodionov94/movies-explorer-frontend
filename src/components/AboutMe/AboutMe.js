import React from 'react';
import './AboutMe.css';
import student from  './../../images/student-photo.jpg'

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__info">
        <div className="about-me__text-block">
          <h3 className="about-me__name">Виталий</h3>
          <p className="about-me__proffession">Фронтенд-разработчик, 30 лет</p>
          <div className="about-me__info"></div>
          <p className="about-me__caption">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. 
            У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. 
            Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, 
            начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <ul className="about-me__links">
            <li><a href="#123" className="about-me__link">Facebook</a></li>
            <li><a href="#123" className="about-me__link">Github</a></li>
          </ul>
        </div>
        <img src={student} alt="Фото студента" className="about-me__photo" />
      </div>
    </section>
  )
}

export default AboutMe;