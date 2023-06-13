"use client";
import "./page.css";
import theme from "@/app/theme";

import { useState } from "react";
import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, IconButton, Input, Toolbar, Typography, useMediaQuery } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { HeaderComponent } from "../home/header/header";
import Footer from "@/components/moleculas/footer/Footer";
import CustomAppBar from "@/components/moleculas/appBar/CustomAppBar";
import ButtonSubmit from "@/components/atomos/button/submit/default/ButtonSubmit";
import SendIcon from "@/components/atomos/icon/send/Send.Icon";
import MenuComponent from "@/components/moleculas/menu/menu";

export default function request() {
  const [document, setDocument] = useState(false)
  const [userType, setUserType] = useState("user")

  const matches = useMediaQuery('(min-width: 576px)')  

  const menuUser = ["Traductores Registrados", "Family Search", "Preguntas"]
  const menuTranslator = ["Traducciones Realizadas", "Solicitudes Pendientes", "Solicitudes de Traducción"]

  const arrayTemp = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

  const handleClickDocument = () => {
    console.log("Hola loco");
    setDocument(true);
  }

  const handleClick = () => {
    console.log("Hola loco");
  }

  return (
    <div>
      { matches ? (
          <div className='page-wrapper'>
            <ThemeProvider theme={theme}>
              <HeaderComponent />
              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <MenuComponent array={menuUser}/>
                <Box className='page-body'>
                  <Grid
                    container
                    spacing={1}
                    sx={{ justifyContent: 'space-between'}}
                  >

                  {arrayTemp.map(() => (
                    <Card sx={{ maxWidth: 345, margin: '1rem' }}>
                      <CardMedia
                        component="img"
                        height="140"
                        image="https://img.freepik.com/free-vector/illustration-paper_53876-5860.jpg?w=826&t=st=1686592542~exp=1686593142~hmac=2ad82beefe2bcbb825d13506e6c5d0899c4535d225105cd145f93b06c08c9aae"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Nombre - Apellido
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Ofrezco Traducciones de calidad a buen precio
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          $ 7.777
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary" onClick={handleClick()}>
                          Solicitar
                        </Button>
                      </CardActions>
                    </Card>
                  ))}

                  </Grid>
                </Box>
              </Box>
            </ThemeProvider>
          </div>
        )
        : (
          <div className="page-wrapper">
            <CustomAppBar />
              <ThemeProvider theme={theme}>
              {document == false ? (
                <Box
                  backgroundColor="primary.main"
                  className="page-body"
                >
                  <Box
                    backgroundColor="secondary.main"
                    className="doc-upload"
                  >
                    <Typography className="font-basics">Cargar Documento</Typography>
                    <ButtonSubmit
                      className="font-basics"
                      texto={"Cargar Documento"}
                      event={handleClickDocument}
                    />
                  </Box>
                </Box>
              ) : (
                <Box
                  backgroundColor="primary.main"
                  className="page-body"
                >
                  <Typography
                    className="font-secondary"
                  >
                    Cambiar por el input xD
                  </Typography>

                  <Grid>

                    {arrayTemp.map(() => (
                      <Card
                        className="card-body"
                        onClick={handleClick}
                      >
                        <Box sx={{ padding: '0.5rem', backgroundColor: "primary.dark" }}>
                          <Avatar />
                        </Box>
                        <Box sx={{ flexDirection: "column", padding: '0 1rem' }}>
                          <Typography>Nombre Apellido</Typography>
                          <Typography>$ 7.777</Typography>
                        </Box>
                        <Box sx={{ padding: '0 1rem' }}>
                          <SendIcon color="info"/>
                        </Box>
                      </Card>
                    ))}

                  </Grid>

                </Box>
              )}
              </ThemeProvider>
            <Footer />
          </div>
        )
      }
    </div>
  )
}
