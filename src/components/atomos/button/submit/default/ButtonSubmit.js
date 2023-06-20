import theme from "@/app/theme";

const { Button, ThemeProvider } = require("@mui/material");

const ButtonSubmit = ({ texto, width, event }) => (
  <ThemeProvider theme={theme}>

    <Button sx={{ borderRadius:'45px', width: width }} onClick={event} variant="contained" color="primary">{texto}</Button>

  </ThemeProvider>
);

export default ButtonSubmit;
