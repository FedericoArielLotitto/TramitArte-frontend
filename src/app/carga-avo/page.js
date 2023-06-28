"use client";

import { useState } from "react";
import { Box, TextField, ThemeProvider, IconButton } from "@mui/material";
import theme from "@/app/theme";
import ButtonResaltado from "../components/atomos/button/submit/resaltado/ButtonResaltado";
import { useMediaQuery } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useRouter } from "next/navigation";
import { tramiteService } from "@/services/tramite.service";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function CargaAVO() {
  const esMobile = useMediaQuery("(max-width: 576px)");
  const router = useRouter();
  const [value, setValue] = useState('female');
  const [avo, setAvo] = useState({nombre: "fEDERICO", apellido: "lotitto", fechaNacimiento: "25/10/1995", sexo: "MASCULINO"})

  const handleChange = (event) => {
    setValue(event.target.value);
    setAvo({
      ...avo,
      sexo: value
    })
  };

  const nameInput = (event) => {
    setAvo({
      ...avo,
      nombre: event.target.value
    })
  };

  const surnameInput = (event) => {
    setAvo({
      ...avo,
      apellido: event.target.value
    })
  };

  const birthInput = (event) => {
    setAvo({
      ...avo,
      fechaNacimiento: event.target.value
    })
  };

  const handelOnClick = () => {
    tramiteService
      .cargarAVO({ avo })
      .then(() => router.push("/stage2"))
      .catch((e) => console.log(e));
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          padding: "5%",
          backgroundColor: "info.main",
          height: "100%",
          minHeight: "100%",
        }}
      >
        <IconButton onClick={() => router.back()}>
          <ArrowBackIcon color="resaltado" />
        </IconButton>
        <Box
          sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
        >
          <ButtonResaltado
            width={esMobile ? "90%" : "30%"}
            texto={"CARGA DE AVO"}
          ></ButtonResaltado>

          <TextField
            sx={{ width: esMobile ? "90%" : "30%", margin: "5%" }}
            required
            id="standard-required"
            label="Nombre"
            defaultValue=""
            variant="standard"
            onChange={nameInput}
          />
          <TextField
            sx={{ width: esMobile ? "90%" : "30%", margin: "5%" }}
            required
            id="standard-required"
            label="Apellido"
            defaultValue=""
            variant="standard"
            onChange={surnameInput}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              width: esMobile ? "90%" : "30%",
              margin: "5%",
            }}
          >
            <CalendarMonthIcon
              sx={{ color: "action.active", mr: 1, my: 0.5 }}
            />
            <TextField
              required
              sx={{ width: "100%" }}
              id="standard-required"
              label="Fecha de Nacimiento"
              defaultValue=""
              variant="standard"
              onChange={birthInput}
            />
          </Box>
          <Box sx={{ width: esMobile ? "90%" : "30%", paddingY: "5%" }}>
            <FormControl sx={{ paddingY: '5%'}}>
              <FormLabel id="demo-controlled-radio-buttons-group">
                Sexo
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="FEMENINO"
                  control={<Radio />}
                  label="Femenino"
                />
                <FormControlLabel
                  value="MASCULINO"
                  control={<Radio />}
                  label="Masculino"
                />
              </RadioGroup>
            </FormControl>
            <ButtonResaltado
              width={"100%"}
              texto={"AVANZAR A ETAPA 2"}
              onClick={() => handelOnClick()}
            ></ButtonResaltado>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default CargaAVO;
