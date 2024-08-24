import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/layouts/header";
import SectionPg from "../components/sectionpage";
import Footer from "../components/layouts/footer";
import Tof from "../assets/image.jpg";
import Intro from "../assets/Cours-de-droit-constitutionnel-introduction-aideauxtd.com_.jpg";
import Droit from "../assets/media-avocat-droit-penal-affaires-role.webp";
import Penal from "../assets/ob_2b996e_licences-sc3a9lectives-avec-du-droit.jpg";
import Commercial from "../assets/droit-fiscal-PFB-Avocat.jpg";

const CoursPage: React.FC = () => {
  const cards = [
    {
      imageUrl: Intro,
      title: "Introduction au Droit",
      description:
        "Découvrez les fondements du droit, y compris les principales branches et principes juridiques.",
    },
    {
      imageUrl: Droit,
      title: "Droit Constitutionnel",
      description:
        "Explorez les structures et principes fondamentaux de la constitution d'un pays et leur impact sur le droit.",
    },
    {
      imageUrl: Penal,
      title: "Droit Pénal",
      description:
        "Analysez les infractions pénales, les procédures judiciaires et les peines associées.",
    },
    {
      imageUrl: Commercial,
      title: "Droit Commercial",
      description:
        "Étudiez les règles régissant les transactions commerciales et les relations entre les entreprises.",
    },
    {
      imageUrl:
        "https://www.pexels.com/photo/books-and-documents-on-desk-1695730/",
      title: "Droit de la Propriété Intellectuelle",
      description:
        "Comprenez les droits relatifs aux créations intellectuelles et les protections juridiques associées.",
    },
    {
      imageUrl: "https://www.pexels.com/photo/law-book-on-table-5077053/",
      title: "Droit du Travail",
      description:
        "Examinez les droits et obligations des employeurs et des employés dans le cadre du travail.",
    },
  ];

  // Configuration de la pagination
  const itemsPerPage = 4; // Nombre de cartes par page
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
      <SectionPg title="Mes cours" imageSrc={Tof} />
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
                  <Link to={"/cours-detail"}>
                    <button className="text-blue-600 hover:underline text-sm sm:text-base">
                      Voir l'aperçu
                    </button>
                  </Link>
                </div>
                <p className="text-gray-700 text-sm sm:text-base mb-4">
                  {card.description}
                </p>
                <div className="flex justify-between">
                  <Link
                    to={"/cours-detail"}
                    className="bg-blue-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300 text-sm sm:text-base"
                  >
                    Lire le cours
                  </Link>
                  <a
                    href="#"
                    className="text-blue-500 px-3  sm:px-4 sm:py-2 flex justify-center rounded-full transition duration-300 text-sm sm:text-base hover:underline"
                  >
                    Télécharger
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
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

export default CoursPage;
