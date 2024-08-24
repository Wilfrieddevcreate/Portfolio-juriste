import React from "react";
import HeroSectionImg from "../assets/herosection.jpeg"

const HeroSection: React.FC = () => {
  return (
    <section className="mt-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
        {/* Texte à gauche */}
        <div className="md:w-1/2 text-center md:text-left p-3">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-4 fade-in">
            Maîtrise et Transmission du Savoir
          </h1>
          <p className="text-lg text-gray-600 mb-6 fade-in">
            Explorez mes contributions académiques et ressources éducatives.
            Engagez-vous dans un parcours d'apprentissage enrichissant et
            inspirant.
          </p>
        </div>

        {/* Image à droite */}
        <div className="md:w-1/2 md:mt-0 p-6 fade-in">
          <img
            src={HeroSectionImg}
            alt="Éducation"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
