import './request-translation.css'
import { AppBar, BottomNavigation, BottomNavigationAction, Box, Button, Card, CardContent, IconButton, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from 'react';

export default function request() {
    const [document, setDocument] = useState(null)

    const handleClickDocument = () => {
        console.log("Hola loco")
        setDocument("Hola loco")
    }

    const handleClick = () => {
        console.log("Hola loco")
        setDocument("Hola loco")
    }

    useEffect(() => {
        console.log(document)
    })

    return (
        <div className='page-wrapper'>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" className="appbar">
                    <Toolbar>
                    <IconButton
                        size="large"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        {/* <MenuIcon /> */}
                    </IconButton>
                    <IconButton
                        size="large"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        {/* <AccountBox /> */}
                    </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>
            {document == null
            ?
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
            :
            <Box color="white">
                <Typography>
                    Buscar Traductor
                </Typography>
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
            }
            <Box sx={{ width: 500 }}>
                <BottomNavigation
                    className="footer"
                    showLabels
                >
                    {/* <BottomNavigationAction label="Inicio" icon={<RestoreIcon />} /> */}
                    {/* <BottomNavigationAction label="Buscar" icon={<FavoriteIcon />} /> */}
                    {/* <BottomNavigationAction label="Ayuda" icon={<LocationOnIcon />} /> */}
                </BottomNavigation>
            </Box>
        </div>
    )
}
