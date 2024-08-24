import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="mt-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
        {/* Texte à gauche */}
        <div className="md:w-1/2 text-center md:text-left p-3">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4 fade-in">
            Discover Your Next Adventure
          </h1>
          <p className="text-lg text-gray-600 mb-6 fade-in">
            Explore the best destinations with our tailored packages and make
            memories that will last a lifetime.
          </p>
        </div>

        {/* Image à droite */}
        <div className="md:w-1/2 md:mt-0 p-6 fade-in">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Adventure"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
