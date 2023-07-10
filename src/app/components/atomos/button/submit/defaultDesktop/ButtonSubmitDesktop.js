import theme from "../../../../../theme";

const { Button, ThemeProvider } = require("@mui/material");

const styles = {
    width: "12.5rem",
    height: "3rem",
    background: "#57C5B6",
    borderRadius: "3rem",
    fontFamily: 'Montserrat',
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "1em",
    lineHeight: "1.25em",
    color: "#000000"
}

const ButtonSubmitDesktop = ({ texto, event, type }) => (
  <>
    {type == "cancel" ? (
      <ThemeProvider theme={theme}>
        <Button sx={styles} style={{background: "#BBBBBB"}} variant="contained" color="primary" onClick={event}>{texto}</Button>
      </ThemeProvider>
    ) : (
      <ThemeProvider theme={theme}>
        <Button sx={styles} variant="contained" color="primary" onClick={event}>{texto}</Button>
      </ThemeProvider>
    )}
  </>
);

export default ButtonSubmitDesktop;