import theme from "@/app/theme";
import Link from "next/link";

const { Button, ThemeProvider } = require("@mui/material");

const ButtonResaltado = ({ texto, width, event }) => (
  <ThemeProvider theme={theme}>
    <Button
      sx={{ borderRadius: "45px", width: width }}
      onClick={event}
      variant="contained"
      color="resaltado"
    >
      <Link href="/home" replace={true}>{texto}</Link>
    </Button>
  </ThemeProvider>
);

export default ButtonResaltado;
