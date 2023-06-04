import theme from "@/app/theme";
import ButtonSubmitSecundario from "@/components/atomos/button/submit/secundario/ButtonSubmitSecundario";
import { ThemeProvider } from "@emotion/react";
import { Box, Container, Typography } from "@mui/material";

function CustomCard() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: "30px",
          padding: '5%'
        }}
      >
        <Typography textAlign="center" color="terciario">
          {"Aún no iniciaste tu trámite"}
        </Typography>
        <Typography textAlign="center" color="terciario" variant="h6">
          {"¡Inicialo acá y consegúi tu ciudadanía!"}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center'}}>
          <ButtonSubmitSecundario texto="iniciar trámite"></ButtonSubmitSecundario>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default CustomCard;
