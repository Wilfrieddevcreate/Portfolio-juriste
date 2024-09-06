// blog.service.ts
import api from './base.service';

class ContactService {
  async Create(data: object) {
    try {
      const response = await api.post(`/contacts`, data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default new ContactService();
