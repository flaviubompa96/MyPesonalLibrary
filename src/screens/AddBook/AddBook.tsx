import React from 'react';
import { Container, Paper, Box } from '@mui/material';
import BookForm from '../../components/BookForm/BookForm';
import Title from '../../components/Title/Title';

const styles = {
    root: { mt: 4 },
    content: { p: 4, mb: 4 },
};

const AddBook = () => {
  return (
    <Container maxWidth="md" sx={styles.root}>
      <Paper elevation={3} sx={styles.content}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Title label="Add a New Book" />
          <Box width="100%" maxWidth={500} mt={2}>
            <BookForm />
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default AddBook;
