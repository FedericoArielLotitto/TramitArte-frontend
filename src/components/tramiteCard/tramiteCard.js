import State from "@/components/atomos/state/state"
import { Box, Button, CircularProgress, useMediaQuery } from "@mui/material"
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import "../tramite.css"
import "./tramiteCard.css"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ButtomSubmitSecundarioDesktop from "@/components/atomos/button/submit/secundarioDesktop/ButtomSubmitSecundarioDesktop";
import ButtonSubmitSecundario from "@/components/atomos/button/submit/secundario/ButtonSubmitSecundario";
import breakpoints from "@/app/breakpoints";

function TramiteCardComponent({stage, changeStage}){
    const esResolucionMobile = useMediaQuery(`(max-width: ${breakpoints.mobile})`)

    return (
        <div className="card-iniciado">
            <div className="codigo-porcentaje">
                <div className="codigo">
                    <div className="c-1">
                        <p>Código de trámite:</p>
                        {esResolucionMobile ? (
                            <p>X9889MW</p>
                        ) : (
                            <></>
                        )}
                    </div>
                    <Box>
                            <Button style={{background:"red", color:"white", borderRadius:"30px", marginRight:"10px", marginBottom:"25px"}}>
                                <DeleteForeverIcon style={{height:"44px", width:"44px"}}/>
                            </Button>
                    </Box>
                </div>
                <div className="grafico-numero">
                    {esResolucionMobile ? (
                        <></>
                    ) : (
                        <div className="c-2">
                            <p>X9889MW</p>
                        </div>
                    )}
                    <div className="porcentaje">
                        <Box position="relative" display="inline-flex" >
                            {esResolucionMobile ? (
                            <CircularProgress
                                variant="determinate"
                                value={stage*10}
                                style={{ width: "12.5rem", height: "12.5rem" }}
                            />
                            ) : (
                            <CircularProgress
                                variant="determinate"
                                value={stage*10}
                                style={{ width: "18.75rem", height: "18.75rem" }}
                            />
                            )}
                            <Box
                            top={0}
                            left={0}
                            bottom={70}
                            right={0}
                            position="absolute"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            >
                            <div className="etapa">
                                <p>Etapa</p>
                                <p>{stage}</p>
                            </div>
                            </Box>
                        </Box>
                        </div>
                </div>
                {stage == 2 ? (
                    <div className="state-stage2">
                        <State text={"¿Cómo seguir?"}/>
                        <VisibilityOutlinedIcon style={{ height: "2.4rem", width: "2.4rem", color:"#159895", marginLeft:10}}/>
                    </div>
                ) : (
                    <>
                        {esResolucionMobile ? (
                            <div className="avo-button">
                                <ButtonSubmitSecundario texto="Cargar AVO" event={changeStage}></ButtonSubmitSecundario>
                            </div>
                            ) : (
                            <div className="avo-button">
                                <ButtomSubmitSecundarioDesktop text={"Cargar AVO"} event={changeStage}/>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
        
    )
}

export default TramiteCardComponent