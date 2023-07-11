import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'


export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
         <Route exact={true} path="/" >
          <Route index element={<Home />} />
           {/* <Route path="/home" element={<Home />} />  */}
        </Route> 
      </Routes>
    </BrowserRouter>
  )
}
