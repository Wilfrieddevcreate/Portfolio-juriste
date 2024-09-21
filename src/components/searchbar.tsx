import React, { useState, useEffect } from "react";
import SearchService from "../service/search.service";
import { truncateWords } from "../utilis/textUtils";
import { Link } from "react-router-dom";

interface SearchParams {
  type: string;
  start_date: string;
  end_date: string;
  keyword: string;
}

interface SearchResult {
  slug: string;
  title: string;
  description: string;
  image: string;
}

const SearchBar: React.FC = () => {
  const [documentType, setDocumentType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [isSearchTriggered, setIsSearchTriggered] = useState(false); // Nouvel état

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setHasSearched(false);
    setIsSearchTriggered(true); // Déclencher la recherche manuellement

    const searchParams: SearchParams = {
      type: documentType,
      start_date: startDate,
      end_date: endDate,
      keyword: keyword,
    };

    try {
      const response = await SearchService.get(searchParams);
      setResults(response);
      setError(null);
      setHasSearched(true);
    } catch (error) {
      setError("Aucun résultat trouvé.");
      setResults([]);
      console.error(error);
    }
  };

  useEffect(() => {
    setIsSearchTriggered(false); 
  }, [documentType, startDate, endDate, keyword]);

  return (
    <div className="bg-blue-100 py-4">
      <div className="fade-in px-2">
        <div className="">
          <div className="mb-6">
            <h1 className="font-bold text-2xl mb-4">RECHERCHER UN DOCUMENT</h1>
          </div>
          <form
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4 mx-12"
            onSubmit={handleSubmit}
          >
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
                className="w-full py-3 bg-white appearance-none bg-transparent px-4 focus:outline-none focus:ring-0 transition duration-300"
              />
            </div>

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

            <div className="lg:w-full md:w-auto flex mt-8">
              <button
                type="submit"
                className="w-full bg-blue-800 mt-6 text-white py-3 px-6 rounded-full font-semibold shadow-md hover:bg-blue-700 transition duration-300"
              >
                Rechercher
              </button>
            </div>
          </form>

          {error && <div className="text-red-600 mt-4">{error}</div>}

         
          {hasSearched && results.length === 0 && !error && (
            <div className="text-gray-600 mt-4">Aucun résultat trouvé</div>
          )}

          {isSearchTriggered && results.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Résultats de la recherche</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {results.map((result, index) => (
                  <div
                    key={index}
                    className="mb-4 bg-white rounded-lg shadow-lg overflow-hidden space-x-4 flex flex-col lg:flex-row px-6 py-4"
                  >
                    {documentType === "cours" ? (
                      <div className="flex lg:flex-row flex-col space-x-4">
                       <img src={result.image} alt="Image des résultats" className="w-full sm:w-56 md:w-64 lg:w-44 h-48 object-cover" />

                        <div>
                          <h3 className="text-xl font-bold">{truncateWords(result.title, 3)}</h3>
                          <p className="mb-4">{truncateWords(result.description, 10)}</p>
                          <Link to={`/cours-detail/${result.slug}`}>
                            <button className="bg-blue-800 rounded-full px-2 py-1 text-white">Lire le cours </button>
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <div className="flex lg:flex-row flex-col  space-x-4">
                          <img src={result.image} alt="Image des résultats" className="w-full sm:w-56 md:w-64 lg:w-44 h-48 object-cover" />
                      <div>
                          <h3 className="text-xl font-bold mb-2">{truncateWords(result.title, 3)}</h3>
                          <p className=" mb-4">{truncateWords(result.description, 10)}</p>
                          
                          <Link to={`/publication-detail/${result.slug}`}>
                            <button className="bg-blue-800 rounded-full px-2 py-1 text-white">Lire la publication </button>
                          </Link>
                        </div>
                      </div>
                    )}
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
