// cours.service.ts
import api from './base.service';

class CoursService {
  async get(page: number = 1) {
    try {
      const response = await api.get(`/cours?page=${page}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async show(slug: string) {
    try {
      const response = await api.get(`/cours/${slug}`); 
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default new CoursService();
