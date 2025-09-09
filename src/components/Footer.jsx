import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="container mx-auto px-6 md:px-20 lg:px-32 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact */}
        <div>
          <h3 className="text-amber-600 text-xl font-bold mb-4">
            Contactez-nous
          </h3>
          <p className="mb-2">Burger House</p>
          <p className="mb-2">Dakar, Sénégal</p>
          <p className="mb-2">Téléphone : +221 77 123 45 67</p>
          <p>Email : contact@burgerhouse.sn</p>
        </div>

        {/* Liens rapides */}
        <div>
          <h3 className="text-amber-600 text-xl font-bold mb-4">
            Liens rapides
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#Evenement" className="hover:text-amber-600 transition">
                Événements
              </a>
            </li>
            <li>
              <a href="#Plats" className="hover:text-amber-600 transition">
                Nos Plats
              </a>
            </li>
            <li>
              <a href="#Contact" className="hover:text-amber-600 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="#About" className="hover:text-amber-600 transition">
                À propos
              </a>
            </li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <h3 className="text-amber-600 text-xl font-bold mb-4">
            Réseaux sociaux
          </h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="bg-amber-600 p-3 rounded-full hover:bg-amber-700 transition"
            >
              <FaFacebookF className="text-white" />
            </a>
            <a
              href="#"
              className="bg-amber-600 p-3 rounded-full hover:bg-amber-700 transition"
            >
              <FaInstagram className="text-white" />
            </a>
            <a
              href="#"
              className="bg-amber-600 p-3 rounded-full hover:bg-amber-700 transition"
            >
              <FaTwitter className="text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Burger House. Tous droits réservés.
      </div>
    </footer>
  );
}

export default Footer;
