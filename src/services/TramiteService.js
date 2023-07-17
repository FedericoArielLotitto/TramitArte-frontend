import axios from "axios";

class TramiteService {
    urlBackend = 'http://localhost:8585/api';

    async guardarTramite() {
        let tramite = await axios.post(`${this.urlBackend}/tramite`)
        return tramite;
    }

}

const tramiteService = new TramiteService();

export default tramiteService;