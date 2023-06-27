"use client";

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./preguntas.css"
import { ThemeProvider } from '@emotion/react'
import theme from "@/app/theme";
import Map from './map';
//import { useMediaQuery } from 'react-responsive';

function PreguntasFrecuentes() {
  //const isMobile = window.innerWidth <= 768;

  return (
    <div sx={{height: '100%', backgroundColor: ThemeProvider.blancoFantasma}}>
      <ThemeProvider theme={theme}>

      <Accordion >
        <AccordionSummary sx={{backgroundColor:"terciario.main" , color:"terciario.contrastText",
        margin:'2% 7%', justifyContent: 'center', alignItems: 'center', borderRadius:70}}
          expandIcon={<ExpandMoreIcon sx={{color: "terciario.contrastText"}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >¿Cómo saber cuál es mi AVO?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{color: "terciario.main", margin:'0% 8%'}}> 
          <Typography>
            Podés realizar la búsqueda de tu AVO (antepasado italiano que emigró) en:
            <ul>
              <li><a href="https://www.familysearch.org/" target="_blank" rel="noopener noreferrer">Family Search</a></li>
              <li><a href="https://antenati.cultura.gov.it/?lang=es" target="_blank" rel="noopener noreferrer">Antenati</a></li>
              <li><a href="https://www.myheritage.es/" target="_blank" rel="noopener noreferrer">My Heritage</a></li>
            </ul>
            Una vez terminada la búsqueda, cargá los datos en la sección Etapa 1
          </Typography>
        </AccordionDetails>
      </Accordion >
      <Accordion>
        <AccordionSummary sx={{backgroundColor:"terciario.main" , color:"terciario.contrastText",
        margin:'2% 7%', justifyContent: 'center', alignItems: 'center', borderRadius:70}}
          expandIcon={<ExpandMoreIcon sx={{color: "terciario.contrastText"}}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>¿Dónde está el consulado más cercano?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{color: "terciario.main", margin:'0% 8%'}}>
          <Typography>
            <Map />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary sx={{backgroundColor:"terciario.main" , color:"terciario.contrastText",
        margin:'2% 7%', justifyContent: 'center', alignItems: 'center', borderRadius:70}}
          expandIcon={<ExpandMoreIcon sx={{color: "terciario.contrastText"}}/>}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>¿Cómo solicitar la partida de nacimiento de mi AVO?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{color: "terciario.main", margin:'0% 8%'}}>
          <Typography>
          Si el avo nació antes de 1861, la partida es de Bautismo y hay que solicitarla en la Parroquia en que nació.
          Si nació después, es de comuna y se solicita en la comuna correspondiente.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary sx={{backgroundColor:"terciario.main" , color:"terciario.contrastText",
        margin:'2% 7%', justifyContent: 'center', alignItems: 'center', borderRadius:70}}
          expandIcon={<ExpandMoreIcon sx={{color: "terciario.contrastText"}}/>}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography>¿De dónde obtengo el mail y el teléfono de la Comuna en la que nació?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{color: "terciario.main", margin:'0% 8%'}}>
          <Typography>
          En el sitio oficial de la comuna puede aparecer como:
          <p>1- Ufficio Anagrafe</p>
          <p>2- Ufficio di Stato Civile</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary sx={{backgroundColor:"terciario.main" , color:"terciario.contrastText",
        margin:'2% 7%', justifyContent: 'center', alignItems: 'center', borderRadius:70}}
          expandIcon={<ExpandMoreIcon sx={{color: "terciario.contrastText"}}/>}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography>¿Qué certificados necesito?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{color: "terciario.main", margin:'0% 8%'}}>
          <Typography>
          Necesitás el certificado de nacimiento de tu AVO, y todos los descendientes directos hasta llegar a vos. Si se casó en Italia, deberás tener el certificado de matrimonio.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </ThemeProvider>
    </div>
  );
}

export default PreguntasFrecuentes;