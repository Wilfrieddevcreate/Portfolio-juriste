import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/layouts/header";
import SectionPg from "../components/sectionpage";
import Footer from "../components/layouts/footer";
import Tof from "../assets/image.jpg";
import BlogService from "../service/blog.service";
import { truncateWords } from "../utilis/textUtils";
export interface Blogs{
  id: number;
  slug:string
  title: string;
  content: string;
  image: string;
  image_url: string;
}
const Blog: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [cards, setCards] = useState([]);

  const fetchData = async (page: number) => {
    try {
      const data = await BlogService.get(page);
      setCards(data.data);
      setTotalPages(data.last_page);
    } catch (error) { 
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  return (
    <>
      <div>
        <Header />
        <SectionPg title="Blog" imageSrc={Tof} />

        <div className="px-4 py-8">
          <div className="container mx-auto">
            {/* Grid des cartes */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 fade-in">
              {cards.map((card: Blogs) => (
                <div
                  key={card.id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden"
                >
                  <img
                    src={card.image_url}
                    alt={card.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{truncateWords(card.title, 3)}</h3>
                    <p className="text-gray-700 mb-4">
                    <span
                    dangerouslySetInnerHTML={{
                      __html: truncateWords(card.content, 20),
                    }}
                  />
                    </p>
                    <div className="flex justify-center">
                      <Link to={`/blog-detail/${card.slug}`}>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300">
                          Voir plus
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-20 mb-10">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className="px-4 py-2 mx-1 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                disabled={currentPage === 1}
              >
                Précédent
              </button>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-4 py-2 mx-1 rounded ${
                    currentPage === index + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  } hover:bg-blue-300`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                className="px-4 py-2 mx-1 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                disabled={currentPage === totalPages}
              >
                Suivant
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
