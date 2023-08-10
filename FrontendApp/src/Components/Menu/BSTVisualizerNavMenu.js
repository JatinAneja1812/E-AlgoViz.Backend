import React from 'react'
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";
import ReturnButton from "../Buttons/ReturnButton";
import ResetTreeButton from '../Buttons/BSTVisualizerButtons/ResetTreeButton';
import SearchNodeButton from '../Buttons/BSTVisualizerButtons/SearchButton';
import BSTSpeedDropdown from '../Dropdowns/BSTVisualizerDropdowns/BSTSpeedDropdown';
import BSTSearchTypeDropdown from '../Dropdowns/BSTVisualizerDropdowns/BSTSearchTypeDropdown';


export default function BSTVisualizerNavMenu(props) {
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
                  Binary Search Tree Visualizers
                </Typography>
              </div>
    
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <div style={{ width: "30px" }} />

                <BSTSpeedDropdown speed={props.speed} setSpeed={props.setSpeed} />

                <BSTSearchTypeDropdown setTravasalOrder={props.setTravasalOrder} travasalOrder={props.travasalOrder} />
                
                <ResetTreeButton handleTreeReset={props.BSTReset}/>
                
                <SearchNodeButton handleNodeSearch={props.searchNodeInTree} />
              </Box>
    
              <div
                style={{
                  display: "flex",
                  position: "relative",
                  marginLeft: "2.5vh",
                  marginRight: "2.5vh",
                }}
              >
                <ReturnButton />
              </div>
            </Toolbar>
          </Container>
        </AppBar>
      );
}


