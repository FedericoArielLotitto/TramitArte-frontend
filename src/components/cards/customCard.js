import { Box, Typography } from "@chakra-ui/react";
import { ThemeProvider } from "@chakra-ui/react";
import theme from "../../theme";
import ButtonSubmitSecundario from "../botton/secundarioDesktop/bottonSubmitSecundarioDesktop";

function CustomCard({ event }) {
  return (
    <ThemeProvider theme={theme}>
      <Box
        bg="rgba(255, 255, 255, 0.8)"
        borderRadius="30px"
        padding="5%"
      >
        <Typography textAlign="center" color="terciary" fontWeight="bold">
          {"Aún no iniciaste tu trámite"}
        </Typography>
        <Typography textAlign="center" color="terciary" variant="h6">
          {"¡Inícialo aquí y consigue tu ciudadanía!"}
        </Typography>
        <Box display="flex" justifyContent="center" mt="4">
          <ButtonSubmitSecundario text="iniciar trámite" event={event} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default CustomCard;