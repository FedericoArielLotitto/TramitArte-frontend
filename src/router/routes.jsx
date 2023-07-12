import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'

import Testimonials from '../pages/Testimonials'
import AboutUs from '../pages/AboutUs'





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
        </Route> 
      </Routes>
    </BrowserRouter>
  )
}
