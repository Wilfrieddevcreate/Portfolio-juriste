import React from "react";
import useSWR from "swr";
import { Link } from "react-router-dom";
import AproposService from "../service/about.service";

const fetchApropos = async () => {
  const data = await AproposService.fetchApropos();
  return data[0]; // On suppose que vous voulez afficher le premier élément
};

const limitHtmlContent = (htmlContent: string, wordLimit: number): string => {
  const div = document.createElement("div");
  div.innerHTML = htmlContent;

  let wordCount = 0;
  let limitedHtml = "";

  // Fonction pour ajouter le texte limité et mettre à jour le compteur de mots
  const addLimitedText = (text: string) => {
    const words = text.split(/\s+/);
    if (wordCount + words.length > wordLimit) {
      const excessWords = wordCount + words.length - wordLimit;
      limitedHtml += words.slice(0, -excessWords).join(" ") + "...";
      wordCount = wordLimit; // Met à jour le compteur de mots pour ne pas dépasser la limite
    } else {
      limitedHtml += text;
      wordCount += words.length;
    }
  };

  // Itérer sur les noeuds du DOM
  const walker = document.createTreeWalker(div, NodeFilter.SHOW_TEXT, null);
  while (walker.nextNode() && wordCount < wordLimit) {
    const node = walker.currentNode as Text;
    addLimitedText(node.textContent || "");
  }

  // Convertir le HTML limité en un fragment DOM pour retourner le HTML formaté
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = limitedHtml;

  return tempDiv.innerHTML;
};

const About: React.FC = () => {
  const { data: aboutData, error } = useSWR('/v1/abouts', fetchApropos);
console.log(aboutData);

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Erreur lors du chargement des données.</p>
      </div>
    );
  }

  if (!aboutData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Chargement...</p>
      </div>
    );
  }

  const limitedContent = limitHtmlContent(aboutData.content, 70);

  return (
    <div className="">
      <div className="container mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Image à gauche */}
          <div className="w-full md:w-1/2 fade-in">
            <img
              src={aboutData.image_url}
              alt="About Image"
              className="rounded-lg shadow-lg w-auto"
            />
          </div>
          {/* Texte à droite */}
          <div className="w-full md:w-1/2 text-center md:text-left fade-in">
            <h2 className="text-3xl md:text-4xl mb-4 font-bold text-gray-800 fade-in">
              À propos
            </h2>
            <div
              className="text-gray-600 leading-relaxed mb-6"
              dangerouslySetInnerHTML={{ __html: limitedContent }}
            />
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
