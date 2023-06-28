"use client";

import MenuComponent from "@/app/components/moleculas/menu/menu";
import "@/app/components/home/home.css";
import "./page.css";
import ButtomSubmitSecundarioDesktop from "@/app/components/atomos/button/submit/secundarioDesktop/ButtomSubmitSecundarioDesktop";
import { useEffect, useState } from "react";
import { Button, Modal, useMediaQuery } from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import breakpoints from "@/app/breakpoints";
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

const AvoComponent = () => {
  const menuUser = ["Traductores Registrados", "Family Search", "Preguntas"];
  // const fileTitles = ["Certificado de nacimiento", "Certificado de matrimonio", "Certificado de defunción", "Documentos de identidad(Pasaporte, DNI, otros)"]
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tituloElegido, setTituloElegido] = useState("");
  const esResolucionMobile = useMediaQuery(
    `(max-width: ${breakpoints.mobile})`
  );
  const avo1 = "";
  const avo2 = "";
  const avo3 = "";
  const avo4 = "";

  const [dniDorso, setDniDorso] = useState(null);
  const [dniFrente, setDniFrente] = useState(null);
  const [certificadoNacimiento, setCertificadoNacimiento] = useState(null);
  const [certificadoDefuncion, setCertficadoDefuncion] = useState(null);

  const fileCards = [
    { title: "Certificado de nacimiento", variable: certificadoNacimiento },
    { title: "Certificado de defunción", variable: certificadoDefuncion },
    { title: "DNI Frente", variable: dniFrente },
    {
      title: "DNI Dorso",
      variable: dniDorso,
    },
  ];

  const handleModal = (tituloElegido) => {
    setTituloElegido(tituloElegido);
    setIsModalOpen(!isModalOpen);
  };

  const handleFileSelect = () => {
    document.getElementById("file-input").click();
  };

  const handleOnChange = (event) => {
    setTituloElegido(
      event.target.files[0]
        ? event.target.files[0].name
        : "No seleccionaste archivo"
    );
    if(tituloElegido === "Certificado de nacimiento") setCertificadoNacimiento(event.target.file[0])
    if(tituloElegido === "Certificado de defunción") setCertficadoDefuncion(event.target.file[0])
    if(tituloElegido === "DNI Frente") setDniFrente(event.target.file[0])
    if(tituloElegido === "DNI Dorso") setDniDorso(event.target.file[0])
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div class="container">
      <div className="home-conteiner">
        <div className="columns-container">
          {esResolucionMobile ? <></> : <MenuComponent array={menuUser} />}
          <div className="contenido">
            {fileCards.map((card, index) => (
              <div className="card" key={index}>
                <div className="file-title">
                  <p>{card.title}</p>
                </div>
                <div className="file-btn">
                  {card.variable === null ? (
                    <ButtomSubmitSecundarioDesktop
                      text="Ingresar archivo"
                      event={() => handleModal(card.title)}
                    />
                  ) : (
                    <p>Acá hay un archivo</p>
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
            </div>
            <ModeEditOutlineOutlinedIcon
              style={{ width: "3rem", height: "3rem", color: "#1A5F7A" }}
            />
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

export default AvoComponent;
