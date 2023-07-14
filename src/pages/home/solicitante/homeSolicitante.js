import { Box } from "@chakra-ui/react";
import MenuComponent from "../../../components/menu/menu";
import TramiteComponent from "../../../components/tramite/tramite";
import "../../../components/home/home.css";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router";

const HomeUserComponent = () => {
 
    const { isAuthenticated, isLoading, user } = useAuth0();
    const navigate = useNavigate();

    useEffect(() => {
    
      
      if (!isAuthenticated) {
        // Redirigir al usuario a una página de verificación de correo electrónico
       navigate('/');
      }
    }, [isAuthenticated, navigate]);
  
    if (isLoading) {
      return <div>Cargando...</div>;
    }
  
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