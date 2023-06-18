import axios from "axios"

class TramiteService {
    async initTramit() {
        return await axios.post('http://localhost:8585/api/tramite')
    }
}

export const tramiteService = new TramiteService()
