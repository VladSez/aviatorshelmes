/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';

import questions from './mock/questions';
import StartScreen from './mock/startScreen';
import answers from './mock/answers';

import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [answerValue, setAnswerValue] = useState(0);
  const [sex, getSex] = useState(null);
  const [hidden, changeHidden] = useState('hidden');
  // const [finalText, changeFinalText] = useState('');
  const nextQuestion = (e) => {
    const newCount = count + 1;
    const newAnswerValue = answerValue + +e;
    setCount(newCount);
    setAnswerValue(newAnswerValue);
  };
  const backgroundImagePath = require(`./img/${
    count + 1 < 11 ? count + 1 : 1
  }.png`);
  // `${'backgroundImage:url(./img/'}${count}.png);`;
  if (count < 10) {
    return (
      <div className="question_container">
        <StartScreen getSex={getSex} changeHidden={changeHidden} />
        <div className={`logo_arts ${hidden}`}>
          <i className="main_logo" />
          <div className="all_info">
            <i
              className="main_photo"
              style={{ backgroundImage: `url(${backgroundImagePath})` }}
            />
          </div>
        </div>
        <div className={`questions_answers ${hidden}`}>
          <div className="questions">{questions(count, sex)}</div>
          <div className="answers_container">
            <div className="answer_item">
              <p className="hexagon"><p className="answer_letter"> A</p></p>
              <input
                type="submit"
                className="answer_button"
                count={answers[count].group[0].value}
                onClick={nextQuestion.bind(null, answers[count].group[0].value)}
                value={
                  sex === 'male'
                    ? answers[count].group[0].text[0]
                    : answers[count].group[0].text[1]
                }
              />
            </div>
            <div className="answer_item">
              <p className="hexagon"><p className="answer_letter">B</p></p>

              <input
                type="submit"
                className="answer_button"
                onClick={nextQuestion.bind(null, answers[count].group[1].value)}
                count={answers[count].group[1].value}
                value={
                  sex === 'male'
                    ? answers[count].group[1].text[0]
                    : answers[count].group[1].text[1]
                }
              />
            </div>
            <div className="answer_item">
              <p className="hexagon"><p className="answer_letter">C</p></p>

              <input
                type="submit"
                className="answer_button"
                count={answers[count].group[2].value}
                onClick={nextQuestion.bind(null, answers[count].group[2].value)}
                value={
                  sex === 'male'
                    ? answers[count].group[2].text[0]
                    : answers[count].group[2].text[1]
                }
              />
            </div>
            <div className="answer_item">
              <p className="hexagon"><p className="answer_letter">D</p></p>

              <input
                type="submit"
                className="answer_button"
                onClick={nextQuestion.bind(null, answers[count].group[3].value)}
                count={answers[count].group[3].value}
                value={
                  sex === 'male'
                    ? answers[count].group[3].text[0]
                    : answers[count].group[3].text[1]
                }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  let finalWords;
  let recommendations;
  if (answerValue <= 5) {
    recommendations = sex === 'male'
      ? 'Мода 30-х была достаточно консервативной, так что никуда не деться от стандартного костюма с широкими плечами и приталенным пиджаком, брюк с отворотами. Головной убор — обязательный атрибут повседневной одежды в стиле 30-х, это была фетровая шляпа или кепка. Волосы укладывай назад, и до встречи на самой незабываемой вечеринке года!'
      : 'Итак, начнем с волос – обязательно уложи их волнами словно ты голливудская звезда (да-да, так хотели выглядеть все девушки того времени). Далее – сделай естественный макияж и накрась ногти в красный или черный цвет. Надевай платье с косым кроем подола, шляпку и длинные перчатки. И не забудь обуть туфли на невысоком каблуке.';
    finalWords = sex === 'male'
      ? 'Что ж, возможно эта эпоха не для тебя. Но поверь, после нашей вечеринки все изменится. Я уверен, если ты будешь следовать моим рекомендациям, ты будешь неотразим, и этот вечер запомнится тебе надолго! Придя домой, ты с упоением начнешь смотреть фильмы про авиацию. Главное начать!'
      : 'Что ж, возможно эта эпоха не для тебя. Но поверь, после нашей вечеринки все изменится. Я уверен, если ты будешь следовать моим рекомендациям, ты будешь неотразима, и этот вечер запомнится тебе надолго! Придя домой, ты с упоением начнешь смотреть фильмы про авиацию. Главное начать!';
  } else if (answerValue > 5 && answerValue <= 20) {
    recommendations = sex === 'male'
      ? 'Давно думал, куда бы надеть висящий в шкафу темный пиджак с широкими плечами? Как раз настало время для него! Дополняй образ шляпой джентльмена и подтяжками. А что на счет прически? Зачесывай волосы назад, особенно если от природы они волнистые. Так уж ты точно покоришь всех!'
      : 'Ни для кого не секрет, что мода циклична. Так что этим вечером ты точно будешь чувствовать себя в своей тарелке! Надевай платье длины «миди», желательно, чтобы оно подчеркивало талию, не сковывало движение, а может и вовсе свободного кроя. Дополняй образ невысоким каблуком и естественным макияжем.';
    finalWords = sex === 'male'
      ? 'Ты любишь эпоху 30-х, и кое-что о ней слышал, но нет предела совершенству. Приглашаю тебя на нашу вечеринку! После нее ты наверняка будешь знать все об изысканных нарядах, старом кино и развлечениях!'
      : 'Ты любишь эпоху 30-х, и кое-что о ней слышалa, но нет предела совершенству. Приглашаю тебя на нашу вечеринку! После нее ты наверняка будешь знать все об изысканных нарядах, старом кино и развлечениях!';
  } else if (answerValue > 20 && answerValue <= 30) {
    recommendations = sex === 'male'
      ? 'В это время популярны увлечения авиацией, автомобилями и спортом, именно поэтому в моде подтянутое спортивное телосложение, так что абсолютно не важно, ты достанешь фрак или же джинсы с черной водолазкой – все зависит от твоей подачи. На нашей вечеринке никто не останется без внимания!'
      : 'Доставай длинные перчатки, шляпку, укладывай волосы в голливудскую волну. Надевай туфли на невысоком устойчивом каблуке и в путь танцевать до утра!';
    finalWords = sex === 'male'
      ? 'Ты много помнишь о моем времени, но есть и над чем поработать. Приходи на вечеринку, которая состоится уже совсем скоро, и ты узнаешь гораздо больше! Вечер предстоит грандиозный!'
      : 'Ты много помнишь о моем времени, но есть и над чем поработать. Приходи на вечеринку, которая состоится уже совсем скоро, и ты узнаешь гораздо больше! Вечер предстоит грандиозный!';
  } else if (answerValue > 30) {
    recommendations = sex === 'male'
      ? 'Настало время растить усы и отращивать волосы, чтобы сделать зачес назад. Кстати, в моде фраки, брюки с отворотами и пиджаки с широкими плечами. Кроме этого, не стоит забывать о шляпах, которые носили и снимали перед женщинами все уважающие себя джентльмены.'
      : 'Но все-таки, чтобы напомнить детали: В 1930-е моду диктовал Голливуд, пересмотри пару фильмов, там то ты найдешь самые стильные образы моего времени. И помни, шляпке на бок и перчаткам всегда найдется место!';
    finalWords = sex === 'male'
      ? 'Ты словно жил в то время! Ты знаешь все об элегантных нарядах, громких вечеринках и полетах. На нашей вечеринке ты будешь чувствовать себя более чем уверенно и сможешь помочь новичкам.'
      : 'Ты словно жила в то время! Ты знаешь все об элегантных нарядах, громких вечеринках и полетах. На нашей вечеринке ты будешь чувствовать себя более чем уверенно и сможешь помочь новичкам.';
  }
  return (
    <div className="final_container">
      <div className="start_screen">
        <i className="logo_img" />
        <div className="all_info ">
          <div className="start_screen__container final_info">
            <p className="start_screen__text final">{finalWords}</p>
            <p className="start_screen__text final_second recommendations">
              {recommendations}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
