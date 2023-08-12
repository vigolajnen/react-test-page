import React, { FC } from 'react';
import './styles.scss';
import Container from 'react-bootstrap/Container';
import { GalleryGym } from './GalleryGym';
import { GalleryPool } from './GalleryPool';
import { ListAddress } from '../list-address/ListAddress';
import { GallerySpa } from './GallerySpa';
import { GalleryLessons } from './GalleryLessons';

const Gallery: FC = () => {
  return (
    <section id='gallery' className='gallery'>
      <Container>
        <div className='gallery__header'>
          <div className='title'>Клубы fitness house</div>
          <ListAddress addClass='list-address--gallery' />
        </div>

        <div
          id='gallery_view_pool'
          className='gallery__item gallery__item--pool'
        >
          <div className='gallery__title'>
            <span>просторный бассейн </span>
            для спортивного и расслабленного плавания
          </div>
          <GalleryPool />
        </div>

        <div id='gallery_view_gym' className='gallery__item gallery__item--gym'>
          <div className='gallery__title'>
            профессионально оборудованные <br />{' '}
            <span>и просторные тренажерные залы</span>
          </div>
          <GalleryGym />
        </div>

        <div id='gallery_view_spa' className='gallery__item gallery__item--spa'>
          <div className='gallery__title'>
            <span>спа-комплекс </span>
            финская, русская, турецкая, инфракрасная сауны и соляная комната
          </div>
          <GallerySpa />
        </div>

        <div
          id='gallery_view_group'
          className='gallery__item gallery__item--lessons'
        >
          <div className='gallery__title'>
            <span>разнообразные групповые уроки </span>
            растяжка, гимнастика, силовые, аквааэробика
          </div>
          <GalleryLessons />
        </div>
      </Container>
    </section>
  );
};

export { Gallery };
