import { ThemeProvider } from "@emotion/react";
import { SendOutlined } from "@mui/icons-material";
import theme from "@/app/theme";

const SendIcon = () => (
  <ThemeProvider theme={theme}>
    <SendOutlined color="primary"></SendOutlined>
  </ThemeProvider>
);

export default SendIcon;