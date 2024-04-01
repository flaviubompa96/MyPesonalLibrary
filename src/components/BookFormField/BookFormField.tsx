import React from 'react';
import { TextField } from '@mui/material';
import { FormikErrors, FormikTouched, FormikValues } from 'formik';

interface BookFormFieldProps {
  name: string;
  label: string;
  formik: {
    handleChange: (e: React.ChangeEvent<any>) => void;
    handleBlur: (e: React.FocusEvent<any, Element>) => void;
    values: FormikValues;
    touched: FormikTouched<FormikValues>;
    errors: FormikErrors<FormikValues>;
  };
  multiline?: boolean;
  rows?: number;
};

const BookFormField: React.FC<BookFormFieldProps> = ({
  name,
  label,
  formik,
  multiline = false,
  rows,
}) => {
  const isError = formik.touched[name] && !!formik.errors[name];
  const errorMessage = isError ? formik.errors[name] : undefined;

  return (
    <TextField
      margin="normal"
      required
      fullWidth
      id={name}
      label={label}
      name={name}
      autoComplete={name}
      autoFocus={name === 'title'}
      value={formik.values[name]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={!!isError}
      helperText={typeof errorMessage === 'string' ? errorMessage : undefined}
      multiline={multiline}
      rows={rows || undefined}
    />
  );
};

export default BookFormField;
