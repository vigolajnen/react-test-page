import { useState, useCallback } from 'react';

export const useDisclosure = (
  initialValue: any, {onOpen, onClose}: any = {}
) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const handleToggleClick = () => {
    isOpen ? close() : open();
  };

  const open = useCallback(() => {
    if (typeof onOpen === 'function') {
      onOpen();
    }
    setIsOpen(true);
  }, [onOpen]);

  const close = useCallback(() => {
    if (typeof onClose === 'function') {
      onClose();
    }
    setIsOpen(false);
  }, [onClose]);

  return {
    isOpen,
    toggle: handleToggleClick,
    open,
    close,
  };
};
