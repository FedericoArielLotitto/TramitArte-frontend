"use client";
import "./page.css";
import theme from "@/app/theme";

import { useState } from "react";
import { AppBar, Avatar, Box, Button, Card, Grid, IconButton, Input, Toolbar, Typography, useMediaQuery } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Footer from "@/components/moleculas/footer/Footer";
import CustomAppBar from "@/components/moleculas/appBar/CustomAppBar";
import MenuIcon from "@/components/atomos/icon/menu/default/MenuIcon";
import UserIcon from "@/components/atomos/icon/user/default/UserIcon";
import HomeIcon from "@/components/atomos/icon/home/default/HomeIcons";
import ButtonSubmit from "@/components/atomos/button/submit/default/ButtonSubmit";
import SendIcon from "@/components/atomos/icon/send/Send.Icon";

export default function request() {
  const [document, setDocument] = useState(false)

  const matches = useMediaQuery('(min-width: 576px)')  

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
              <Box sx={{ backgroundColor: "primary.dark" }}>
                <AppBar sx={{ backgroundColor: "primary.dark" }} position="static">
                  <Toolbar>
                    <IconButton
                      size="large"
                      color="inherit"
                      aria-label="menu"
                      sx={{ justifyContent: 'flex-start', flexGrow: 1 }}
                    >
                      <MenuIcon />
                    </IconButton>
                    <Input
                      aria-label="search-bar"
                      sx={{ justifyContent: 'flex-end' }}
                    />
                    <IconButton size="large"
                      color="inherit"
                      aria-label="menu"
                      sx={{ justifyContent: 'flex-end'}}
                      >
                      <UserIcon />
                    </IconButton>
                    <IconButton size="large"
                      color="inherit"
                      aria-label="menu"
                      sx={{ justifyContent: 'flex-end'}}
                      >
                      <HomeIcon />
                    </IconButton>
                  </Toolbar>
                </AppBar>
              </Box>
              <div>
                <Box
                  className='profile-details'
                  sx={{
                      width: 1/5,
                      height: '100vh',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      backgroundColor: 'secondary.main'
                    }}
                >
                  hola loco
                </Box>
                {/* Grilla falopa */}
              </div>
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
                    className="card-body"
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

                    <Card
                      className="falopa"
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

                    <Card
                      className="falopa"
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

                    <Card
                      className="falopa"
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

                    <Card
                      className="falopa"
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

                    <Card
                      className="falopa"
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

                    <Card
                      className="falopa"
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

                    <Card
                      className="falopa"
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

                    <Card
                      className="falopa"
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

                    <Card
                      className="falopa"
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

                    <Card
                      className="falopa"
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

                    <Card
                      className="falopa"
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

                    <Card
                      className="falopa"
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

                    <Card
                      className="falopa"
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
