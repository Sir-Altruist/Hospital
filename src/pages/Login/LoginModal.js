import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useNavigate } from "react-router-dom";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function LoginModal({ handlePatientClose, patientLogin }) {
  
 const navigate = useNavigate();

 const handleClick = (e) => {
    e.preventDefault();
    navigate("/login/patient");
    window.location.reload();
  };

  return (
    <div>
      <Modal
        open={patientLogin}
        onClose={handlePatientClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ fontWeight: 'bold'}}>
            You are required to sign in to check test result
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem'}}>
                <Button variant='contained' color='primary' onClick={handleClick} sx={{mr: 2, textTransform: 'inherit'}}>
                    Proceed to log in
                </Button>
                <Button onClick={handlePatientClose} variant='contained' color='error' sx={{ textTransform: 'inherit'}}>
                    Cancel
                </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
