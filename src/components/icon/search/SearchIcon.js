import { ChakraProvider } from "@chakra-ui/react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import theme from "../../../theme";

const SearchIcon = () => (
  <ChakraProvider theme={theme}>
    <SearchOutlinedIcon color="primary" />
  </ChakraProvider>
);

export default SearchIcon;