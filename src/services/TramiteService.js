import axios from "axios";

class TramiteService {
    urlBackend = 'http://localhost:8585/api';

    async guardarTramite() {
        let tramite = await axios.post(`${this.urlBackend}/tramite`)
        return tramite;
    }

    async cargarAVO() {
        let avo = await axios.post(`${this.urlBackend}/carga-avo`)
        return avo;
    }

}

const tramiteService = new TramiteService();

export default tramiteService;