import React from 'react';
import { Modal, Box, Typography } from '@mui/material';
import MailOutlineIcon from "@mui/icons-material/MailOutline";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 350,
    bgcolor: 'background.paper',
    border: '2px solid green',
    boxShadow: 24,
    p: 4,
  };

const Verification = ({confirm, closeConfirm}) => {
  return (
    <Modal
    open={confirm}
    onClose={closeConfirm}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" align='center' component="h2" sx={{ fontWeight: 'bold'}}>
        Appointment Booking Successful
      </Typography>
      <span style={{ display: 'flex', justifyContent: 'center' }}>
      <MailOutlineIcon color='error' sx={{ fontSize: '10rem' }} />
      </span>
      <Typography id="modal-modal-description" variant='body1' align='center' sx={{ mt: 2 }}>
        Please check your mail for appointment number. Thanks!
      </Typography>
    </Box>
  </Modal>
  );
};

export default Verification;
