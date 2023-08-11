import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SubdirectoryArrowLeftIcon from "@mui/icons-material/SubdirectoryArrowLeft";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";

export default function InsertMultipleNodesButton(props) {
    const handleKeyPress = (event) => {
        const keyCode = event.keyCode || event.which;
        const keyValue = String.fromCharCode(keyCode);
    
        // Allow digits and backspace
        if (!/^\d+$/.test(keyValue) && keyCode !== 8) {
          event.preventDefault();
        } else {
          // Parse the input value and check if it's within the range
          const inputValue = event.target.value + keyValue;
          const parsedValue = parseInt(inputValue);
    
          if (parsedValue < 1 || parsedValue > 20) {
            event.preventDefault();
          }
        }
      };

  return (
    <Stack
      direction="row"
      spacing={4}
      alignItems="center"
      style={{
        top: "9px",
        display: "flex",
        position: " relative",
      }}
    >
      <FormControl
        sx={{ m: 1, width: "21vh", left: "30px" }}
        variant="outlined"
      >
        <OutlinedInput
          type="number"
          size="small"
          id="sizeInput"
          placeholder="Enter Size (1-20)"
          inputProps={{ min: 1, max: 20 }}
          onKeyPress={handleKeyPress} // Restrict input to digits
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
        onClick={() =>
          props.handleMultipleInsert(document.getElementById("sizeInput").value)
        }
        startIcon={
          <SubdirectoryArrowLeftIcon
            sx={{ width: 28, height: 28, fontSize: "medium" }}
          />
        }
      >
        Quick Insert
      </Button>
    </Stack>
  );
}
