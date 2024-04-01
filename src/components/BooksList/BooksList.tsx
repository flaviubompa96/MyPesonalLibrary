import React, { useState } from 'react';
import { Grid, TextField, Box } from '@mui/material';
import Book from '../Book/Book';
import { BookProps } from '../../types/BookProps';
import { filterBooksList } from '../../utils/filterBooksList';

interface BooksListProps {
  books: BookProps[];
  onBookDelete: (bookId: number) => void;
  onBookUpdate: (bookId: number, book: BookProps) => void;
};

const BooksList: React.FC<BooksListProps> = ({ books, onBookDelete, onBookUpdate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };
  const filteredBooks = filterBooksList(books, searchQuery);

  return (
    <Box sx={{ m: 3 }}>
      <TextField
        fullWidth
        label="Search Books"
        variant="outlined"
        margin="dense"
        onChange={handleSearchChange}
        placeholder="Search by name, genre, author, or description"
        sx={{ mb: 5 }}
      />
      <Grid container spacing={4} alignItems="stretch">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <Grid item xs={12} sm={6} md={4} key={book.id} sx={{ display: 'flex' }}>
              <Book
                book={book}
                onBookDelete={onBookDelete}
                onBookUpdate={onBookUpdate}
              />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Box textAlign="center" mt={5}>
              No books found.
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default BooksList;
