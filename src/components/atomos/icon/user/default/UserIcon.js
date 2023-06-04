import { ThemeProvider } from "@emotion/react";
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import theme from "@/app/theme";

const UserIcon = () => (
  <ThemeProvider theme={theme}>
    <AccountBoxOutlinedIcon color="info"></AccountBoxOutlinedIcon>
  </ThemeProvider>
);
export default UserIcon;