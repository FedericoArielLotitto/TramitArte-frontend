import {
  Accordion,
  AccordionButton,
  AccordionPanel,
  AccordionItem,
  Box,
  Center,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Radio,
  RadioGroup,
  Button,
  Checkbox,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { ArrowBack } from "@mui/icons-material";
import { CalendarIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { useState, useCallback } from "react";

import ModalConfirmacion from "../components/ModalConfirmacion";
import ModalIsLoading from "../components/ModalIsLoading";
import tramiteService from "../services/TramiteService";

function SolicitudAVO() {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  const [isChecked, setIsChecked] = useState(true);
  const [estaCargando, setEstaCargando] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOnChangeSexRadioButton = () => {
    setIsChecked(!isChecked);
  };

  const handleConfirmacion = useCallback(() => {
    setEstaCargando(true);
    return tramiteService
      .cargarAVO()
      .then((response) => {
        setEstaCargando(false);
        console.log(response);
        navigate("/home/solicitante/tramite/etapa/2");
        return response;
      })
      .catch((error) => navigate("/network-error"));
  }, []);

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
      <Center p=".8rem">
        <Box
          borderTopRadius="20px"
          borderBottomRadius="30px"
          border=".1rem solid rgba(26, 54, 93, 1)"
          w="5xl"
        >
          <Box p="1rem">
            <Center
              borderRadius="15px"
              p=".8rem"
              bg="teal.600"
              color="white"
              fontWeight={"700"}
            >
              {"BÚSQUEDA AVO"}
            </Center>
          </Box>
          <Center>
            <Text p=".8rem">
              Completá los datos de tu antepasado italiano que emigró
            </Text>
          </Center>
          <Accordion allowToggle w="100%" maxW="100%">
            <AccordionItem borderRadius="45px">
              <h2>
                <AccordionButton
                  display="flex"
                  alignItems="center"
                  bg="teal.700"
                  color="white"
                  justifyContent="space-between"
                  // p={4}
                  w="full"
                  _hover={{ bg: "teal.700" }}
                  _expanded={{ display: "flex" }}
                  borderRadius="45px"
                >
                  <Text fontWeight={"700"}>COMPLETAR SOLICITUD</Text>
                  <ChevronDownIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
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
                <FormControl py="2%" color="blue.900" id="fecha-nacimiento-avo">
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
                  <Checkbox
                    colorScheme="teal"
                    color="blue.900"
                    size="lg"
                    p=".4rem"
                    isChecked={isChecked}
                    onChange={() => handleOnChangeSexRadioButton()}
                  >
                    Femenino
                  </Checkbox>
                  <Checkbox
                    colorScheme="teal"
                    color="blue.900"
                    size="lg"
                    p=".4rem"
                    isChecked={!isChecked}
                    onChange={() => handleOnChangeSexRadioButton()}
                  >
                    Masculino
                  </Checkbox>
                </FormControl>
                <Center>
                  <Button
                    borderRadius="45px"
                    w="sm"
                    p=".4rem"
                    fontSize="xl"
                    bg="teal.600"
                    color="white"
                    fontWeight={"700"}
                    boxShadow={"0px 0px 8px 4px rgba(0, 43, 91, 0.2)"}
                    onClick={onOpen}
                    _hover={{
                      bg: "teal.500",
                    }}
                  >
                    {"CARGAR AVO"}
                  </Button>
                </Center>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Center>
      <ModalConfirmacion
        pregunta={"¿Estás seguro de cargar estos datos de tu AVO?"}
        datoAConfirmar={
          "En cualquier caso, podés modificarlos desde tu perfil ;)"
        }
        isOpen={isOpen}
        onClose={onClose}
        handleConfirmacion={() => handleConfirmacion()}
      />
      <ModalIsLoading
        mensaje={"Esperanos mientras guardamos los datos de tu AVO... ;)"}
        isOpen={estaCargando}
      />
    </Box>
  );
}

export default SolicitudAVO;
