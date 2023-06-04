import theme from "@/app/theme";

const { Button, ThemeProvider } = require("@mui/material");

const ButtonSubmitSecundario = ({ texto }) => (
  <ThemeProvider theme={theme}>
    <Button sx={{ borderRadius:'45px'}} variant="contained" color="terciario">{texto}</Button>
  </ThemeProvider>
);

export default ButtonSubmitSecundario;