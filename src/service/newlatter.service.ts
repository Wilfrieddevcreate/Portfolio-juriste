// blog.service.ts
import api from './base.service';

class NewsletterService {
  async Create(data: object) {
    try {
      const response = await api.post(`/newsletter`, data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default new NewsletterService();
