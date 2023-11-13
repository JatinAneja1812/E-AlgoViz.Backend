import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ReturnButton from "../../../Components/Buttons/ReturnButton";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";

export default function ChatRoomsNavMenu(props) {
  return (
    <AppBar style={{ position: "absolute", top: "4vh", background: "#076585" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <AccountCircleTwoToneIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 3 }}
              style={{ fontSize: "40px" }}
            />
            <div>
              <div style={{ marginBottom: "-0.6rem" }}>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  style={{
                    cursor: "pointer",
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 800,
                    letterSpacing: ".05rem",
                    color: "inherit",
                    fontSize: "22px",
                    textDecoration: "none",
                  }}
                >
                  {props.user.displayName}
                </Typography>
              </div>
              <Typography
                variant="body2"
                noWrap
                component="a"
                style={{
                  cursor: "pointer",
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  color: "inherit",
                  fontSize: "16px",
                  textDecoration: "none",
                }}
              >
                {props.user.email}
              </Typography>
            </div>
          </div>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <div style={{ width: "30px" }} />
            <Typography
              variant="body2"
              noWrap
              component="a"
              style={{
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 800,
                letterSpacing: ".05rem",
                color: "inherit",
                fontSize: "32px",
                textDecoration: "none",
                textTransform: "uppercase",
                left: "31vh",
                position: "relative",
              }}
            >
              {props.title}
            </Typography>
          </Box>

          <div
            style={{
              display: "flex",
              position: "relative",
              marginLeft: "72vh",
              marginRight: "72vh",
            }}
          >
            <ReturnButton iconText="chatRoomNavIcon" />
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
