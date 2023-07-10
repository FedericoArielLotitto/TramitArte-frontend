import theme from "../../../theme";

import { ThemeProvider } from "@emotion/react";
import { Box, Container, Typography } from "@mui/material";
import ButtonSubmitSecundario from "../../atomos/button/submit/secundario/ButtonSubmitSecundario";

function CustomCard(event) {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: "30px",
          padding: '5%'
        }}
      >
        <Typography textAlign="center" color="terciario.main">
          {"Aún no iniciaste tu trámite"}
        </Typography>
        <Typography textAlign="center" color="terciario.main" variant="h6">
          {"¡Inicialo acá y consegúi tu ciudadanía!"}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center'}}>
          <ButtonSubmitSecundario texto="iniciar trámite" event={event}></ButtonSubmitSecundario>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default CustomCard;
