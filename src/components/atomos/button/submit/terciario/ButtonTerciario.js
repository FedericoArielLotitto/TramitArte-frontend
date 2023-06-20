import theme from "@/app/theme";

const { Button, ThemeProvider } = require("@mui/material");

const ButtonTerciario = ({ texto, width, event }) => (
  <ThemeProvider theme={theme}>
    <Button sx={{ borderRadius:'45px', width: width }} onClick={event} variant="contained" color="secondary">{texto}</Button>
  </ThemeProvider>
);

export default ButtonTerciario;
