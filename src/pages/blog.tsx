import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/layouts/header";
import SectionPg from "../components/sectionpage";
import Footer from "../components/layouts/footer";
import Tof from "../assets/image.jpg";

const Blog: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  const cardData = [
    {
      imageUrl: "https://via.placeholder.com/400x300",
      title: "Card 1",
      description:
        "Cette carte présente une description brève et concise pour attirer l'attention de l'utilisateur.",
    },
    {
      imageUrl: "https://via.placeholder.com/400x300",
      title: "Card 2",
      description:
        "Découvrez plus de détails sur cette carte en cliquant sur le bouton Voir plus.",
    },
    {
      imageUrl: "https://via.placeholder.com/400x300",
      title: "Card 3",
      description:
        "Chaque carte est conçue pour être informative tout en étant visuellement attrayante.",
    },
    // Ajoute plus de cartes ici pour tester la pagination
    {
      imageUrl: "https://via.placeholder.com/400x300",
      title: "Card 4",
      description: "Une autre carte pour tester la pagination.",
    },
    {
      imageUrl: "https://via.placeholder.com/400x300",
      title: "Card 5",
      description: "Encore une autre carte avec plus d'informations.",
    },
    {
      imageUrl: "https://via.placeholder.com/400x300",
      title: "Card 6",
      description: "Dernière carte pour ce test de pagination.",
    },
    {
      imageUrl: "https://via.placeholder.com/400x300",
      title: "Card 7",
      description:
        "Cette carte présente une description brève et concise pour attirer l'attention de l'utilisateur.",
    },
    {
      imageUrl: "https://via.placeholder.com/400x300",
      title: "Card 8",
      description:
        "Découvrez plus de détails sur cette carte en cliquant sur le bouton Voir plus.",
    },
    {
      imageUrl: "https://via.placeholder.com/400x300",
      title: "Card 9",
      description:
        "Chaque carte est conçue pour être informative tout en étant visuellement attrayante.",
    },
  ];

  // Calcule les cartes à afficher pour la page actuelle
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardData.slice(indexOfFirstCard, indexOfLastCard);

  // Calcule le nombre total de pages
  const totalPages = Math.ceil(cardData.length / cardsPerPage);

  return (
    <>
      <div>
        <Header />
        <SectionPg title="Blog" imageSrc={Tof} />

        <div className="px-4 py-8">
          <div className="container mx-auto">
            {/* Grid des cartes */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {currentCards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg overflow-hidden"
                >
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                    <p className="text-gray-700 mb-4">{card.description}</p>
                    <div className="flex justify-center">
                      <Link to={"/blog-detail"}>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300">
                          Voir plus
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-20 mb-10">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className="px-4 py-2 mx-1 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                disabled={currentPage === 1}
              >
                Précédent
              </button>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-4 py-2 mx-1 rounded ${
                    currentPage === index + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  } hover:bg-blue-300`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                className="px-4 py-2 mx-1 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                disabled={currentPage === totalPages}
              >
                Suivant
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
