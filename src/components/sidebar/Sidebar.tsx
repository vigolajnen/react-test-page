import React, { FC } from 'react';
import './styles.scss';

import { LogoLink } from '../UI/logo-link/LogoLink';
import { Nav } from '../nav/Nav';
import SvgClose from '../icons/Close';

interface ISidebar {
  isOpen: Boolean;
  close: () => void;
}

// className={isOpen ? 'sidebar open' : 'sidebar close'}

const Sidebar: FC<ISidebar> = ({ isOpen, close }) => {
  return (
    isOpen && <aside className={isOpen ? 'sidebar open' : 'sidebar close'}>
      <button
        type='button'
        className='btn-close sidebar__close'
        aria-label='Кнопка закрыть меню'
        onClick={close}
      >
        <SvgClose />
      </button>

      <LogoLink />
      <small>рядом с домом</small>

      <Nav close={close} />
    </aside>
  );
};

export { Sidebar };
