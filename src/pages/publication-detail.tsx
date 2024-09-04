import React from "react";
// import { Link } from "react-router-dom"; 
import Header from "../components/layouts/header";
import Footer from "../components/layouts/footer";
import Tof from "../assets/image.jpg";
import SectionPg from "../components/sectionpage";
import { FaSquareFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const PublicationDetailPage: React.FC = () => {
  const course = {
    imageUrl: Tof,
    title: "Titre de la publication",
    resume:
      "Ceci est un bref résumé de la pb. Il donne un aperçu rapide des points clés abordés dans la pub.",
    description:
      "Ceci est une description plus détaillée de la publication. La publication couvre divers sujets, y compris des concepts de base et avancés. Vous apprendrez également à appliquer ces concepts dans des situations pratiques.",
  };

  const currentUrl = window.location.href;

  return (
    <>
      <Header />
      <SectionPg title="Détail" imageSrc={Tof} />

      <div className="container mx-auto px-6 py-8 bg-white rounded-lg shadow-lg mt-3">
        <div className="flex flex-col md:flex-row items-start">
          {/* Image à gauche */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src={course.imageUrl}
              alt={course.title}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Contenu à droite */}
          <div className="md:w-1/2 md:pl-6">
            <h1 className="text-3xl font-bold text-gray-800">
              {course.title}
            </h1>
            <p className="text-gray-600 text-lg mt-4">
              {course.resume}
            </p>
            <div className="mt-6 text-gray-700 text-base leading-7">
              <p>{course.description}</p>
            </div>
            <div className="flex space-x-4 mt-6">
              {/* Boutons de partage */}
              <h5 className="text-lg font-semibold">Partager sur : </h5>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  currentUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                <FaSquareFacebook className="w-6 h-6" />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  currentUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600"
              >
                <FaXTwitter className="w-6 h-6" />
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                  currentUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PublicationDetailPage;
