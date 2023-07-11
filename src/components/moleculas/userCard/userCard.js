import { Box } from "@chakra-ui/react";
import { Avatar, useMediaQuery } from "@chakra-ui/react";
import ButtonSubmitDesktop from "../../botton/defaultDesktop/buttonSubmitDesktop";
import breakpoints from "../../../theme";

const UserCardComponent = ({ users, onDelete }) => {
  const esResolucionMobile = useMediaQuery(`(max-width: ${breakpoints.mobile})`);

  return (
    <>
      {users.map((user, index) => (
        <Box className="request-card" key={index}>
          <Box className="card-info">
            <Box className="user-info">
              <Box className="user-info-header">
                <p>Solicitud de traducción</p>
              </Box>
              <p>Nombre: {user.name}</p>
              <p>Documento: {user.document}</p>
              <p>Id de trámite: {user.id}</p>
            </Box>
            {!esResolucionMobile && (
              <Avatar
                src={user.image}
                size="xl"
                style={{ width: "15.6em", height: "15.6em" }}
              />
            )}
          </Box>
          <Box className="card-info">
            <ButtonSubmitDesktop
              texto={"Notificar"}
              event={() => onDelete(index)}
            />
          </Box>
        </Box>
      ))}
    </>
  );
};

export default UserCardComponent;