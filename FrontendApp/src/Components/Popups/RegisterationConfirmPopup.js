import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Row, Col} from 'antd';
import { useNavigate } from "react-router-dom";

export default function RegisterationConfirmPopup(props) {

    const navigate = useNavigate();
  
    const handleCancel = () => {
      props.setConfirmModalOpen(false);
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
        open={props.confirmModalOpen}
        onClose={handleCancel}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Confirm Details
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Please re-check the provide 'Username' and 'Email-address'.
            If you want to change your Details select 'Cancel' and make required changes 
            otherwise select 'Proceed' to complete registeration
          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Provided Username: {props.username}
          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Provided Email: {props.email}
          </Typography>

          <Row style={{marginLeft: '-8px', marginTop: '5px'}}>
            <Col> 
              <Button onClick={props.registerUser}>Proceed</Button>
            </Col>
            <Col>
              <Button style={{color: "red"}} onClick={handleCancel}>Cancel</Button>
            </Col>
          </Row>
        </Box>
      </Modal>
      </div>
    );
  }