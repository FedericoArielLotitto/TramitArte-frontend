import ButtonSubmit from "../../atomos/button/submit/default/ButtonSubmit.js";
import "./cardRegistro.css"
export default function BasicCardLogin() {
  return (
       <><div class="form">
      <p>Nombre de usuario...</p>
      <input placeholder="  Nombre De Usuario..."></input>
      <p>Contraseña...</p>
      <input placeholder="  Contraseña..."></input>
      
    <div class="boton"><ButtonSubmit texto="Login" /></div>
    <div class="registrate"><p>¿No tenés cuenta?</p> <p class="p-secundario"> Registrate</p></div>
    <div class="recuperar-contrasena"><p class="p-secundario"> olvidaste tu contraseña</p></div></div></>
  );
}