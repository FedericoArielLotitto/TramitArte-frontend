import theme from "@/app/theme";
import { CardMedia, ThemeProvider } from "@mui/material";

function Logo({ height, width }) {
  return (
      <img
        height={height}
        width={width}
        src="/assets/logo/logo.png"
      />
  );

}

export default Logo;
