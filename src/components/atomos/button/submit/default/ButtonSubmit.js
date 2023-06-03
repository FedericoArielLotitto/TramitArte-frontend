import theme from "@/app/theme";

const { Button, ThemeProvider } = require("@mui/material");

const ButtonSubmit = ({ texto }) => (
  <ThemeProvider theme={theme}>
    <Button sx={{ borderRadius:'45px'}} variant="contained" color="primary">{texto}</Button>
  </ThemeProvider>
);

export default ButtonSubmit;
