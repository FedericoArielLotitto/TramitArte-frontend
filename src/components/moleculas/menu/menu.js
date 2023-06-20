import "./menu.css"

import breakpoints from "@/app/breakpoints"
import { useMediaQuery } from "@mui/material"
import { Braah_One } from "next/font/google"

const MenuComponent = ({array}) => !useMediaQuery(`(max-width: ${breakpoints.mobile})`) && (
    <div class="menu">
            <div class="items-container">
                {array.map((item, index) => (
                <div className="menu-item" key={index}>
                    <p>{item}</p>
                </div>
                ))}
            </div>
    </div>
)

export default MenuComponent