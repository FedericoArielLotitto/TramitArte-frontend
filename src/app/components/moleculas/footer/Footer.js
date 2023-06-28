import theme from "@/app/theme";
import HomeIcon from "@/app/components/atomos/icon/home/default/HomeIcons";
import HelpIcon from "@/app/components/atomos/icon/help/default/HelpIcon";
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import BottomNavigation from '@mui/material/BottomNavigation';
import breakpoints from "@/app/breakpoints";
import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";

const { Box, ThemeProvider } = require("@mui/material");

function Footer() {
  let esResolucionMobile = useMediaQuery(`(max-width: ${breakpoints.mobile})`)
  
  return esResolucionMobile && (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%", position: "fixed", bottom: 0 }}>
                <BottomNavigation
                    className="footer"
                    sx={{ backgroundColor: "primary.dark" }}
                >
                    <BottomNavigationAction icon={<HomeIcon />} />
                    <BottomNavigationAction icon={<HelpIcon />} />
                </BottomNavigation>
            </Box>
    </ThemeProvider>
  );
}

export default Footer;
