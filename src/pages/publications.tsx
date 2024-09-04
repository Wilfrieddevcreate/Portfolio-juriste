import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/layouts/header";
import SectionPg from "../components/sectionpage";
import Footer from "../components/layouts/footer";
import Tof from "../assets/image.jpg";
import publicationService from "../service/publication.service";
import { truncateWords } from "../utilis/textUtils";

interface Publication {
  image: string;
  title: string;
  description: string;
  author: string;
  year: string;
  pages: string;
  file_size: string;
  file: string;
}

const PublicationsPage: React.FC = () => {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const data = await publicationService.get(currentPage);
        setPublications(data);
      } catch (error) {
        console.error("Erreur lors du chargement des publications:", error);
      }
    };

    fetchPublications();
  }, [currentPage]);

  const totalPages = Math.ceil(publications.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const currentPublications = publications.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <Header />
      <SectionPg title="Mes publications" imageSrc={Tof} />
      <div className="container mx-auto px-4 py-8 my-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {currentPublications.map((publication, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row fade-in"
            >
              <img
                src={publication.image}
                alt={publication.title}
                className="w-full h-20 sm:h-52 md:w-1/3 object-cover"
              />
              <div className="flex flex-col justify-between p-4 flex-grow">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {truncateWords(publication.title, 5)}
                  </h2>
                  <Link to={"/publication-detail"}>
                    <button className="text-blue-600 hover:underline text-sm sm:text-base">
                      Voir le résumé
                    </button>
                  </Link>
                </div>
                <p className="text-gray-700 text-sm sm:text-base mb-4">
                  {truncateWords(publication.description,10)}
                </p>

                <div className="flex justify-between items-center bg-blue-50 p-2 rounded-md text-sm sm:text-base mb-4">
                  <span className="text-gray-700">{publication.author}</span>
                  <span className="text-gray-700">Année: {publication.year}</span>
                  <span className="text-gray-700">{publication.pages} pages</span>
                </div>

                <div className="flex justify-between">
                  <Link
                    to={"/publication-detail"}
                    className="bg-blue-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300 text-sm sm:text-base"
                  >
                    Lire le document
                  </Link>
                  <a
                    href={publication.file}
                    download
                    className="text-blue-500 px-3 sm:px-4 sm:py-2 flex justify-center rounded-full transition duration-300 text-sm sm:text-base"
                  >
                    <span className="hover:underline">Télécharger</span>
                    <span className="bg-blue-600 text-white px-1 rounded-full ml-2">
                      {publication.file_size}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 mx-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
          >
            Précédent
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 mx-2 rounded ${
                currentPage === index + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 mx-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
          >
            Suivant
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PublicationsPage;
