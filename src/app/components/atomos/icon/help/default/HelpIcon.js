import { ThemeProvider } from "@emotion/react";
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import theme from "../../../../../theme";

const HelpIcon = () => (
  <ThemeProvider theme={theme}>
    <HelpOutlineOutlinedIcon color="info"></HelpOutlineOutlinedIcon>
  </ThemeProvider>
);
export default HelpIcon;