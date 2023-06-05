"use client"

import { HeaderComponent } from "./header/header";
import "./home.css"
import React from "react";
import TramiteComponent from "./tramite/tramite";

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
          <TramiteComponent/>
        </div>
      </div>
    </div>
)

export default HomeComponent