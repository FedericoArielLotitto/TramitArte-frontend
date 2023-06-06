import { useState } from "react"
import "./tramite.css"
import ButtomSubmitSecundarioDesktop from "@/components/atomos/button/submit/secundarioDesktop/ButtomSubmitSecundarioDesktop"
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import State from "@/components/atomos/state/state";
import { Box, CircularProgress} from "@mui/material";

const TramiteComponent = () => {
    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked(!isClicked)
    }

    return (
        <div className="card-container">
          {isClicked ? (
            <div className="card-iniciado">
              <div className="codigo-porcentaje">
                <div className="codigo">
                    <div className="c-1">
                        <p>Código de trámite:</p>
                    </div>
                    <div className="c-2">
                        <p>X9889MW</p>
                    </div>
                </div>
                <div className="porcentaje">
                  <Box position="relative" display="inline-flex">
                    <CircularProgress variant="determinate" value={60} style={{width:"18.75rem", height:"18.75rem"}}/>
                    <Box
                      top={0}
                      left={0}
                      bottom={0}
                      right={0}
                      position="absolute"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <p>60%</p>
                    </Box>
                  </Box>
                </div>
              </div>
              <div className="estado-paso">
                <State text={"INCOMPLETO"} icon={<VisibilityOutlinedIcon style={{height:"2.4rem", width:"2.4rem"}}/>} type={"Estado:"}/>
                <State text={"TURNO CON CONSULADO"} type={"Próximo paso:"}/>
              </div>
            </div>
          ) : (
            <div className="card-no-iniciado">
              <div className="p1-t">
                <p>Aún no iniciaste tu trámite</p>
              </div>
              <div className="p2-t">
                <p>¡Inicialo acá y conseguí tu ciudadanía!</p>
              </div>
                <div className="tramite-bottom">
                  <ButtomSubmitSecundarioDesktop text={"Iniciar trámite"} event={handleClick} />
                </div>
            </div>
          )}
        </div>
      )
    }

export default TramiteComponent