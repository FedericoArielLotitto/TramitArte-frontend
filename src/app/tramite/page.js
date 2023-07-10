"use client";

import Footer from "../components/moleculas/footer/Footer";
import CustomAppBar from "../components/moleculas/appBar/CustomAppBar";
import CustomCard from "../components/moleculas/card/CustomCard";
import { Box } from "@mui/material";

function InicioTramite() {
  return (
    <div>
      <CustomAppBar></CustomAppBar>
      <Box sx={{ height: '80%', padding: '20% 10%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <CustomCard />
      </Box>
      <Footer></Footer>
    </div>
  );
}

export default InicioTramite;
