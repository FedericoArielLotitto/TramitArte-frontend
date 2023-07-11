import { Button } from "@chakra-ui/react";
import { ThemeProvider } from "@chakra-ui/react";
import theme from "../../../theme";

const ButtonSubmit = ({ text, width, event }) => (
  <ThemeProvider theme={theme}>
    <Button borderRadius="45px" width={width} onClick={event} variant="primary">
      {text}
    </Button>
  </ThemeProvider>
);

export default ButtonSubmit;