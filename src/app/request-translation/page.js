"use client";

import "./page.css";
import { useEffect, useState } from "react";
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  AccountBoxOutlined,
  HelpOutlineOutlined,
  HomeOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import Footer from "@/components/moleculas/footer/Footer";
import CustomAppBar from "@/components/moleculas/appBar/CustomAppBar";

export default function request() {
  const [document, setDocument] = useState(null);

  const handleClickDocument = () => {
    console.log("Hola loco");
    setDocument("Hola loco");
  };

  const handleClick = () => {
    console.log("Hola loco");
    setDocument("Hola loco");
  };

  useEffect(() => {
    console.log(document);
  });

  return (
    <div className="page-wrapper">
      <CustomAppBar />
      {document == null ? (
        <Box>
          <Card className="background">
            <CardContent>
              <Typography>Cargar Documento</Typography>
              <Button
                className="primary-color"
                sx={{ borderRadius: "5rem", padding: "1rem" }}
                onClick={handleClickDocument}
              >
                Cargar Documento
              </Button>
            </CardContent>
          </Card>
        </Box>
      ) : (
        <Box color="white">
          <Typography>Buscar Traductor</Typography>
          <Card>
            <Typography>Nombre - Apellido</Typography>
            <Typography>Costo por traduccion: $ 777.777</Typography>
            <Button
              className="primary-color"
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
  );
}
