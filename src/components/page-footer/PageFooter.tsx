import React, { FC } from 'react';
import './styles.scss';
import { Container } from 'react-bootstrap';
import { LogoLink } from '../UI/logo-link/LogoLink';
import { ListAddress } from '../list-address/ListAddress';

const PageFooter: FC = () => {
  return (
    <footer className='page-footer'>
      <Container>
        <div className='page-footer__top'>
          <LogoLink />
          <ListAddress addClass='list-address--footer' />
        </div>
        <div className='page-footer__bottom'>
          <a href='#' className='page-footer__link link' target='_blank'>
            Cоглашение на обработку персональных данных
          </a>
          <a href='#' className='page-footer__link link' target='_blank'>
            Правила техники безопасности
          </a>
          <a href='#' className='page-footer__link link' target='_blank'>
            Договор Оферты
          </a>
          <div>
            <div>© 2007 - 2023.</div>
            <div>Все права защищены.</div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export { PageFooter };
