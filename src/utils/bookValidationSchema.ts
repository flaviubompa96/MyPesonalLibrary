import * as Yup from 'yup';

export const bookValidationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  author: Yup.string().required('Author is required'),
  genre: Yup.string().required('Genre is required'),
  description: Yup.string()
    .required('Description is required')
    .min(50, 'Description must be at least 50 characters long'),
});
