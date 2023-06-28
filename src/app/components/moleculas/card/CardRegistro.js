import ButtonSubmit from "../../atomos/button/submit/default/ButtonSubmit.js";
import "./cardRegistro.css"
export default function BasicCardRegistro() {
  return (
       <><div class="form">
      <p>Nombre de usuario...</p>
      <input placeholder="  Nombre De Usuario..."></input>
      <p>Contraseña...</p>
      <input placeholder="  Contraseña..."></input>
      <p>Correo Electrónico...</p>
      <input placeholder="  Correo electrónico"></input>
    <div class="boton"><ButtonSubmit texto="Crear cuenta" /></div></div></>
  );
}
