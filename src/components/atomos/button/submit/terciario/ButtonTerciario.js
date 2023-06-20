import theme from "@/app/theme";
import Link from "next/link";

const { Button, ThemeProvider } = require("@mui/material");

const ButtonTerciario = ({ texto, width, event }) => (
  <ThemeProvider theme={theme}>
    <Button
      sx={{ borderRadius: "45px", width: width }}
      onClick={event}
      variant="contained"
      color="secondary"
    >
      <Link href="/home" replace={true}>{texto}</Link>
    </Button>
  </ThemeProvider>
);

export default ButtonTerciario;
