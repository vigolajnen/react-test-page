import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';

import { useNavigate } from 'react-router-dom';
import { useModal } from '../../hooks/useModal';

const modalRoot = document.getElementById('modals');

type Props = {
  onClose: () => void;
  children: JSX.Element;
  title?: string;
};

const Modal: React.FC<Props> = ({ onClose, children, title }) => {
  let navigate = useNavigate();
  const { closeModal } = useModal();

  useEffect(() => {
    const handleClickEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        closeModal();
      }
    };

    function onClose() {
      navigate(-1);
      closeModal();
    }

    window.addEventListener('keydown', handleClickEscape);
    return () => {
      window.removeEventListener('keydown', handleClickEscape);
    };
  }, [onClose, closeModal, navigate]);

  const handelClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return ReactDOM.createPortal(
    <div className='modal fade show' onClick={onClose}>
      <div
        className='modal-dialog'
        onClick={handelClick}
        role='document'
      >
        <div className='modal-content'>
          <div className='modal-header'>
            <div className='title text-dark'>{title}</div>
            <button
              type='button'
              className='close btn text-dark'
              data-dismiss='modal'
              aria-label='Close'
              onClick={onClose}
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>,
    modalRoot!,
  );
};

export default Modal;
