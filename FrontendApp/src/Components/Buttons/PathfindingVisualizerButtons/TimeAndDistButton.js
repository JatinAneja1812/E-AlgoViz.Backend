import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TimerIcon from '@mui/icons-material/Timer';

export default function DistAndTimeButton(props) {

  const handleModalOpen = () =>{
    props.changeTimeAndDistModalShow();
  }

  return (
    <Stack direction="row" spacing={6}>
      <Button
        style={{background:"transparent", marginLeft:'14px', color: props.isRunning ? "#CCC" : "#FFF"}}
        variant="contained"
        onClick={handleModalOpen}
        disabled={props.isRunning ? true : false}
        startIcon={
          <TimerIcon
          sx={{ width: 28, height: 28 , fontSize: "medium"}}
          />
        }
      >
        Time and Distance
      </Button>
    </Stack>
  );
}