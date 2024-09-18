  import api from './base.service';
  interface SearchParams {
    type: string;
    start_date: string;
    end_date: string;
    keyword: string;
  }
  interface SearchResult {
    slug: string
    title: string;        
    description: string;
    image: string  
  }
  class SearchService {
    async get(params: SearchParams): Promise<SearchResult[]> {
      try {
        const response = await api.get<SearchResult[]>('/search', { params });
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  }
  
  export default new SearchService();