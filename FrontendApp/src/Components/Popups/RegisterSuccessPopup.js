import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// import { useTheme } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";

export default function RegisterSuccessDialog(props) {

    const navigate = useNavigate();
  
    const handleClick = () => {
      props.setOpen(false)
      navigate("/");
    };

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

  
    return (
      <div>
        <Modal
        open={props.open}
        onClose={handleClick}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Welcome!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            You have been successfully registered to E-AlgoViz - An Algorithm Visualizer. 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Please verify your email address before log in by clicking on the link that has been sent to your email. 
            In the event that you do not see the email in your inbox, we suggest checking your spam folder or 
            attempting to sign up again using a valid email address.  
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           Please proceed to Login.
          </Typography>
          <Button onClick={handleClick}>Proceed</Button>
        </Box>
      </Modal>
      </div>
    );
  }