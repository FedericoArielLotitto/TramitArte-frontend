import { Box } from "@chakra-ui/react";
import MenuComponent from "../../../components/menu/menu";
import TramiteComponent from "../../../components/tramite/tramite";
import "../../../components/home/home.css";

const HomeUserComponent = () => {
  return (
    <Box className="container">
      <Box className="home-conteiner">
        <Box className="columns-container">
          <MenuComponent />
          <TramiteComponent />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeUserComponent;