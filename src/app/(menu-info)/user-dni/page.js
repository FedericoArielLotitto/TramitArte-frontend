"use client";

import MenuComponent from "@/app/components/moleculas/menu/menu";
import "@/app/components/home/home.css";
import "../avo/page.css";
import "./page.css"
import ButtomSubmitSecundarioDesktop from "@/app/components/atomos/button/submit/secundarioDesktop/ButtomSubmitSecundarioDesktop";
import {useState } from "react";
import { Avatar, Button, Modal, useMediaQuery } from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import breakpoints from "@/app/breakpoints";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from "next/navigation";
import DoneIcon from '@mui/icons-material/Done';
// import IconButton from "@mui/material";

const styleButton = {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "24px",
    lineHeight: "29px",
    textAlign: "center",
    padding: 0,
    paddingLeft: 5,
    color: "#57C5B6",
  };
  
  const UserDNIComponent = () => {
    const menuUser = ["Traductores Registrados", "Family Search", "Preguntas"];
    // const fileTitles = ["Certificado de nacimiento", "Certificado de matrimonio", "Certificado de defunción", "Documentos de identidad(Pasaporte, DNI, otros)"]
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tituloElegido, setTituloElegido] = useState("");
    const [nombreArchivo, setNombreArchivo] = useState("")
    const router = useRouter();
    const esResolucionMobile = useMediaQuery(
      `(max-width: ${breakpoints.mobile})`
    );
  
    const [dniDorso, setDniDorso] = useState(null);
    const [dniFrente, setDniFrente] = useState(null);
  
    const fileCards = [
      { title: "DNI Frente", variable: dniFrente },
      { title: "DNI Dorso",variable: dniDorso },
    ];
  
    const handleModal = (tituloElegido, nombre) => {
      setTituloElegido(tituloElegido);
      setNombreArchivo(nombre)
      setIsModalOpen(!isModalOpen);
    };
  
    const handleFileSelect = () => {
      document.getElementById("file-input").click();
    };
  
    const handleOnChange = (event) => {
      console.log(event.target.files)
      setTituloElegido(
        event.target.files[0]
          ? event.target.files[0].name
          : "No seleccionaste archivo"
      );
      if(tituloElegido === "DNI Frente") setDniFrente(event.target.files[0])
      if(tituloElegido === "DNI Dorso") setDniDorso(event.target.files[0])
      setIsModalOpen(!isModalOpen);
    };
  
    return (
      <div class="container">
        <div className="home-conteiner">
          <div className="columns-container">
            {esResolucionMobile ? <></> : <MenuComponent array={menuUser} />}
            <div className="contenido-userdni">
              <div className="rollback-btn">
                <Button style={{width:"50px", height:"50px", backgroundColor:"white", borderRadius:"20px"}} onClick={() => router.push("/stage3")}>
                  <DoneIcon style={{width:"35px", height:"35px", color:"black"}}/>
                </Button>
                <Button style={{backgroundColor:"white", height:"50px", borderRadius:"20px"}} onClick={() => router.back()}>
                  <ArrowBackIcon/>
                </Button>
              </div>
              {fileCards.map((card, index) => (
                <div className="card-userdni" key={index}>
                  <div className="file-title">
                    <p>{card.title}</p>
                  </div>
                  <div className="file-btn">
                    {card.variable === null ? (
                      <ButtomSubmitSecundarioDesktop
                        text="Ingresar archivo"
                        event={() => handleModal(card.title, "")}
                      />
                    ) : (
                      <div className="archive-card">
                        <div className="image-file">
                          <Avatar src="https://img.freepik.com/vector-premium/archivo-diseno-dibujos-animados_274619-1285.jpg?w=2000"
                          style={{width:"70px", height:"70px"}}></Avatar>
                        </div>
                        <div className="file-name-date">
                          <p>{card.variable.name}</p>
                          <p>Cargado el {new Date().toLocaleDateString()}</p>
                        </div>
                        <div className="edit-btn">
                          <Button style={{borderRadius:"50px"}} onClick={() => handleModal(card.title, card.variable.name)}>
                            <ModeEditOutlineOutlinedIcon
                            style={{ width: "3rem", height: "3rem", color: "#1A5F7A" }}
                            />
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Modal
          open={isModalOpen}
          onClose={handleModal}
          className="modal-container"
        >
          <div className="modal-content">
            <div className="name-edit">
              <div className="name-file">
                <p>{tituloElegido}</p>
                <hr></hr>
                <p>{nombreArchivo}</p>
              </div>
            </div>
            <div className="drop-file-container">
              <div className="drag-drop-file">
                <div className="icon-container">
                  {esResolucionMobile ? (
                    <>
                      <Button onClick={() => handleFileSelect()}>
                        <FileUploadOutlinedIcon
                          style={{
                            color: "#57C5B6",
                            width: "3.75rem",
                            height: "3.75rem",
                          }}
                        />
                      </Button>
                      <input
                        type="file"
                        id="file-input"
                        style={{ display: "none" }}
                        onChange={(e) => handleOnChange(e)}
                      />
                    </>
                  ) : (
                    <>
                      <FileUploadOutlinedIcon
                        style={{
                          color: "#57C5B6",
                          width: "9rem",
                          height: "9rem",
                        }}
                        onClick={() => handleFileSelect()}
                      />
                      <input
                        type="file"
                        id="file-input"
                        style={{ display: "none" }}
                        onChange={(e) => handleOnChange(e)}
                      />
                    </>
                  )}
                </div>
                {esResolucionMobile ? (
                  <></>
                ) : (
                  <div className="text-container">
                    <p>Arrastrá y soltá el archivo o </p>
                    <Button
                      className="upload-button"
                      onClick={handleFileSelect}
                      style={styleButton}
                    >
                      <p>elegí uno</p>
                    </Button>
                    <input
                      type="file"
                      id="file-input"
                      style={{ display: "none" }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  };
  
  export default UserDNIComponent;