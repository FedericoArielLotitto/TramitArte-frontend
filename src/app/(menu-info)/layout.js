"use client"

import CustomAppBar from "@/components/moleculas/appBar/CustomAppBar";
import Footer from "@/components/moleculas/footer/Footer";
import { HeaderComponent } from "../../components/header/header";
import breakpoints  from "@/app/breakpoints"
import { useMediaQuery } from "@mui/material";

function MenuInfoLayout({ children }) {
    const esResolucionMobile = useMediaQuery(`(max-width: ${breakpoints.mobile})`)
    return <div className="">
                { esResolucionMobile ? (
          <CustomAppBar/>
        ) : (<HeaderComponent/>)}
        {children}
        <Footer></Footer>
    </div>
}

export default MenuInfoLayout;