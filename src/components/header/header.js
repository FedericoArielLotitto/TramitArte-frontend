import { useAuth0 } from "@auth0/auth0-react";
import { Box } from "@chakra-ui/react";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useNavigate } from "react-router-dom";
import "./header.css";
//import Logo from "../logoAnimado/LogoAnimado";

export const HeaderComponent = () => {
  const navigate = useNavigate()
  const {logout}= useAuth0()
  return (
    <Box className="header">
      <Box className="logo">
        
      </Box>
      <Box className="header-button" style={{ display: "flex" }}>
        <Box className="other-button">
          <AccountBoxOutlinedIcon
            aria-label="Account"
            onClick={() => navigate("/profile-user")}
          >
            
          </AccountBoxOutlinedIcon>
        </Box>
        <Box className="other-button">
          <LogoutOutlinedIcon
            aria-label="Logout"
            onClick={() => logout()}
          >
          </LogoutOutlinedIcon>
        </Box>
      </Box>
    </Box>
  );
};