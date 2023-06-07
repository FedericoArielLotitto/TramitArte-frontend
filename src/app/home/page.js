"use client"

import { HeaderComponent } from "./header/header";
import "./home.css"
import React, { useEffect, useState } from "react";
import TramiteComponent from "./tramite/tramite";
import MenuComponent from "@/components/moleculas/menu/menu";
import TranslatorComponent from "./translator/translator";
import Footer from "@/components/moleculas/footer/Footer";
import CustomAppBar from "../../components/moleculas/appBar/CustomAppBar"

class User{
  constructor(name, id, image, document){
    this.name = name
    this.id = id
    this.image = image
    this.document = document
  }
}

const HomeComponent = () => {
  const userType = "Traductor"
  const menuUser = ["Traductores Registrados", "Family Search", "Preguntas"]
  const menuTranslator = ["Traducciones Realizadas", "Solicitudes Pendientes", "Solicitudes de Traducción"]
  const user1 = new User("Mateo Pastorini", "ASDFDF8787", "https://i.pinimg.com/564x/e8/ac/0c/e8ac0c49baf56bc75d422e4d4d863f43.jpg", "Certificado.pdf")
  const userArray = [user1, user1, user1, user1]
  const [users, setUsers] = useState(userArray)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleDeleteUser = (updatedUsers) => {
    setUsers(updatedUsers)
  }

  // Renderiza la pantalla
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    // Elimina el event listener al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  return(
  <div class="container">
        {windowWidth <= 576 ? (
          <CustomAppBar/>
        ) : (<HeaderComponent/>)}
        <div className="home-conteiner">
          {userType == "Traductor" ? (
            <div className="columns-container">
              {windowWidth <= 576 ? (
                <></>
              ) : (<MenuComponent array={menuTranslator}/>)}
              <TranslatorComponent users={users} onDelete={handleDeleteUser}/>
            </div>
          ) : (
            <div className="columns-container">
              {windowWidth <= 576 ? (
                <></>
              ) : (<MenuComponent array={menuUser}/>)}
              <TramiteComponent/>
            </div>
          )}
        </div>
        {windowWidth <= 576 ? (
          <div className="footer-container">
            <Footer/>
          </div>
        ) : (<></>)}
    </div>
  )
}

export default HomeComponent