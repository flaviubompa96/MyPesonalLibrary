import React from 'react';
import { Button, Box } from '@mui/material';
import BookFormField from '../BookFormField/BookFormField';
import useBookForm from '../../hooks/useBookForm';
import { BookProps } from '../../types/BookProps';
import { addBook } from '../../api/addBook';
import { updateBook } from '../../api/updateBook';

interface BookFormProps {
  book?: BookProps;
  handleClose?: () => void;
  onBookUpdate?: (bookId: number, book: BookProps) => void;
};

const styles = {
  root: { mt: 1 },
  button: { mt: 3, mb: 2 },
};

const BookForm: React.FC<BookFormProps> = ({ book, handleClose, onBookUpdate }) => {
  const onFormSubmit = (values: BookProps, { resetForm }: { resetForm: () => void }) => {
    const operation = book ? updateBook(book.id, values, resetForm, onBookUpdate) : addBook(values, resetForm);
    operation
    .then(() => {
      if (handleClose) handleClose();
    })
  };

  const formik = useBookForm(book, onFormSubmit);
  const formTitle = book ? "Update Book" : "Add Book";

  return (
    <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={styles.root}>
      <BookFormField name="title" label="Title" formik={formik} />
      <BookFormField name="author" label="Author" formik={formik} />
      <BookFormField name="genre" label="Genre" formik={formik} />
      <BookFormField name="description" label="Description" formik={formik} multiline rows={4} />
      <Button type="submit" fullWidth variant="contained" sx={styles.button} disabled={!formik.isValid || !formik.dirty}>
        {formTitle}
      </Button>
    </Box>
  );
};

export default BookForm;
