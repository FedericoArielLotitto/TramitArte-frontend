import "./menu.css"

import breakpoints from "@/app/breakpoints"
import { useMediaQuery } from "@mui/material"
import { Braah_One } from "next/font/google"

const MenuComponent = ({isOpen}) => {
    const menuTranslator = [
        "Traducciones Realizadas",
        "Solicitudes Pendientes",
        "Solicitudes de Traducción",
      ];
    const menuUser = ["Traductores Registrados", "Family Search", "Preguntas"];

    const type = "Traductor"

    return (
        !useMediaQuery(`(max-width: ${breakpoints.mobile})`) || isOpen ? 
        (
            (type == "Traductor" ? (
                <div class="menu">
                    <div class="items-container">
                        {menuTranslator.map((item, index) => (
                        <div className="menu-item" key={index}>
                            <p>{item}</p>
                        </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div class="menu">
                    <div class="items-container">
                        {menuUser.map((item, index) => (
                        <div className="menu-item" key={index}>
                            <p>{item}</p>
                        </div>
                        ))}
                    </div>
                </div>
            ))
        ) : (
            <></>
        )
    )
}

export default MenuComponent