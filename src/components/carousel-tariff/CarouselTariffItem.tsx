import React, { FC } from 'react';
import './styles.scss';
import { IClub, ITariff } from '../../types';
import { formatPrice } from '../../utils/dataTariff';

interface IItem {
  item?: ITariff;
  children?: any;
}

const CarouselTariffItem: FC<IItem> = ({ item, children }) => {
  return !!item ? (
    <div className='product' data-price={item?.price}>
      <div className='product__wrapper'>
        <h3>{item?.title}</h3>
        <div className='product__price'>
          {formatPrice(item?.price)} <span> ₽/месяц</span>
        </div>
        <div className='product__text'>
          {item?.countClubs === 4 ? (
            <p>Тариф дает возможность посещать 4 клуба</p>
          ) : (
            <p>Тариф дает возможность посещать 1 из клубов</p>
          )}

          <ul>
            {!!item.clubs &&
              item?.clubs.map((el: IClub, index) => (
                <li key={index}>{el.address}</li>
              ))}
          </ul>

          {!!item?.subscription ? (
            <div>*при условии оплаты Членского взноса 5 000руб.</div>
          ) : null}
        </div>

        <ul className='product__list'>
          <li>Тренажерный зал</li>
          <li>Бассейн</li>
          <li>Групповые программы</li>
          <li>Спа-комплекс</li>
          <li>Индивидуальные шкафчики</li>
          <li>Питьевая вода</li>
        </ul>

        {children}
        {/* <Button btnType='button' onClick={onClickModal}>Купить</Button> */}
      </div>
    </div>
  ) : null;
};

export { CarouselTariffItem };
