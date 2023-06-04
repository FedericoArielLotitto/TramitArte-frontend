import './request-translation.css'
import { useEffect, useState } from 'react';
import { AppBar, BottomNavigation, BottomNavigationAction, Box, Button, Card, CardContent, IconButton, Toolbar, Typography } from "@mui/material";
import { AccountBoxOutlined, HelpOutlineOutlined, HomeOutlined, MenuOutlined, SearchOutlined } from '@mui/icons-material';

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
                    <BottomNavigationAction
                        icon={<MenuOutlined />}
                    />
                    <BottomNavigationAction
                        icon={<AccountBoxOutlined />}
                    />
                    </Toolbar>
                </AppBar>
            </Box>
            {document == null
            ?
            <Box className="page-body">
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
                    <BottomNavigationAction label="Inicio" icon={<HomeOutlined />} />
                    <BottomNavigationAction label="Buscar" icon={<SearchOutlined />} />
                    <BottomNavigationAction label="Ayuda" icon={<HelpOutlineOutlined />} />
                </BottomNavigation>
            </Box>
        </div>
    )
}
