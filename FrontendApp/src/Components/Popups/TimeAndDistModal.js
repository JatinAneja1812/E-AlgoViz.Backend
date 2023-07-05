
import React from "react";
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import "./ModalStyles/TimeandDistModalPopup.css"

export default function TimeAndDistModal(props) {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    return (    
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={props.show}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={props.show}>
                    <Box sx={style} style={{backgroundColor:' rgba(255, 255, 255, 0.26)'}}>
                        <div className="TimeAndDistContainer">
                            <p>Time taken: <strong>{props.timetaken}</strong> ms</p>
                        </div>
                        < br />
                        <div className="TimeAndDistContainer">
                            <p>Distance: <strong>{props.pathtravelled}</strong></p>
                        </div>
                        <Button style={{color: "#fff"}} onClick={props.onHide}>Close</Button>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
