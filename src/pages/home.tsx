// import React from 'react'
import Header from "../components/layouts/header";
import HeroSection from "../components/heroSection";
import About from "../components/about";
import SearchBar from "../components/searchbar";
import Cards from "../components/articles";
import ContactForm from "../components/contact";
import Footer from "../components/layouts/footer";
export default function Home() {
  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
      <SearchBar></SearchBar>
      <About></About>
      <Cards></Cards>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </>
  );
}
