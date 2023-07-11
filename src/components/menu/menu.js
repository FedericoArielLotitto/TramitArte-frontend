import { Box, useMediaQuery } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import breakpoints from "../../breackpoints";
import "./menu.css"

const MenuComponent = ({ isOpen }) => {
  const menuTranslator = [
    {
      link: "Traducciones Realizadas",
      path: "/",
    },
    {
      link: "Solicitudes Pendientes",
      path: "/",
    },
    {
      link: "Solicitudes de Traducción",
      path: "/",
    },
  ];

  const menuUser = [
    {
      link: "Traductores Registrados",
      path: "/request-translation",
    },
    {
      link: "Preguntas",
      path: "/preguntas-frecuentes",
    },
  ];

  const type = "Traductor";
  const location = window.location;

  return (
    <>
      {!useMediaQuery(`(max-width: ${breakpoints.mobile})`) || isOpen ? (
        location.pathname.includes("traductor") ? (
          <Box className="menu">
            <Box className="items-container">
              {menuTranslator.map((item, index) => (
                <Box className="menu-item" key={index}>
                  <Link to={item.path}>{item.link}</Link>
                </Box>
              ))}
            </Box>
          </Box>
        ) : (
          <Box className="menu">
            <Box className="items-container">
              {menuUser.map((item, index) => (
                <Box className="menu-item" key={index}>
                  <Link to={item.path}>{item.link}</Link>
                </Box>
              ))}
            </Box>
          </Box>
        )
      ) : (
        <></>
      )}
    </>
  );
};

export default MenuComponent