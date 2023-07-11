import { Button, ThemeProvider } from "@chakra-ui/react";
import theme from "../../../theme";

const ButtonTerciario = ({ texto, width, onClick }) => (
  <ThemeProvider theme={theme}>
    <Button
      borderRadius="45px"
      width={width}
      onClick={onClick}
      variant="secondary"
    >
      {texto}
    </Button>
  </ThemeProvider>
);

export default ButtonTerciario;