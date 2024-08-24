import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { GoDash } from "react-icons/go";
import { CiMenuFries } from "react-icons/ci";
import { GrClose } from "react-icons/gr";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDropdownEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <header className="bg-blue-50 py-5 mb-5 font-sans fixed top-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-end items-center">
        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-10 text-lg relative font-extrabold">
          <Link to="/" className="hover:text-gray-600">
            Accueil
          </Link>
          <Link to="/blog" className="hover:text-gray-600">
            Blog
          </Link>

          {/* Menu Activités avec Dropdown */}
          <div
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            <div className="relative">
              <button
                className="hover:text-gray-600 flex items-center space-x-1"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>Activités</span>
                {isDropdownOpen ? (
                  <GoDash className="w-4 h-4 transition-transform duration-300" />
                ) : (
                  <FaPlus className="w-4 h-4 transition-transform duration-300" />
                )}
              </button>
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 bg-blue-50 rounded shadow-lg w-48 z-50"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    to="/cours"
                    className="block px-4 py-2 hover:text-gray-600"
                  >
                    Cours
                  </Link>
                  <Link
                    to="/phototheque"
                    className="block px-4 py-2 hover:text-gray-600"
                  >
                    Photothèque
                  </Link>
                  <Link
                    to="/publications"
                    className="block px-4 py-2 hover:text-gray-600"
                  >
                    Publications
                  </Link>
                  <Link
                    to="/archives"
                    className="block px-4 py-2 hover:text-gray-600"
                  >
                    Archives
                  </Link>
                </div>
              )}
            </div>
          </div>
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
        <nav className="md:hidden bg-blue-50 w-full flex flex-col items-center pb-4 h-full absolute left-0 z-50 font-extrabold">
          <Link to="/" className="hover:text-gray-600 text-center mb-1">
            Accueil
          </Link>
          <Link to="/blog" className="hover:text-gray-600 text-center mb-2">
            Blog
          </Link>
          <div className="relative w-full">
            <button
              className="hover:text-gray-600 flex items-center justify-center space-x-1 w-full"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>Activités</span>
              {isDropdownOpen ? (
                <GoDash className="w-4 h-4 transition-transform duration-300" />
              ) : (
                <FaPlus className="w-4 h-4 transition-transform duration-300" />
              )}
            </button>
            {/* Dropdown Menu pour mobile */}
            {isDropdownOpen && (
              <div className="bg-blue-50 w-full flex flex-col items-center">
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
              </div>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
