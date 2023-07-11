import { Box, Text } from "@chakra-ui/react";
import { Avatar, useMediaQuery } from "@chakra-ui/react";
import ButtonSubmitDesktop from "../../botton/defaultDesktop/buttonSubmitDesktop";
import breakpoints from "../../../breackpoints";
import "./userCard.css"

const UserCardComponent = ({ users, onDelete }) => {
  const [esResolucionMobile] = useMediaQuery(`(max-width: ${breakpoints.mobile})`);
  
  return (
    <>
      {users.map((user, index) => (
        <Box className="request-card" key={index}>
          <Box className="card-info" >
            <Box className="user-info">
              <Box className="user-info-header" >
                <p className="user-info">Solicitud de traducción</p>
              </Box>
              <p className="user-info">Nombre: {user.name}</p>
              <p className="user-info">Documento: {user.document}</p>
              <p className="user-info">Id de trámite: {user.id}</p>
            </Box>
            {!esResolucionMobile && (
              <Avatar
                src={user.image}
                size="xl"
                style={{ width: "15.6rem", height: "15.6rem" }}
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