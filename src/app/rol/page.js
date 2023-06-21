"use client";

import { ThemeProvider } from "@emotion/react";
import { Box } from "@mui/material";
import theme from "@/app/theme";
import Logo from "@/components/atomos/logo/Logo";
import ButtonTerciario from "@/components/atomos/button/submit/terciario/ButtonTerciario";
import ButtonResaltado from "@/components/atomos/button/submit/resaltado/ButtonResaltado";
import {useSearchParams} from "next/navigation"

function Rol() {
  const searchParams = useSearchParams()

  console.log(searchParams.get("email"));


  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: 'primary.main', height: "100vh" }}>
        <Box sx={{ height: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          <ButtonTerciario width={'90%'} texto={"SOLICITANTE"}></ButtonTerciario>
          <ButtonResaltado width={'90%'} texto={"TRADUCTOR"}></ButtonResaltado>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Logo width='50%' height='50%'/>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Rol;
