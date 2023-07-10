import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import "./header.css";
import { IconButton } from "@mui/material";
import Logo from "../atomos/logo/Logo";
import { useNavigate } from "react-router-dom";

export const HeaderComponent = () => {
  const navigate = useNavigate()
  
  return (
    <div class="header">
      <div class="logo">
        <Logo width={"60%"} />
      </div>
      <div class="header-button" style={{ display: "flex" }}>
        <div className="other-button">
          <AccountBoxOutlinedIcon
            style={{ width: "33px", height: "33px" }}
            onClick={() => navigate("/profile-user")}
          ></AccountBoxOutlinedIcon>
        </div>
        <div className="other-button">
          <IconButton onClick={() => navigate("/api/auth/logout")}>
            <LogoutOutlinedIcon
              style={{ width: "33px", height: "33px" }}
            ></LogoutOutlinedIcon>
          </IconButton>
        </div>
      </div>
    </div>
  );
};
