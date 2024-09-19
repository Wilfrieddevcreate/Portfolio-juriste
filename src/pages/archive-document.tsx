import React from "react";
import Header from "../components/layouts/header";
import SectionPg from "../components/sectionpage";
import Footer from "../components/layouts/footer";
import Tof from "../assets/image.jpg";

import ArchivePublication from "../components/archiPublication";
import ArchiveCours from "../components/archiveCours";
const PublicationsPage: React.FC = () => {
  return (
    <>
      <Header />
      <SectionPg title="Archives documents" imageSrc={Tof} />
      <div className="container mx-auto px-4 pt-8"><h1 className="text-2xl  text-center font-bold">Archives des publications</h1></div>
      <ArchivePublication/>
      <div className="container mx-auto px-4 pt-8"><h1 className="text-2xl  text-center font-bold">Archives des cours</h1></div>
      <ArchiveCours/>
      <Footer />
    </>
  );
};

export default PublicationsPage;
