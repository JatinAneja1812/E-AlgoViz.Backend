import React, {useState, useEffect} from 'react';
import {AvatarWrapper} from './Avatar.styles';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";
import { logout } from "../../Authentication/Firebase/Firebase";
import { useNavigate } from "react-router-dom";
import { endSession } from '../../Authentication/Storage/Session';

export default function CustomAvatar(props) {
    const [currUserName, setCurrUserName] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
  
    useEffect(() => {
      setCurrUserName(JSON.parse(sessionStorage.getItem("userName")));
      return () => currUserName;
    }, [currUserName]);
  
    let navigate = useNavigate();
  
    const userName = currUserName;

    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  
    const handleLogout = () => {
      setTimeout(() => {
        endSession();
        logout();
      }, 10000);
  
      let path = "/";
      navigate(path);
    };

    return(
        <AvatarWrapper>
            <Stack direction="row" spacing={2}>
                <Tooltip className='AvatarToolTip' title="Avatar ToolTip">
                    <IconButton
                        onMouseEnter={handleOpenUserMenu}
                        sx={{ p: 0 }}
                    >
                        <Avatar className='Avatar' alt={userName} src="/static/images/avatar/2.jpg" /> 
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
                <MenuItem onClick={() => handleLogout()}>
                    <ListItemIcon>
                    <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
                </Menu>
            </Stack>
        </AvatarWrapper>
    )
}