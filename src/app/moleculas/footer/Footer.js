import { useState } from "react";
import theme from "@/app/theme";
import HomeIcon from "@/app/atomos/icon/home/default/HomeIcons";
import HelpIcon from "@/app/atomos/icon/help/default/HelpIcon";

const { Box, ThemeProvider } = require("@mui/material");

function Footer() {
  const [value, setValue] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%", padding: '2% 0 2% 0', backgroundColor: "primary.main", display: 'flex', justifyContent: 'space-around' }}>
        <HomeIcon></HomeIcon>
        <HelpIcon></HelpIcon>
      </Box>
    </ThemeProvider>
  );
}

export default Footer;
