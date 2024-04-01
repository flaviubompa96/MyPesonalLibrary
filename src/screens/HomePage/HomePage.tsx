import React from 'react';
import useSWR from 'swr';
import { Container } from '@mui/material';
import EmptyBooksList from '../../components/EmptyBooksList/EmptyBooksList';
import Title from '../../components/Title/Title';
import BooksList from '../../components/BooksList/BooksList';
import { getBooks } from '../../api/getBooks';
import { BookProps } from '../../types/BookProps';

interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  description: string;
};

const styles = {
  root: { mt: 4 },
};

const HomePage = () => {
  const { data: books, error, mutate } = useSWR<Book[]>('/books', getBooks);

  if (error) return <Container maxWidth="lg" sx={styles.root}>Error loading books.</Container>;
  if (!books) return <Container maxWidth="lg" sx={styles.root}>Loading...</Container>;

  const removeBookFromList = (bookId: number) => {
    mutate(books.filter(book => book.id !== bookId), false);
  };

  const updateBookInList = (bookId: number, updatedBookDetails: BookProps) => {
    mutate(books.map(book => {
      if (book.id === bookId) {
        return { ...book, ...updatedBookDetails };
      }
      return book;
    }), false);
  };

  return (
    <Container maxWidth="lg" sx={styles.root}>
      <Title label="Welcome to My Book Collection" />
      {books.length === 0 ? (
        <EmptyBooksList />
      ) : (
        <BooksList books={books} onBookDelete={removeBookFromList} onBookUpdate={updateBookInList} />
      )}
    </Container>
  );
};

export default HomePage;
