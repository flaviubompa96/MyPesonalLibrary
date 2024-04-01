import React from 'react';
import { Modal, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface ModalComponentProps {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

const styles = {
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center' 
    },
    content: {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'auto',
        maxHeight: '80vh',
        overflowY: 'auto' as 'auto',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    },
    icon: {
        position: 'absolute',
        top: 8,
        right: 8,
    },
  };

const ModalComponent: React.FC<ModalComponentProps> = ({ open, handleClose, children }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      sx={styles.root}
    >
      <Box sx={styles.content}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={styles.icon}
        >
          <CloseIcon />
        </IconButton>
        {children}
      </Box>
    </Modal>
  );
};

export default ModalComponent;
