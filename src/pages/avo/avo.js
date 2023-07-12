import MenuComponent from "../../components/menu/menu";
import "../../components/home/home.css";
import "./avo.css";
import ButtomSubmitSecundarioDesktop from "../../components/botton/secundarioDesktop/buttonSubmitSecundarioDesktop";
import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import breakpoints from "../../breackpoints";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DoneIcon from "@mui/icons-material/Done";
import { useNavigate } from "react-router";

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
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [tituloElegido, setTituloElegido] = useState("");
  const [nombreArchivo, setNombreArchivo] = useState("");
  const navigate = useNavigate();
  const [esResolucionMobile] = useMediaQuery(`(max-width: ${breakpoints.mobile})`);

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

  const handleModal = (tituloElegido, nombre) => {
    setTituloElegido(tituloElegido);
    setNombreArchivo(nombre);
    onOpen()
  };

  const handleFileSelect = () => {
    document.getElementById("file-input").click();
  };

  const handleOnChange = (event) => {
    console.log(event.target.files);
    setTituloElegido(
      event.target.files[0]
        ? event.target.files[0].name
        : "No seleccionaste archivo"
    );
    if (tituloElegido === "Certificado de nacimiento")
      setCertificadoNacimiento(event.target.files[0]);
    if (tituloElegido === "Certificado de defunción")
      setCertficadoDefuncion(event.target.files[0]);
    if (tituloElegido === "DNI Frente") setDniFrente(event.target.files[0]);
    if (tituloElegido === "DNI Dorso") setDniDorso(event.target.files[0]);
    onClose()
  };

  return (
    <Box className="container">
      <Box className="home-conteiner">
        <Box className="columns-container">
          {esResolucionMobile ? <></> : <MenuComponent array={menuUser} />}
          <Box className="contenido">
            <Box className="rollback-btn">
              <Button
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "white",
                  borderRadius: "20px",
                }}
                onClick={() => navigate("/stage4")}
              >
                <DoneIcon
                  style={{ width: "35px", height: "35px", color: "black" }}
                />
              </Button>
              <Button
                style={{
                  backgroundColor: "white",
                  height: "50px",
                  borderRadius: "20px",
                }}
                onClick={() => navigate(-1)}
              >
                <ArrowBackIcon />
              </Button>
            </Box>
            {fileCards.map((card, index) => (
              <Box className="card" key={index}>
                <Box className="file-title">
                  <p>{card.title}</p>
                </Box>
                <Box className="file-btn">
                  {card.variable === null ? (
                    <ButtomSubmitSecundarioDesktop
                      text="Ingresar archivo"
                      event={() => handleModal(card.title, "")}
                    />
                  ) : (
                    <Box className="archive-card">
                      <Box className="image-file">
                        <Avatar
                          src="https://img.freepik.com/vector-premium/archivo-diseno-dibujos-animados_274619-1285.jpg?w=2000"
                          style={{ width: "70px", height: "70px" }}
                        />
                      </Box>
                      <Box className="file-name-date">
                        <p>{card.variable.name}</p>
                        <p>
                          Cargado el {new Date().toLocaleDateString()}
                        </p>
                      </Box>
                      <Box className="edit-btn">
                        <Button
                          style={{ borderRadius: "50px", height:"4.5rem", backgroundColor:"white" }}
                          onClick={() =>
                            handleModal(card.title, card.variable.name)
                          }
                        >
                          <ModeEditOutlineOutlinedIcon
                            style={{
                              width: "3rem",
                              height: "3rem",
                              color: "#1A5F7A",
                            }}
                          />
                        </Button>
                      </Box>
                    </Box>
                  )}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
        <ModalContent className="modal-content">
            <ModalHeader className="name-file">{tituloElegido}</ModalHeader>
            <Divider/>
            <ModalHeader className="name-file">{nombreArchivo}</ModalHeader>
          <ModalCloseButton />
          <Box className="drop-file-container">
            <Box className="drag-drop-file">
              <Box className="icon-container">
                {esResolucionMobile ? (
                  <>
                      <FileUploadOutlinedIcon
                        style={{
                          color: "#57C5B6",
                          width: "3.75rem",
                          height: "3.75rem",
                        }}
                        onClick={() => handleFileSelect()}
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
                  </>
                )}
                <input
                      type="file"
                      id="file-input"
                      style={{ display: "none" }}
                      onChange={(e) => handleOnChange(e)}
                />
              </Box>
                <Box className="text-container">
                  <p>Arrastrá y soltá el archivo o </p>
                  <Button
                    className="upload-button"
                    onClick={handleFileSelect}
                    style={styleButton}
                    backgroundColor={"white"}
                  >
                    <p>elegí uno</p>
                  </Button>
                  <input
                    type="file"
                    id="file-input"
                    style={{ display: "none" }}
                  />
                </Box>
            </Box>
            </Box>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AvoComponent;