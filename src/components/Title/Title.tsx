import React from 'react';
import { Typography, Container } from '@mui/material';

interface TitleProps {
  label: string;
};

const styles = {
    title: {
        textAlign: 'center',
        marginTop: '1rem',
        paddingTop: '1rem',
    },
};

const Title: React.FC<TitleProps> = ({ label }) => {
  return (
    <Container>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={styles.title}
      >
        {label}
      </Typography>
    </Container>
  );
};

export default Title;
