import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArchiveService from "../service/archive.service";
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

const ArchiveCours: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await ArchiveService.get("document");
        setCourses(data.cours); // Accéder à la clé 'cours' de la réponse API
      } catch (error) {
        console.error('Failed to fetch courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 py-8">
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
                    <button className="text-blue-600 hover:underline text-sm sm:text-base">
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
                    className="bg-blue-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300 text-sm sm:text-base"
                  >
                    Lire le cours
                  </Link>
                  <a
                    href={course.file}
                    className="text-blue-500 px-3 sm:px-4 sm:py-2 flex justify-center rounded-full transition duration-300 text-sm sm:text-base hover:underline"
                    download
                  >
                    Télécharger
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ArchiveCours;
