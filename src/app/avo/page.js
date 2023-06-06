"use client"

import MenuComponent from "@/components/moleculas/menu/menu"
import { HeaderComponent } from "../home/header/header"
import "../home/home.css"
import "./page.css"
import ButtomSubmitSecundarioDesktop from "@/components/atomos/button/submit/secundarioDesktop/ButtomSubmitSecundarioDesktop"
import { useState } from "react"
import { Button, Modal } from "@mui/material"
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

const styleButton = {
    fontFamily: 'Montserrat',
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "24px",
    lineHeight: "29px",
    textAlign: "center",
    padding:0,
    paddingLeft: 5,
    color: "#57C5B6"
}

const AvoComponent = () => {
    const menuUser = ["Traductores Registrados", "Family Search", "Preguntas"]
   // const fileTitles = ["Certificado de nacimiento", "Certificado de matrimonio", "Certificado de defunción", "Documentos de identidad(Pasaporte, DNI, otros)"]
    const [isModalOpen, setIsModalOpen] = useState(false)
    const avo1 = ""
    const avo2 = ""
    const avo3 = ""
    const avo4 = []

    const fileCards = [
        { title: "Certificado de nacimiento", variable: avo1 },
        { title: "Certificado de matrimonio", variable: avo2 },
        { title: "Certificado de defunción", variable: avo3 },
        { title: "Documentos de identidad (Pasaporte, DNI, otros)", variable: avo4 },
      ];

    const handleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    const handleFileSelect = () => {
        document.getElementById('file-input').click();
    };

    return(
    <div class="container">
        <HeaderComponent/>
        <div className="home-conteiner">
            <div className="columns-container">
              <MenuComponent array={menuUser}/>
              <div className="contenido">
                {fileCards.map((card, index) => (
                    <div className="card" key={index}>
                        <div className="file-title">
                            <p>{card.title}</p>
                        </div>
                        <div className="file-btn">
                            {card.variable === "" || card.variable === [] ? (
                            <ButtomSubmitSecundarioDesktop text="Ingresar archivo" event={handleModal} />
                            ) : (
                            <p>Acá hay un archivo</p>
                            )}
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
        <Modal open={isModalOpen} onClose={handleModal} className="modal-container">
            <div className="modal-content">
                <div className="name-edit">
                    <div className="name-file">
                        <p>Nombre: Partida de nacimiento Horacio Quiroga</p>
                    </div>
                    <ModeEditOutlineOutlinedIcon style={{width:"3rem", height:"3rem", color:"#1A5F7A"}}/>
                </div>
                <div className="drop-file-container">
                    <div className="drag-drop-file">
                        <div className="icon-container">
                            <FileUploadOutlinedIcon style={{color:"#57C5B6", width:"9rem", height:"9rem"}}/>
                        </div>
                        <div className="text-container">
                            <p>Arrastrá y soltá el archivo o </p>
                            <Button className="upload-button" onClick={handleFileSelect} style={styleButton}>
                                <p>elegí uno</p>
                            </Button>
                             <input type="file" id="file-input" style={{ display: 'none' }} />
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    </div>
    )
}

export default AvoComponent