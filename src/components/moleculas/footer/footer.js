import { Box, IconButton } from "@chakra-ui/react";
import HomeIcon from "../../icon/home/HomeIcon";
import HelpIcon from "../../icon/help/HelpIcon";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@chakra-ui/media-query";

function Footer() {
  const esResolucionMobile = useMediaQuery("(max-width: 767px)");
  const navigate = useNavigate()

  return (
    esResolucionMobile && (
      <>
        <Box
          position="fixed"
          bottom={0}
          width="100%"
          bg="#159895"
          py={2}
        >
          <Box
            display="flex"
            justifyContent="space-around"
            alignItems="center"
          >
            <IconButton onClick={() => navigate("/home/solicitante")} bg="#159895">
              <HomeIcon
                boxSize={6}
                color="white"
                cursor="pointer"
                _hover={{ color: "#57c5b6" }}
              />
            </IconButton>
            <IconButton onClick={() => navigate("/preguntas-frecuentes")} bg="#159895">
              <HelpIcon
                boxSize={6}
                color="white"
                cursor="pointer"
                _hover={{ color: "#57c5b6" }}
              />
            </IconButton>
          </Box>
        </Box>
      </>
    )
  );
}

export default Footer;