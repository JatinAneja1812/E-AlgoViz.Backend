import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import CodeTwoToneIcon from "@mui/icons-material/CodeTwoTone";
import CodeOffTwoToneIcon from "@mui/icons-material/CodeOffTwoTone";
import ReturnButton from "../Buttons/ReturnButton";

export default function CodehubNavMenu() {
  let navigate = useNavigate();

  return (
    <AppBar style={{ position: "absolute", top: "4vh", background: "#076585" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "-8vh",
            }}
          >
            <CodeTwoToneIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
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
              Code Manager
            </Typography>
            <CodeOffTwoToneIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              style={{ left: "6px", position: "relative" }}
            />
          </div>

          <div
            style={{
              display: "flex",
              position: "relative",
              marginLeft: "136vh",
              marginRight: "136vh",
            }}
          >
            <ReturnButton />
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
