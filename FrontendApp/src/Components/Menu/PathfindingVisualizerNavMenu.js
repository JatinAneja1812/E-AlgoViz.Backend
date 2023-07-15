import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";
import AlgorithmDropdown from "../Dropdowns/PathfindingVisualizerDropdowns/AlogrithmDropdown";
import MazeDropdown from "../Dropdowns/PathfindingVisualizerDropdowns/MazeDropdown";
import VisualizeButton from "../Buttons/PathfindingVisualizerButtons/VisualizeButton";
import InstructionButton from "../Buttons/PathfindingVisualizerButtons/InstructionButton";
import ClearBoardButton from "../Buttons/PathfindingVisualizerButtons/ClearBoardButton";
import ClearPathButton from "../Buttons/PathfindingVisualizerButtons/ClearPathButton";
import SpeedDropdown from "../Dropdowns/PathfindingVisualizerDropdowns/SpeedDropdown"; 
import DistAndTimeButton from "../Buttons/PathfindingVisualizerButtons/TimeAndDistButton";

export default function AppNavBar(props) {

  let navigate = useNavigate();

  return (
    <AppBar
      style={{position: "absolute", top: "4vh"}}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: "-13vh"}}>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              onClick={() => navigate('/homepage')}
              style={{ cursor: 'pointer' }}
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 800,
                letterSpacing: '.05rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Pathfinding Visualizer
            </Typography>
          </div>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <AlgorithmDropdown 
              setAlgorithms={props.setAlgorithms}
              algorithms={props.algorithms}
              boardCleared={props.boardCleared}
              setBoardClear={props.setBoardClear}
             />
            <MazeDropdown
              visualizeMaze={props.visualizeMaze}
              boardCleared={props.boardCleared}
              setBoardClear={props.setBoardClear}

            />
            <SpeedDropdown
             boardCleared={props.boardCleared}
             setBoardClear={props.setBoardClear}
             setVisualizerSpeed={props.setVisualizerSpeed}
            />
            <VisualizeButton 
              visualizeAlgorithm={props.visualizeAlgorithm} 
              algorithms={props.algorithms}
            />
           
            <ClearBoardButton clearBoard={props.clearBoard} />
            <ClearPathButton clearPath={props.clearPath} />
            <DistAndTimeButton changeTimeAndDistModalShow={props.changeTimeAndDistModalShow} />
            
          </Box>
 
          <InstructionButton />

        </Toolbar>
      </Container>
    </AppBar>
  );
}
