import api from './base.service'

class AproposService {

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
