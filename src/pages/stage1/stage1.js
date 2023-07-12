import { Box, Button, CircularProgress, CircularProgressLabel, IconButton, Modal, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import "../../components/tramiteCard/tramiteCard.css";
import "../../components/tramite/tramite.css";
import "../../components/home/home.css"
import "./stage1.css"
import ButtonSubmitSecundarioDesktop from "../../components/botton/secundarioDesktop/buttonSubmitSecundarioDesktop";
import ButtonSubmitSecundario from "../../components/botton/secundario/buttonSubmitSecundario";
import breakpoints from "../../breackpoints";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useNavigate } from "react-router";
import MenuComponent from "../../components/menu/menu";
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';

const Stage1Component = () => {
  const [esResolucionMobile] = useMediaQuery(`(max-width: ${breakpoints.mobile})`);
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box className="columns-container">
        <MenuComponent />
        <Box className="card-container">
            <Box className="card-iniciado">
            <Box className="codigo-porcentaje">
                <Box className="codigo">
                <Box >
                    <p className="c-1">Código de trámite:</p>
                    {esResolucionMobile ? <p className="c-1">X9889MW</p> : null}
                </Box>
                <Box>
                    <IconButton onClick={onOpen} style={{background:"red", color:"white", borderRadius:"30px", marginRight:"10px", marginBottom:"25px"}}>
                        <DeleteForeverIcon style={{height:"44px", width:"44px"}}/>
                    </IconButton>
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
                    <CircularProgress value={20} size={esResolucionMobile ? "12.5rem" : "18.5rem"}>
                        <CircularProgressLabel className="etapa">
                        <p className="etapa">Etapa</p>
                        <p className="etapa">{1}</p>
                        </CircularProgressLabel>
                    </CircularProgress>
                    </Box>
                    </Box>
                </Box>
                </Box>
                <>
                    {esResolucionMobile ? (
                    <Box className="avo-button">
                        <ButtonSubmitSecundario texto="Cargar AVO" event={() => navigate("/carga-avo")} />
                    </Box>
                    ) : (
                    <Box className="avo-button">
                        <ButtonSubmitSecundarioDesktop text={"Cargar AVO"} event={() => navigate("/carga-avo")} />
                    </Box>
                    )}
                </>
            </Box>
        </Box>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent className="modal-container">
                <ModalHeader className="mensaje">Estás por cancelar el trámite iniciado</ModalHeader>
                <ModalCloseButton />
                <ModalHeader className="mensaje">¿Estás seguro?</ModalHeader>
                <ModalFooter className="modal-btn">
                <Button
                    width="78px"
                    height="78px"
                    backgroundColor="#C55757"
                    onClick={onClose}
                >
                    <CloseIcon width="35px" height="35px" color="white" />
                </Button>
                <Button
                    width="78px"
                    height="78px"
                    backgroundColor="#57C5B6"
                    onClick={onClose}
                >
                    <DoneIcon width="35px" height="35px" color="black" />
                </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
      </Box>
  );
}

export default Stage1Component;