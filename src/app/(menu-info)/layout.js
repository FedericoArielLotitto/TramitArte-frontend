"use client"

import CustomAppBar from "@/app/components/moleculas/appBar/CustomAppBar";
import breakpoints  from "@/app/breakpoints"
import { useMediaQuery } from "@mui/material";
import { HeaderComponent } from "@/app/components/header/header";
import Footer from "@/app/components/moleculas/footer/Footer";

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