import React from 'react'
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import { useNavigate } from "react-router-dom";
import ReturnButton from '../../../Components/Buttons/ReturnButton';


export default function ChatAppNavMenu() {
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
                <ChatOutlinedIcon sx={{ display: { xs: "none", md: "flex" }, mr: 3 }} />
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
                  Chat Rooms
                </Typography>
              </div>
    
    
              <div
                style={{
                  display: "flex",
                  position: "relative",
                  marginLeft: "142.5vh",
                  marginRight: "142.5vh",
                }}
              >
                <ReturnButton />
              </div>
            </Toolbar>
          </Container>
        </AppBar>
      );
}
