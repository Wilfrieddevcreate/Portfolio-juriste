import React from "react";
import useSWR from "swr";
//import { Link } from "react-router-dom";
import AproposService from "../service/about.service";

const fetchApropos = async () => {
  const data = await AproposService.fetchApropos();
  return data[0]; // assuming you want the first item
};

// Fonction pour limiter le contenu HTML à un certain nombre de mots
const limitHtmlContent = (htmlContent: string, wordLimit: number) => {
  const div = document.createElement("div");
  div.innerHTML = htmlContent;

  let wordCount = 0;
  const walker = document.createTreeWalker(div, NodeFilter.SHOW_TEXT, null);

  while (walker.nextNode() && wordCount < wordLimit) {
    const node = walker.currentNode as Text;
    const words = node.textContent?.split(/\s+/) || [];

    if (wordCount + words.length > wordLimit) {
      const excessWords = wordCount + words.length - wordLimit;
      node.textContent = words.slice(0, -excessWords).join(" ") + "...";
    }

    wordCount += words.length;
  }

  return div.innerHTML;
};

const About: React.FC = () => {
  const { data: aboutData, error } = useSWR('/v1/abouts', fetchApropos);

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

  const limitedContent = limitHtmlContent(aboutData.content, 40);

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 fade-in">
          À propos
        </h2>
      </div>
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
        <div
          className="w-full md:w-1/2 text-center md:text-left fade-in"
          dangerouslySetInnerHTML={{ __html: limitedContent }}
        />
        
      </div>
     
    </div>
  );
};

export default About;
