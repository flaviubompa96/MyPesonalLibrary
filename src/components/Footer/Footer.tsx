import React from 'react';
import { Box, Container, Typography, IconButton, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const styles = {
    footer: {
      backgroundColor: '#1976d2',
      color: 'white',
      mt: 4,
      py: 2,
    },
    icon: {
      color: 'white',
    },
  };

  return (
    <Box component="footer" sx={styles.footer}>
      <Container maxWidth="lg">
        <Typography variant="subtitle1" align="center" gutterBottom>
          Welcome to my personal library, I hope you enjoy it
        </Typography>
        <Typography variant="body2" align="center" color="inherit">
          © {currentYear} My Personal Library
        </Typography>
        <Box textAlign="center" mt={1}>
          <IconButton href="https://www.linkedin.com/in/flaviu-bompa-b3510b153/" target="_blank" sx={styles.icon}>
            <LinkedInIcon />
          </IconButton>
          <IconButton href="https://github.com/flaviubompa96" target="_blank" sx={styles.icon}>
            <GitHubIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
