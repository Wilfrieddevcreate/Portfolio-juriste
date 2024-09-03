import React from "react";
import useSWR from "swr";
import Header from "../components/layouts/header";
import SectionPg from "../components/sectionpage";
import Footer from "../components/layouts/footer";
import TOf from "../assets/image.jpg";
import AproposService from "../service/about.service";

// Fonction de récupération des données
const fetchApropos = async () => {
  const data = await AproposService.fetchApropos();
  return data[0]; // On suppose que vous voulez afficher le premier élément
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

  return (
    <>
      <Header />
      <SectionPg imageSrc={TOf} title="À propos de moi" />
      <div className="container mx-auto p-4 my-20">
        <img
          src={aboutData.image_url}
          alt="Description"
          className="float-left mr-9 w-1/3 lg:h-72 h-36"
        />
        <div
          className="text-lg"
          dangerouslySetInnerHTML={{ __html: aboutData.content }}
        />
      </div>
      <Footer />
    </>
  );
};

export default About;
