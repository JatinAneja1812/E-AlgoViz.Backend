import React, { useState } from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export default function BSTNotification() {
  const [openPopup, setPopup] = useState(false);

  const handlePopoverOpen = (event) => {
    setPopup(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setPopup(null);
  };

  const open = Boolean(openPopup);

  return (
    <div>
      <div aria-label="info">
        <InfoOutlinedIcon
          style={{
            color: "red",
            fontSize: "40px",
            top: "30px",
            right: "60px",
            position: "relative",
          }}
          className={`rotate-icon ${!openPopup ? '' : 'pause'}`}
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        />
      </div>

      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={openPopup}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 2 }}>
            <div class="notification-icon"><InfoOutlinedIcon style={{ position: "relative", top: "6px", color: "rgb(25, 118, 210)"}}/><strong>NOTE</strong> </div>
            <div class="notification-content">
                <p>Adjust the Binary Search Tree's display by using the mouse wheel on the canvas.</p>
                <p style={{position: "relative", top: "-4px"}}>If tree elements extend beyond the visible area, the canvas will dynamically adjust to ensure visibility.</p>
                <p style={{position: "relative", top: "-5px"}}>You can also utilize the scrollbar to navigate the entire tree view.</p>
            </div>
        </Typography>
      </Popover>
    </div>
  );
}
