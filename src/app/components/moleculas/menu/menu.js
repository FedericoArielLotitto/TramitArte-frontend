import "./menu.css";


import { useMediaQuery } from "@mui/material";

import { Link, useNavigate } from "react-router-dom";
import breakpoints from "../../../breakpoints";

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

  // const menuUser = ["Traductores Registrados", "Family Search", "Preguntas"];

  const type = "Traductor";
  const navigation = useNavigate()
  const location = window.location
  return !useMediaQuery(`(max-width: ${breakpoints.mobile})`) || isOpen ? (
    location.pathname.includes("traductor") ? (
      <div class="menu">
        <div class="items-container">
          {menuTranslator.map((item, index) => (
            <div className="menu-item" key={index}>
                <Link href={item.path}>{item.link}</Link>
            </div>
          ))}
        </div>
      </div>
    ) : (
        <div class="menu">
        <div class="items-container">
          {menuUser.map((item, index) => (
              <div className="menu-item" key={index}>
                  <Link href={item.path}>{item.link}</Link>
              </div>
          ))}
        </div>
      </div>
    )
  ) : (
    <></>
  );
};

export default MenuComponent;
