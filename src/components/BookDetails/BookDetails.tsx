import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { BookPropsWithoutId } from '../../types/BookPropsWithoutId';

interface BookDetailsProps {
  book: BookPropsWithoutId
  handleClose: () => void;
};

const styles = {
    root: {
        overflowY: 'auto', 
        maxHeight: '70vh', 
        padding: 2,
    },
    description: { whiteSpace: 'pre-wrap' },
    button: { mt: 2 },
};

const BookDetails: React.FC<BookDetailsProps> = ({ book, handleClose }) => {
  const { title, author, genre, description } = book;
  return (
    <Box sx={styles.root}>
      <Typography id="modal-title" variant="h6" component="h2" gutterBottom>
        {title}
      </Typography>
      <Typography id="modal-author" variant="subtitle1" color="text.secondary" gutterBottom>
        by {author}
      </Typography>
      <Typography id="modal-genre" variant="body2" color="text.secondary" gutterBottom>
        Genre: {genre}
      </Typography>
      <Typography id="modal-description" variant="body1" sx={styles.description}>
        {description}
      </Typography>
      <Button onClick={handleClose} sx={styles.button}>
        Close
      </Button>
    </Box>
  );
};

export default BookDetails;
