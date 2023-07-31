import {
  Stack,
  Checkbox,
  Box,
  useDisclosure,
  Text,
  Flex,
  Collapse,
  Center,
} from "@chakra-ui/react";
import InputFile from "./InputFile";

function InputCertficadoNoObligatorio({ preguntaConfirmacion, accion }) {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Flex color="blue.900" w="95%" flexDirection={"column"}>
      <Flex justifyContent="space-around">
        <Center>
          <Text textAlign="center">{preguntaConfirmacion}</Text>
        </Center>
        <Box>
          <Checkbox isChecked={isOpen} onChange={onToggle}>
            {"Sí"}
          </Checkbox>
          <Checkbox isChecked={!isOpen} onChange={onToggle}>
            No
          </Checkbox>
        </Box>
      </Flex>
      <Collapse in={isOpen}>
        <InputFile accion={accion} />
      </Collapse>
    </Flex>
  );
}

export default InputCertficadoNoObligatorio;
