import React, { useState } from 'react';

const startText = 'Привет, меня зовут Говард Хьюз, я создатель летательных аппаратов, пионер авиации, любитель ярких вечеринок, а также продюсер фильмов. Мое имя стало известным в 30-х годах прошлого века.Хочу пригласить тебя на мою вечеринку с громким названием «Авиатор». Она состоится 10 января в ресторане Wood&Fire.Старое кино, авиационные достижения, изысканные наряды – все это невероятная атмосфера моего времени. Уже прониклись? Тогда проходите тест, выбирай самые подходящие варианты и приготовься удивляться! Для начала, давайте идентифицируем вас!';

const StartScreen = (e) => {
  const [screenStatus, closeStartScreen] = useState('main_start__container visible');
  return (
    <div className={screenStatus}>
      <div className="start_screen">
        <i className="logo_img" />
        <div className="all_info">
          <div className="start_screen__container">
            <p className="start_screen__text">{startText}</p>
          </div>
          <div className="start_screen_buttons">
            <button
              className="start_screen__button"
              onClick={() => {
                e.getSex('male');
                closeStartScreen('main_start__container hidden');
              }}
            >
              Джентельмен
            </button>
            <button
              className="start_screen__button"
              onClick={() => {
                e.getSex('female');
                closeStartScreen('start_screen hidden');
              }}
            >
              Леди
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StartScreen;
