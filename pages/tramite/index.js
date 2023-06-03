import Footer from "@/app/moleculas/footer/Footer";
import ButtonSubmit from "@/app/atomos/button/submit/default/ButtonSubmit";
import HomeIcon from "@/app/atomos/icon/home/default/HomeIcons";

function InicioTramite() {
    return <div>
        <HomeIcon></HomeIcon>
        
        <ButtonSubmit texto="contactar" />
        <Footer></Footer>
    </div>
}

export default InicioTramite;