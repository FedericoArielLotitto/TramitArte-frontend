import theme from "../../../theme"

import { ThemeProvider } from "@emotion/react";
import { AppBar, Box, Toolbar, IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from 'react';
import MenuComponent from "../menu/menu";
import ClearIcon from '@mui/icons-material/Clear';
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import MenuIcon from "../../atomos/icon/menu/default/MenuIcon";
import UserIcon from "../../atomos/icon/user/default/UserIcon";
import {useNavigate } from "react-router-dom";

function CustomAppBar({ cerrarSesion }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const navigation = useNavigate();

  const menuItemStyle = {
    fontFamily: "Montserrat",
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "24px",
    letterSpacing: "0em",
    textAlign: "left",
    color: "#159895",
    width: "auto"
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handleChangePage = (path) =>{
    setMenuAnchorEl(null);
    navigation(path)
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: 'primary.dark' }}>
        <AppBar sx={{ backgroundColor: 'primary.dark' }} position="static">
          <Toolbar>
            <IconButton
              size="large"
              color="inherit"
              aria-label="menu"
              sx={{ justifyContent: 'flex-start', flexGrow: 1 }}
              onClick={toggleMenu}
            >
              {menuOpen ? (<ClearIcon/>) : (<MenuIcon />)}
            </IconButton>
            <IconButton
              size="large"
              color="inherit"
              aria-label="menu"
              sx={{ justifyContent: 'flex-end' }}
              onClick={handleMenuOpen}
            >
              <UserIcon />
            </IconButton>
            <Menu
              sx={{color:"blue"}}
              anchorEl={menuAnchorEl}
              open={Boolean(menuAnchorEl)}
              onClose={handleMenuClose}
              PaperProps={{
                sx: {
                  borderRadius: '15px 0px 15px 15px',
                  border: '2px solid #159895',
                },
              }}
            >
              <MenuItem style={menuItemStyle} onClick={() => navigation("/profile-user")}>Mi cuenta</MenuItem>
              <hr color="#159895" style={{marginLeft:"10px", marginRight:"10px"}}></hr>
              <MenuItem style={menuItemStyle} onClick={() => handleChangePage("/user-dni")}>Mis documentos</MenuItem>
              <hr color="#159895" style={{marginLeft:"10px", marginRight:"10px"}}></hr>
              <MenuItem style={menuItemStyle} onClick={() => handleChangePage("/avo")}>Documentos AVO</MenuItem>
              <hr color="#159895" style={{marginLeft:"10px", marginRight:"10px"}}></hr>
              <MenuItem onClick={cerrarSesion} style={menuItemStyle} sx={{justifyContent:"space-between"}}>
                  Cerrar<br></br>sesión
                  <LogoutOutlinedIcon
                  style={{ width: "33px", height: "33px" }}
                  ></LogoutOutlinedIcon>
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
      {menuOpen && (
        <MenuComponent isOpen={menuOpen}/>
      )}
    </ThemeProvider>
  );
}

export default CustomAppBar;
