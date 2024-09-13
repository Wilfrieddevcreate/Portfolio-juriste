import React from "react";
import Header from "../components/layouts/header";
import SectionPg from "../components/sectionpage";
import Footer from "../components/layouts/footer";
import Tof from "../assets/image.jpg";
import { Link } from "react-router-dom";

const ArchivesPage: React.FC = () => {
  return (
    <>
      <Header />
      <SectionPg title="Mes archives" imageSrc={Tof} />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 fade-in">
          <Link to={"/archive-document"}>
            <div className="bg-blue-50 rounded-lg shadow-lg p-6 fade-in">
              <h2 className="text-xl font-bold mb-4">Document Archive</h2>
              <p className="text-gray-700 mb-4">
                Cette archive contient des documents importants relatifs à nos
                projets passés. Vous y trouverez des rapports, des
                présentations, et d'autres fichiers essentiels.
              </p>
              <Link to={"/archive-document"}>
                <button className="px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-600">
                  Voir les documents
                </button>
              </Link>
            </div>
          </Link>
          <Link to={"/archive-photo"}>
            <div className="bg-blue-50  rounded-lg shadow-lg p-6 fade-in">
              <h2 className="text-xl font-bold mb-4">Photo Archive</h2>
              <p className="text-gray-700 mb-4">
                Une collection de photos capturant des moments clés de nos
                événements. Explorez cette archive pour revivre les souvenirs
                marquants.
              </p>
              <Link to={"/archive-photo"}>
                <button className="px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-600">
                  Voir les photos
                </button>
              </Link>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ArchivesPage;
