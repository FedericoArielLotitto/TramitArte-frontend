import { Box, Center } from "@chakra-ui/react";
import InputFile from "./InputFile";
import InputCertficadoNoObligatorio from "./InputCertificadoNoObligatorio";

function DocumentacionAVO() {
  return (
    <Box borderRadius="30px" bg="teal.100">
      <Center py="2%">
        <InputCertficadoNoObligatorio
          preguntaConfirmacion={"¿Ha fallecido?"}
          accion="certificado de defunción"
        />
      </Center>
      <Center py="2%">
        <InputCertficadoNoObligatorio
          preguntaConfirmacion={"¿Estaba en relación de matrimonio?"}
          accion="certificado de matrimonio"
        />
      </Center>
      <Center py="2%">
        <InputFile accion="certificado de nacimiento" />
      </Center>
    </Box>
  );
}

export default DocumentacionAVO;
