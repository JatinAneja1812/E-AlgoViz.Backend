import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import RouteIcon from "@mui/icons-material/Route";

export default function VisualizeButton(props) {

  const handleClick = (e) => {
    props.setRunning(true);
    props.visualizeAlgorithm(0, props.algorithms);
   
  };

  return (
    <Stack id={"visualize"} direction="row" spacing={6}>
      <Button
        style={{
          background: "linear-gradient(180deg, #0B7FA0,#05496B 100%)",
          boxShadow: props.algorithms === "" ? "none" : props.isRunning ? "none" : "0px 0em 0.9em #00B2FF",
          marginLeft: "14px",
          color: props.algorithms === "" ? "#CCC" : props.isRunning ? "#CCC" : "#FFF"
        }}
        variant="contained"
        disabled={props.algorithms === "" ? true : props.isRunning ? true : false}
        onClick={handleClick}
        startIcon={<RouteIcon sx={{ width: 28, height: 28 }} />}
      >
        Visualize
      </Button>
    </Stack>
  );
}
