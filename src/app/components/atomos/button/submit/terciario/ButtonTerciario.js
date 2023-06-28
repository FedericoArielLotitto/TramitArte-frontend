import theme from "@/app/theme";
import Link from "next/link";

const { Button, ThemeProvider } = require("@mui/material");

const ButtonTerciario = ({ texto, width, onClick }) => (
  <ThemeProvider theme={theme}>
    <Button
      sx={{ borderRadius: "45px", width: width }}
      onClick={onClick}
      variant="contained"
      color="secondary"
    >
      {texto}
    </Button>
  </ThemeProvider>
);

export default ButtonTerciario;
