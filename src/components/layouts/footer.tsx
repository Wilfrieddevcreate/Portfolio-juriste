import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
          {/* Menus à gauche */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-col md:flex-row md:space-x-12 mb-8">
              {/* Première ligne de menus */}
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <h3 className="text-2xl font-semibold mb-4">Menu</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-400 transition duration-300"
                    >
                      Accueil
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-400 transition duration-300"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-400 transition duration-300"
                    >
                      Activités
                    </a>
                  </li>
                </ul>
              </div>

              {/* Deuxième ligne de menus */}
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">Plus</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-400 transition duration-300"
                    >
                      Cours
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-400 transition duration-300"
                    >
                      Photothèque
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-400 transition duration-300"
                    >
                      Publications
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Formulaire de newsletter à droite */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">
              Inscrivez-vous à notre newsletter pour recevoir les dernières
              nouvelles et mises à jour.
            </p>
            <form
              action="#"
              method="POST"
              className="flex flex-col md:flex-row"
            >
              <input
                type="email"
                name="email"
                placeholder="Votre adresse email"
                className="w-full md:w-2/3 px-4 py-2 border border-gray-600 rounded-md mb-4 md:mb-0 md:mr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()}  Tous
            droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
