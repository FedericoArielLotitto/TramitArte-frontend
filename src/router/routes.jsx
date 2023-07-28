import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Tramite from '../components/Tramite';
import UserHome from "../pages/UserHome";
import UserProfile from "../pages/UserProfile";
import PreguntasFrecuentes from "../pages/PreguntasFrecuentes";
import FamilySearch from "../pages/FamilySearch";
import TraductoresRegistrados from "../pages/TraductoresRegistrados";
import ModalConfirmacion from "../components/ModalConfirmacion";
import EleccionRol from "../pages/EleccionRol";
import SolicitudAVO from "../pages/SolicitudAVO";
import PedidosTraduccion from "../components/PedidosTraduccion";
import VerifyEmailForm from "../pages/VerificacionEmail";


export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="eleccion-rol" element={<EleccionRol />} />
        
        <Route index element={<Home />} />
        <Route path="/home/solicitante/*" element={<UserHome />}>
          <Route index element={<Tramite />} />
          {/* <Route path="tramite/etapa/:paso" element={} /> */}
        </Route>
        <Route path="/home/traductor/:id/*" element={<UserHome />}>
          <Route index element={<PedidosTraduccion />} />
        </Route>
        <Route path="/usuario" element={<UserProfile />} />
        <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes/>} />
        <Route path="/family-search" element={<FamilySearch />} />
        <Route path="/traductores" element={<TraductoresRegistrados />} />
        <Route path="/solicitantes" element={<div>solicitantes</div>} />
        <Route path="/pedidos-pendientes" element={<PedidosTraduccion />} />
        <Route path="/home/solicitante/:idUsuario/solicitud-avo" element={<SolicitudAVO />} />
        <Route path="/network-error" element={<div>Error</div>} />
        <Route path="verificacion" element={<VerifyEmailForm/>}/>
        <Route path="*" element={<ModalConfirmacion />} />
      </Routes>
    </BrowserRouter>
  );
};
