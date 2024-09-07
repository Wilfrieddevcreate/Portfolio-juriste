import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ArchiveService from "../service/archive.service";
import { truncateWords } from "../utilis/textUtils";

interface Publication {
  id: number;
  image: string;
  slug: string;
  title: string;
  description: string;
  author: string;
  year: string;
  pages: string;
  file_size: string;
  file: string;
}

const ArchivePublication: React.FC = () => {
  const [publications, setPublications] = useState<Publication[]>([]);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const data = await ArchiveService.get("document");
        setPublications(data.publications); // Accéder à la clé 'publications' de la réponse API
      } catch (error) {
        console.error("Erreur lors du chargement des publications:", error);
      }
    };

    fetchPublications();
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {publications.map((publication) => (
            <div
              key={publication.id}
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row fade-in"
            >
              <img
                src={publication.image}
                alt={publication.title}
                className="w-full h-48 sm:h-auto md:w-1/3 object-cover"
              />
              <div className="flex flex-col justify-between p-4 flex-grow">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {truncateWords(publication.title, 3)}
                  </h2>
                  <Link to={`/publication-detail/${publication.slug}`}>
                    <button className="text-blue-600 hover:underline text-sm sm:text-base">
                      Voir l'aperçu
                    </button>
                  </Link>
                </div>
                <p className="text-gray-700 text-sm sm:text-base mb-4">
                  {truncateWords(publication.description, 20)}
                </p>
                <div className="flex justify-between items-center bg-blue-50 p-2 rounded-md text-sm sm:text-base mb-4">
                  <span className="text-gray-700">{publication.author}</span>
                  <span className="text-gray-700">Année: {publication.year}</span>
                  <span className="text-gray-700">{publication.pages} pages</span>
                </div>

                <div className="flex justify-between">
                  <Link
                    to={`/publication-detail/${publication.slug}`}
                    className="bg-blue-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300 text-sm sm:text-base"
                  >
                    Lire l'article
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
      </div>
    </>
  );
};

export default ArchivePublication;
