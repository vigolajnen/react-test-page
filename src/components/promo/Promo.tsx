import React, { FC } from 'react';
import './styles.scss';
import Container from 'react-bootstrap/Container';
import { formatPrice } from '../../utils/dataTariff';

import { Link, useLocation } from 'react-router-dom';

interface IPromo {
  onClick: () => void;
  minTariff: any;
}

const Promo: FC<IPromo> = ({ onClick, minTariff }) => {
  const location = useLocation();
  return (
    <section className='promo'>
      <Container>
        <div className='promo__info'>
          <h1 className='promo__title'>Безлимитный абонемент</h1>
          <div className='promo__text'>
            в фитнес-клуб
            <div>с бассейном</div>
          </div>
          <p className='promo__price'>
            {' '}
            всего за {formatPrice(minTariff.price)}
            <span> ₽/мес.</span>
          </p>
          <Link
            onClick={onClick}
            to={`/${minTariff.id}`}
            state={{ item: minTariff, bgTariff: location }}
            className='link-btn text-center'
          >
            Купить
          </Link>
        </div>
        <div className='promo__pic'>
          <div className='promo__pic--pic-1'></div>
          <div className='promo__pic--pic-2'></div>
          <div className='promo__pic--pic-w'></div>
        </div>
      </Container>
    </section>
  );
};

export { Promo };
