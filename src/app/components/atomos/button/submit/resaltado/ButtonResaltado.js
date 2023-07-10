import theme from "../../../../../theme";

const { Button, ThemeProvider } = require("@mui/material");

const ButtonResaltado = ({ texto, width, onClick }) => (
  <ThemeProvider theme={theme}>
    <Button
      sx={{ borderRadius: "45px", width: width }}
      onClick={onClick}
      variant="contained"
      color="resaltado"
    >
      {texto}
    </Button>
  </ThemeProvider>
);

export default ButtonResaltado;
