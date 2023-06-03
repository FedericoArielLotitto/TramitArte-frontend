import { createTheme } from "@mui/material/styles";

const blancoFantasma = '#F6F4FF';
const turquesaMedio = '#57c5b6';
const verdeAzulado = '#1A5F7A';
const cyanOscuro = '#159895';

const theme = createTheme({
    palette: {
        primary: {
            main: turquesaMedio,
            contrastText: blancoFantasma,
            dark: cyanOscuro
        },
        secondary: {
            main: verdeAzulado,
            contrastText: blancoFantasma
        },
        info: {
            main: blancoFantasma,
            contrastText: turquesaMedio
        }
    }
})

export default theme;