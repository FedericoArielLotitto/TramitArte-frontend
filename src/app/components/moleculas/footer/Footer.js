import theme from "../../../theme";
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import BottomNavigation from '@mui/material/BottomNavigation';
import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HelpIcon from "../../atomos/icon/help/default/HelpIcon";
import HomeIcon from "../../atomos/icon/home/default/HomeIcons";
import breakpoints from "../../../breakpoints";

const { Box, ThemeProvider } = require("@mui/material");
const location = window.location

function Footer() {
  let esResolucionMobile = useMediaQuery(`(max-width: ${breakpoints.mobile})`)
  const navigation = useNavigate()
  
  return esResolucionMobile && (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%", position: "fixed", bottom: 0 }}>
                <BottomNavigation
                    className="footer"
                    sx={{ backgroundColor: "primary.dark" }}
                >
                    <BottomNavigationAction onClick={() => navigation(`/home/solicitante`)} icon={<HomeIcon />} />
                    <BottomNavigationAction onClick={() => navigation('/preguntas-frecuentes')} icon={<HelpIcon />} />
                </BottomNavigation>
            </Box>
    </ThemeProvider>
  );
}

export default Footer;
