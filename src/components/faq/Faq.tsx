import React, { FC } from 'react';
import './styles.scss';
import Container from 'react-bootstrap/Container';
import { FaqList } from './FaqList';

interface IFaq {
  title: string;
}

const Faq: FC<IFaq> = ({ title }) => {
  return (
    <section className='faq' id="faq_view">
      <div className='faq__wrapper'>
        <Container>
          <div className='title'> {title}</div>

          <FaqList />

          <div className='faq__bg' tabIndex={-1}>
            <div className='faq__bg--2'></div>
            <div className='faq__bg--1'></div>
            {/* <div className='faq__bg--3'></div> */}
          </div>
        </Container>
      </div>
    </section>
  );
};

export { Faq };
