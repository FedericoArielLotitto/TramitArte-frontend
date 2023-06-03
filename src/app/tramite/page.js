"use client"

import Footer from "@/components/moleculas/footer/Footer";
import ButtonSubmit from "@/components/atomos/button/submit/default/ButtonSubmit";
import CustomAppBar from "@/components/moleculas/appBar/CustomAppBar";

function InicioTramite() {
    return <div>
        <CustomAppBar></CustomAppBar>
        <ButtonSubmit texto="contactar" />
        <Footer></Footer>
    </div>
}

export default InicioTramite;