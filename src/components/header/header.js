import { Box } from "@chakra-ui/react";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useNavigate } from "react-router-dom";
import "./header.css";
//import Logo from "../logoAnimado/LogoAnimado";

export const HeaderComponent = () => {
  const navigate = useNavigate()

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
            onClick={() => navigate("/api/auth/logout")}
          >
          </LogoutOutlinedIcon>
        </Box>
      </Box>
    </Box>
  );
};