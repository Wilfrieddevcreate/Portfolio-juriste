import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/layouts/header";
import Footer from "../components/layouts/footer";
import SectionPg from "../components/sectionpage";
import coursService from "../service/cours.service";
import { FaSquareFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Tof from "../assets/image.jpg";

interface Course {
  id: number;
  title: string;
  description: string;
  resume: string;
  content: string;
  slug: string;
  image: string;
  file: string;
  file_size: string;
  archive: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}
const CoursDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        if (slug) {
          const response = await coursService.show(slug);
          setCourse(response[0]);
          console.log(response[0]);
          
        }
      } catch (error) {
        console.error(error)
        setError("Erreur lors de la récupération des données.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [slug]);

  const currentUrl = window.location.href;

  if (loading) return (<div>
  <Header />
  <SectionPg title="Chargement..." imageSrc={Tof} />
  <div className="flex items-center justify-center my-6">
            <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full"></div>
        </div>
  <Footer />
</div>)
  if (error) return (<div>
  <Header />
  <SectionPg title="Chargement..." imageSrc={Tof} />
  <div className="container mx-auto px-4 py-8">
    <p>Error lors de la récupérationdes données</p>
  </div>
  <Footer />
</div>);

  return (
    <>
      <Header />
      <SectionPg title="Détail du cours" imageSrc={Tof} />

      <div className="container mx-auto px-6 py-8 bg-white rounded-lg shadow-lg mt-3">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src={course?.image}
              alt={course?.title}
              className="w-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-6 mt-6 md:mt-0">
            <h1 className="text-3xl font-bold text-gray-800">{course?.title}</h1>
            
            {/* Nouveau bloc pour le titre, résumé, et description */}
            <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-700 ">Description</h2>
              <p
                className="text-gray-700 mt-2"
                dangerouslySetInnerHTML={{ __html: course?.description || '' }}
              />
              <h2 className="text-xl font-semibold text-gray-700 mt-4">Résumé</h2>
              <p
                className="text-gray-600 mt-2"
                dangerouslySetInnerHTML={{ __html: course?.resume || '' }}
              />
              
            </div>
            <div className="mt-9">
              <a href={course?.file} download className="bg-blue-600 text-white py-2 px-5 rounded-full">Télécharger</a>
            </div>
          </div>
        </div>
        <div className="flex space-x-4 mt-10 justify-center items-center">
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
      <Footer />
    </>
  );
};

export default CoursDetailPage;
