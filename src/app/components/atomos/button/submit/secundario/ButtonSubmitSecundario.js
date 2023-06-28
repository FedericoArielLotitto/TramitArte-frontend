import theme from "@/app/theme";

const { Button, ThemeProvider } = require("@mui/material");

const ButtonSubmitSecundario = ({ texto, event }) => (
  <ThemeProvider theme={theme}>
    <Button sx={{ borderRadius:'45px'}} variant="contained" color="terciario" onClick={event}>{texto}</Button>
  </ThemeProvider>
);

export default ButtonSubmitSecundario;