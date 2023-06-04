import theme from "@/app/theme";
import HomeIcon from "@/components/atomos/icon/home/default/HomeIcons";
import HelpIcon from "@/components/atomos/icon/help/default/HelpIcon";
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import BottomNavigation from '@mui/material/BottomNavigation';
import { HomeOutlined } from "@mui/icons-material";

const { Box, ThemeProvider } = require("@mui/material");

function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%" }}>
                <BottomNavigation
                    className="footer"
                >
                    <BottomNavigationAction icon={<HomeIcon />} />
                    <BottomNavigationAction icon={<HelpIcon />} />
                </BottomNavigation>
            </Box>
    </ThemeProvider>
  );
}

export default Footer;
