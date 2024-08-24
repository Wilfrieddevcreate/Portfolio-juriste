import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div className="bg-blue-50 py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 fade-in">
            Contactez-nous
          </h2>
          <p className="text-gray-600 fade-in">
            Si vous avez des questions ou des commentaires, veuillez nous les
            faire parvenir en utilisant le formulaire ci-dessous.
          </p>
        </div>
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg fade-in">
          <form action="#" method="POST" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Prénom
                </label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="Votre prénom"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Nom
                </label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="Votre nom"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Votre adresse email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-gray-700 font-semibold mb-2"
              >
                Objet
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="L'objet de votre message"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Votre message"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
