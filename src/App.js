/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';

import questions from './mock/questions';
import StartScreen from './mock/startScreen';
import answers from './mock/answers';

import './App.css';


function App() {
  const [count, setCount] = useState(0);
  const [answerValue, setAnswerValue] = useState(0);
  const [sex, getSex] = useState(null);
  // const [finalText, changeFinalText] = useState('');
  const nextQuestion = (e) => {
    const newCount = count + 1;
    const newAnswerValue = answerValue + +e;
    console.log(newAnswerValue);
    setCount(newCount);
    setAnswerValue(newAnswerValue);
  };
  if (count < 10) {
    return (
      <div className="question_container">
        <StartScreen getSex={getSex} />
        <div className="logo_arts">
          <i className="main_logo" />
        </div>
        <div className="questions_answers">
          <div className="questions">
            {questions(count, sex)}
          </div>
          <div className="answers_container">
            <div className="answer_item">
              <p className="hexagon" />
              <input
                type="submit"
                className="answer_button"
                count={answers[count].group[0].value}
                onClick={nextQuestion.bind(null, answers[count].group[0].value)}
                value={
              (sex === 'male') ? answers[count].group[0].text[0] : answers[count].group[0].text[1]
              }
              />
            </div>
            <div className="answer_item">
              <p className="hexagon" />
              <input
                type="submit"
                className="answer_button"
                onClick={nextQuestion.bind(null, answers[count].group[1].value)}

                count={answers[count].group[1].value}
                value={
              (sex === 'male') ? answers[count].group[1].text[0] : answers[count].group[1].text[1]
              }
              />
            </div>
            <div className="answer_item">
              <p className="hexagon" />
              <input
                type="submit"
                className="answer_button"
                count={answers[count].group[2].value}
                onClick={nextQuestion.bind(null, answers[count].group[2].value)}

                value={
              (sex === 'male') ? answers[count].group[2].text[0] : answers[count].group[2].text[1]
              }
              />
            </div>
            <div className="answer_item">
              <p className="hexagon" />
              <input
                type="submit"
                className="answer_button"
                onClick={nextQuestion.bind(null, answers[count].group[3].value)}

                count={answers[count].group[3].value}
                value={
              (sex === 'male') ? answers[count].group[3].text[0] : answers[count].group[3].text[1]
              }
              />
            </div>
          </div>

        </div>
      </div>
    );
  }
  if (answerValue <= 5) {
    return (
      <div className="final_container">
        <div className="start_screen">
          <i className="logo_img" />
          <div className="all_info ">
            <div className="start_screen__container final_info">
              <p className="start_screen__text">Что ж, возможно эта эпоха не для тебя. Но поверь, после нашей вечеринки все изменится. Я уверен, если ты будешь следовать моим рекомендациям, ты будешь неотразим(а), и этот вечер запомнится тебе надолго! Придя домой, ты с упоением начнешь смотреть фильмы про авиацию. Главное начать!</p>
            </div>

          </div>
        </div>
      </div>
    );
  }
  console.log(answerValue);
  if (answerValue > 5 && answerValue <= 20) {
    return (
      <div className="final_container">
        <div className="start_screen">
          <i className="logo_img" />
          <div className="all_info ">
            <div className="start_screen__container final_info">
              <p className="start_screen__text">Ты любишь эпоху 30-х, и кое-что о ней слышал(а), но нет предела совершенству. Приглашаю тебя на мою вечеринку после нее ты наверняка будешь знать все об изысканных нарядах, старом кино и развлечениях!</p>
            </div>

          </div>
        </div>
      </div>
    );
  } if (answerValue > 20 && answerValue <= 30) {
    return (
      <div className="final_container">
        <div className="start_screen">
          <i className="logo_img" />
          <div className="all_info ">
            <div className="start_screen__container final_info">
              <p className="start_screen__text">Ты много помнишь о моем времени, но есть и над чем поработать. Приходи на вечеринку, которая состоится уже совсем скоро, и ты узнаешь гораздо больше! Вечер предстоит грандиозный!</p>
            </div>

          </div>
        </div>
      </div>
    );
  } if (answerValue > 30) {
    return (
      <div className="final_container">
        <div className="start_screen">
          <i className="logo_img" />
          <div className="all_info ">
            <div className="start_screen__container final_info">
              <p className="start_screen__text">Ты словно жил(а) в то время! Ты знаешь все об элегантных нарядах, громких вечеринках и полетах. На нашей вечеринке ты будешь чувствовать себя более чем уверенно и сможешь помочь новичкам.</p>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
