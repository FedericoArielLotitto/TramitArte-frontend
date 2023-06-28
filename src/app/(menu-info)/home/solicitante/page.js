"use client";

import MenuComponent from "@/app/components/moleculas/menu/menu";
import TramiteComponent from "@/app/components/tramite/tramite";
import "@/app/components/home/home.css"

const HomeUserComponent = () => {

    return (
      <div class="container">
        <div className="home-conteiner">
            <div className="columns-container">
              <MenuComponent/>
              <TramiteComponent />
            </div>
        </div>
      </div>
    );
  };
  
  export default HomeUserComponent;
  