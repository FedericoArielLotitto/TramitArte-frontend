import { ThemeProvider } from "@chakra-ui/react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import theme from "../../../theme";

const HomeIcon = () => (
  <ThemeProvider theme={theme}>
    <HomeOutlinedIcon color="info" />
  </ThemeProvider>
);

export default HomeIcon;