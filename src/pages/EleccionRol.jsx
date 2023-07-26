import { Box, Center, Button, useDisclosure } from "@chakra-ui/react";
import LogoAnimado from "../components/logoAnimado/LogoAnimado";
import ModalConfirmacion from "../components/ModalConfirmacion";
import ModalIsLoading from "../components/ModalIsLoading";
import { useNavigate } from "react-router";
import { useState, useCallback } from "react";
import usuarioService from "../services/UsuarioService";
import { useAuth0 } from "@auth0/auth0-react";

function EleccionRol() {
  const navigate = useNavigate();
  const [rol, setRol] = useState('');
  const { isAuthenticated } = useAuth0();
  const [estaCargando, setEstaCargando] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (e) => {
    console.log(e.target.innerText);
    setRol(e.target.innerText);
    onOpen();
  };
  

  const handleConfirmacion = useCallback((rolElegido) => {
    setEstaCargando(true);
    console.log(rolElegido);
    let usuario = {
      username: "prueba",
      nombre: "NombrePrueba",
      apellido: "ApellidoPrueba",
      rol: rolElegido,
      precio: 2200,
      correoElectronico: 'a@a.com',
      fechaDeNacimiento: '1995-10-25',
      nesecitaTraduccion: true
    };
    return usuarioService
    .guardarUsuario(usuario)
      .then((response) => {
        setEstaCargando(false);
        console.log(response);
        let { data } = response;
        let usuarioPersistido = data;
        navigate(`/home/${rolElegido.toLowerCase()}/${usuarioPersistido.id}`, { replace: true });
        return response;
      })
      .catch((error) => navigate("/network-error"));
  }, []);

  return (
    <Box minH="100%" bg="teal.200">
      <Center
        gap="2.4rem"
        flexWrap="wrap"
        justifyContent="space-around"
        alignItems="center"
        spacing="3.6rem"
        bg="teal.200"
        p="2.4rem"
      >
        <Box w="sm">
          <Button
            onClick={(e) => handleClick(e)}
            borderRadius="45px"
            color="white"
            w="100%"
            bg="blue.900"
          >
            {"SOLICITANTE"}
          </Button>
        </Box>
        <Box w="sm">
          <Button
            onClick={(e) => handleClick(e)}
            borderRadius="45px"
            color="white"
            w="100%"
            bg="teal.500"
          >
            {"TRADUCTOR"}
          </Button>
        </Box>
      </Center>
      <Center>
        <Box maxW="sm">
          <LogoAnimado />
        </Box>
      </Center>
      <ModalConfirmacion
        pregunta={`¿Estás seguro de registrarte como ${rol}?`}
        datoAConfirmar={''}
        isOpen={isOpen}
        handleConfirmacion={() => handleConfirmacion(rol)}
        onClose={onClose}
      />
      <ModalIsLoading
        mensaje={"Esperanos mientras guardamos tus datos... ;)"}
        isOpen={estaCargando}
      />
    </Box>
  );
}

export default EleccionRol;
