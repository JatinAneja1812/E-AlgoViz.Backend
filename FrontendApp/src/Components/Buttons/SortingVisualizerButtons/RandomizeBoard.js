import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ShuffleOnOutlinedIcon from '@mui/icons-material/ShuffleOnOutlined';

export default function RandomizeBoard(props) {


  return (
    <Stack direction="row" spacing={6}>
      <Button
        sx={{ fontSize: '12px', padding: '4px 8px' }}
        style={{
          background: "transparent",
          marginLeft: "1.5vw",
          fontSize: "16px",
          width: "10vw",
          height: "5vh",
          top: "7px",
          color: props.isSorting ? "#CCC" : "#FFF"
        }}
        variant="contained"
        onClick={props.handleRandomize}
        disabled={props.isSorting ? true : false}
        startIcon={
          <ShuffleOnOutlinedIcon
            sx={{ width: 28, height: 28 , fontSize: "medium"}}
          />
        }
      >
        Randomize
      </Button>
    </Stack>
  );
}
