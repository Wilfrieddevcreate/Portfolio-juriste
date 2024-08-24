import React from "react";
import AboutPhoto from "../assets/about.jpg";
import { Link } from "react-router-dom";
const About: React.FC = () => {
  return (
    <div className="">
      <div className="container mx-auto py-12 px-4 ">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 fade-in">
            À propos
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Image à gauche */}
          <div className="w-full md:w-1/2 fade-in">
            <img
              src={AboutPhoto}
              alt="About Image"
              className="rounded-lg shadow-lg w-auto"
            />
          </div>
          {/* Texte à droite */}
          <div className="w-full md:w-1/2 text-center md:text-left fade-in">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              Découvrez Notre Mission
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Nous nous engageons à offrir des solutions innovantes pour
              améliorer la vie quotidienne des gens. Nos services sont conçus
              pour être accessibles à tous et pour répondre aux besoins
              modernes. Découvrez nos projets actuels, nos objectifs et la
              manière dont nous apportons des changements positifs.
            </p>
            <Link to={"/about"}>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition duration-300">
                Voir plus
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
