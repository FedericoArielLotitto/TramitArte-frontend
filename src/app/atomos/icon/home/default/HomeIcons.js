import { ThemeProvider } from "@emotion/react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import theme from "@/app/theme";

const HomeIcon = () => (
  <ThemeProvider theme={theme}>
    <HomeOutlinedIcon color="info"></HomeOutlinedIcon>
  </ThemeProvider>
);
export default HomeIcon;
