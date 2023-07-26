import axios from "axios";

class TramiteService {
    urlBackend = 'http://localhost:8585/api';

    async guardarTramite(idUsuario) {
        let tramite = await axios.post(`${this.urlBackend}/tramite/${idUsuario}`)
        return tramite;
    }

    async cargarAVO(avo, idTramite) {
        let avoPersistido = await axios.post(`${this.urlBackend}/carga-avo/${idTramite}`, avo)
        return avoPersistido;
    }

    async buscarPorUsuario(idUsuario) {
        let tramitePersistido = await axios.get(`${this.urlBackend}/tramite/usuario/${idUsuario}`)
        return tramitePersistido;
    }

    async eliminar(idTramite) {
        await axios.delete(`${this.urlBackend}/tramite/${idTramite}`)
    }

}

const tramiteService = new TramiteService();

export default tramiteService;