import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/layouts/header";
import SectionPg from "../components/sectionpage";
import Footer from "../components/layouts/footer";
import Tof from "../assets/image.jpg";
import coursService from "../service/cours.service";
import { truncateWords } from "../utilis/textUtils";

interface Course {
  id: number;
  slug: string;
  title: string;
  description: string;
  resume: string;
  content: string;
  image: string;
  file: string;
  file_size: string;
}

const CoursPage: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async (page: number) => {
      try {
        setIsLoading(true);
        const data = await coursService.get(page);
        setCourses(data.data);
        setTotalPages(data.last_page);
        setCurrentPage(data.current_page);
      } catch (error) {
        console.error('Failed to fetch courses:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourses(currentPage);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <>
      <Header />
      <SectionPg title="Mes cours" imageSrc={Tof} />
      <div className="container mx-auto px-4 py-8 my-8">
        {isLoading ? (
          <> <div className="flex items-center justify-center my-6 fade-in">
          <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full"></div>
      </div></>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row fade-in"
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 sm:h-auto md:w-1/3 object-cover"
                  />
                  <div className="flex flex-col justify-between p-4 flex-grow">
                    <div className="flex justify-between items-center mb-2">
                      <h2 className="text-lg font-semibold text-gray-800">
                        {truncateWords(course.title, 3)}
                      </h2>
                      <Link to={`/cours-detail/${course.slug}`}>
                        <button className="text-blue-800 hover:underline text-sm sm:text-base">
                          Voir l'aperçu
                        </button>
                      </Link>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base mb-4">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: truncateWords(course.description, 20),
                        }}
                      />
                    </p>
                    <div className="flex justify-between">
                      <Link
                        to={`/cours-detail/${course.slug}`}
                        className="bg-blue-800 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300 text-sm sm:text-base"
                      >
                        Lire le cours
                      </Link>
                      <a
                        href={course.file}
                        className="text-blue-800 px-3 sm:px-4 sm:py-2 flex justify-center rounded-full transition duration-300 text-sm sm:text-base hover:underline"
                        download
                      >
                        Télécharger
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 mx-2 bg-blue-800 text-white rounded hover:bg-blue-600 disabled:opacity-50"
              >
                Précédent
              </button>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 mx-2 rounded ${
                    currentPage === index + 1
                      ? "bg-blue-800 text-white"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 mx-2 bg-blue-800 text-white rounded hover:bg-blue-600 disabled:opacity-50"
              >
                Suivant
              </button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CoursPage;
