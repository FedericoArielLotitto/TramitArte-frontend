import { useState } from "react";
import "./tramite.css";

import { useMediaQuery } from "@mui/material";

import CustomCard from "../moleculas/card/CustomCard";
import { tramiteService } from "../../../services/tramite.service";
import ButtomSubmitSecundarioDesktop from "../atomos/button/submit/secundarioDesktop/ButtomSubmitSecundarioDesktop";
import breakpoints from "../../breakpoints";
import { useNavigate } from "react-router-dom";

const TramiteComponent = () => {
  const [isClicked, setIsClicked] = useState(false);
  const esResolucionMobile = useMediaQuery(`(max-width: ${breakpoints.mobile})`)
  const navigation = useNavigate()

  const handleClick = async () => {
    const response = await tramiteService.iniciarTramite().then((response) => {
      navigation("/stage1")
      setIsClicked(!isClicked);}).catch((e) => console.log(e));
  };

  return (
    <div className="card-container">
        <div>
          {esResolucionMobile ? (
            CustomCard(handleClick)
          ) : (
            <div className="card-no-iniciado">
              <div className="p1-t">
                <p>Aún no iniciaste tu trámite</p>
              </div>
              <div className="p2-t">
                <p>¡Inicialo acá y conseguí tu ciudadanía!</p>
              </div>
              <div className="tramite-bottom">
                <ButtomSubmitSecundarioDesktop
                  text={"Iniciar trámite"}
                  event={handleClick}
                />
              </div>
            </div>
          )}
        </div>
    </div>
  );
};

export default TramiteComponent;
