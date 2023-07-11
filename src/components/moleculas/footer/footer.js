import { Box, ThemeProvider } from "@chakra-ui/react";
import HomeIcon from "../../icon/home/HomeIcon";
import HelpIcon from "../../icon/help/HelpIcon";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@chakra-ui/media-query";
import theme from "../../../theme";

function Footer() {
  const esResolucionMobile = useMediaQuery("(max-width: 767px)");

  return (
    esResolucionMobile && (
      <ThemeProvider theme={theme}>
        <Box
          position="fixed"
          bottom={0}
          width="100%"
          bg="primary.dark"
          py={2}
        >
          <Box
            display="flex"
            justifyContent="space-around"
            alignItems="center"
          >
            <HomeIcon
              boxSize={6}
              color="white"
              cursor="pointer"
              _hover={{ color: "primary.main" }}
            >
                <Link to={"/home/solicitante"}></Link>
            </HomeIcon>
            <HelpIcon
              boxSize={6}
              color="white"
              cursor="pointer"
              _hover={{ color: "primary.main" }}
            >
                <Link to={"/preguntas-frecuentes"}></Link>
            </HelpIcon>
          </Box>
        </Box>
      </ThemeProvider>
    )
  );
}

export default Footer;