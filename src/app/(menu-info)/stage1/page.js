"use client"

import { Box, Button, CircularProgress, Modal, useMediaQuery } from "@mui/material"
import "@/app/components/tramite/tramite.css"
import "@/app/components/tramiteCard/tramiteCard.css"
import "@/app/components/home/home.css"
import "./page.css"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ButtomSubmitSecundarioDesktop from "@/app/components/atomos/button/submit/secundarioDesktop/ButtomSubmitSecundarioDesktop";
import ButtonSubmitSecundario from "@/app/components/atomos/button/submit/secundario/ButtonSubmitSecundario";
import MenuComponent from "@/app/components/moleculas/menu/menu";
import breakpoints from "@/app/breakpoints"
import { useState } from "react"
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import { useRouter } from "next/navigation"

function Stage1Component(){
    const menuUser = ["Traductores Registrados", "Family Search", "Preguntas"];
    const esResolucionMobile = useMediaQuery(`(max-width: ${breakpoints.mobile})`)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();

    const handleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

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
                                
                                        <Button style={{background:"red", color:"white", borderRadius:"30px", marginRight:"10px", marginBottom:"25px"}} onClick={handleModal}>
                                            <DeleteForeverIcon style={{height:"44px", width:"44px"}}/>
                                        </Button>
                                
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
                                            value={20}
                                            style={{ width: "12.5rem", height: "12.5rem" }}
                                        />
                                        ) : (
                                        <CircularProgress
                                            variant="determinate"
                                            value={20}
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
                                            <ButtonSubmitSecundario texto="Cargar AVO" event={() => router.push("/carga-avo")}></ButtonSubmitSecundario>
                                        </div>
                                        ) : (
                                        <div className="avo-button">
                                            <ButtomSubmitSecundarioDesktop text={"Cargar AVO"}/>
                                        </div>
                                    )}
                        </div>
                    </div>
                </div>
                <Modal
                    open={isModalOpen}
                    onClose={handleModal}
                    className="modal-container"
                >
                    <>
                        <div className="mensaje">
                            <p>Estas por cancelar el tramite iniciado</p>
                            <p>¿Estas seguro?</p>
                            <div className="modal-btn">
                                <Button style={{width:"78px", height:"78px", backgroundColor:"#C55757"}} onClick={handleModal}>
                                    <CloseIcon style={{width:"35px", height:"35px", color:"white"}}/>
                                </Button>
                                <Button style={{width:"78px", height:"78px", backgroundColor:"#57C5B6"}} onClick={() => router.push("/home/solicitante")}>
                                    <DoneIcon style={{width:"35px", height:"35px", color:"black"}}/>
                                </Button>
                            </div>
                        </div>
                    </>
                </Modal>
            </div>
    )
}

export default Stage1Component