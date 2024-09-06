import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Pour récupérer le slug
import Header from "../components/layouts/header";
import Footer from "../components/layouts/footer";
import SectionPg from "../components/sectionpage";
import { FaSquareFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import publicationService from "../service/publication.service"
import Tof from "../assets/image.jpg";

interface Publication {
  title: string,
  image: string,
  resume: string,
  content: string,
  author: string,
  year: number,
  pages: number
}
const PublicationDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>(); // Récupère le slug depuis l'URL
  const [publication, setPublication] = useState<Publication | null>(null); // Stocke les données de la publication
  const [loading, setLoading] = useState(true); // État de chargement
  const [error, setError] = useState<string | null>(null); // État d'erreur

  useEffect(() => {
    const fetchPublication = async () => {
      try {
        console.log(slug);
        
        const data = await publicationService.show(slug as string); // Appelle l'API avec le slug
        setPublication(data[0]); // Stocke les données de la publication
        setLoading(false); // Désactive le chargement
        console.log(data);
        
      } catch (err) {
        console.error(err);
        setError("Erreur lors du chargement de la publication.");
        setLoading(false);
      }
    };

    fetchPublication();
  }, [slug]);

  if (loading) {
    return (<div>
      <Header />
      <SectionPg title="Chargement..." imageSrc={Tof} />
      <div className="flex items-center justify-center my-6">
                <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full"></div>
            </div>
      <Footer />
    </div>); // Affiche un message pendant le chargement
  }

  if (error) {
    return <div>{error}</div>; // Affiche un message d'erreur si l'API échoue
  }

  if (!publication) {
    return <div>Publication non trouvée.</div>; // Affiche un message si aucune donnée n'est récupérée
  }

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
              src={publication.image}
              alt={publication.title}
              className="w-full h-40  object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Contenu à droite */}
          <div className="md:w-1/2 md:pl-6">
            <h1 className="text-3xl font-bold text-gray-800">
              {publication.title}
            </h1>
           <div className="bg-blue-400  my-8 p-3 flex items-center justify-between">
          {/* Auteur à gauche */}
          <div>
            Auteur: {publication.author}
          </div>

          {/* Année au centre */}
          <div className="text-center">
            Nombre de page: {publication.pages}
          </div>

          {/* Pages à droite */}
          <div className="text-right">
            Publié en {publication.year}
          </div>
        </div>

           
          </div>
        </div>
        <h4 className="mt-4 mb-2 font-semibold">Résumé</h4>
            <p className="text-gray-600 text-base" dangerouslySetInnerHTML={{ __html: publication.resume }} />
            <h4 className="mt-4 mb-2 font-semibold">Description</h4>
            <div className="text-gray-700 text-base leading-7" dangerouslySetInnerHTML={{ __html: publication.content }} />
        {/* Boutons de partage centrés en bas */}
        <div className="flex justify-center items-center space-x-4 mt-8">
          <h5 className="text-lg font-semibold">Partager sur : </h5>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <FaSquareFacebook className="w-6 h-6" />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600"
          >
            <FaXTwitter className="w-6 h-6" />
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PublicationDetailPage;
