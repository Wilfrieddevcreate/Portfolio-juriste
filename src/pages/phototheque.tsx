import React, { useState, useEffect } from "react";
import Header from "../components/layouts/header";
import SectionPg from "../components/sectionpage";
import Footer from "../components/layouts/footer";
import Tof from "../assets/image.jpg";
import PhotothequeService from "../service/phototheque.service"; // Utiliser le bon service

interface Photo {
  id: number;
  title: string;
  image: string;
}

const PhotothequePage: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const data = await PhotothequeService.get(currentPage);
        setPhotos(data); // Assure-toi que la structure des données est correcte
        setTotalPages(Math.ceil(data.length / itemsPerPage)); // Ajuster en fonction du total
      } catch (error) {
        console.error('Failed to fetch photos:', error);
      }
    };

    fetchPhotos();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const currentPhotos = photos.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <Header />
      <SectionPg title="Ma photothèque" imageSrc={Tof} />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentPhotos.map((photo) => (
            <div
              key={photo.id}
              className="relative overflow-hidden group rounded-lg shadow-lg"
            >
              <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2 text-center">
                <span className="text-lg font-semibold">{photo.title}</span>
              </div>
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 mx-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
          >
            Précédent
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 mx-2 rounded ${
                currentPage === index + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 mx-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
          >
            Suivant
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PhotothequePage;
