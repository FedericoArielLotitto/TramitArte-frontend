import { Button, ThemeProvider } from "@chakra-ui/react";
import theme from "../../../theme";

const ButtonResaltado = ({ texto, width, onClick }) => (
  <ThemeProvider theme={theme}>
    <Button
      borderRadius="45px"
      width={width}
      onClick={onClick}
      variant="resaltado"
      backgroundColor={"#002B5B"}
      color={"#F6F4FF"}
    >
      {texto}
    </Button>
  </ThemeProvider>
);

export default ButtonResaltado;