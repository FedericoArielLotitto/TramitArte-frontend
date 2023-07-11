import { ChakraProvider } from "@chakra-ui/react";
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import theme from "../../../theme";

const UserIcon = () => (
  <ChakraProvider theme={theme}>
    <AccountBoxOutlinedIcon color="info" />
  </ChakraProvider>
);

export default UserIcon;