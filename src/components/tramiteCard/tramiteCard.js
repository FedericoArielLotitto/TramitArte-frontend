import State from "../state/state";
import { Box, Button, CircularProgress, CircularProgressLabel, useMediaQuery } from "@chakra-ui/react";
import "../tramite/tramite.css";
import "./tramiteCard.css";
import ButtomSubmitSecundarioDesktop from "../botton/secundarioDesktop/buttonSubmitSecundarioDesktop";
import ButtonSubmitSecundario from "../botton/secundario/buttonSubmitSecundario";
import breakpoints from "../../breackpoints";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

function TramiteCardComponent({ stage, changeStage }) {
  const [esResolucionMobile] = useMediaQuery(`(max-width: ${breakpoints.mobile})`);

  return (
    <Box className="card-iniciado">
      <Box className="codigo-porcentaje">
        <Box className="codigo">
          <Box >
              <p className="c-1">Código de trámite:</p>
              {esResolucionMobile ? <p className="c-1">X9889MW</p> : null}
          </Box>
          <Box>
            <Button
              style={{
                background: "red",
                color: "white",
                borderRadius: "30px",
                marginRight: "10px",
                marginBottom: "25px",
              }}
            >
              <DeleteForeverIcon style={{ height: "44px", width: "44px" }} />
            </Button>
          </Box>
        </Box>
        <Box className="grafico-numero">
          {esResolucionMobile ? null : (
            <Box className="c-2">
              <p className="c-2">X9889MW</p>
            </Box>
          )}
          <Box className="porcentaje">
            <Box position="relative" display="inline-flex">
              <CircularProgress value={stage*10} size={esResolucionMobile ? "12.5rem" : "18.5rem"}>
                <CircularProgressLabel className="etapa">
                  <p className="etapa">Etapa</p>
                  <p className="etapa">{stage}</p>
                </CircularProgressLabel>
              </CircularProgress>
              </Box>
            </Box>
          </Box>
        </Box>
        {stage === 2 ? (
          <Box className="state-stage2">
            <State text={"¿Cómo seguir?"} />
            <VisibilityOutlinedIcon
              style={{ height: "2.4rem", width: "2.4rem", color: "#159895", marginLeft: 10 }}
            />
          </Box>
        ) : (
          <>
            {esResolucionMobile ? (
              <Box className="avo-button">
                <ButtonSubmitSecundario texto="Cargar AVO" event={changeStage} />
              </Box>
            ) : (
              <Box className="avo-button">
                <ButtomSubmitSecundarioDesktop text={"Cargar AVO"} event={changeStage} />
              </Box>
            )}
          </>
        )}
      </Box>
    
  );
}

export default TramiteCardComponent;