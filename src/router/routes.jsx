import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'

import Testimonials from '../pages/Testimonials'
import AboutUs from '../pages/AboutUs'
import { HeaderComponent } from '../components/header/header'
import Footer from '../components/moleculas/footer/footer'
import AvoComponent from '../pages/avo/avo'
import HomeUserComponent from '../pages/home/solicitante/homeSolicitante'
import HomeTranslatorComponent from '../pages/home/traductor/homeTraductor'
import RequestPage from '../pages/request-translation/requestTranslation'
import Stage1Component from '../pages/stage1/stage1'
import Stage2Component from '../pages/stage2/stage2'
import Stage3Component from '../pages/stage3/stage3'
import Stage4Component from '../pages/stage4/stage4'
import Stage5Component from '../pages/stage5/stage5'
import UserDNIComponent from '../pages/user-dni/userDni'
import { useMediaQuery } from '@chakra-ui/react'
import breakpoints from '../breackpoints'
import CustomAppBar from '../components/moleculas/appBar/CustomAppBar'


const ConFooterHeader = (a) => {
  const [esResolucionMobile] = useMediaQuery(`(max-width: ${breakpoints.mobile})`);
  return (
    <>
    {esResolucionMobile ? <CustomAppBar/> : <HeaderComponent/>}
    {a}
    {esResolucionMobile ? <Footer/> : null}
    </>
  )
}


export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
         <Route exact={true} path="/" >

          <Route index element={<Home />} />
          <Route path="/testimonials" element={<Testimonials/>} /> 
          {/* <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes/>} /> */}
          <Route path="/quienes-somos" element={<AboutUs/>} />
          {/* <Route index element={<TranslatorComponent stage={1}/>} /> */}
           {/* <Route path="/home" element={<Home />} />  */}
          <Route path='/avo' element={ConFooterHeader(<AvoComponent/>)}></Route>
          <Route path='/home/solicitante' element={ConFooterHeader(<HomeUserComponent/>)}></Route>
          <Route path='/home/traductor' element={ConFooterHeader(<HomeTranslatorComponent/>)}></Route>
          <Route path='/request-translation' element={ConFooterHeader(<RequestPage/>)}></Route>
          <Route path='/stage1' element={ConFooterHeader(<Stage1Component/>)}></Route>
          <Route path='/stage2' element={ConFooterHeader(<Stage2Component/>)}></Route>
          <Route path='/stage3' element={ConFooterHeader(<Stage3Component/>)}></Route>
          <Route path='/stage4' element={ConFooterHeader(<Stage4Component/>)}></Route>
          <Route path='/stage5' element={ConFooterHeader(<Stage5Component/>)}></Route>
          <Route path='/user-dni' element={ConFooterHeader(<UserDNIComponent/>)}></Route>
        </Route> 
      </Routes>
    </BrowserRouter>
  )
}
