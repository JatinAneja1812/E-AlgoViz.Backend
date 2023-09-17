import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";
import ReturnButton from "../Buttons/ReturnButton";
import RefreshButton from "../Buttons/PrimeNumberVisualizer/RefreshButton";
import VisualizerAlgoButton from "../Buttons/PrimeNumberVisualizer/VisualizeAlgoButton";
import PrimeNumberVisInstructionButton from "../Buttons/PrimeNumberVisualizer/PrimeNumberVisInstructionButton";

export default function PrimeNumberVisualizerNavMenu(props) {
  let navigate = useNavigate();

  return (
    <AppBar style={{ position: "absolute", top: "4vh", background: "#076585" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "-10vh",
            }}
          >
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 3 }} />
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
              Prime Number Visualizers
            </Typography>
          </div>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <div style={{ width: "15px" }} />
            <RefreshButton
              refresh={props.onRefresh}
              isDisabled={props.isDisabled}
            />
            <VisualizerAlgoButton
              visualize={props.onVisualize}
              isDisabled={props.isDisabled}
            />
          </Box>

          <div
            style={{
              display: "flex",
              position: "relative",
              marginLeft: "2.5vh",
              marginRight: "2.5vh",
            }}
          >
            <PrimeNumberVisInstructionButton />
            <ReturnButton />
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
