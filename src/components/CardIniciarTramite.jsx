import {
  Card,
  Text,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Button,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";

import ModalConfirmacion from "./ModalConfirmacion";
import TramiteService from "../services/TramiteService";
import { useNavigate } from "react-router";
import { useState, useCallback } from "react";
import ModalIsLoading from "./ModalIsLoading";

function CardIniciarTramite() {
  const navigate = useNavigate();
  const [estaCargando, setEstaCargando] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleConfirmacion = useCallback(() => {
    setEstaCargando(true);
    return TramiteService.guardarTramite()
      .then((response) => {
        setEstaCargando(false);
        console.log(response);
        navigate("/home/solicitante/tramite/etapa/1");
        return response;
      })
      .catch((error) => navigate("/network-error"));
  }, []);

  return (
    <Flex py="1.2rem" justifyContent="center">
      <Card
        borderRadius="45px"
        bg="rgba(255, 255, 255, 0.8)"
        align="center"
        p=".8rem"
      >
        <CardHeader>
          <Heading size="md">{"Aún no iniciaste tu trámite"}</Heading>
        </CardHeader>
        <CardBody align="center">
          <Text>{"¡Inicialo acá y conseguí tu ciudadanía!"}</Text>
        </CardBody>
        <CardFooter w="100%">
          <Button
            onClick={onOpen}
            borderRadius="45px"
            color="white"
            w="100%"
            bg="red.900"
          >
            {"Iniciar trámite"}
          </Button>
        </CardFooter>
      </Card>
      <ModalConfirmacion
        isOpen={isOpen}
        handleConfirmacion={handleConfirmacion}
        onClose={onClose}
      />
      <ModalIsLoading
        mensaje={"Esperanos mientras iniciamos tu tr&aacute;mite ;)"}
        isOpen={estaCargando}
      />
    </Flex>
  );
}

export default CardIniciarTramite;
