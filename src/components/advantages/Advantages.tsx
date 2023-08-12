import React, { FC } from 'react';
import './styles.scss';

import { ListProfit } from '../list-profit/ListProfit';
import Container from 'react-bootstrap/Container';

import titlePic from '../../images/advantages/title3.png';
import titlePicT from '../../images/advantages/title2.webp';
import titlePicD from '../../images/advantages/title.webp';
import SvgMuscle from '../icons/Muscle';
import SvgCarParking from '../icons/CarParking';
import SvgShield from '../icons/Shield';
import SvgShield2 from '../icons/Shield2';

const data = [
  {
    icon: <SvgMuscle />,
    title: 'Индивидуальный подход тренеров',
    text: 'Команда профессионалов с большим опытом работы',
  },
  {
    icon: <SvgCarParking />,
    title: 'Бесплатная парковка',
    text: 'Просторная бесплатная парковка рядом с клубом',
  },
  {
    icon: <SvgShield />,
    title: 'безопасный фитнес',
    text: 'Трехступенчатая система очистки воды в бассейне современными фильтрами',
  },
  {
    icon: <SvgShield2 />,
    title: 'Удобные браслеты',
    text: 'Персональный браслет Члена клуба',
  },
];

const Advantages: FC = () => {
  return (
    <section className='advantages'>
      <Container>
        <div className='advantages__title-pic'>
          <picture>
            <source media='(min-width: 1200px )' srcSet={titlePicD} />
            <source media='(min-width: 768px )' srcSet={titlePicT} />
            <img src={titlePic} alt='Ваш комфорт' width='324' height='170' />
          </picture>
        </div>
        <ListProfit dataProfit={data} />
      </Container>
    </section>
  );
};

export { Advantages };
