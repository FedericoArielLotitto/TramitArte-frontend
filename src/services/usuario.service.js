import axios from "axios"

class UsuariosService {
    async getTranslators() {
        return await axios.get('http://localhost:8585/api/usuario/traductores')
        // return await axios.get(`${process.env.BACKEND_URL}/usuario/traductores`)
    }

    async getUsers() {
        return await axios.get(`${process.env.BACKEND_URL}/usuario/solicitantes`)
    }
}

export const usuariosService = new UsuariosService()
