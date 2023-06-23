"use client";

import MenuComponent from "@/components/moleculas/menu/menu";
import TramiteComponent from "../../../components/tramite/tramite";
import "../../../components/home/home.css"

const HomeUserComponent = () => {
    const menuUser = ["Traductores Registrados", "Family Search", "Preguntas"];

    return (
      <div class="container">
        <div className="home-conteiner">
            <div className="columns-container">
              <MenuComponent array={menuUser} />
              <TramiteComponent />
            </div>
        </div>
      </div>
    );
  };
  
  export default HomeUserComponent;
  