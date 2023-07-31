import InputFile from "./InputFile";
import { Box, Center } from "@chakra-ui/react";

function DocumentacionSolicitante({
  agregarDocumentacionSolicitante,
}) {
  const handleInputDniFrente = (e) => {
    agregarDocumentacionSolicitante({
      id: "dni-frente",
      archivo: e.target.files[0],
    });
  };

  const handleInputDniDorso = (e) => {
    agregarDocumentacionSolicitante({
      id: "dni-dorso",
      archivo: e.target.files[0],
    });
  };

  const handleInputCertificadoNacimiento = (e) => {
    agregarDocumentacionSolicitante({
      id: "certficado-nacimiento",
      archivo: e.target.files[0],
    });
  };

  return (
    <Box borderRadius="30px" bg="teal.100">
      <Center py="2%">
        <InputFile handleOnInput={handleInputDniFrente} accion="dni frente" />
      </Center>
      <Center py="2%">
        <InputFile handleOnInput={handleInputDniDorso} accion="dni dorso" />
      </Center>
      <Center py="2%">
        <InputFile handleOnInput={handleInputCertificadoNacimiento} accion="certificado de nacimiento" />
      </Center>
    </Box>
  );
}

export default DocumentacionSolicitante;
