import { ThemeProvider } from "@emotion/react";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import theme from "../../../../../theme";

const MenuIcon = () => (
  <ThemeProvider theme={theme}>
    <MenuOutlinedIcon color="info"></MenuOutlinedIcon>
  </ThemeProvider>
);

export default MenuIcon;