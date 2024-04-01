import axios from 'axios';
import { toast } from 'react-toastify';
import { BookProps } from '../types/BookProps';
import { URL } from '../utils/constants';

export const updateBook = (
    bookId: number, 
    values: BookProps, 
    resetForm: () => void, 
    onBookUpdate?: (id: number, values: BookProps) => void
) => axios.put(`${URL}/${bookId}`, values)
    .then(() => {
        toast.success('Book updated successfully!');
        resetForm();
        if (onBookUpdate) onBookUpdate(bookId, { ...values, id: bookId });
    })
    .catch((error) => {
        let errorMessage = 'Failed to process the book. Please try again.';
        if (error.response && error.response.data && error.response.data.message) {
            errorMessage = error.response.data.message;
        }
        toast.error(errorMessage);
    });      