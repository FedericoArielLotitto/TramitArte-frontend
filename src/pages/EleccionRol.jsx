import { Box, Center, Button } from "@chakra-ui/react";
import LogoAnimado from "../components/logoAnimado/LogoAnimado";
import { useNavigate } from "react-router";

function EleccionRol() {
  const navigate = useNavigate();

  return (
    <Box minH="100%" bg="teal.200">
      <Center
        gap="2.4rem"
        flexWrap="wrap"
        justifyContent="space-around"
        aliggItems="center"
        spacing="3.6rem"
        bg="teal.200"
        p="2.4rem"
      >
        <Box w="sm">
          <Button
            onClick={() => navigate(`/home/solicitante`)}
            borderRadius="45px"
            color="white"
            w="100%"
            bg="blue.900"
          >
            {"SOLICITANTE"}
          </Button>
        </Box>
        <Box w="sm">
          <Button
            onClick={() => navigate(`/home/traductor`)}
            borderRadius="45px"
            color="white"
            w="100%"
            bg="teal.500"
          >
            {"TRADUCTOR"}
          </Button>
        </Box>
      </Center>
      <Center>
        <Box maxW="sm">
          <LogoAnimado />
        </Box>
      </Center>
    </Box>
  );
}

export default EleccionRol;
