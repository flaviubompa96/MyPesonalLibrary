import axios from 'axios';
import { toast } from 'react-toastify';
import { URL } from '../utils/constants';

export const deleteBook = (id: number, onBookDelete: (id: number) => void) => axios.delete(`${URL}/${id}`).then(res => res.data)
    .then(() => {
        toast.success('Book deleted successfully');
        onBookDelete(id);
    })
    .catch(error => {
        console.error('Failed to delete book:', error);
        toast.error('Failed to delete the book. Please try again.');
    });
