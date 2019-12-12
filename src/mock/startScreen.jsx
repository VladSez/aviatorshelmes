import React, { useState } from 'react';

const StartScreen = (e) => {
  const [screenStatus, closeStartScreen] = useState(
    'main_start__container visible',
  );
  return (
    <div className={screenStatus}>
      <div className="start_screen">
        <i className="logo_img" />
        <div className="all_info">
          <div className="start_screen__container">
            <p className="start_screen__text">
              Привет, меня зовут Говард Хьюз, я создатель летательных аппаратов,
              продюсер фильмов и любитель роскошных вечеринок.
            </p>
            <p className="start_screen__text">
              Приглашаю тебя на грандиозное событие
              <br />
              со звучным


названием «Авиатор»,
              <br />

которое пройдет

              <b> в Минске 10 января 2020 года</b>
              <br />

в ресторане

              <b> Wood&Fire </b>
              (ул. Франциска Скорины, 1).
              <br />

              <b>Начало вечеринки: 19.00</b>
            </p>

            <p className="start_screen__text">
              Вдохновляющие достижения кинематографа и изысканные наряды 30-х
              годов XX века – это атмосфера нашего праздника. Уже
              проникся(лась)? Тогда проходи тест, выбирай подходящие варианты и
              будь готов(а) к приключению.
            </p>
          </div>
          <div className="start_screen_buttons">
            <button
              className="start_screen__button"
              onClick={() => {
                e.getSex('male');
                e.changeHidden('');
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
                e.changeHidden('');
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
