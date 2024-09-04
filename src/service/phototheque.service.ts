// cours.service.ts
import api from './base.service';

class PhotothequeService {
  async get(page: number = 1) {
    try {
      const response = await api.get(`/phototheque?page=${page}`); // Assurez-vous que l'URL est correcte
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default new PhotothequeService();
