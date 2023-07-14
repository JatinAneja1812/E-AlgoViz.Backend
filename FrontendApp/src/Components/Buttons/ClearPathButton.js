import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import RouteIcon from '@mui/icons-material/Route';

export default function ClearPathButton(props) {

  const handleClear = () =>{
    props.clearPath();
  }

  return (
    <Stack direction="row" spacing={6}>
      <Button
        style={{background:"transparent", marginLeft:'14px'}}
        variant="contained"
        onClick={handleClear}
        startIcon={
          <RouteIcon
          sx={{ width: 28, height: 28 , fontSize: "medium"}}
          />
        }
      >
        Clear Path
      </Button>
    </Stack>
  );
}
