  import api from './base.service';

  class ArchiveService {
    async get(type: string) {
      try {
        const response = await api.get(`/archives?type=${type}`);
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    } 
    
  }

  export default new ArchiveService();
