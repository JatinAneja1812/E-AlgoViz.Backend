import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import RouteIcon from "@mui/icons-material/Route";

export default function VisualizeButton(props) {
  useEffect(() => {
    console.log(props.algorithms);
    return () => {};
  }, [props.algorithms]);

  const handleClick = (e) => {
    props.visualizeAlgorithm(0, props.algorithms);
  };

  return (
    <Stack id={"visualize"} direction="row" spacing={6}>
      <Button
        style={{
          background: "linear-gradient(180deg, #43cea2,#185a9d 100%)",
          marginLeft: "14px",
        }}
        variant="contained"
        hidden={props.algorithms === "" ? true : false}
        onClick={handleClick}
        startIcon={<RouteIcon sx={{ width: 28, height: 28 }} />}
      >
        Visualize {props.algorithms}
      </Button>
    </Stack>
  );
}
