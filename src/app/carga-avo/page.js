"use client";

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

  const handelOnClick = () => {
    tramiteService
      .cargarAVO({
        nombre: "fEDERICO",
        apellido: "lotitto",
        fechaNacimiento: "25/10/1995",
        sexo: "MASCULINO",
      })
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
          />
          <TextField
            sx={{ width: esMobile ? "90%" : "30%", margin: "5%" }}
            required
            id="standard-required"
            label="Apellido"
            defaultValue=""
            variant="standard"
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
            />
          </Box>
          <Box sx={{ width: esMobile ? "90%" : "30%", paddingY: "5%" }}>
            <ButtonResaltado
              width={"100%"}
              texto={"AVANZAR A ETAPA 2"}
              onClick={() => handelOnClick()}
            ></ButtonResaltado>
            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group">
                Gender
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
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default CargaAVO;
