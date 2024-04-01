import React from 'react';
import { Button, Typography, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh',
    },
    button: { mt: 2 },
};

const EmptyBooksList: React.FC = () => {
  const navigate = useNavigate();

  const handleAddBookClick = () => {
    navigate('/add-book');
  };

  return (
    <Container maxWidth="sm">
      <Box sx={styles.root}>
        <Typography variant="h5" gutterBottom>
          You don't have any books yet.
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Start adding some to see them here!
        </Typography>
        <Button variant="contained" color="primary" onClick={handleAddBookClick} sx={styles.button}>
          Add Book
        </Button>
      </Box>
    </Container>
  );
};

export default EmptyBooksList;
