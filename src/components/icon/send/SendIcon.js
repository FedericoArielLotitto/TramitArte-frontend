import { ChakraProvider } from "@chakra-ui/react";
import { SendOutlined } from "@mui/icons-material";
import theme from "../../../theme";

const SendIcon = () => (
  <ChakraProvider theme={theme}>
    <SendOutlined color="primary" />
  </ChakraProvider>
);

export default SendIcon;