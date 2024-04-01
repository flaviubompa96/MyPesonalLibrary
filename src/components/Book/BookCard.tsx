import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import BookActions from './BookActions';
import { BookProps } from '../../types/BookProps';

interface BookCardProps {
  book: BookProps
  onOpenDetails: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

const styles = {
    root: {
        maxWidth: 345,
        marginBottom: 2,
    },
    author: { mb: 1.5 },
    description: {
        overflow: 'hidden', 
        textOverflow: 'ellipsis', 
        whiteSpace: 'nowrap',
    },
};
const BookCard: React.FC<BookCardProps> = ({ book, onOpenDetails, onEdit, onDelete }) => {
    const { title, author, genre, description } = book;
  return (
    <Card sx={styles.root}>
      <CardContent>
        <Typography variant="h5" component="div">{title}</Typography>
        <Typography sx={styles.author} color="text.secondary">by {author}</Typography>
        <Typography variant="body2">Genre: {genre}</Typography>
        <Typography variant="body2" sx={styles.description}>
          Description: {description}
        </Typography>
      </CardContent>
      <BookActions onOpenDetails={onOpenDetails} onEdit={onEdit} onDelete={onDelete} />
    </Card>
  );
};

export default BookCard;
