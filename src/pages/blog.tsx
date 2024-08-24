import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/layouts/header";
import SectionPg from "../components/sectionpage";
import Footer from "../components/layouts/footer";
import Tof from "../assets/image.jpg";
import Contrat from "../assets/Contrat-numerique.webp";
import Personnelle from "../assets/per.jpeg";
import Code from "../assets/code.jpeg";
import Juridique from "../assets/abbb.jpeg"
import Teletravail from "../assets/tele.jpeg"
import Fisque from "../assets/droit-fiscal-PFB-Avocat.jpg"
const Blog: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  const cardData = [
    {
      imageUrl: Contrat,
      title: "Les Implications Juridiques ...",
      description:
        "Découvrez comment les contrats numériques transforment le paysage juridique...",
    },
    {
      imageUrl: Personnelle,
      title: "La Protection des Données... ",
      description:
        "Analyse des obligations légales pour les entreprises en matière ....",
    },
    {
      imageUrl: Code,
      title: "Les Nouvelles Réglementations..",
      description:
        "Un aperçu des récentes modifications législatives concernant...",
    },
    {
      imageUrl: Juridique,
      title: "Les Conséquences Juridiques des ...",
      description:
        "Étudiez les différents types de violations de contrat et les recours légaux disponibles pour les parties lésées.",
    },
    {
      imageUrl: Teletravail,
      title: "Les Droits des Employés en Télétravail",
      description:
        "Examinez les droits des employés en télétravail, y compris les questions de sécurité, de confidentialité et de conditions de travail.",
    },
    {
      imageUrl: Fisque,
      title: "Les Évolutions du Droit Fiscal International",
      description:
        "Analysez les récentes évolutions dans le droit fiscal international et leur impact sur les entreprises multinationales.",
    },
    {
      imageUrl: "https://via.placeholder.com/400x400",
      title: "La Réglementation des Cryptomonnaies",
      description:
        "Un aperçu des régulations émergentes concernant les cryptomonnaies et les défis juridiques associés.",
    },
    {
      imageUrl: "https://via.placeholder.com/400x400",
      title: "Les Nouveaux Développements en Droit du Travail",
      description:
        "Découvrez les derniers développements en droit du travail et leur impact sur les relations employeur-employé.",
    },
    {
      imageUrl: "https://via.placeholder.com/400x400",
      title: "Les Droits de Propriété Intellectuelle dans le Monde Numérique",
      description:
        "Examinez comment les droits de propriété intellectuelle sont appliqués dans le contexte numérique moderne.",
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
