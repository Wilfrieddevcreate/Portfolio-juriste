import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/layouts/header";
import SectionPg from "../components/sectionpage";
import Footer from "../components/layouts/footer";
import Tof from "../assets/image.jpg";

const PublicationsPage: React.FC = () => {
  const cards = [
    {
      imageUrl: "https://via.placeholder.com/150",
      title: "Titre du publication 1",
      description:
        "Ceci est une brève description du publication. Ce publication couvre les bases et les concepts avancés.",
      taille: "10KO",
      auteur: "Auteur 1",
      annee: "2023",
      pages: "120",
    },
    {
      imageUrl: "https://via.placeholder.com/150",
      title: "Titre du publication 2",
      description:
        "Ceci est une brève description du publication. Ce publication explore les techniques avancées.",
      taille: "10KO",
      auteur: "Auteur 2",
      annee: "2022",
      pages: "150",
    },
    {
      imageUrl: "https://via.placeholder.com/150",
      title: "Titre du publication 3",
      description:
        "Ceci est une brève description du publication. Ce publication couvre les bases et les concepts avancés.",
      taille: "10KO",
      auteur: "Auteur 1",
      annee: "2023",
      pages: "120",
    },
    {
      imageUrl: "https://via.placeholder.com/150",
      title: "Titre du publication 4",
      description:
        "Ceci est une brève description du publication. Ce publication explore les techniques avancées.",
      taille: "10KO",
      auteur: "Auteur 2",
      annee: "2022",
      pages: "150",
    },
    {
      imageUrl: "https://via.placeholder.com/150",
      title: "Titre du publication 5",
      description:
        "Ceci est une brève description du publication. Ce publication couvre les bases et les concepts avancés.",
      taille: "10KO",
      auteur: "Auteur 1",
      annee: "2023",
      pages: "120",
    },
    {
      imageUrl: "https://via.placeholder.com/150",
      title: "Titre du publication 6",
      description:
        "Ceci est une brève description du publication. Ce publication explore les techniques avancées.",
      taille: "10KO",
      auteur: "Auteur 2",
      annee: "2022",
      pages: "150",
    },
  ];

  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(cards.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const currentCards = cards.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <Header />
      <SectionPg title="Mes publications" imageSrc={Tof} />
      <div className="container mx-auto px-4 py-8 my-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {currentCards.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row fade-in"
            >
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-48 sm:h-auto md:w-1/3 object-cover"
              />
              <div className="flex flex-col justify-between p-4 flex-grow">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {card.title}
                  </h2>
                  <Link to={"/publication-detail"}>
                    <button className="text-blue-600 hover:underline text-sm sm:text-base">
                      Voir le résumé
                    </button>
                  </Link>
                </div>
                <p className="text-gray-700 text-sm sm:text-base mb-4">
                  {card.description}
                </p>

                {/* Bande de couleur */}
                <div className="flex justify-between items-center bg-blue-50 p-2 rounded-md text-sm sm:text-base mb-4">
                  <span className="text-gray-700">{card.auteur}</span>
                  <span className="text-gray-700">Année: {card.annee}</span>
                  <span className="text-gray-700">{card.pages} pages</span>
                </div>

                <div className="flex justify-between">
                  <Link
                    to={"/publication-detail"}
                    className="bg-blue-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300 text-sm sm:text-base"
                  >
                    Lire le document
                  </Link>
                  <a
                    href="#"
                    className="text-blue-500 px-3 sm:px-4 sm:py-2 flex justify-center rounded-full transition duration-300 text-sm sm:text-base"
                  >
                    <span className="hover:underline">Télécharger</span>
                    <span className="bg-blue-600 text-white px-1 rounded-full">
                      {card.taille}
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
