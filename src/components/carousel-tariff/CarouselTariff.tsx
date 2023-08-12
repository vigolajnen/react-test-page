import React, { FC, useRef, useState } from 'react';
import './styles.scss';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/effect-coverflow';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow, FreeMode } from 'swiper';
import { ITariff } from '../../types';
import { CarouselTariffItem } from './CarouselTariffItem';
import SvgArrowSlide from '../icons/ArrowSlide';

import { Link, useLocation } from 'react-router-dom';

interface IData {
  data: Array<ITariff>;
  item?: ITariff;
  onClick?: () => void;
}

const CarouselTariff: FC<IData> = ({ data, onClick }) => {
  const location = useLocation();
  const [_, setInit] = useState(false);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Swiper
      id='tariff'
      freeMode={true}
      spaceBetween={40}
      loop={true}
      effect={'coverflow'}
      grabCursor={true}
      slidesPerView={'auto'}
      slidesOffsetAfter={2}
      coverflowEffect={{
        rotate: 2,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        slideShadows: true,
      }}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      onInit={() => setInit(true)}
      modules={[EffectCoverflow, Navigation, FreeMode]}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
        },
        1440: {
          slidesPerView: 'auto',
        },
      }}
      className='slider-tariff'
    >
      {data.length > 0
        ? data.map((item: ITariff, index) => (
            <SwiperSlide key={index} className='slide' data-id={item.id}>
              <CarouselTariffItem item={item}>
                <Link
                  onClick={onClick}
                  to={`/${item.id}`}
                  state={{ item: item, bgTariff: location }}
                  className='link-btn text-center'
                >
                  Купить
                </Link>
              </CarouselTariffItem>
            </SwiperSlide>
          ))
        : null}

      <button
        className={`btn-prev swiper-button-prev`}
        ref={prevRef}
        aria-label='Кнопка назад'
      >
        <SvgArrowSlide />
      </button>
      <button
        className={`btn-next swiper-button-next`}
        ref={nextRef}
        aria-label='Кнопка вперед'
      >
        <SvgArrowSlide />
      </button>
    </Swiper>
  );
};

export { CarouselTariff };
