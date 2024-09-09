  // blog.service.ts
  import api from './base.service';
  interface SearchParams {
    type: string;
    start_date: string;
    end_date: string;
    keyword: string;
  }
  interface SearchResult {
    title: string;        // Remplacez ces propriétés par celles que votre API retourne
    description: string;
    image: string  // Assurez-vous que ces noms correspondent à ceux de votre API
    // Ajoutez d'autres propriétés si nécessaire
  }
  class SearchService {
    async get(params: SearchParams): Promise<SearchResult[]> {
      try {
        // Envoyer les paramètres dans la requête GET
        const response = await api.get<SearchResult[]>('/search', { params });
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  }
  
  export default new SearchService();