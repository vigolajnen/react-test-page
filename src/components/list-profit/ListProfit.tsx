import React, { FC } from 'react';
import './styles.scss';

interface IListProfitItem {
  title: string;
  text: string;
  icon: any;
}
interface IListProfit {
  dataProfit: Array<IListProfitItem>;
}

const ListProfit: FC<IListProfit> = ({dataProfit}) => {
  return <ul className='list-profit'>
    {dataProfit.map((item) => <li key={item.title} className='list-profit__item'>
      {item.icon}
      <div className="list-profit__inner">
        <div className="list-profit__title">{item.title}</div>
        <div className="list-profit__text">{item.text}</div>
      </div>
    </li>)}
  </ul>;
};

export { ListProfit };
