import React from "react";
import useSWR from "swr";
import { Link } from "react-router-dom";
import BlogService from "../service/blog.service";
import { truncateWords } from "../utilis/textUtils";

export interface Blog {
  id: number;
  slug: string;
  title: string;
  content: string;
  image: string;
  image_url: string;
}

// Fonction pour récupérer les données
const fetchBlogs = async (): Promise<Blog[]> => {
  const data = await BlogService.get();
  return data.data; // Retourne les blogs
};

const Cards: React.FC = () => {
  const { data: blogs, error } = useSWR<Blog[]>('/blogs', fetchBlogs);

  if (error) return <p>Erreur lors du chargement des données.</p>;
  if (!blogs) return(<> <div className="flex items-center justify-center my-6 fade-in">
    <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full"></div>
</div></>);

  return (
    <div className="py-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Les articles récents
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.slice(0, 3).map((blog: Blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
            >
              <img
                src={blog.image_url}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  {truncateWords(blog.title, 3)}
                </h4>
                <p className="text-gray-600 mb-4 flex-grow">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: truncateWords(blog.content, 15),
                    }}
                  />
                </p>
                <div className="flex justify-center mt-auto">
                  <Link to={`/blog-detail/${blog.slug}`}>
                    <button className="bg-blue-800 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300">
                      Voir plus
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-20">
          <Link to={"/blog"}>
            <button className="bg-blue-800 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300">
              Voir tous les articles
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
