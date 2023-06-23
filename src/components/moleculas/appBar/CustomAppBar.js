import theme from "@/app/theme";
import MenuIcon from "@/components/atomos/icon/menu/default/MenuIcon";
import UserIcon from "@/components/atomos/icon/user/default/UserIcon";
import { ThemeProvider } from "@emotion/react";
import { AppBar, Box, Toolbar, IconButton } from "@mui/material";

function CustomAppBar({cerrarSesion}) {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: "primary.dark" }}>
        <AppBar sx={{ backgroundColor: "primary.dark" }} position="static">
          <Toolbar>
            <IconButton
              size="large"
              color="inherit"
              aria-label="menu"
              sx={{ justifyContent: 'flex-start', flexGrow: 1 }}
            >
              <MenuIcon />
            </IconButton>
            <IconButton size="large"
              color="inherit"
              aria-label="menu"
              sx={{ justifyContent: 'flex-end'}}
              >
              <UserIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

export default CustomAppBar;
