import { Box } from "@chakra-ui/react";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Link } from "react-router-dom";
import "./header.css";
import Logo from "../Logo/logo";

export const HeaderComponent = () => {

  return (
    <Box className="header">
      <Box className="logo">
        <Logo width="60%" />
      </Box>
      <Box className="header-button" style={{ display: "flex" }}>
        <Box className="other-button">
          <AccountBoxOutlinedIcon
            aria-label="Account"
          >
            <Link to={"/profile-user"}></Link>
          </AccountBoxOutlinedIcon>
        </Box>
        <Box className="other-button">
          <LogoutOutlinedIcon
            aria-label="Logout"
          >
            <Link to={"/api/auth/logout"}></Link>
          </LogoutOutlinedIcon>
        </Box>
      </Box>
    </Box>
  );
};