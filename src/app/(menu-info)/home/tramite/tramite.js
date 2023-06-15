import { useState } from "react";
import "./tramite.css";
import ButtomSubmitSecundarioDesktop from "@/components/atomos/button/submit/secundarioDesktop/ButtomSubmitSecundarioDesktop";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import State from "@/components/atomos/state/state";
import { Box, CircularProgress } from "@mui/material";
import CustomCard from "@/components/moleculas/card/CustomCard";
import TramiteCardComponent from "./tramiteCard/tramiteCard";

const TramiteComponent = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [stage, setStage] = useState(1)

  const handleClick = async () => {
    const response = await fetch(process.env.BASE_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    }).then((response) => {
      console.log(response)
      setIsClicked(!isClicked);}).catch((e) => console.log(e));
  };

  const changeStage = () => {
    setStage(stage+1)
  }

  return (
    <div className="card-container">
      {isClicked ? (
        <TramiteCardComponent stage={stage} changeStage={changeStage}/>
      ) : (
        <div>
          {window.innerWidth <= 576 ? (
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
      )}
    </div>
  );
};

export default TramiteComponent;
