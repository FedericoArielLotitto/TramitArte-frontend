import axios from "axios";

class TramiteService {
    urlBackend = 'http://localhost:8585/api';

    async guardarTramite() {
        let tramite = await axios.post(`${this.urlBackend}/tramite`)
        return tramite;
    }

    async cargarAVO(avo) {
        let avoPersistido = await axios.post(`${this.urlBackend}/carga-avo`, avo)
        return avoPersistido;
    }

    async buscarPorUsuario(idUsuario) {
        let tramitePersistido = await axios.get(`${this.urlBackend}/tramite/usuario/${idUsuario}`)
        return tramitePersistido;
    }

}

const tramiteService = new TramiteService();

export default tramiteService;