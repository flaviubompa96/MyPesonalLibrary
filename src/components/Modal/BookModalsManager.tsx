import React from 'react';
import { Typography, Button } from '@mui/material';
import ModalComponent from '../Modal/Modal';
import BookDetails from '../BookDetails/BookDetails';
import BookForm from '../BookForm/BookForm';
import { BookProps } from '../../types/BookProps';

interface BookModalManagerProps {
  book: BookProps;
  isDetailsModalOpen: boolean;
  isEditModalOpen: boolean;
  isDeleteModalOpen: boolean;
  closeDetailsModal: () => void;
  closeEditModal: () => void;
  closeDeleteModal: () => void;
  onBookUpdate: (bookId: number, book: BookProps) => void;
  handleDeleteBook: () => void;
}

const BookModalManager: React.FC<BookModalManagerProps> = ({
  book,
  isDetailsModalOpen,
  isEditModalOpen,
  isDeleteModalOpen,
  closeDetailsModal,
  closeEditModal,
  closeDeleteModal,
  onBookUpdate,
  handleDeleteBook,
}) => {
  return (
    <>
      <ModalComponent open={isDetailsModalOpen} handleClose={closeDetailsModal}>
        <BookDetails book={book} handleClose={closeDetailsModal} />
      </ModalComponent>
      <ModalComponent open={isEditModalOpen} handleClose={closeEditModal}>
        <BookForm book={book} handleClose={closeEditModal} onBookUpdate={onBookUpdate} />
      </ModalComponent>
      <ModalComponent open={isDeleteModalOpen} handleClose={closeDeleteModal}>
        <Typography variant="h6" component="p">
          Are you sure you want to delete this book?
        </Typography>
        <Button onClick={handleDeleteBook}>Delete</Button>
        <Button onClick={closeDeleteModal}>Cancel</Button>
      </ModalComponent>
    </>
  );
};

export default BookModalManager;
