import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import "./header.css";
import Logo from "@/app/components/atomos/logo/Logo";
import { IconButton } from "@mui/material";
import { useRouter } from "next/navigation";

export const HeaderComponent = () => {
  const router = useRouter()
  
  return (
    <div class="header">
      <div class="logo">
        <Logo width={"60%"} />
      </div>
      <div class="header-button" style={{ display: "flex" }}>
        <div className="other-button">
          <AccountBoxOutlinedIcon
            style={{ width: "33px", height: "33px" }}
          ></AccountBoxOutlinedIcon>
        </div>
        <div className="other-button">
          <IconButton onClick={() => router.push("/api/auth/logout")}>
            <LogoutOutlinedIcon
              style={{ width: "33px", height: "33px" }}
            ></LogoutOutlinedIcon>
          </IconButton>
        </div>
      </div>
    </div>
  );
};
