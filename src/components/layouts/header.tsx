import { useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { GrClose } from "react-icons/gr";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-50 py-5 mb-5 font-sans fixed top-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <div className="hidden md:block mx-8 font-bold text-2xl">
              Baï Irène Aimée KOOVI
            </div>
            <div className="block md:hidden mx-8 font-bold text-2xl">
              KOOVI  Baï
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex space-x-8 text-lg relative font-extrabold">
        <Link to="/" className="hover:text-gray-600 py-2">
            Accueil
          </Link>
          <Link to="/blog" className="hover:text-gray-600 py-2">
            Blog
          </Link>
          <Link to="/cours" className="block py-2 hover:text-gray-600">
            Cours
          </Link>
          <Link to="/phototheque" className="block py-2 hover:text-gray-600">
            Photothèque
          </Link>
          <Link to="/publications" className="block py-2 hover:text-gray-600">
            Publications
          </Link>
          <Link to="/archives" className="block py-2 hover:text-gray-600">
            Archives
          </Link>
        </nav>

        {/* Bouton du menu burger (visible sur mobile) */}
        <button
          className="md:hidden focus:outline-none text-3xl py-2 px-3"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <GrClose /> : <CiMenuFries />}
        </button>
      </div>

      {/* Menu mobile (affiché lorsque isMenuOpen est true) */}
      {isMenuOpen && (
        <nav className="md:hidden bg-blue-50 w-full h-screen flex flex-col items-center pb-4 absolute left-0 z-50 font-extrabold">
            <Link to="/" className="hover:text-gray-600 text-center mb-2">
            Accueil
          </Link>
          <Link to="/blog" className="hover:text-gray-600 text-center mb-2">
            Blog
          </Link>
          <Link
            to="/cours"
            className="block px-4 py-2 hover:text-gray-600 w-full text-center"
          >
            Cours
          </Link>
          <Link
            to="/phototheque"
            className="block px-4 py-2 hover:text-gray-600 w-full text-center"
          >
            Photothèque
          </Link>
          <Link
            to="/publications"
            className="block px-4 py-2 hover:text-gray-600 w-full text-center"
          >
            Publications
          </Link>
          <Link
            to="/archives"
            className="block px-4 py-2 hover:text-gray-600 w-full text-center"
          >
            Archives
          </Link>
        </nav>
      )}
    </header>
  );
}
