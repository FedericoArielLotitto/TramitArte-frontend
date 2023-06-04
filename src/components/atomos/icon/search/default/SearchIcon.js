import { ThemeProvider } from "@emotion/react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import theme from "@/app/theme";

const SearchIcon = () => (
  <ThemeProvider theme={theme}>
    <SearchOutlinedIcon color="primary"></SearchOutlinedIcon>
  </ThemeProvider>
);

export default SearchIcon;