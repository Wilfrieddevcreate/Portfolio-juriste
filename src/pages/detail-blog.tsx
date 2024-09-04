import React, { useEffect, useState } from "react";
import { FaSquareFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import Header from "../components/layouts/header";
import SectionPg from "../components/sectionpage";
import Footer from "../components/layouts/footer";
import blogService from "../service/blog.service";
import Tof from "../assets/image.jpg";

const DetailBlog: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blogDetails, setBlogDetails] = useState<{
    title: string;
    date: string;
    imageUrl: string;
    content: string;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await blogService.show(slug || "");

        // Vérifiez que 'response' contient les informations attendues
        if (Array.isArray(response) && response.length > 0) {
          const data = response[0]; // Accéder au premier élément du tableau
          console.log(data);
          
          setBlogDetails({
            title: data.title || "Titre non disponible",
            date: data.created_at ? new Date(data.created_at).toLocaleDateString() : "Date non disponible",
            imageUrl: data.image_url || "",
            content: data.content || "Contenu non disponible",
          });
        } else {
          setError("Aucune donnée disponible pour ce blog.");
        }
      } catch (error) {
        console.error("Erreur de récupération des détails du blog:", error);
        setError("Une erreur est survenue lors de la récupération des détails du blog.");
      }
    };

    fetchBlogDetails();
  }, [slug]);

  if (error) {
    return (
      <div>
        <Header />
        <SectionPg title="Erreur" imageSrc={Tof} />
        <div className="container mx-auto px-4 py-8">
          <p>{error}</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!blogDetails) {
    return (
      <div>
         <Header />
  <SectionPg title="Chargement..." imageSrc={Tof} />
  <div className="flex items-center justify-center my-6">
            <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full"></div>
        </div>
  <Footer />
      </div>
    );
  }

  const currentUrl = window.location.href;

  return (
    <>
      <Header />
      <SectionPg title="Détail du blog" imageSrc={Tof} />
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
          <img
            src={blogDetails.imageUrl}
            alt={blogDetails.title}
            className="w-full md:w-1/2 object-cover"
          />
          <div className="p-6 flex flex-col justify-between w-full md:w-1/2">
            <div>
              <h1 className="text-3xl font-bold mb-2">{blogDetails.title}</h1>
              <p className="text-gray-600 mb-4">{blogDetails.date}</p>
              <div
                className="blog-content mb-6"
                dangerouslySetInnerHTML={{ __html: blogDetails.content }}
              />
            </div>
            <div className="flex space-x-4 justify-center md:justify-end mt-auto">
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
