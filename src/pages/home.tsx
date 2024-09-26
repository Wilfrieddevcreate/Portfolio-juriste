// import React from 'react'
import Header from "../components/layouts/header";
import HeroSection from "../components/heroSection";
import About from "../components/about";
import SearchBar from "../components/searchbar";
import Cards from "../components/articles";
import ContactForm from "../components/contact";
import Footer from "../components/layouts/footer";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
      <SearchBar></SearchBar>
      <About></About>
      <Cards></Cards>
      <div className="bg-blue-800 py-8 px-7 text-white"> 
        <p  className="text-center">Accédez aux publications  juridiques essentiels publiés par nos experts. Cliquez ci-dessous pour en savoir plus.
        </p>
         <br />
        
        <div className="flex justify-center">
          <Link to={"/publications"}>
            <button className="bg-white text-blue-800 p-2 rounded-full">Lire les publications
            </button>
          </Link>
        </div>
      </div>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </>
  );
}
