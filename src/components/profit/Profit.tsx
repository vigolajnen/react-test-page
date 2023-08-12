import React, { FC } from 'react';
import './styles.scss';

import { ListProfit } from '../list-profit/ListProfit';
import Container from 'react-bootstrap/Container';

import titlePic from '../../images/profit/title3.png';
import titlePicT from '../../images/profit/title2.webp';
import titlePicD from '../../images/profit/title.webp';

import SvgGym from '../icons/Gym';
import SvgBestPrice from '../icons/BestPrice';
import SvgClock from '../icons/Clock';
import { CarouselTariff } from '../carousel-tariff/CarouselTariff';
import { tariffData } from '../../utils/dataTariff';

const data = [
  {
    icon: <SvgGym />,
    title: 'все включено, без ограничений',
    text: 'Бассейн, спа, тренажеры, кардиозона, групповые авторские уроки, шкафчик в просторной раздевалке',
  },
  {
    icon: <SvgBestPrice />,
    title: 'доступная цена',
    text: 'Cпециальный тарифный план со скидками, не нужно платить на год вперед',
  },
  {
    icon: <SvgClock />,
    title: 'Комфортное продление',
    text: 'Понравилось? Удобное автоматическое списание подписки за абонемент с возможностью отмены в любой момент',
  },
];

const tariffDataAll = [...tariffData, ...tariffData];

interface IProfit {
  onClick: () => void;
}

const Profit: FC<IProfit> = ({ onClick }) => {
  return (
    <section className='profit'>
      <Container>

        <CarouselTariff data={tariffDataAll} onClick={onClick} />

        <div className='profit__wrapper' id='profit'>
          <div className='profit__title-pic'>
            <picture>
              <source media='(min-width: 1200px )' srcSet={titlePicD} />
              <source media='(min-width: 768px )' srcSet={titlePicT} />
              <img src={titlePic} alt='Ваш комфорт' width='324' height='170' />
            </picture>
          </div>
          <ListProfit dataProfit={data} />
        </div>
      </Container>
    </section>
  );
};

export { Profit };
