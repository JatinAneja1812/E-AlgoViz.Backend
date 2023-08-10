import React from "react";
import BSTToolbarWrapper from "./BSTTools.styles";
import Box from "@mui/material/Box";
import InsertNodeButton from "../../Buttons/BSTVisualizerButtons/InsertNodeButton";
import InsertRandomNodeButton from "../../Buttons/BSTVisualizerButtons/InsertRandomNodeButton";
import BSTNotification from "../../Popups/BSTNotification";

export default function BSTTools(props) {
  return (
    <BSTToolbarWrapper>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        <div style={{ width: "15px" }} />

        <InsertNodeButton handleAdd={props.addNode} />

        <InsertRandomNodeButton handleRandomInsert={props.BSTRandomInsert} />
      </Box>

      <BSTNotification />
    </BSTToolbarWrapper>
  );
}
