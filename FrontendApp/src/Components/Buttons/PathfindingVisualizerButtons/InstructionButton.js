import React, { useState, useMemo } from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { Tooltip } from "antd";
import InstructionMainPopup from "../../Popups/InstructionMainPopup";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

export default function InstructionButton(props) {
  const [showtutorial, setShowTutorial] = useState(false);
  const [counter] = useState(0);
  const [arrow] = useState("Show");

  const mergedArrow = useMemo(() => {
    if (arrow === "Hide") {
      return false;
    }
    if (arrow === "Show") {
      return true;
    }
    return {
      pointAtCenter: true,
    };
  }, [arrow]);

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
        <Tooltip placement="top" title={"Instructions"} arrow={mergedArrow}>
          <IconButton
            style={{
              background: "transparent",
              marginLeft: "45px",
              color: "#fff",
              fontSize: "50px",
              marginRight: "-6rem",
            }}
            variant="contained"
            onClick={handleClick}
          >
            <HelpOutlineIcon style={{ width: "1.5em", height: "1.5em" }} />
          </IconButton>
        </Tooltip>
      </Stack>
    </>
  );
}
