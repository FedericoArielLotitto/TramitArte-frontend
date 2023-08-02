import { Box, Center } from "@chakra-ui/react";
import InputFile from "./InputFile";
import InputCertficadoNoObligatorio from "./InputCertificadoNoObligatorio";

function DocumentacionAVO() {
  return (
    <Box w="100%" borderRadius="30px" bg="teal.100">
      <Center flexWrap="wrap" gap={2} w="100%" p="2%">
        <InputCertficadoNoObligatorio
          preguntaConfirmacion={"¿Ha fallecido?"}
          accion="certificado de defunción"
        />
        <InputCertficadoNoObligatorio
          preguntaConfirmacion={"¿Estaba en relación de matrimonio?"}
          accion="certificado de matrimonio"
        />
        <InputFile accion="certificado de nacimiento" />
      </Center>
    </Box>
  );
}

export default DocumentacionAVO;
