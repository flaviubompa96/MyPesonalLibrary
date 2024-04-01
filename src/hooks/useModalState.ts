import { useState } from 'react';

export const useModalState = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return { isModalOpen, handleOpen, handleClose };
};
