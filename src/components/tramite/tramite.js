import { useState } from "react";
import "./tramite.css";
import ButtomSubmitSecundarioDesktop from "@/components/atomos/button/submit/secundarioDesktop/ButtomSubmitSecundarioDesktop";
import { useMediaQuery } from "@mui/material";
import breakpoints from "@/app/breakpoints";
import CustomCard from "../moleculas/card/CustomCard";

const TramiteComponent = () => {
  const [isClicked, setIsClicked] = useState(false);
  const esResolucionMobile = useMediaQuery(`(max-width: ${breakpoints.mobile})`)

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
