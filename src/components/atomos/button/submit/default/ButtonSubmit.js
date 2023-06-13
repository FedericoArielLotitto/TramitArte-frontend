import theme from "@/app/theme";

const { Button, ThemeProvider } = require("@mui/material");

const ButtonSubmit = ({ texto, event }) => (
  <ThemeProvider theme={theme}>
    <Button sx={{ borderRadius:'45px'}} onClick={event} variant="contained" color="primary">{texto}</Button>
  </ThemeProvider>
);

export default ButtonSubmit;
