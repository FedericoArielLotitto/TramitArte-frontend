"use client"

import CustomAppBar from "@/components/moleculas/appBar/CustomAppBar";
import Footer from "@/components/moleculas/footer/Footer";

function MenuInfoLayout({ children }) {
    return <div className="">
        <CustomAppBar></CustomAppBar>
        {children}
        <Footer></Footer>
    </div>
}

export default MenuInfoLayout;