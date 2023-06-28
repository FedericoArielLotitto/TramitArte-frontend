import theme from "@/app/theme";
import HomeIcon from "@/app/components/atomos/icon/home/default/HomeIcons";
import HelpIcon from "@/app/components/atomos/icon/help/default/HelpIcon";
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import BottomNavigation from '@mui/material/BottomNavigation';
import breakpoints from "@/app/breakpoints";
import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/navigation";

const { Box, ThemeProvider } = require("@mui/material");
const location = window.location

function Footer() {
  let esResolucionMobile = useMediaQuery(`(max-width: ${breakpoints.mobile})`)
  const router = useRouter()
  
  return esResolucionMobile && (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%", position: "fixed", bottom: 0 }}>
                <BottomNavigation
                    className="footer"
                    sx={{ backgroundColor: "primary.dark" }}
                >
                    <BottomNavigationAction onClick={() => router.push(`/home/solicitante`)} icon={<HomeIcon />} />
                    <BottomNavigationAction onClick={() => router.push('/preguntas-frecuentes')} icon={<HelpIcon />} />
                </BottomNavigation>
            </Box>
    </ThemeProvider>
  );
}

export default Footer;
