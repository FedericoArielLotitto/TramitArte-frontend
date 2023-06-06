"use client";

import "./page.css";
import { useEffect, useState } from "react";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import Footer from "@/components/moleculas/footer/Footer";
import CustomAppBar from "@/components/moleculas/appBar/CustomAppBar";

export default function request() {
  const [document, setDocument] = useState(false)

  const handleClickDocument = () => {
    console.log("Hola loco");
    setDocument(true);
  }

  const handleClick = () => {
    console.log("Hola loco");
  }

  return (
    <div className="page-wrapper">
      <CustomAppBar />
      {document == false ? (
        <Box className="page-body background-color">
            <Card className="card-body">
              <Typography className="font-basics">Cargar Documento</Typography>
              <Button
                className="primary-color font-basics"
                sx={{ borderRadius: "5rem", padding: "1rem", color: "white" }}
                onClick={handleClickDocument}
              >
                Cargar Documento
              </Button>
            </Card>
        </Box>
      ) : (
        <Box
          className="page-body background-white"
        >
          <Typography className="font-secondary">Buscar Traductor</Typography>
          
          <Card className="card-body">
            <Typography className="font-secondary">Nombre - Apellido</Typography>
            <Typography className="font-secondary">Costo por traduccion: $ 777.777</Typography>
            <Button
              className="primary-color font-basics"
              sx={{ borderRadius: "5rem", padding: "1rem" }}
              onClick={handleClick}
            >
              Solicitar
            </Button>
          </Card>

          <Card className="card-body">
            <Typography className="font-secondary">Nombre - Apellido</Typography>
            <Typography className="font-secondary">Costo por traduccion: $ 777.777</Typography>
            <Button
              className="primary-color font-basics"
              sx={{ borderRadius: "5rem", padding: "1rem" }}
              onClick={handleClick}
            >
              Solicitar
            </Button>
          </Card>

          <Card className="card-body">
            <Typography className="font-secondary">Nombre - Apellido</Typography>
            <Typography className="font-secondary">Costo por traduccion: $ 777.777</Typography>
            <Button
              className="primary-color font-basics"
              sx={{ borderRadius: "5rem", padding: "1rem" }}
              onClick={handleClick}
            >
              Solicitar
            </Button>
          </Card>

          <Card className="card-body">
            <Typography className="font-secondary">Nombre - Apellido</Typography>
            <Typography className="font-secondary">Costo por traduccion: $ 777.777</Typography>
            <Button
              className="primary-color font-basics"
              sx={{ borderRadius: "5rem", padding: "1rem" }}
              onClick={handleClick}
            >
              Solicitar
            </Button>
          </Card>

          <Card className="card-body">
            <Typography className="font-secondary">Nombre - Apellido</Typography>
            <Typography className="font-secondary">Costo por traduccion: $ 777.777</Typography>
            <Button
              className="primary-color font-basics"
              sx={{ borderRadius: "5rem", padding: "1rem" }}
              onClick={handleClick}
            >
              Solicitar
            </Button>
          </Card>

        </Box>
      )}
      <Footer />
    </div>
  )
}
