import { ThemeProvider } from "@emotion/react";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import theme from "@/app/theme";

const MenuIcon = () => (
  <ThemeProvider theme={theme}>
    <MenuOutlinedIcon color="primary"></MenuOutlinedIcon>
  </ThemeProvider>
);
export default MenuIcon;