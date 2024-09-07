import React, { useState } from "react";
import SearchService from "../service/search.service";
import { truncateWords } from "../utilis/textUtils"; 
interface SearchParams {
  type: string;
  start_date: string;
  end_date: string;
  keyword: string;
}
interface SearchResult {
  title: string;
  description: string;
}
const SearchBar: React.FC = () => {
  const [documentType, setDocumentType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState<SearchResult []>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchParams: SearchParams = {
      type: documentType,
      start_date: startDate,
        end_date: endDate,
        keyword: keyword,
      };

    try {
      const response = await SearchService.get(searchParams);
      setResults(response);
      console.log(response);
      
      setError(null);
    } catch (error) {
      setError("Une erreur est survenue lors de la recherche.");
      setResults([]);
      console.error(error);
    }
  };

  return (
    <div className="bg-blue-100 py-4">
      <div className="fade-in px-2">
        <div className="mx-12">
          <div className="mb-6">
            <h1 className="font-bold text-2xl mb-4">RECHERCHER UN DOCUMENT</h1>
          </div>
          <form className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4" onSubmit={handleSubmit}>
            {/* Type de document */}
            <div className="w-full border-b border-white">
              <label
                htmlFor="document-type"
                className="block text-gray-700 font-semibold mb-2"
              >
                Type de document
              </label>
              <select
                id="document-type"
                value={documentType}
                onChange={(e) => setDocumentType(e.target.value)}
                className="w-full py-3 px-4 bg-white appearance-none bg-transparent focus:outline-none focus:ring-0 transition duration-300"
              >
                <option value="">Sélectionner le type de document</option>
                <option value="publication">Publication</option>
                <option value="cours">Cours</option>
              </select>
            </div>
            {/* Du (date de début) */}
            <div className="w-full border-b border-white">
              <label
                htmlFor="start-date"
                className="block text-gray-700 font-semibold mb-2"
              >
                Du
              </label>
              <input
                type="date"
                id="start-date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full py-3 bg-white appearance-none bg-transparent px-4  focus:outline-none focus:ring-0 transition duration-300"
              />
            </div>
            {/* Au (date de fin) */}
            <div className="w-full border-b border-white">
              <label
                htmlFor="end-date"
                className="block text-gray-700 font-semibold mb-2"
              >
                Au
              </label>
              <input
                type="date"
                id="end-date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full py-3 px-4 bg-white appearance-none bg-transparent focus:outline-none focus:ring-0 transition duration-300"
              />
            </div>
            {/* Mot clé */}
            <div className="w-full border-b border-white">
              <label
                htmlFor="keyword"
                className="block text-gray-700 font-semibold mb-2"
              >
                Mot clé
              </label>
              <input
                type="text"
                id="keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Mot clé"
                className="w-full py-3 px-4 bg-white appearance-none bg-transparent focus:outline-none focus:ring-0 transition duration-300"
              />
            </div>
            {/* Bouton Rechercher */}
            <div className="lg:w-full md:w-auto flex mt-8">
              <button
                type="submit"
                className="w-full bg-blue-600 mt-6 text-white py-3 px-6 rounded-full font-semibold shadow-md hover:bg-blue-700 transition duration-300"
              >
                Rechercher
              </button>
            </div>
          </form>
          {error && <div className="text-red-600 mt-4">{error}</div>}
          {results.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Résultats de la recherche</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {results.map((result, index) => (
                  <div key={index} className="mb-4 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col px-6 py-4">
                    {/* Affichez les détails des résultats ici */}
                    <h3 className="text-xl font-bold mb-4">{result.title}</h3>
                    <p>{truncateWords(result.description, 10)}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
