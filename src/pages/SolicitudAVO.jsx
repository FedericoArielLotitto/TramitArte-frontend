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
  Button,
  Checkbox,
  useDisclosure,
  FormErrorMessage,
  Select,
  HStack,
  FormHelperText,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { ArrowBack } from "@mui/icons-material";
import { CalendarIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { useState, useCallback } from "react";

import ModalConfirmacion from "../components/ModalConfirmacion";
import ModalIsLoading from "../components/ModalIsLoading";
import tramiteService from "../services/TramiteService";

function SolicitudAVO() {
  const dias = [...Array(31).keys()].map((i) => i + 1);
  const meses = [...Array(12).keys()].map((i) => i + 1);
  const anios = [...Array(new Date().getFullYear()).keys()]
    .map((i) => i + 1000)
    .filter((i) => i < 2023 - 18);

  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  const [isChecked, setIsChecked] = useState(true);
  const [estaCargando, setEstaCargando] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [nombreAVO, setNombreAVO] = useState("");
  const [apellidoAVO, setApellidoAVO] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState({
    dia: '1',
    mes: '10',
    anio: '1995',
  });

  const handleOnChangeNombreAVO = (e) => {
    setNombreAVO(e.target.value);
  };

  const handleOnChangeApellidoAVO = (e) => {
    setApellidoAVO(e.target.value);
  };

  const handleOnChangeFechaNacimientoAVO = (fechaNacimientoNueva) => {
    setFechaNacimiento(fechaNacimientoNueva)
  };

  const handleOnChangeSexRadioButton = () => {
    setIsChecked(!isChecked);
  };

  const handleOnClickSubmitAVO = () => {
    if (esValidoTextTypeInput()) {
      onOpen();
    }
  };

  const esValidoTextTypeInput = () => {
    return nombreAVO.match(/[a-zA-Z]\w+/g);
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
            <Text textAlign="center" p=".8rem">
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
                <FormControl
                  isInvalid={!esValidoTextTypeInput()}
                  isRequired
                  py="2%"
                  color="blue.900"
                  id="nombre-avo"
                >
                  <FormLabel>Nombre</FormLabel>
                  <Input
                    h={12}
                    borderRadius="25px"
                    border="1px solid rgba(26, 54, 93, 1)"
                    type="text"
                    placeholder="Nombre..."
                    value={nombreAVO}
                    onChange={(e) => handleOnChangeNombreAVO(e)}
                  />
                  {!esValidoTextTypeInput() && (
                    <FormErrorMessage>
                      Solo se permiten letras.
                    </FormErrorMessage>
                  )}
                </FormControl>
                <FormControl
                  isInvalid={!esValidoTextTypeInput()}
                  isRequired
                  py="2%"
                  color="blue.900"
                  id="apellido-avo"
                >
                  <FormLabel>Apellido</FormLabel>
                  <Input
                    onChange={(e) => handleOnChangeApellidoAVO(e)}
                    value={apellidoAVO}
                    h={12}
                    borderRadius="25px"
                    border="1px solid rgba(26, 54, 93, 1)"
                    type="text"
                    placeholder="Apellido..."
                  />
                  {!esValidoTextTypeInput() && (
                    <FormErrorMessage>Solo se permiten letras</FormErrorMessage>
                  )}
                </FormControl>
                <FormControl
                  isRequired
                  py="2%"
                  color="blue.900"
                  id="fecha-nacimiento-avo"
                >
                  <FormLabel>Fecha</FormLabel>
                  <InputGroup
                    borderRadius="25px"
                    border="1px solid rgba(26, 54, 93, 1)"
                    alignItems="center"
                    p="2.5"
                  >
                    <HStack spacing={1} pl="2rem">
                      <Select
                        value={fechaNacimiento.dia}
                        textAlign="center"
                        variant="unstyled"
                        icon={""}
                        size="md"
                        onChange={(e) => {
                          handleOnChangeFechaNacimientoAVO({
                            anio: fechaNacimiento.anio,
                            mes: fechaNacimiento.mes,
                            dia: e.target.value,
                          });
                        }}
                      >
                        {dias.map((anio) => (
                          <option key={anio} value={anio}>
                            {anio}
                          </option>
                        ))}
                      </Select>
                      <Select
                        value={fechaNacimiento.mes}
                        textAlign="center"
                        variant="unstyled"
                        icon={""}
                        size="md"
                        onChange={(e) =>
                          handleOnChangeFechaNacimientoAVO({
                            anio: fechaNacimiento.anio,
                            mes: e.target.value,
                            dia: fechaNacimiento.dia,
                          })
                        }
                      >
                        {meses.map((mes, index) => (
                          <option key={index} value={mes}>
                            {mes}
                          </option>
                        ))}
                      </Select>
                      <Select
                        value={fechaNacimiento.anio}
                        textAlign="center"
                        variant="unstyled"
                        icon={""}
                        size="auto"
                        onChange={(e) =>
                          handleOnChangeFechaNacimientoAVO({
                            anio: e.target.value,
                            mes: fechaNacimiento.mes,
                            dia: fechaNacimiento.dia,
                          })
                        }
                      >
                        {anios.map((anio) => (
                          <option key={anio} value={anio}>{anio}</option>
                        ))}
                      </Select>
                      <InputRightElement>
                        <CalendarIcon
                          color="blue.800"
                          boxSize={10}
                          pt=".2rem"
                          pr=".8rem"
                        />
                      </InputRightElement>
                    </HStack>
                  </InputGroup>
                  <FormHelperText color="blue.600">
                    La fecha de nacimiento de tu AVO
                  </FormHelperText>
                </FormControl>
                <FormControl isRequired py="2%" color="blue.900" id="sexo-avo">
                  <FormLabel>Sexo biol&oacute;gico</FormLabel>
                  <Checkbox
                    colorScheme="teal"
                    color="blue.900"
                    p=".4rem"
                    isChecked={isChecked}
                    onChange={() => handleOnChangeSexRadioButton()}
                  >
                    Femenino
                  </Checkbox>
                  <Checkbox
                    colorScheme="teal"
                    color="blue.900"
                    p=".4rem"
                    isChecked={!isChecked}
                    onChange={() => handleOnChangeSexRadioButton()}
                  >
                    Masculino
                  </Checkbox>
                </FormControl>
                <Center py="4">
                  <Button
                    borderRadius="45px"
                    w="full"
                    p=".4rem"
                    fontSize="xl"
                    bg="teal.600"
                    color="white"
                    fontWeight={"700"}
                    boxShadow={"0px 0px 8px 4px rgba(0, 43, 91, 0.2)"}
                    onClick={() => handleOnClickSubmitAVO()}
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
