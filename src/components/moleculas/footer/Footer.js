import theme from "@/app/theme";
import HomeIcon from "@/components/atomos/icon/home/default/HomeIcons";
import HelpIcon from "@/components/atomos/icon/help/default/HelpIcon";

const { Box, ThemeProvider, IconButton } = require("@mui/material");

function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
          padding: "2% 0 2% 0",
          backgroundColor: "primary.dark",
          display: "flex",
          justifyContent: "space-around",
          position: 'absolute',
          bottom: 0
        }}
      >
        <IconButton>
          <HomeIcon></HomeIcon>
        </IconButton>
        <IconButton>
          <HelpIcon></HelpIcon>
        </IconButton>
      </Box>
    </ThemeProvider>
  );
}

export default Footer;
