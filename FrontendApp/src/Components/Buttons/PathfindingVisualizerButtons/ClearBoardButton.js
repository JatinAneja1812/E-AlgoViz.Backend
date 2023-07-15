import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';

export default function ClearBoardButton(props) {

  const handleClear = () =>{
    props.clearBoard();
  }

  return (
    <Stack direction="row" spacing={6}>
      <Button
        style={{background:"transparent", marginLeft:'14px'}}
        variant="contained"
        onClick={handleClear}
        disabled={props.isRunning ? true : false}
        startIcon={
          <CleaningServicesIcon
          sx={{ width: 28, height: 28 , fontSize: "medium"}}
          />
        }
      >
        Clear Board
      </Button>
    </Stack>
  );
}
