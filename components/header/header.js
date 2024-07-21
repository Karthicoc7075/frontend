import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { MenuOpen } from "@mui/icons-material";
import { alpha } from "@mui/material/styles";
import {  Settings } from "@mui/icons-material";
import { Menu, MenuItem, Typography, useMediaQuery } from "@mui/material";
import { getAuthSelector } from "../../features/auth/selectors/authSelector";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import {logout} from '../../features/auth/actions/authActions'
import { Link } from "react-router-dom";

export default function Header({ onOpenSidebar }) {
  const theme = useTheme();
const lgUp = useMediaQuery(theme.breakpoints.up("lg"));
  const [anchorEl, setAnchorEl] = useState(null);
const auth = useSelector(getAuthSelector);
const dispatch = useDispatch()

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleModelClose = () => {
    setAnchorEl(null);
  };

  const Logout = () => {
    dispatch(logout())
  }


  const handleLogout = () => {
    Logout()
   handleModelClose()
  }


  useState(() => {
    const token = auth.token;
    if (token) {
      const decode = jwtDecode(token);
      const expireDate =new Date(decode.exp * 1000)
      if(expireDate < new Date()){
        Logout()
      }
    }
  }, [auth.token]);



  const renderContent = (
    <>
      <Typography
        variant="h6"
        noWrap
        sx={{ fontWeight: "fontWeightSemiMedium", color: "text.primary" }}
      >
        Admin panel
      </Typography>

      <Box sx={{ flexGrow: 1 }} />
      {!lgUp && (
        <IconButton onClick={onOpenSidebar} sx={{ mr: 1 }}>
          <MenuOpen />
        </IconButton>
      )}
      <Stack direction="row" alignItems="center" spacing={1}>
        <IconButton onClick={handleClick} >
          <Settings  />
        </IconButton>
      </Stack>

      <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleModelClose}
            MenuListProps={{
              'aria-labelledby': 'long-button',
            }}
            sx={{
              '& .MuiMenu-paper': {
                py:.6,
                px:2.4,
                boxShadow: (theme) => theme.shadows[10],
                borderRadius: 2,
              }
            
            }}
          >
            <MenuItem component={Link} to='/setting' onClick={handleModelClose} >Setting</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
    </>
  );

  return (
    <AppBar
      sx={{
        width: "calc(100% - 2rem)",
        margin: "1rem",
        borderRadius: "1rem",
        height: 64,
        boxSizing: "border-box",
        zIndex: theme.zIndex.appBar + 1,
        backdropFilter: `blur(${6}px)`,
        WebkitBackdropFilter: `blur(${6}px)`,
        backgroundColor: (theme) => alpha(theme.palette.grey[0], 0.8),
        transition: theme.transitions.create(["height"], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(lgUp && {
          width: `calc(100% - ${280 + 1}px - 2rem)`,
          height: 68,
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}
