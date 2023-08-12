import React, { FC } from 'react';
import './styles.scss';

const navData = [
  {
    path: '#profit',
    title: 'Ваша выгода'
  },
  {
    path: '#gallery',
    title: 'Галерея'
  },
  {
    path: '#tariff',
    title: 'Тарифы'
  },
  {
    path: '#faq_view',
    title: 'Отвечаем на Вопросы'
  },
];

interface INav {
  close: () => void;
}

const Nav: FC<INav> = ({ close }) => {
  const handelClick = (e: any) => {
    close();
    e.target.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {navData.map((item) => 
          <li key={item.path} className="navigation__item">
            <a href={item.path} onClick={handelClick} className="navigation__link">
              {item.title}
            </a>
          </li>
        )}
      </ul>
    </nav>
  )
}

export { Nav };
