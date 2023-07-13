import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Tramite from '../components/Tramite';
import UserHome from "../pages/UserHome";
import CardIniciarTramite from "../components/CardIniciarTramite";

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route index element={<Home />} />
        <Route path="/home/:rol/*" element={<UserHome />}>
          <Route path="tramite" element={<CardIniciarTramite />} />
          <Route path="tramite/etapa/:paso" element={<Tramite />} />
        </Route>
        {/* <Route path="/testimonials" element={<Testimonials/>} />  */}
        {/* <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes/>} /> */}
        {/* <Route path="/quienes-somos" element={<AboutUs/>} /> */}
        {/* <Route index element={<TranslatorComponent stage={1}/>} /> */}
        {/* <Route path="/home" element={<Home />} />  */}
      </Routes>
    </BrowserRouter>
  );
};
