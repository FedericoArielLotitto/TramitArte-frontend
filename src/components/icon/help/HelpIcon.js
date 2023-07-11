import { ThemeProvider } from "@chakra-ui/react";
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import theme from "../../../theme";

const HelpIcon = () => (
  <ThemeProvider theme={theme}>
    <HelpOutlineOutlinedIcon color="info" />
  </ThemeProvider>
);

export default HelpIcon;