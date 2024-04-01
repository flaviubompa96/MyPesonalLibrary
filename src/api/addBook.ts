import axios from 'axios';
import { toast } from 'react-toastify';
import { BookProps } from '../types/BookProps';
import { URL } from '../utils/constants';

export const addBook = (values: BookProps, resetForm: () => void) => axios.post(URL, values)
  .then(() => {
    toast.success('Book added successfully!');
    resetForm();
  })
  .catch((error) => {
    let errorMessage = 'Failed to process the book. Please try again.';
    if (error.response && error.response.data && error.response.data.message) {
      errorMessage = error.response.data.message;
    }
    toast.error(errorMessage);
  });      