import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SubdirectoryArrowLeftIcon from '@mui/icons-material/SubdirectoryArrowLeft';
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";

export default function InsertNodeButton(props) {
  return (
    <Stack
      direction="row"
      spacing={3}
      alignItems="center"
      style={{
        top: "9px",
        display: "flex",
        position: " relative",
      }}
    >
      <FormControl sx={{ m: 1, width: "21vh" }} variant="outlined">
        <OutlinedInput
          type="number"
          size="small"
          id="userInput"
          
          placeholder="Please enter Number"
        />
      </FormControl>
      <Button
        sx={{
          fontSize: "12px",
          padding: "4px 8px",
          background: "rgb(7, 101, 133)",
          width: "10vw",
          height: "5vh",
        }}
        variant="contained"
        onClick={() => props.handleAdd(document.getElementById("userInput").value)}
        startIcon={
          <SubdirectoryArrowLeftIcon sx={{ width: 28, height: 28, fontSize: "medium" }} />
        }
      >
        Insert Element
      </Button>
    </Stack>
  );
}
