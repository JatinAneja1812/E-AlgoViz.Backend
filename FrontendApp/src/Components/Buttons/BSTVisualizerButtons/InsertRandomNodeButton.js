import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ShuffleIcon from "@mui/icons-material/Shuffle";

export default function InsertRandomNodeButton(props) {
  return (
    <Stack
      direction="row"
      spacing={6}
      style={{
        top: "29px",
        left: "18px",
        display: "flex",
        position: " relative",
      }}
    >
      <Button
        sx={{ fontSize: "12px", padding: "4px 8px" }}
        id="RandomInsertButton"
        style={{
          fontSize: "12px",
          padding: "4px 8px",
          background: "rgb(7, 101, 133)",
          width: "10vw",
          height: "5vh",
          //   color: props.isDisabled ? "#CCC" : "#FFF"
        }}
        variant="contained"
        onClick={props.handleRandomInsert}
        startIcon={
          <ShuffleIcon sx={{ width: 28, height: 28, fontSize: "medium" }} />
        }
      >
        Random Insert
      </Button>
    </Stack>
  );
}
