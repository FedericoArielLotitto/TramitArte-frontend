"use client";
import theme from "@/app/theme";
import ButtonSubmit from "@/components/atomos/button/submit/default/ButtonSubmit";
import { Box, ThemeProvider, Typography } from "@mui/material";

function EleccionTramite() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: 'primary.main', height: '100vh', display: 'flex', alignItems: 'center', padding: '3.2rem'}}>
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            borderRadius: "30px",
            padding: "5%",
          }}
        >
          <Typography variant="h3">{"holaaa k aseéee"}</Typography>
          <ButtonSubmit texto={"Soy descendiente"} />
          <ButtonSubmit texto={"Saber si tengo descendencia"} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default EleccionTramite;
