import { useState, useEffect } from "react";
import menu_icon from "../assets/menu_icon.svg";
import cross_icon from "../assets/cross_icon.svg";
import logo from "../assets/Logo-burger-house.svg";

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [showMobileMenu]);

  return (
    <nav className="absolute w-full z-20 top-0 left-0 bg-transparent">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Burger House Logo"
            className="w-52 md:w-60 h-auto"
          />
        </div>

        {/* Desktop texte + boutons */}
        <div className="hidden md:flex items-center gap-6 ml-auto">
          <p className="text-[#3d2514] font-medium text-lg"></p>
          <button className="px-5 py-2 rounded-full bg-[#3d2514] text-white font-semibold hover:bg-amber-500 hover:text-black transition">
            Connexion
          </button>
          <button className="px-5 py-2 rounded-full bg-white text-black font-semibold hover:bg-black hover:text-white transition">
            Inscription
          </button>
        </div>

        {/* Mobile toggle */}
        <img
          onClick={() => setShowMobileMenu(true)}
          src={menu_icon}
          className="md:hidden w-8 cursor-pointer invert"
          alt="menu"
        />
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full bg-gradient-to-b from-amber-400 via-amber-500 to-yellow-600 shadow-lg transition-all duration-300 ease-in-out ${
          showMobileMenu ? "w-3/4" : "w-0"
        } overflow-hidden z-30`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={cross_icon}
            className="w-7 invert"
            alt="close"
          />
        </div>

        <div className="flex flex-col items-center gap-10 mt-16 text-center">
          <p className="text-white text-2xl font-bold leading-snug">
            🍟 Commandez votre repas en ligne
          </p>

          <div className="flex flex-col gap-4 w-3/4">
            <button className="w-full px-5 py-3 rounded-full bg-black text-white font-semibold hover:bg-white hover:text-black transition">
              Connexion
            </button>
            <button className="w-full px-5 py-3 rounded-full bg-white text-black font-semibold hover:bg-black hover:text-white transition">
              Inscription
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
