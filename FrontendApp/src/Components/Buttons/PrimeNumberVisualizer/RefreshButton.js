import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SyncOutlined from '@mui/icons-material/SyncOutlined';

export default function RefreshButton(props) {

  return (
    <Stack direction="row" spacing={6}>
      <Button
        sx={{ fontSize: '12px', padding: '4px 8px' }}
        style={{
          background: "transparent",
          marginLeft: "4.5vw",
          fontSize: "16px",
          width: "11vw",
          height: "5vh",
          top: "0px",
          color: props.isDisabled ? "#CCC" : "#FFF"
        }}
        variant="contained"
        onClick={props.refresh}
        disabled={props.isDisabled}
        startIcon={
          <SyncOutlined 
            sx={{ width: 28, height: 28 , fontSize: "medium"}}
          />
        }
      >
        Refresh
      </Button>
    </Stack>
  );
}
