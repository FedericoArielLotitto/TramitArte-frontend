import { ChakraProvider } from "@chakra-ui/react";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import theme from "../../../theme";

const MenuIcon = () => (
  <ChakraProvider theme={theme}>
    <MenuOutlinedIcon color="info" />
  </ChakraProvider>
);

export default MenuIcon;