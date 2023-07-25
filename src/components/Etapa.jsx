import {
  CircularProgress,
  CircularProgressLabel,
  Card,
  CardBody,
  CardHeader,
  Heading,
  CardFooter,
  Button,
  IconButton,
  HStack,
  Box,
  useDisclosure,
} from "@chakra-ui/react";

import { Delete } from "@mui/icons-material";
import banderaItailiana from "../assets/baneraItaliana.png";
import { useNavigate } from "react-router";
import tramiteService from "../services/TramiteService";
import { useState, useCallback } from "react";
import ModalConfirmacion from "./ModalConfirmacion";
import ModalIsLoading from "./ModalIsLoading";

const BanderaItaliana = ({ height }) => (
  <Box zIndex={-1} position="" left={0} bottom={1} h={height}>
    <Box
      display="inline-block"
      borderRadius="10px 0 0 10px"
      w="33%"
      h="100%"
      bg="green.200"
    />
    <Box display="inline-block" w="33%" h="100%" bg="white" />
    <Box
      display="inline-block"
      borderRadius="0 10px 10px 0"
      w="33%"
      h="100%"
      bg="red.300"
    />
  </Box>
);

function Etapa() {
  const navigate = useNavigate();
  const [estaCargando, setEstaCargando] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleConfirmacion = useCallback(() => {
    setEstaCargando(true);
    return tramiteService
      .eliminar(1)
      .then((response) => {
        setEstaCargando(false);
        navigate("/home/solicitante/6");
        return response;
      })
      .catch((error) => navigate("/network-error"));
  }, []);

  return (
    <Card borderRadius="45px" bg="rgba(255, 255, 255, 0.8)" align="center">
      <CardHeader>
        <HStack spacing="2%">
          <Heading size="md">Código de trámite: X9889MW</Heading>
          <IconButton
            aria-label="Borrar trámite"
            color="red.500"
            size="lg"
            icon={<Delete fontSize="large" />}
            onClick={onOpen}
          ></IconButton>
        </HStack>
      </CardHeader>
      <CardBody align="center">
        <CircularProgress
          capIsRound
          trackColor="blue.100"
          size="300px"
          value={1}
          color="blue.900"
          thickness="10%"
        >
          <CircularProgressLabel>1%</CircularProgressLabel>
        </CircularProgress>
      </CardBody>
      <CardFooter w="100%">
        <Button
          onClick={() => navigate("/solicitud-avo")}
          textTransform="uppercase"
          borderRadius="45px"
          w={"100%"}
          color="white"
          bg="red.900"
        >
          Cargar AVO
        </Button>
      </CardFooter>
      <ModalConfirmacion
        isOpen={isOpen}
        handleConfirmacion={() => handleConfirmacion()}
        pregunta={"¿Estás seguro de eliminar el trámite?"}
        datoAConfirmar={"Al borrarlo, no podrás recuperar sus datos"}
        onClose={onClose}
      />
      <ModalIsLoading estaCargando={estaCargando} />
    </Card>
  );
}

export default Etapa;
