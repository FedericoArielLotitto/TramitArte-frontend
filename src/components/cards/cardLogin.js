import { Box, Input, Text } from "@chakra-ui/react";
import ButtonSubmit from "../botton/default/buttonSubmit";
import "./cardRegistro.css";

export default function BasicCardLogin() {
  return (
    <Box className="form">
      <Text>Nombre de usuario...</Text>
      <Input placeholder="Nombre De Usuario..." />
      <Text>Contraseña...</Text>
      <Input placeholder="Contraseña..." />

      <Box className="boton">
        <ButtonSubmit texto="Login" />
      </Box>
      <Box className="registrate">
        <Text>¿No tenés cuenta?</Text>
        <Text className="p-secundario"> Registrate</Text>
      </Box>
      <Box className="recuperar-contrasena">
        <Text className="p-secundario"> olvidaste tu contraseña</Text>
      </Box>
    </Box>
  );
}