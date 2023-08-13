import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Row, Col } from "antd";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";

export default function AddNewRoom(props) {
   
  const handleCancel = () => {
    props.setShowModal(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Modal
        open={props.visable}
        onClose={handleCancel}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add New Room
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Please enter the title of the new Room.
          </Typography>

          <FormControl sx={{ m: 1, width: '21vh' }} variant="outlined">
            <OutlinedInput
                type="text"
                size="small"
                id="RoomTitle"
                placeholder="Chat Room + No."
            />
            </FormControl>

          <Row style={{ marginLeft: "-8px", marginTop: "5px" }}>
            <Col>
              <Button onClick={() => props.handleRoomInsert(document.getElementById("RoomTitle").value)}>Proceed</Button>
            </Col>
            <Col>
              <Button style={{ color: "red" }} onClick={handleCancel}>
                Cancel
              </Button>
            </Col>
          </Row>
        </Box>
      </Modal>
    </div>
  );
}
