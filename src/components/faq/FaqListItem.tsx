import React, { FC } from 'react';
import './styles.scss';
import { useDisclosure } from '../../hooks/useDisclosure2';

interface IFaqListItem {
  title: string;
  children: any;
}

const FaqListItem: FC<IFaqListItem> = ({ title, children }) => {
  const { toggle, isOpen } = useDisclosure(false);
  return (
    <li>
      <button type='button' className={isOpen ? 'accordion active' : 'accordion'} onClick={toggle}>
        {title}
      </button>
      <div className={isOpen ? 'panel active' : 'panel'}>{children}</div>
    </li>
  );
};

export { FaqListItem };
