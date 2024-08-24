import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Contrat from "../assets/Contrat-numerique.webp";
import Personnelle from "../assets/per.jpeg";
import Code from "../assets/code.jpeg";
const Cards: React.FC = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      cardRefs.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

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
  ];

  return (
    <div className=" py-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 selection:fade-in">
            Les articles récents
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="bg-white rounded-lg shadow-lg overflow-hidden w-full md:w-1/3 opacity-0 transition-opacity duration-1000 ease-in-out"
            >
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 mb-4">{card.description}</p>
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
        <div className="flex justify-center mt-20">
          <Link to={"/blog"}>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300">
              Voir tous les articles
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
