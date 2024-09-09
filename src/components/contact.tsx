import React, { useState } from "react";
import contactService from "../service/contact.service";

const ContactForm: React.FC = () => {
  // États pour les champs du formulaire
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // État pour gérer les erreurs
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Fonction pour réinitialiser les champs
  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  // Fonction pour gérer l'envoi du formulaire
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      objet: subject,
      messages: message,
    };

    try {
      await contactService.Create(data);
      setSuccess("Votre message a été envoyé avec succès !");
      setError(null);
      resetForm(); // Réinitialiser les champs après succès
    } catch (error) {
      setError("Une erreur est survenue lors de l'envoi de votre message.");
      setSuccess(null);
      console.error(error);
    }
  };

  return (
    <div className="bg-blue-50 py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 fade-in">
            Me contacter
          </h2>
          <p className="text-gray-600 fade-in">
            Si vous avez des questions ou des commentaires, veuillez me les
            faire parvenir en utilisant le formulaire ci-dessous.
          </p>
        </div>
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg fade-in">
          <form onSubmit={handleSubmit} className="space-y-6">
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
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
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
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            {error && (
              <div className="text-red-600 text-center mb-4">{error}</div>
            )}
            {success && (
              <div className="text-green-600 text-center mb-4">{success}</div>
            )}
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
