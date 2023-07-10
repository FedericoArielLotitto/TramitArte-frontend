"use client";
import "./page.css";
import theme from "../theme";

import { useState } from "react";
import { Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, useMediaQuery } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

import { HeaderComponent } from "../components/header/header";
import Footer from "../components/moleculas/footer/Footer";
import CustomAppBar from "../components/moleculas/appBar/CustomAppBar";
import MenuComponent from "../components/moleculas/menu/menu";
import SendIcon from "../components/atomos/icon/send/Send.Icon";

import { usuariosService } from "../../services/usuario.service";

export default function TranslatorOffer() {
  const [users, setUsers] = useState([])
  
  const menuTranslator = ["Traducciones Realizadas", "Solicitudes Pendientes", "Solicitudes de Traducción"]

  const matches = useMediaQuery('(min-width: 576px)')

  const getUsers = async () => {
    const list = await usuariosService.getUsers()
    setUsers(list)
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
                <MenuComponent array={menuTranslator}/>
                <Box className='page-body'>
                  <Grid
                    container
                    spacing={1}
                    sx={{ justifyContent: 'center' }}
                  >

                    {users.map((item) => (
                      <Card sx={{ maxWidth: 345, margin: '1rem', padding: '1rem' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://img.freepik.com/free-vector/illustration-paper_53876-5860.jpg?w=826&t=st=1686592542~exp=1686593142~hmac=2ad82beefe2bcbb825d13506e6c5d0899c4535d225105cd145f93b06c08c9aae"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {item.name} - {item.surname}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.description}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                $ {item.price}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">
                                Aceptad Solicitud
                            </Button>
                        </CardActions>
                      </Card>

                    ))}

                  </Grid>
                </Box>
              </Box>
            </ThemeProvider>
          </div>
        ) : (
          <div className="page-wrapper">
            <CustomAppBar />
              <ThemeProvider theme={theme}>
                <Box
                  backgroundColor="primary.main"
                  className="page-body"
                >
                    <Box>
                        <Typography className="font-secondary">
                            Soltantes buscando traducciones
                        </Typography>
                            <Grid className="grid-style">

                            {users.map((item) => (
                              <Card
                                className="card-body"
                                onClick={handleClick}
                              >
                                <Box sx={{ padding: '0.5rem', backgroundColor: "primary.dark" }}>
                                  <Avatar />
                                </Box>
                                <Box sx={{ flexDirection: "column", padding: '0 1rem' }}>
                                  <Typography>{item.name}</Typography>
                                  <Typography>{item.surname}</Typography>
                                </Box>
                                <Box sx={{ padding: '0 1rem' }}>
                                  <SendIcon color="info"/>
                                </Box>
                              </Card>
                            ))}

                            </Grid>

                            <Grid
                              container
                              spacing={1}
                              sx={{ justifyContent: 'center' }}
                            >

                            {users.map((item) => (
                                <Card sx={{ maxWidth: 345, margin: '1rem', padding: '1rem' }}>
                                  <CardMedia
                                      component="img"
                                      height="140"
                                      image="https://img.freepik.com/free-vector/illustration-paper_53876-5860.jpg?w=826&t=st=1686592542~exp=1686593142~hmac=2ad82beefe2bcbb825d13506e6c5d0899c4535d225105cd145f93b06c08c9aae"
                                  />
                                  <CardContent>
                                      <Typography gutterBottom variant="h5" component="div">
                                          {item.name} - {item.surname}
                                      </Typography>
                                      <Typography variant="body2" color="text.secondary">
                                          $ {item.price}
                                      </Typography>
                                  </CardContent>
                                  <CardActions>
                                      <Button size="small" color="primary">
                                          Aceptad Solicitud
                                      </Button>
                                  </CardActions>
                              </Card>
                            ))}

                            </Grid>
                            
                    </Box>
                </Box>
              </ThemeProvider>
            <Footer />
          </div>
        )
      }
    </div>
  )
}
