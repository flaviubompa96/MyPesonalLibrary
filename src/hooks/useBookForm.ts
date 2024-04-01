import { useFormik } from 'formik';
import { bookValidationSchema } from '../utils/bookValidationSchema';
import { BookProps } from '../types/BookProps';

const useBookForm = (book: BookProps | undefined, onSubmit: any) => {
  const initialValues = {
    title: book?.title || '',
    author: book?.author || '',
    genre: book?.genre || '',
    description: book?.description || '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema: bookValidationSchema,
    onSubmit,
  });

  return formik;
};

export default useBookForm;
