import React from "react";

const SearchBar: React.FC = () => {
  return (
    <div className="bg-blue-100 py-4">
      <div className="fade-in px-2">
        <div className="mx-12">
          <div className="mb-6">
            <h1 className="font-bold text-2xl mb-4">RECHERCHER UN DOCUMENT</h1>
          </div>
          <form className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
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
                className="w-full py-3 px-4 bg-white appearance-none bg-transparent focus:outline-none focus:ring-0 transition duration-300"
              >
                <option value="">Sélectionner le type de document</option>
                <option value="livre">Livre</option>
                <option value="article">Article</option>
                <option value="rapport">Rapport</option>
                <option value="thèse">Thèse</option>
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
                placeholder="Du"
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
                placeholder="Au"
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
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
