"use client";

import { ThemeProvider } from "@emotion/react";
import { Box, useMediaQuery } from "@mui/material";
import theme from "@/app/theme";
import Logo from "@/components/atomos/logo/Logo";
import ButtonTerciario from "@/components/atomos/button/submit/terciario/ButtonTerciario";
import ButtonResaltado from "@/components/atomos/button/submit/resaltado/ButtonResaltado";
import ConfirmationModal from "@/components/moleculas/confirmationModal/ConfirmationModal";
import { useState } from "react";
import { useRouter } from "next/navigation";

function Rol() {
  const [esVisible, setEsVisible] = useState(false);
  const [rol, setRol] = useState("SOLICITANTE");
  const router = useRouter();
  const esMobile = useMediaQuery("(max-width: 576px)");

  const handleEleccionRol = (event) => {
    setRol(event.target.innerText);
    setEsVisible(true);
  };


  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: "primary.main", minHeight: "100vh", height: '100vh'}}>
        <Box
          sx={{
            minHeight: "50%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: `${esMobile ? "column" : "row"}`,
            padding: "5%",
          }}
        >
          <ButtonTerciario
            onClick={handleEleccionRol}
            width={esMobile ? "90%" : "30%"}
            texto={"SOLICITANTE"}
          ></ButtonTerciario>
          <ButtonResaltado
            onClick={handleEleccionRol}
            width={esMobile ? "90%" : "30%"}
            texto={"TRADUCTOR"}
          ></ButtonResaltado>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Logo
            width={esMobile ? "70%" : "25%"}
            height={esMobile ? "70%" : "25%"}
          />
        </Box>
        <ConfirmationModal
          esVisible={esVisible}
          handleRechazar={() => setEsVisible(false)}
          handleConfirmar={() => router.push("/home")}
          texto={`¿Estás seguro de iniciar sesión como ${rol}?`}
        ></ConfirmationModal>
      </Box>
    </ThemeProvider>
  );
}

export default Rol;
