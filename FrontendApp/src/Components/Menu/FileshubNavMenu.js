import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";
import ReturnButton from "../Buttons/ReturnButton";

export default function FilesHubNavBar(props) {
  let navigate = useNavigate();

  return (
    <AppBar style={{ position: "absolute", top: "4vh", background: "#076585" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "-13vh",
            }}
          >
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              onClick={() => navigate("/homepage")}
              style={{
                mr: 2,
                cursor: "pointer",
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 800,
                letterSpacing: ".05rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Upload & Download Acadamic Support Materials
            </Typography>
          </div>

          <div style={{
            display: "flex",
            position: "relative",
            marginLeft: "101vh",
            marginRight: "101vh"
          }}>
            <ReturnButton />
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
