import React, { FC } from 'react';
import './styles.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import 'swiper/css/effect-coverflow';
import { Scrollbar, EffectCoverflow, FreeMode } from 'swiper';

interface ICarouselPictureItem {
  srcPic: string;
  altPic?: string;
  srcsetXL?: string;
  srcsetSM?: string;
  srcsetXS?: string;
}
interface ICarouselPicture {
  dataPic: Array<ICarouselPictureItem>;
}

const CarouselPicture: FC<ICarouselPicture> = ({ dataPic }) => {
  return (
    <Swiper
      freeMode={false}
      // centeredSlides={true}
      slidesPerView={3}
      spaceBetween={10}
      loop={true}
      scrollbar={{
        hide: true,
      }}
      coverflowEffect={{
        rotate: 20,
        stretch: 0,
        depth: 200,
        modifier: 5.5,
        slideShadows: true,
      }}
      modules={[Scrollbar, EffectCoverflow, FreeMode]}
      breakpoints={{
        320: {
          slidesPerView: 1.3,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
          freeMode: true,
        },
        1300: {
          slidesPerView: 3.3,
        },
      }}
      className='slider-gallery'
    >
      {dataPic.map((item, index) => (
        <SwiperSlide className='slide' key={index}>
          <picture className='img-fluid rounded'>
            <source
              type='image/webp'
              media='min-width: 1200px'
              srcSet={item.srcsetXL}
            />
            <source
              type='image/webp'
              media='min-width: 768px'
              srcSet={item.srcsetSM}
            />

            <img
              srcSet={item.srcsetXS}
              src={item.srcPic}
              alt={item.altPic}
              width='262'
              height='190'
              className='img-fluid rounded'
              loading='lazy'
            />
          </picture>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export { CarouselPicture };
