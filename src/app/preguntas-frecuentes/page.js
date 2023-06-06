"use client";

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./preguntas.css"

function PreguntasFrecuentes() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >¿Cómo saber cuál es mi AVO?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Podés realizar la búsqueda de tu AVO (antepasado italiano que emigró) en:
            Family Search
            Antenati
            My Heritage
            Una vez terminada la búsqueda, cargá los datos en la sección Etapa 1
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>¿Dónde está el consulado más cercano?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Acá iría la geolocalización
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>¿Cómo solicitar la partida de nacimiento de mi AVO?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Si el avo nació antes de 1861, la partida es de Bautismo y hay que solicitarla en la Parroquia en que nació.
          Si nació después, es de comuna y se solicita en la comuna correspondiente.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography>¿De dónde obtengo el mail y el teléfono de la Comuna en la que nació?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          En el sitio oficial de la comuna puede aparecer como:
          1- Ufficio Anagrafe
          2- Ufficio di Stato Civile
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography>¿Qué certificados necesito?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Necesitás el certificado de nacimiento de tu AVO, y todos los descendientes directos hasta llegar a vos. Si se casó en Italia, deberás tener el certificado de matrimonio.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default PreguntasFrecuentes;