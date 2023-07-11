import UserCardComponent from "../moleculas/userCard/userCard";
import { Box, Text } from "@chakra-ui/react";
import "../tramite/tramite.css";
import "./translator.css";

const TranslatorComponent = ({ users, onDelete }) => {
  const handleDeleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    onDelete(updatedUsers);
  };

  return (
    <Box className="translator-container">
      {users.length > 0 ? (
        <Box className="request-container">
          {/* <Box className="request-header">
            <Text>Usuarios solicitando traducción</Text>
          </Box>
          <Box className="request-card-container">
            <UserCardComponent users={users} onDelete={handleDeleteUser} />
          </Box> */}
          <Box className="request-card-container">
            <UserCardComponent users={users} onDelete={handleDeleteUser} />
          </Box>
        </Box>
      ) : (
        <Box className="card-container">
          <Box className="card-no-iniciado">
            <Box className="mensaje">
              <Text>No hay solicitudes pendientes</Text>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default TranslatorComponent;