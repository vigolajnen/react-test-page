import React from 'react';
import './styles.scss';

type Props = {
  children?: JSX.Element | null;
};

const ModalContent: React.FC<Props> = ({ children }) => {
  return <div className='modal-body text-dark'>{children}</div>;
};

export default ModalContent;
