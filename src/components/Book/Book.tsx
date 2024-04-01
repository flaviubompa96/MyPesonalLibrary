import React from 'react';
import { BookProps } from '../../types/BookProps';
import { deleteBook } from '../../api/deleteBook';
import BookCard from './BookCard';
import BookModalsManager from '../Modal/BookModalsManager';
import { useModalState } from '../../hooks/useModalState';

interface Props {
  book: BookProps;
  onBookDelete: (bookId: number) => void;
  onBookUpdate: (bookId: number, book: BookProps) => void;
};

const Book: React.FC<Props> = ({ book, onBookDelete, onBookUpdate }) => {
  const { id } = book;
  const detailsModalState = useModalState();
  const editModalState = useModalState();
  const deleteModalState = useModalState();

  const handleDeleteBook = () => {
    deleteBook(id, onBookDelete)
      .then(() => {
        deleteModalState.handleClose();
      })
  };

  return (
    <>
      <BookCard
        book={book}
        onOpenDetails={detailsModalState.handleOpen}
        onEdit={editModalState.handleOpen}
        onDelete={deleteModalState.handleOpen}
      />
      <BookModalsManager
        book={book}
        isDetailsModalOpen={detailsModalState.isModalOpen}
        isEditModalOpen={editModalState.isModalOpen}
        isDeleteModalOpen={deleteModalState.isModalOpen}
        closeDetailsModal={detailsModalState.handleClose}
        closeEditModal={editModalState.handleClose}
        closeDeleteModal={deleteModalState.handleClose}
        onBookUpdate={onBookUpdate}
        handleDeleteBook={handleDeleteBook}
      />
    </>
  );
};

export default Book;
