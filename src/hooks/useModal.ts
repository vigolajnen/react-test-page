import { useState, useCallback } from 'react';

// кастомные хуки всегда должны начинаться с глагола `use`, чтобы реакт понял, что это хук. Он следит за их вызовами
export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // `useCallback` нужен для того, чтобы зафиксировать ссылку на функцию. Таким образом уменьшится кол-во перерисовок компонента, куда будет передана эта функция
  const openModal = useCallback(() => {
    document.body.classList.add('modal-open');
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    document.body.classList.remove('modal-open');
    setIsModalOpen(false);
  }, []);

  return {
    isModalOpen,
    openModal,
    closeModal,
  };
};
