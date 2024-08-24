import React, { useState } from "react";
import Header from "../components/layouts/header";
import SectionPg from "../components/sectionpage";
import Footer from "../components/layouts/footer";
import Tof from "../assets/image.jpg";

const photos = [
  { src: "https://via.placeholder.com/300", title: "Photo 1" },
  { src: "https://via.placeholder.com/300", title: "Photo 2" },
  { src: "https://via.placeholder.com/300", title: "Photo 3" },
  { src: "https://via.placeholder.com/300", title: "Photo 4" },
  { src: "https://via.placeholder.com/300", title: "Photo 5" },
  { src: "https://via.placeholder.com/300", title: "Photo 6" },
  { src: "https://via.placeholder.com/300", title: "Photo 7" },
  { src: "https://via.placeholder.com/300", title: "Photo 8" },
  { src: "https://via.placeholder.com/300", title: "Photo 9" },
  { src: "https://via.placeholder.com/300", title: "Photo 10" },
  { src: "https://via.placeholder.com/300", title: "Photo 11" },
  { src: "https://via.placeholder.com/300", title: "Photo 12" },
];

const PhotothequePage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Nombre d'éléments à afficher par page
  const totalPages = Math.ceil(photos.length / itemsPerPage);

  const handlePageChange = (page: number) => {
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
          {currentPhotos.map((photo, index) => (
            <div
              key={index}
              className="relative overflow-hidden group rounded-lg shadow-lg"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white text-lg font-semibold">
                  {photo.title}
                </span>
              </div>
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
