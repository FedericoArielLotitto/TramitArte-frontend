import theme from "@/app/theme";

const { Button, ThemeProvider } = require("@mui/material");

const ButtonResaltado = ({ texto, width, event }) => (
  <ThemeProvider theme={theme}>
    <Button sx={{ borderRadius:'45px', width: width }} onClick={event} variant="contained" color="resaltado">{texto}</Button>
  </ThemeProvider>
);

export default ButtonResaltado;
