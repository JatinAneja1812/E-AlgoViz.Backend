import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SyncOutlined from '@mui/icons-material/SyncOutlined';

export default function ResetTreeButton(props) {

  return (
    <Stack direction="row" spacing={6}>
      <Button
        sx={{ fontSize: '12px', padding: '4px 8px' }}
        style={{
          background: "transparent",
          marginLeft: "2.5vw",
          fontSize: "16px",
          width: "9vw",
          height: "5vh",
          top: "5px",
          color:"#FFF"
        }}
        variant="contained"
        onClick={props.handleTreeReset}
        startIcon={
          <SyncOutlined 
            sx={{ width: 28, height: 28 , fontSize: "medium"}}
          />
        }
      >
        Reset
      </Button>
    </Stack>
  );
}