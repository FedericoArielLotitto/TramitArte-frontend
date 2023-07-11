import { Box, IconButton, Menu, MenuItem, ThemeProvider, Toolbar } from "@chakra-ui/react";
import { useState } from "react";
import MenuIcon from "../../icon/menu/MenuIcon";
import UserIcon from "../../icon/user/UserIcon";
import ClearIcon from '@mui/icons-material/Clear';
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import MenuComponent from "../../menu/menu";
import theme from "../../../theme";
import { Link } from "react-router-dom";

function CustomAppBar({ cerrarSesion }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const menuItemStyle = {
    fontFamily: "Montserrat",
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "24px",
    letterSpacing: "0em",
    textAlign: "left",
    color: "#159895",
    width: "auto"
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
        <Box sx={{ backgroundColor: "primary.dark" }}>
            <Box sx={{ backgroundColor: "primary.dark" }} as="header">
                <Toolbar>
                <IconButton
                    size="lg"
                    color="white"
                    aria-label="menu"
                    sx={{ justifyContent: "flex-start", flex: 1 }}
                    onClick={toggleMenu}
                >
                    {menuOpen ? <ClearIcon /> : <MenuIcon />}
                </IconButton>
                <IconButton
                    size="lg"
                    color="white"
                    aria-label="user"
                    sx={{ justifyContent: "flex-end" }}
                    onClick={handleMenuOpen}
                >
                    <UserIcon />
                </IconButton>
                <Menu
                    colorScheme="blue"
                    isOpen={Boolean(menuAnchorEl)}
                    onClose={handleMenuClose}
                    placement="bottom-end"
                >
                    <MenuItem sx={menuItemStyle}>
                        <Link to={"/profile-user"}>Mi cuenta</Link>
                    </MenuItem>
                    <MenuItem sx={menuItemStyle}>
                        <Link to={"/user-dni"}>Mis Documentos</Link>
                    </MenuItem>
                    <MenuItem sx={menuItemStyle}>
                        <Link to={"/avo"}>Documentos AVO</Link>
                    </MenuItem>
                    <MenuItem onClick={cerrarSesion} sx={menuItemStyle} justifyContent="space-between">
                        Cerrar sesión
                        <LogoutOutlinedIcon
                        style={{ width: "33px", height: "33px" }}
                        ></LogoutOutlinedIcon>
                    </MenuItem>
                </Menu>
                </Toolbar>
            </Box>
            {menuOpen && <MenuComponent isOpen={menuOpen} />}
        </Box>
    </ThemeProvider>
  );
}

export default CustomAppBar;