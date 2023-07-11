import { Box, Input, Text } from "@chakra-ui/react";
import ButtonSubmit from "../botton/default/buttonSubmit";
import "./cardRegistro.css";

export default function BasicCardRegistro() {
  return (
    <Box className="form">
      <Text>Nombre de usuario...</Text>
      <Input placeholder="Nombre De Usuario..." />
      <Text>Contraseña...</Text>
      <Input placeholder="Contraseña..." />
      <Text>Correo Electrónico...</Text>
      <Input placeholder="Correo electrónico" />
      <Box className="boton">
        <ButtonSubmit texto="Crear cuenta" />
      </Box>
    </Box>
  );
}