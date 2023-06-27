"use client"

import CustomAppBar from "@/components/moleculas/appBar/CustomAppBar";
import breakpoints  from "@/app/breakpoints"
import { useMediaQuery } from "@mui/material";
import { HeaderComponent } from "@/components/header/header";
import Footer from "@/components/moleculas/footer/Footer";

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