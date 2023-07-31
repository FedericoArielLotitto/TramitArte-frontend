import {
  Box,
  Center,
  Text,
  Flex,
  IconButton,
  Fade,
  Button,
  useDisclosure,
  Input,
  Slide,
  ScaleFade,
} from "@chakra-ui/react";
import { ArrowBack, ArrowForward, ArrowRight } from "@mui/icons-material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { TramiteContext } from "../App";
import DocumentacionSolicitante from "../components/documentacionSolicitante/DocumentacionSolicitante";
import DocumentacionAVO from "../components/documentacionSolicitante/DocumentacionAVO";
import DocumentacionAscendentes from "../components/documentacionSolicitante/DocumentacionAscendentes";
import InputFile from "../components/documentacionSolicitante/InputFile";

function Documentacion() {
  const navigate = useNavigate();
  const { isOpen, onToggle } = useDisclosure();
  const tramiteContext = useContext(TramiteContext);
  const [cantidadAncestros, setCantidadAncestros] = useState(0);
  const [documentacionSolicitante, setDocumentacionSolicitante] = useState({})

  const handleBack = () => {
    navigate(-1);
  };

  const handleOnInput = (e) => {
    setCantidadAncestros(Number(e.target.value));
  };

  const handleConfirmacion = () => {

  }

  return (
    <Box minH="100%" h="auto" bg="teal.200">
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
      <Center p="1rem">
        <Center
          w="sm"
          borderRadius="45px"
          py=".8rem"
          bg="blue.900"
          color="white"
          fontWeight={"700"}
        >
          {tramiteContext?.codigo}
        </Center>
      </Center>
      <Center w="full">
        <Center textAlign="center" flexWrap="wrap">
          <Fade unmountOnExit={true} in={!isOpen}>
            <Flex
              w={{ base: "full", md: "sm" }}
              justifyContent={"center"}
              flexDirection="column"
              p="2%"
            >
              <Text
                as={"h2"}
                fontSize={"3xl"}
              >{`¿Cuántos ascendentes tenés hasta tu AVO?`}</Text>
              <Text as="i">{"*sin incluir a tu AVO"}</Text>
              <Box
                color="white"
                bg="teal.500"
                rounded="40px"
                shadow="md"
                pb="2%"
              >
                <Flex py="2%" px="0.8rem">
                  <Text>{"Cantidad de ancestros"}</Text>
                  <Input
                    type="number"
                    min={0}
                    value={cantidadAncestros}
                    onInput={handleOnInput}
                    rounded="45px"
                    _focus={{ bg: "teal.300" }}
                  ></Input>
                </Flex>
                <Center>
                  <Button
                    borderRadius="45px"
                    color="white"
                    bg="teal.300"
                    w="90%"
                    isDisabled={cantidadAncestros <= 0}
                    onClick={onToggle}
                    textTransform={"uppercase"}
                  >
                    {"Cargar cantidad de ancestros"}
                    <ArrowForward />
                  </Button>
                </Center>
              </Box>
            </Flex>
          </Fade>
        </Center>
      </Center>
      <Center display={isOpen ? 'flex' : 'none'} flexWrap="wrap" p="2%">
        <ScaleFade  in={isOpen} initialScale={1}>
          <Flex
            textAlign="center"
            flexDirection="column"
            justifyContent="center"
            pb="2%"
            w={"full"}
          >
            <Text
              w="85%"
              alignSelf="center"
              borderTopRadius="15px"
              bg="teal.200"
              color="white"
              borderColor="teal.300"
              borderWidth="1px"
              as={"h2"}
              fontSize={"2xl"}
              fontWeight={300}
            >
              {"Documentación Personal"}
            </Text>
            <DocumentacionSolicitante />
          </Flex>
          <Flex
            textAlign="center"
            flexDirection="column"
            justifyContent="center"
            pb="2%"
            w={"full"}
          >
            <Text
              w="85%"
              alignSelf="center"
              borderTopRadius="15px"
              bg="teal.200"
              color="white"
              borderColor="teal.300"
              borderWidth="1px"
              as={"h2"}
              fontSize={"2xl"}
              fontWeight={300}
            >
              {"Documentación AVO"}
            </Text>
            <DocumentacionAVO />
          </Flex>
          <Flex
            textAlign="center"
            flexDirection="column"
            justifyContent="center"
            pb="2%"
            w={"full"}
          >
            <Text
              w="85%"
              alignSelf="center"
              borderTopRadius="15px"
              bg="teal.200"
              color="white"
              borderColor="teal.300"
              borderWidth="1px"
              as={"h2"}
              fontSize={"2xl"}
              fontWeight={300}
            >
              {"Documentación Ascendentes"}
            </Text>
            <DocumentacionAscendentes cantidadAscendentes={cantidadAncestros} />
          </Flex>
          <Flex w="full" py="4">
            <Button
              onClick={() => {}}
              borderRadius="45px"
              color="white"
              w="100%"
              bg="blue.900"
              textTransform={"uppercase"}
            >
              {"Guardar documentación"}
            </Button>
          </Flex>
        </ScaleFade>
      </Center>
    </Box>
  );
}

export default Documentacion;
