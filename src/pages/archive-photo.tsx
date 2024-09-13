import React, { useState, useEffect } from "react";
import Header from "../components/layouts/header";
import SectionPg from "../components/sectionpage";
import Footer from "../components/layouts/footer";
import Tof from "../assets/image.jpg";
import archiveService from "../service/archive.service";

interface Photo {
  id: number;
  title: string;
  image: string;
}

const PhotothequePage: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(true); 
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        setLoading(true);
        const data: Photo[] = await archiveService.get("photo");
        setPhotos(data); // Assure-toi que la structure des données est correcte
      } catch (error) {
        console.error('Failed to fetch photos:', error);
      }finally{
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <>
      <Header />
      <SectionPg title="Archive Photo" imageSrc={Tof} />
      <div className="container mx-auto px-4 py-8">
        {loading ? (
          <> <div className="flex items-center justify-center my-6 fade-in">
          <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full"></div>
        </div></>
        ): (

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 fade-in">
          {photos.map((photo) => (
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
        )}
      </div>
      <Footer />
    </>
  );
};

export default PhotothequePage;
