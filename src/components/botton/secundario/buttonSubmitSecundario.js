import { Button, ThemeProvider } from "@chakra-ui/react";
import theme from "../../../theme";

const ButtonSubmitSecundario = ({ texto, event }) => (
  <ThemeProvider theme={theme}>
    <Button borderRadius="45px" variant="terciary" onClick={event}>
      {texto}
    </Button>
  </ThemeProvider>
);

export default ButtonSubmitSecundario;