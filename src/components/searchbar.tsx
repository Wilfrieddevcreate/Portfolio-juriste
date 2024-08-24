import React from "react";

const SearchBar: React.FC = () => {
  return (
    <div className="bg-blue-100 py-4">
      <div className="container mx-auto fade-in px-2">
        <div className="max-w-2xl mx-auto">
         
          <form className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="w-full">
              <label htmlFor="search-books" className="sr-only">
                Rechercher par ouvrages
              </label>
              <input
                type="text"
                id="search-books"
                placeholder="Rechercher par ouvrages"
                className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>
            <div className="w-full">
              <label htmlFor="search-articles" className="sr-only">
                Rechercher par articles
              </label>
              <input
                type="text"
                id="search-articles"
                placeholder="Rechercher par articles"
                className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>
            <div className="lg:w-full md:w-auto flex m-auto">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-full font-semibold shadow-md hover:bg-blue-700 transition duration-300"
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
