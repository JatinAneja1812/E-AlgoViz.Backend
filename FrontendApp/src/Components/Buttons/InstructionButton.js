import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import InstructionMainPopup from "../Popups/InstructionMainPopup";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

export default function VisualizeButton() {
  const [showtutorial, setShowTutorial] = useState(false);
  const [counter] = useState(0);

  const handleClick = () => {
    setShowTutorial(true);
  };

  return (
    <>
      {showtutorial && (
        <InstructionMainPopup
          showtutorial={showtutorial}
          setShowTutorial={setShowTutorial}
          counter={counter}
        />
      )}
      <Stack direction="row" spacing={6}>
        <IconButton
          style={{ background: "transparent", marginLeft: "45px", color: "#fff", fontSize: "50px", marginRight: "-6rem"}}
          variant="contained"
          onClick={handleClick}
        >
          <HelpOutlineIcon style={{width: "1.5em", height: "1.5em"}} />
        </IconButton>
      </Stack>
    </>
  );
}
