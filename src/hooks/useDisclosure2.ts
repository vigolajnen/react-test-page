import { useState } from 'react';

export const useDisclosure = (initialValue: any, {onOpen, onClose}: any = {}) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const handleToggleClick = () => {
    isOpen ? close() : open();
  };

  const open = () => {
    if (typeof onOpen === 'function') {
      onOpen();
    }
    setIsOpen(true);
  };

  const close = () => {
    if (typeof onClose === 'function') {
      onClose();
    }
    setIsOpen(false);
  };

  return {
    isOpen,
    toggle: handleToggleClick,
    open,
    close
  };
};
