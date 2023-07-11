import { Button } from "@chakra-ui/react";
import { ThemeProvider } from "@chakra-ui/react";
import theme from "../../../theme";

const customButtonStyle = { 
    color: "white",
    fontWeight: 800,
    fontSize: "1.5rem",
    lineHeight: "1.8rem",
    borderRadius: "2.8rem",
    width: "60%",
    height: "5.6rem"
}

const ButtonSubmitSecundarioDesktop = ({ text, event }) => (
    <ThemeProvider theme={theme}>
        <Button sx={customButtonStyle} variant="terciario" onClick={event}>{text}</Button>
    </ThemeProvider>
)

export default ButtonSubmitSecundarioDesktop;