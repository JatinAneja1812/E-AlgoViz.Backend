import React, { useState, useMemo } from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { Tooltip } from "antd";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";

export default function ReturnButton(props) {
  let navigate = useNavigate();

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

  const handleDisableState = () => {
    if (props.isPathfindingVisualizerRunning) {
      return true;
    } else if (props.isSorting) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Stack direction="row" spacing={6}>
      <Tooltip placement="top" title={"Home"} arrow={mergedArrow}>
        <IconButton
          style={{
            background: "transparent",
            marginLeft: "95px",
            color: "#fff",
            top: "-1px",
            cursor: "pointer",
            fontSize: "50px",
            marginRight: "-6rem",
          }}
          disabled={handleDisableState()} // Corrected usage of disabled prop
          variant="contained"
          onClick={() => navigate("/homepage")}
        >
          <HomeIcon style={{ width: "1.5em", height: "1.5em" }} />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}
