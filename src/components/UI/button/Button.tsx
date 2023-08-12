import React, { FC } from 'react';
import './styles.scss';

interface IButton {
  children: string;
  btnType: any;
  id?: string;
  onClick?: () => void;
  component?: any;
  to?: any;
  item?: any;
  disabled?: any;
}

const Button: FC<IButton> = ({ children, btnType, onClick }) => {
  return (
    <button type={btnType} className="button" onClick={onClick}>
      <span>{children}</span>
    </button>
  );
};

export { Button };
