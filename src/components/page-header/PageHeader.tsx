import React, { FC } from 'react';
import './styles.scss';
import Container from 'react-bootstrap/Container';
import { LogoLink } from '../UI/logo-link/LogoLink';

import { Sidebar } from '../sidebar/Sidebar';
import { useDisclosure } from '../../hooks/useDisclosure';
import SvgIconMenu from '../icons/Menu';

import StickyBox from 'react-sticky-box';

const PageHeader: FC = () => {
  const { open, close, isOpen } = useDisclosure(false);

  return (
    <>
      <StickyBox style={{ zIndex: 5 }}>
        <header className='page-header'>
          <Container>
            <div className='page-header__label'>Рядом с домом</div>
            <LogoLink />

            <button
              type='button'
              className='page-header__btn-menu'
              aria-label='Открыть меню'
              onClick={open}
            >
              <SvgIconMenu />
            </button>
          </Container>
        </header>
      </StickyBox>
      <Sidebar isOpen={isOpen} close={close} />
    </>
  );
};

export { PageHeader };
