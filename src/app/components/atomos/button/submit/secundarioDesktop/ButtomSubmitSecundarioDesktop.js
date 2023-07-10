import theme from "../../../../../theme";
const { Button, ThemeProvider } = require("@mui/material");

const buttomStyle = { 
    color: "white",
    fontWeight: 800,
    fontSize: "1.5rem",
    lineHeight: "1.8rem",
    borderRadius: "2.8rem",
    width: "60%",
    height: "5.6rem"
}

const ButtomSubmitSecundarioDesktop = ({text, event}) => (
    <ThemeProvider theme={theme}>
        <Button sx={buttomStyle} variant="contained" color="terciario" onClick={event}>{text}</Button>
  </ThemeProvider>
)

export default ButtomSubmitSecundarioDesktop