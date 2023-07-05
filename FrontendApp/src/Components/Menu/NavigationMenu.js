import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";
import AlgorithmDropdown from "../Dropdowns/AlogrithmDropdown";
import MazeDropdown from "../Dropdowns/MazeDropdown";
import VisualizeButton from "../Buttons/VisualizeButton";
import InstructionButton from "../Buttons/InstructionButton";
import ClearBoardButton from "../Buttons/ClearBoardButton";
import ClearPathButton from "../Buttons/ClearPathButton";
import SpeedDropdown from "../Dropdowns/SpeedDropdown"; 

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
          </Box>
 
          <InstructionButton />


          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onMouseEnter={handleOpenUserMenu}
                sx={{ p: 0 }}
              >
                <Avatar alt={userName} src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "5px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              keepMounted
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={props.changeTimeAndDistModalShow}>
                <ListItemIcon>
                  <AvTimerIcon fontSize="small" />
                </ListItemIcon>
                Total Distance & Time
              </MenuItem>
              <MenuItem onClick={() => navigate("/homepage")}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                   Home
              </MenuItem>
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
