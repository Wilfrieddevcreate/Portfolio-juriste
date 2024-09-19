  import api from './base.service';

  class PublicationService {
    async get(page: number = 1) {
      try {
        const response = await api.get(`/publications?page=${page}`);
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
    async show (slug: string) {
      try {
        const response = await api.get(`/publications/${slug}`);
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  }

  export default new PublicationService();
