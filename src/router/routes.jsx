import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'

import Testimonials from '../pages/Testimonials'
import PreguntasFrecuentes from '../pages/PreguntasFrecuentes'
import AboutUs from '../pages/AboutUs'

// import AvoComponent from '../pages/avo/avo'
// import ButtonSubmit from '../components/botton/default/buttonSubmit'
// import ButtonSubmitDesktop from '../components/botton/defaultDesktop/buttonSubmitDesktop'
// import ButtonResaltado from '../components/botton/resaltado/buttonResaltado'
// import ButtonSubmitSecundario from '../components/botton/secundario/buttonSubmitSecundario'
// import ButtonTerciario from '../components/botton/terciario/buttonTerciario'
// import BasicCardLogin from '../components/cards/cardLogin'
// import BasicCardRegistro from '../components/cards/CardRegistro'
// import CustomCard from '../components/cards/customCard'
// import { HeaderComponent } from '../components/header/header'
// import HelpIcon from '../components/icon/help/HelpIcon'
// import SearchIcon from '../components/icon/search/SearchIcon'
// import UserIcon from '../components/icon/user/UserIcon'
// import CustomAppBar from '../components/moleculas/appBar/CustomAppBar'
// import ConfirmationModal from '../components/moleculas/confirmationModal/confirmationModal'
// import Footer from '../components/moleculas/footer/footer'
// import UserCardComponent from '../components/moleculas/userCard/userCard'
// import State from '../components/state/state'
// import { Icon } from '@chakra-ui/react'
// import TramiteComponent from '../components/tramite/tramite'
// import TramiteCardComponent from '../components/tramiteCard/tramiteCard'
// import TranslatorComponent from '../components/translator/translator'




export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
         <Route exact={true} path="/" >

          <Route index element={<Home />} />
          <Route path="/testimonials" element={<Testimonials/>} /> 
          <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes/>} />
          <Route path="/quienes-somos" element={<AboutUs/>} />
          {/* <Route index element={<TranslatorComponent stage={1}/>} /> */}
           {/* <Route path="/home" element={<Home />} />  */}
        </Route> 
      </Routes>
    </BrowserRouter>
  )
}
