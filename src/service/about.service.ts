import api from './base.service'

class AproposService {
  // A propos
  // Récupérer toutes les données
  async fetchApropos() {
    try {
      const response = await api.get(`/abouts`);
      return response.data;
    } catch (error) {
      console.error(error)
      throw error;
    }
  }

 }

export default new AproposService()
