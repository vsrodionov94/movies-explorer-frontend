import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about">
      <h2 className="about__title">О проекте</h2>
      <div className="about__blocks">
        <div className="about__text-block">
          <h3 className="about__sub-title">Дипломный проект включал 5 этапов</h3>
          <h3 className="about__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</h3>
        </div>
        <div className="about__text-block">
          <h3 className="about__sub-title">На выполнение диплома ушло 5 недель</h3>
          <h3 className="about__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</h3>
        </div>
      </div>
      <div className="about__progress">
        <div className="about__progress-backend">
          <p className="about__progress-backend-bar"> 1 неделя </p>
          <p className="about__progress-caption"> Back-end </p>
        </div>
        <div className="about__progress-frontend">
          <p className="about__progress-frontend-bar"> 4 недели </p>
          <p className="about__progress-caption"> Front-end </p>
        </div>
      </div>

    </section>
  )
}

export default AboutProject;