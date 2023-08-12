import React from 'react';
import './App.scss';

import Modal from '../modal/Modal';
import ModalContent from '../modal/ModalContent';

import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { LayoutPage } from '../../pages/layout-page/LayoutPage';
import { HomePage } from '../../pages/home/Home';

import { Form } from '../UI/form/Form';
import { useModal } from '../../hooks/useModal';
import { URL_ROOT } from '../../utils/constants';
import { Form2 } from '../UI/form/Form2';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const { closeModal, isModalOpen } = useModal();

  const onCloseModal = () => {
    closeModal();
    navigate(-1);
  };

  const background =
    location.state?.bgTariff || location.state?.bgStop || location;

  return (
    <div className='App page'>
      <Routes location={background}>
        <Route path={URL_ROOT} element={<LayoutPage />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>

      {location.state?.bgTariff && (
        <Routes>
          <Route
            path={`/:id`}
            element={
              <Modal onClose={onCloseModal} title='Оформить абонемент'>
                <ModalContent>
                  {!isModalOpen ? <Form2 /> : null}
                </ModalContent>
              </Modal>
            }
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
