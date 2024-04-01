import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './screens/HomePage/HomePage';
import AddBook from './screens/AddBook/AddBook';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { Box, CssBaseline } from '@mui/material';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  contentWrap: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  mainContent: {
    flex: 1,
  },
};

const App = () => {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
      <Box sx={styles.root}>
        <NavBar />
        <Box component="main" sx={styles.mainContent}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-book" element={<AddBook />} />
        </Routes>
        </Box>
        <Footer />
      </Box>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
