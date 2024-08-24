import React from "react";
// import { Link } from "react-router-dom";
import Header from "../components/layouts/header";
import Footer from "../components/layouts/footer";
import Tof from "../assets/image.jpg";
import SectionPg from "../components/sectionpage";
import TopDroit from "../assets/droit-fiscal-PFB-Avocat.jpg";
import { FaSquareFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const CoursDetailPage: React.FC = () => {
  const course = {
    imageUrl: TopDroit,
    title: "Droit Constitutionnel",
    resume:
      "Ce cours approfondi examine les principes et structures fondamentaux de la constitution d'un pays. Vous apprendrez comment la constitution définit les pouvoirs et les responsabilités des institutions publiques, ainsi que les droits et libertés des citoyens.",
    description:
      "Explorez en profondeur les structures et principes fondamentaux qui composent la constitution d'un pays. Ce cours vous permettra de comprendre comment la constitution établit les bases du système juridique et politique, en définissant les pouvoirs et les responsabilités des institutions publiques ainsi que les droits et libertés des citoyens. Vous étudierez comment la constitution influence les autres branches du droit, et comment elle joue un rôle clé dans le maintien de l'équilibre et de la justice au sein de la société. Ce cours vous fournira une perspective essentielle sur la manière dont les principes constitutionnels façonnent les politiques publiques et les décisions judiciaires.",
  };

  const currentUrl = window.location.href;

  return (
    <>
      <Header />
      <SectionPg title="Détail du cours" imageSrc={Tof} />

      <div className="container mx-auto px-6 py-8 bg-white rounded-lg shadow-lg mt-3">
        <div className="flex flex-col">
          <img
            src={course.imageUrl}
            alt={course.title}
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <h1 className="text-3xl font-bold text-gray-800 mt-6">
            {course.title}
          </h1>
          <p className="text-gray-600 text-lg mt-4 text-left">
            <span className="font-bold">Résumé: </span>{course.resume}
          </p>
          <div className="mt-6 text-gray-700 text-base leading-7 text-left">
            <p> <span className="font-bold">Description: </span>{course.description}</p>
          </div>
          <div className="flex space-x-4 justify-end">
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
      <Footer />
    </>
  );
};

export default CoursDetailPage;
