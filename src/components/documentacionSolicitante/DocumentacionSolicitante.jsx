import InputFile from "./InputFile";
import { Box, Center } from "@chakra-ui/react";

function DocumentacionSolicitante() {
  return (
    <Box borderRadius="30px" bg="teal.100">
      <Center py="2%">
        <InputFile accion="dni frente" />
      </Center>
      <Center py="2%">
        <InputFile accion="dni dorso" />
      </Center>
      <Center py="2%">
        <InputFile accion="certificado de nacimiento" />
      </Center>
    </Box>
  );
}

export default DocumentacionSolicitante;
