import { useState } from "react";
import { Box, useMediaQuery } from "@chakra-ui/react";
import ButtomSubmitSecundarioDesktop from "../botton/secundarioDesktop/buttonSubmitSecundarioDesktop";
import breakpoints from "../../breackpoints";
import CustomCard from "../cards/customCard";

//import { tramiteService } from "@/services/tramite.service";
import "./tramite.css"
import { useNavigate } from "react-router";

const TramiteComponent = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [esResolucionMobile] = useMediaQuery(`(max-width: ${breakpoints.mobile})`);
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      //await tramiteService.iniciarTramite();
      navigate("/stage1");
      setIsClicked(!isClicked);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box className="card-container">
      <Box>
        {esResolucionMobile ? (
          <CustomCard event={handleClick} />
        ) : (
          <Box className="card-no-iniciado">
            <Box className="p1-t">
              <p>Aún no iniciaste tu trámite</p>
            </Box>
            <Box className="p2-t">
              <p>¡Inicialo acá y conseguí tu ciudadanía!</p>
            </Box>
            <Box className="tramite-bottom">
              <ButtomSubmitSecundarioDesktop
                text={"Iniciar trámite"}
                event={handleClick}
              />
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default TramiteComponent;