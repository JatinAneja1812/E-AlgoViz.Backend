import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import RouteIcon from "@mui/icons-material/Route";

export default function VisualizerAlgoButton(props) {

  return (
    <Stack direction="row" spacing={6}>
      <Button
        sx={{ fontSize: '12px', padding: '4px 8px' }}
        style={{
          background: "linear-gradient(180deg, #0B7FA0, #05496B 100%)",
          boxShadow: props.isDisabled ? "none" : "0px 0em 0.5em #00B2FF",
          marginLeft: "1.5vw",
          fontSize: "16px",
          width: "11vw",
          height: "5vh",
          top: "0px",
          color: props.isDisabled ? "#CCC" : "#FFF"
        }}
        variant="contained"
        onClick={props.visualize}
        disabled={props.isDisabled}
        startIcon={
          <RouteIcon
            sx={{ width: 28, height: 28 , fontSize: "medium"}}
          />
        }
      >
        Visualize
      </Button>
    </Stack>
  );
}
