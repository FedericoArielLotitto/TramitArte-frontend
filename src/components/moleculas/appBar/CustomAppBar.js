import { Box, Button, IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";
import MenuIcon from "../../icon/menu/MenuIcon";
import UserIcon from "../../icon/user/UserIcon";
import ClearIcon from '@mui/icons-material/Clear';
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import MenuComponent from "../../menu/menu";
import { useNavigate } from "react-router-dom";

function CustomAppBar({ cerrarSesion }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate()

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

  return (
        <Box sx={{ backgroundColor: "#159895" }}>
            <Box sx={{ backgroundColor: "#159895" }} as="header" height={"3rem"} display={"flex"} justifyContent={"end"}>
            <IconButton
              size="large"
              color="inherit"
              aria-label="menu"
              backgroundColor={"#159895"}
              onClick={toggleMenu}
            >
              {menuOpen ? (<ClearIcon/>) : (<MenuIcon />)}
            </IconButton>
            <Menu>
                <MenuButton as={Button} backgroundColor={"#159895"} display={"flex"} justifyContent={"center"} alignItems={"center"} height={"100%"}>
                    <UserIcon />
                </MenuButton>
                <MenuList>
                    <MenuItem style={menuItemStyle} onClick={() => navigate("/profile-user")}>Mi cuenta</MenuItem>
                    <MenuItem style={menuItemStyle} onClick={() => navigate("/user-dni")}>Mis documentos</MenuItem>
                    <MenuItem style={menuItemStyle} onClick={() => navigate("/avo")}>Documentos AVO</MenuItem>
                    <MenuItem style={menuItemStyle} onClick={cerrarSesion}>
                        Cerrar sesión
                        <LogoutOutlinedIcon style={{ width: "33px", height: "33px" }}/>
                        </MenuItem>
                </MenuList>
                </Menu>
            </Box>
            {menuOpen && <MenuComponent isOpen={menuOpen} />}
        </Box>
  );
}

export default CustomAppBar;