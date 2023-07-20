import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";
import SortingAlgorithmDropdown from "../Dropdowns/SortingVisualizerDropdowns/AlgorithmDropdown";
import RandomizeBoard from "../Buttons/SortingVisualizerButtons/RandomizeBoard";
import SortButton from "../Buttons/SortingVisualizerButtons/SortButton";
import ResetBoard from "../Buttons/SortingVisualizerButtons/ResetBoard";
import ReturnButton from "../Buttons/ReturnButton";

export default function SortingVisualizerAppNavBar(props) {
  let navigate = useNavigate();

  return (
    <AppBar
      className="SortingNavBar"
      style={{
        position: "absolute",
        top: "4vh",
        background: "#076585",
        height: "70px",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "-12vh",
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
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 800,
                letterSpacing: ".10rem",
                color: "inherit",
                textDecoration: "none",
                cursor: "pointer",
                fontSize: "26px",
              }}
            >
              Sorting Visualizer
            </Typography>
          </div>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <SortingAlgorithmDropdown
              setAlgorithm={props.setAlgorithm}
              algorithm={props.algorithm}
              resetData={props.resetData}
              isDataReset={props.isDataReset}
              isSorting={props.sorting}
            />
            <SortButton
              handleSort={props.handleSort}
              isSorting={props.sorting}
              algorithm={props.algorithm}
            />
            <RandomizeBoard
              isSorting={props.sorting}
              handleRandomize={props.handleRandomize}
            />
            <ResetBoard handleReset={props.handleReset} isSorting={props.sorting}/>
            
          </Box>

          <ReturnButton />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
