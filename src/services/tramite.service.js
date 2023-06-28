import axios from "axios"

class TramiteService {
    async iniciarTramite() {
        return await axios.post('http://localhost:8585/api/tramite')
    }

    async cargarAVO(solicitudAVO) {
        return await axios.post('http://localhost:8585/api/carga-avo', solicitudAVO)
    }
}

export const tramiteService = new TramiteService()
