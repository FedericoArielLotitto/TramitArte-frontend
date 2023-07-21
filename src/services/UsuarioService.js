import axios from "axios";

class UsuarioService {
    urlBackend = 'http://localhost:8585/api';

    async guardarUsuario(usuario) {
        let usuarioNuevo = await axios.post(`${this.urlBackend}/usuario`, usuario)
        return usuarioNuevo;
    }
}

const usuarioService = new UsuarioService();

export default usuarioService;