import React, { FC, useEffect, useState } from 'react';
import './styles.scss';

import Container from 'react-bootstrap/Container';

const Timer: FC = () => {
  const deadline: string = 'December, 31, 2030';
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTime = (deadline: string) => {
    const time = Date.parse(deadline) - Date.now();
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 100);
    return () => clearInterval(interval);
  }, []);

  const hh = document.querySelector('#hh');
  const mm = document.querySelector('#mm');
  const ss = document.querySelector('#ss');

  hh?.setAttribute('stroke-dashoffset', (440 - (440 * hours) / 24).toString());
  mm?.setAttribute('stroke-dashoffset', (440 - (440 * minutes) / 60).toString());
  ss?.setAttribute('stroke-dashoffset', (440 - (440 * seconds) / 60).toString());

  const declOfNum = function (number: number, titles: string[]) {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ];
  };

  const hoursLabel = declOfNum(hours, ['час', 'часа', 'часов']);
  const minutesLabel = declOfNum(minutes, ['минута', 'минуты', 'минут']);

  return (
    <section className='timer'>
      <Container>
        <div className='title'>До конца акции осталось:</div>
        <div className='timer__wrapper'>
          <div className='timer__item'>
            <svg viewBox='0 0 160 160' width='160' height='160'>
              <defs>
                <radialGradient id='gradient-2' gradientTransform='rotate(90)'>
                  <stop offset='0%' stopColor='#ffffff'></stop>
                  <stop offset='46.35%' stopColor='#7C76FA'></stop>
                  <stop offset='100%' stopColor='#70D0FF'></stop>
                </radialGradient>
              </defs>
              <circle cx="80" cy="80" r="70"></circle>
              <circle className="circle" cx="80" cy="80" r="70" stroke="url(#gradient-2)" id="hh"></circle>
            </svg>
            <div className="timer__text">
              <div id='hours'>{hours}</div>
              <span id='label-hours'>{hoursLabel}</span>
            </div>
          </div>
          <div className='timer__item'>
            <svg viewBox='0 0 160 160' width='160' height='160'>
              <defs>
                <radialGradient id='gradient-3' gradientTransform='rotate(90)'>
                  <stop offset='0%' stopColor='#ffffff'></stop>
                  <stop offset='46.35%' stopColor='#7C76FA'></stop>
                  <stop offset='100%' stopColor='#70D0FF'></stop>
                </radialGradient>
              </defs>
              <circle cx="80" cy="80" r="70"></circle>
              <circle className="circle" cx="80" cy="80" r="70" stroke="url(#gradient-3)" id="mm"></circle>
            </svg>
            <div className="timer__text">
              <div id='minutes'>{minutes}</div>
              <span id='label-minutes'>{minutesLabel}</span>
            </div>
          </div>
          <div className='timer__item'>
            <svg viewBox='0 0 160 160' width='160' height='160'>
              <defs>
                <radialGradient id='gradient-4' gradientTransform='rotate(90)'>
                  <stop offset='0%' stopColor='#ffffff'></stop>
                  <stop offset='46.35%' stopColor='#7C76FA'></stop>
                  <stop offset='100%' stopColor='#70D0FF'></stop>
                </radialGradient>
              </defs>
              <circle cx="80" cy="80" r="70"></circle>
              <circle className="circle" cx="80" cy="80" r="70" stroke="url(#gradient-4)" id="ss"></circle>
            </svg>
            <div className="timer__text">
              <div id='seconds'>{seconds}</div>
              <span id='label-seconds'>секунд</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export { Timer };
