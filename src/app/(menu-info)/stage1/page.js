"use client"

import { Box, Button, CircularProgress, useMediaQuery } from "@mui/material"
import "../home/tramite/tramite.css"
import "../home/tramite/tramiteCard/tramiteCard.css"
import "../home/home.css"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ButtomSubmitSecundarioDesktop from "@/components/atomos/button/submit/secundarioDesktop/ButtomSubmitSecundarioDesktop";
import ButtonSubmitSecundario from "@/components/atomos/button/submit/secundario/ButtonSubmitSecundario";
import MenuComponent from "@/components/moleculas/menu/menu";
import breakpoints from "@/app/breakpoints"

function Stage1Component(){
    const menuUser = ["Traductores Registrados", "Family Search", "Preguntas"];
    const esResolucionMobile = useMediaQuery(`(max-width: ${breakpoints.mobile})`)

    return (
            <div className="columns-container">
                <MenuComponent array={menuUser} />
                <div className="card-container">
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
                                            value={10}
                                            style={{ width: "12.5rem", height: "12.5rem" }}
                                        />
                                        ) : (
                                        <CircularProgress
                                            variant="determinate"
                                            value={10}
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
                                            <p>1</p>
                                        </div>
                                        </Box>
                                    </Box>
                                    </div>
                            </div>
                                    {esResolucionMobile ? (
                                        <div className="avo-button">
                                            <ButtonSubmitSecundario texto="Cargar AVO"></ButtonSubmitSecundario>
                                        </div>
                                        ) : (
                                        <div className="avo-button">
                                            <ButtomSubmitSecundarioDesktop text={"Cargar AVO"}/>
                                        </div>
                                    )}
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Stage1Component