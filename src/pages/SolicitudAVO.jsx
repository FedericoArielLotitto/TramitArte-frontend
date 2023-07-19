import {
  Accordion,
  AccordionButton,
  AccordionPanel,
  AccordionItem,
  AccordionIcon,
  Box,
  Center,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  Icon,
  Radio,
  Wrap,
  WrapItem,
  RadioGroup,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { ArrowBack, CalendarMonth } from "@mui/icons-material";
import { CalendarIcon } from "@chakra-ui/icons";
import { useState } from "react";

function SolicitudAVO() {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  const [isChecked, setIsChecked] = useState(true);

  const handleOnChangeSexRadioButton = () => {
    setIsChecked(!isChecked);
  }

  return (
    <Box minH="100%" bg="blue.50">
      <Flex w="100%" p=".8rem" justify="space-between">
        <IconButton
          onClick={() => handleBack()}
          color="blue.900"
          bg="white"
          boxShadow={"0px 4px 10px 3px rgba(26, 54, 93, .5)"}
          borderRadius="50%"
          size="lg"
          icon={<ArrowBack />}
        />
      </Flex>
      <Center p="1.4rem">
        <Center
          w="sm"
          borderRadius="45px"
          py=".8rem"
          bg="blue.900"
          color="white"
          fontWeight={"700"}
        >
          {"X9889MW"}
        </Center>
      </Center>
      <Center p="1.8rem">
        <Box
          borderTopRadius="20px"
          borderBottomRadius="30px"
          border=".1rem solid rgba(26, 54, 93, 1)"
        >
          <Box p="1rem">
            <Center
              w="sm"
              borderRadius="15px"
              p=".4rem"
              bg="teal.600"
              color="white"
              fontWeight={"700"}
            >
              {"BÚSQUEDA AVO"}
            </Center>
          </Box>
          <Center w="sm">
            <Text p=".8rem">
              Completá los datos de tu antepasado italiano que emigró
            </Text>
          </Center>

          <Accordion allowMultiple>
            <AccordionItem>
              <AccordionButton bg="teal.600" color="white" borderRadius="45px">
                <Box
                  p=".4rem"
                  fontWeight={"700"}
                  as="span"
                  flex="1"
                  textAlign="center"
                >
                  COMPLETAR SOLICITUD
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={2}>
                <Box>
                  <FormControl py="2%" color="blue.900" id="nombre-avo">
                    <FormLabel>Nombre</FormLabel>
                    <Input
                      h={12}
                      borderRadius="25px"
                      border="1px solid rgba(26, 54, 93, 1)"
                      type="text"
                      placeholder="Nombre..."
                    />
                  </FormControl>
                  <FormControl py="2%" color="blue.900" id="apellido-avo">
                    <FormLabel>Apellido</FormLabel>
                    <Input
                      h={12}
                      borderRadius="25px"
                      border="1px solid rgba(26, 54, 93, 1)"
                      type="text"
                      placeholder="Apellido..."
                    />
                  </FormControl>
                  <FormControl
                    py="2%"
                    color="blue.900"
                    id="fecha-nacimiento-avo"
                  >
                    <FormLabel>Fecha</FormLabel>
                    <InputGroup>
                      <Input
                        h={12}
                        borderRadius="25px"
                        border="1px solid rgba(26, 54, 93, 1)"
                        type="text"
                        placeholder="Fecha de nacimiento..."
                      />
                      <InputRightElement>
                        <CalendarIcon
                          color="blue.800"
                          boxSize={10}
                          pt=".6rem"
                          pr=".8rem"
                        />
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                  <FormControl py="2%" color="blue.900" id="sexo-avo">
                    <FormLabel>Sexo biol&oacute;gico</FormLabel>
                    <RadioGroup textAlign="center">
                      <Radio
                        isChecked={isChecked}
                        onChange={handleOnChangeSexRadioButton}
                        h={12}
                        w="sm"
                        p=".4rem"
                        borderRadius="25px"
                        border="1px solid rgba(26, 54, 93, 1)"
                        type="text"
                        >
                        Femenino
                      </Radio>
                      <Radio
                        isChecked={!isChecked}
                        onChange={handleOnChangeSexRadioButton}
                        h={12}
                        w="sm"
                        p=".4rem"
                        borderRadius="25px"
                        border="1px solid rgba(26, 54, 93, 1)"
                        type="text"
                      >
                        Masculino
                      </Radio>
                    </RadioGroup>
                  </FormControl>
                  <Box p=".5rem">
                    <Center
                      borderRadius="45px"
                      p=".4rem"
                      fontSize="xl"
                      bg="teal.600"
                      color="white"
                      fontWeight={"700"}
                      boxShadow={"0px 0px 8px 4px rgba(0, 43, 91, 0.2)"}
                    >
                      {"CARGAR AVO"}
                    </Center>
                  </Box>
                </Box>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Center>
    </Box>
  );
}

export default SolicitudAVO;
