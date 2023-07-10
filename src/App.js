import './App.css'
import { Navigate, Route, Router, Routes } from 'react-router-dom'
import { usePage, PageProvider } from './context/page.context'
import { useState } from 'react'
import { useMediaQuery } from "@mui/material";
import HomeUserComponent from './app/paginas/home/solicitante/page'
import HomeTranslatorComponent from './app/paginas/home/traductor/page'
import breakpoints from './app/breakpoints'
import CustomAppBar from './app/components/moleculas/appBar/CustomAppBar'
import { HeaderComponent } from './app/components/header/header'
import Footer from './app/components/moleculas/footer/Footer';
import AvoComponent from './app/paginas/avo/page';
import Stage1Component from './app/paginas/stage1/page';
import Stage2Component from './app/paginas/stage2/page';
import Stage3Component from './app/paginas/stage3/page';
import Stage4Component from './app/paginas/stage4/page';
import Stage5Component from './app/paginas/stage5/page';
import UserDNIComponent from './app/paginas/user-dni/page';
import CargaAVO from './app/carga-avo/page';
import EleccionTramite from './app/eleccion-tramite/page';
import PreguntasFrecuentes from './app/preguntas-frecuentes/page';
import UserProfileEdit from './app/profile-edit/page';
import UserProfile from './app/profile-user/page';
import Registro from './app/registro/page';
import Rol from './app/rol/page';
import InicioTramite from './app/tramite/page';
import TranslatorOffer from './app/translator-offer/page';
import RequestTranslation from './app/paginas/request-translation/page';
import Login from './app/login/page';


export default () => (
  <PageProvider>
    <App />
  </PageProvider>
)

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home/solicitante" />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/carga-avo" element={<CargaAVO />}></Route>
        <Route path="/eleccion-tramite" element={<EleccionTramite />}></Route>
        <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />}></Route>
        <Route path="/profile-edit" element={<UserProfileEdit />}></Route>
        <Route path="/profile" element={<UserProfile />}></Route>
        <Route path="/registro" element={<Registro />}></Route>
        <Route path="/rol" element={<Rol />}></Route>
        <Route path="/tramite" element={<InicioTramite />}></Route>
        <Route path="/translator-offer" element={<TranslatorOffer />}></Route>
        <Route path="*" element={<AppContent />}></Route>
      </Routes>
    </Router>
    </>
  )
}

const AppContent = () => {
  const [logged, setLogged] = useState(false)
  const { pageName } = usePage()
  const esResolucionMobile = useMediaQuery(`(max-width: ${breakpoints.mobile})`)

  return !routes.includes(window.location.pathname.split('/')[0]) ? (
    <>NOT FOUND</>
  ) : (
    <>
      { esResolucionMobile ? (
          <CustomAppBar/>
        ) : (<HeaderComponent/>)}

      <div className='page-conteiner'>
        <Router>
          <Routes>
            <Route path='home/solicitante' element={<HomeUserComponent />} />
            <Route path='home/traductor' element={<HomeTranslatorComponent />} />
            <Route path='solicitante/avo' element={<AvoComponent />} />
            <Route path='solicitante/dni' element={<UserDNIComponent />} />
            <Route path='solicitante/stage1' element={<Stage1Component />} />
            <Route path='solicitante/stage2' element={<Stage2Component />} />
            <Route path='solicitante/stage3' element={<Stage3Component />} />
            <Route path='solicitante/stage4' element={<Stage4Component />} />
            <Route path='solicitante/stage5' element={<Stage5Component />} />
            <Route path='traductor/request-translation' element={<RequestTranslation />} />
          </Routes>
        </Router>
      </div>

        <Footer />
    </>
  )
}

const routes = ['', 'home/solicitante', 'home/traductor', "solicitante/avo", "solicitante/dni", "solicitante/stage1", 
"solicitante/stage2", "solicitante/stage3", "solicitante/stage4", "solicitante/stage5", "traductor/request-translation", 
"carga-avo", "eleccion-tramite", "preguntas-frecuentes", "profile-edit", "profile", "registro", "rol", "tramite", "translator-offer" 
,'login']
