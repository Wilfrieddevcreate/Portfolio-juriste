import React from "react";
import { FaSquareFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";

import Header from "../components/layouts/header";
import SectionPg from "../components/sectionpage";
import Footer from "../components/layouts/footer";
import Tof from "../assets/image.jpg";
import BlogTof from "../assets/code.jpeg";

const DetailBlog: React.FC = () => {
  // Données fictives pour l'exemple
  const blogDetails = {
    title: "Les Nouvelles Réglementations sur la Propriété Intellectuelle",
    date: "22 août 2024",
    imageUrl: BlogTof,
    content: `
      <p> Un aperçu détaillé des récentes modifications législatives concernant la propriété intellectuelle et leur impact sur les créateurs et les entreprises. Cet article explore les nouvelles lois et régulations mises en place pour protéger les droits d'auteur, les brevets et les marques dans un contexte numérique en constante évolution. Il examine également les défis auxquels les créateurs et les entreprises doivent faire face pour se conformer à ces nouvelles exigences</p>.<p> Nous discuterons des implications pratiques pour la gestion des droits de propriété intellectuelle, des stratégies pour éviter les violations et des conseils pour tirer parti des nouvelles protections offertes. Enfin, l'article propose des perspectives sur l'avenir de la propriété intellectuelle et comment les innovations technologiques pourraient influencer les régulations à venir.</p>
    `,
  };

  const currentUrl = window.location.href;

  return (
    <>
      <Header />
      <SectionPg title="Details" imageSrc={Tof} />
      <div className="container mx-auto px-4 py-8">
        {/* Conteneur principal */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={blogDetails.imageUrl}
            alt={blogDetails.title}
            className="w-full h-60 object-fit"
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-2">{blogDetails.title}</h1>
            <p className="text-gray-600 mb-4">{blogDetails.date}</p>
            <div
              className="blog-content mb-6"
              dangerouslySetInnerHTML={{ __html: blogDetails.content }}
            />
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
      </div>
      <Footer />
    </>
  );
};

export default DetailBlog;
