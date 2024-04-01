import React from 'react';
import { IconButton, Button, CardActions } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

interface BookActionsProps {
  onOpenDetails: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

const BookActions: React.FC<BookActionsProps> = ({ onOpenDetails, onEdit, onDelete }) => {
  return (
    <CardActions>
      <Button size="small" onClick={onOpenDetails}>Learn More</Button>
      <IconButton onClick={onDelete} aria-label="delete book">
        <DeleteIcon />
      </IconButton>
      <IconButton onClick={onEdit} aria-label="edit book">
        <EditIcon />
      </IconButton>
    </CardActions>
  );
};

export default BookActions;
