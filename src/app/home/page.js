"use client"

import { HeaderComponent } from "./header/header";
import "./home.css"
import React from "react";

const HomeComponent = () => (
  <div class="container">
        <HeaderComponent/>
        <div className="home-conteiner">
          <div className="columns-container">
          <div class="menu">
            <div class="items-container">
              <div class="menu-item">
                <p>Traductores registrados</p>
              </div>
              <div class="menu-item">
                <p>Family Search</p>
              </div>
              <div class="menu-item">
                <p>Preguntas Frecuentes</p>
              </div>
            </div>
          </div>
          <div class="tramite-container">
            <div class="tramite">
              <div class="p1-t">
                <p>Aún no iniciaste tu trámite</p>
              </div>
              <div class="p2-t"> 
                <p>¡Inicialo acá y conseguí tu ciudadanía!</p>
              </div>
              <div class="tramite-bottom">
                <div class="p3-t">
                  <p>Iniciar trámite</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
)

export default HomeComponent