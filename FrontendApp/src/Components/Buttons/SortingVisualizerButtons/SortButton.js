import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SortOutlinedIcon from "@mui/icons-material/SortOutlined";

export default function SortButton(props) {
  return (
    <Stack direction="row" spacing={6}>
      <Button
        sx={{ fontSize: "12px", padding: "4px 8px" }}
        style={{
          marginLeft: "7vw",
          fontSize: "16px",
          width: "8vw",
          height: "5vh",
          top: "7px",
          background: "linear-gradient(180deg, #0B7FA0,#05496B 100%)",
          boxShadow: props.algorithm === "" ? "none" : props.isSorting ? "none" : "0px 0em 0.9em #00B2FF",
          color: props.algorithm === "" ? "#CCC" : props.isSorting ? "#CCC" : "#FFF"
        }}
        variant="contained"
        onClick={props.handleSort}
        disabled={props.isSorting ? true : false}
        startIcon={
          <SortOutlinedIcon
            sx={{ width: 28, height: 28, fontSize: "medium" }}
          />
        }
      >
        SORT
      </Button>
    </Stack>
  );
}
