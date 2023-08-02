import {
  Box,
  Center,
  Text,
  Flex,
  IconButton,
  Collapse,
  Button,
  useDisclosure,
  Input,
  ScaleFade,
} from "@chakra-ui/react";
import { ArrowBack, ArrowForward, ArrowRight } from "@mui/icons-material";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { TramiteContext } from "../App";
import DocumentacionSolicitante from "../components/documentacionSolicitante/DocumentacionSolicitante";
import DocumentacionAVO from "../components/documentacionSolicitante/DocumentacionAVO";
import DocumentacionAscendentes from "../components/documentacionSolicitante/DocumentacionAscendentes";
import ModalConfirmacion from "../components/ModalConfirmacion";
import ModalIsLoading from "../components/ModalIsLoading";
import tramiteService from "../services/TramiteService";
import { useAuth0 } from "@auth0/auth0-react";

function DocumentacionPersonal() {
  const navigate = useNavigate();
  const { idUsuario } = useAuth0();
  const { isOpen, onToggle } = useDisclosure();
  const [estaModalAbierto, setEstaModalAbierto] = useState(false);
  const [estaCargando, setEstaCargando] = useState(false);
  const [documentacionSolicitante, setDocumentacionSolicitante] = useState({
    dniFrente: { tipo: "", nombre: "", archivoBase64: "" },
    dniDorso: { tipo: "", nombre: "", archivoBase64: "" },
    certificadoNacimiento: { tipo: "", nombre: "", archivoBase64: "" },
  });

  const handleBack = () => {
    navigate(-1);
  };

  const abrirModal = () => {
    setEstaModalAbierto(true);
  };

  const cerrarModal = () => {
    setEstaModalAbierto(false);
  };

  const completarDocumentacionSolicitante = async ({ id, archivo }) => {
    if (id === "dni-frente") {
      let archivoBase64 = await fileToBase64(archivo);
      setDocumentacionSolicitante({
        dniFrente: {
          tipo: "dni-frente",
          nombre: archivo.name,
          archivoBase64: "",
        },
        dniDorso: {
          tipo: documentacionSolicitante.dniDorso.tipo,
          nombre: documentacionSolicitante.dniDorso.nombre,
          archivoBase64: documentacionSolicitante.dniDorso.archivoBase64,
        },
        certificadoNacimiento: {
          tipo: documentacionSolicitante.certificadoNacimiento.tipo,
          nombre: documentacionSolicitante.certificadoNacimiento.nombre,
          archivoBase64:
            documentacionSolicitante.certificadoNacimiento.archivoBase64,
        },
      });
    }
    if (id === "dni-dorso") {
      let archivoBase64 = await fileToBase64(archivo);
      setDocumentacionSolicitante({
        dniFrente: {
          tipo: documentacionSolicitante.dniFrente.tipo,
          nombre: documentacionSolicitante.dniFrente.nombre,
          archivoBase64: documentacionSolicitante.dniFrente.archivoBase64,
        },
        dniDorso: {
          tipo: "dni-dorso",
          nombre: archivo.name,
          archivoBase64: "",
        },
        certificadoNacimiento: {
          tipo: documentacionSolicitante.certificadoNacimiento.tipo,
          nombre: documentacionSolicitante.certificadoNacimiento.nombre,
          archivoBase64:
            documentacionSolicitante.certificadoNacimiento.archivoBase64,
        },
      });
    }
    if (id === "certificado-nacimiento") {
      let archivoBase64 = await fileToBase64(archivo);
      setDocumentacionSolicitante({
        dniFrente: {
          tipo: documentacionSolicitante.dniFrente.tipo,
          nombre: documentacionSolicitante.dniFrente.nombre,
          archivoBase64: documentacionSolicitante.dniFrente.archivoBase64,
        },
        dniDorso: {
          tipo: documentacionSolicitante.dniDorso.tipo,
          nombre: documentacionSolicitante.dniDorso.nombre,
          archivoBase64: documentacionSolicitante.dniDorso.archivoBase64,
        },
        certificadoNacimiento: {
          tipo: "certificado-nacimiento",
          nombre: archivo.name,
          archivoBase64: "",
        },
      });
    }
  };

  const handleConfirmacion = async () => {
    cerrarModal();
    setEstaCargando(true);
    console.log("acá", [
      documentacionSolicitante.dniFrente,
      documentacionSolicitante.dniDorso,
      documentacionSolicitante.certificadoNacimiento,
    ]);
    let tramite = JSON.parse(window.localStorage.getItem("tramite"));
    try {
      let respuesta = await tramiteService.cargarDocumentacionPersonal(
        [
          documentacionSolicitante.dniFrente,
          documentacionSolicitante.dniDorso,
          documentacionSolicitante.certificadoNacimiento,
        ],
        Number(tramite.id)
      );
      console.log(respuesta);
      setEstaCargando(false);
      navigate(
        `/home/solicitante/${
          JSON.parse(window.localStorage.getItem("usuarioLogueado")).id
        }`
      );
      // await tramiteService.cargarDocumentacionAVO("", idUsuario);
      // await tramiteService.cargarDocumentacionAncestros("", idUsuario);
    } catch (error) {
      navigate("/network-error");
    }
  };

  function fileToBase64(archivo) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(archivo);

      reader.onloadend = () => {
        resolve(reader.result);
      };

      reader.onerror = (error) => {
        reject(error);
      };
    });
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
          {JSON.parse(window.localStorage.getItem("tramite")).codigo}
        </Center>
      </Center>

      <Center flexWrap="wrap" p={{ base: '8', md: '16'}}>
        <ScaleFade style={{width: "100%", minWidth: "sm"}} in={!isOpen} initialScale={1}>
          <Flex
            textAlign="center"
            pb="2%"
            w={"full"}
            flexWrap="wrap"
          >
            <Flex w="100%" justifyContent="center">
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
            </Flex>
            <DocumentacionSolicitante
              agregarDocumentacionSolicitante={
                completarDocumentacionSolicitante
              }
            />
          </Flex>
          <Flex justifyContent="center" w="full" py="16">
            <Button
              onClick={abrirModal}
              borderRadius="45px"
              color="white"
              w="sm"
              bg="blue.900"
              textTransform={"uppercase"}
            >
              {"Guardar documentación personal"}
            </Button>
          </Flex>
        </ScaleFade>
      </Center>
      <ModalConfirmacion
        id="modal-confirmacion"
        pregunta={"¿Estás seguro de guardar esta documentación?"}
        datoAConfirmar={
          "Podrás modificarlo desde el menú, en cualquier caso ;)"
        }
        isOpen={estaModalAbierto}
        handleConfirmacion={handleConfirmacion}
        onClose={cerrarModal}
      />
      <ModalIsLoading
        mensaje={"Esperanos mientras guardamos la documentación ;)"}
        isOpen={estaCargando}
      />
    </Box>
  );
}

export default DocumentacionPersonal;
