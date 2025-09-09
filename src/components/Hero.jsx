import Navbar from "./Navbar";
import bg from "../assets/bg-food.jpg";
import BurgerImg from "../assets/burger-hero-top.png";

function Hero() {
  return (
    <div
      className="relative min-h-screen mb-4 bg-cover bg-center w-full overflow-hidden bg-fixed"
      style={{ backgroundImage: `url(${bg})` }}
      id="Header"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-amber-500 bg-fixed bg-cover to-yellow-600 opacity-90"></div>

      <Navbar />

      <div
        className="relative container mx-auto flex flex-col lg:flex-row items-center justify-center px-6 md:px-20 lg:px-32 gap-10"
        style={{ paddingTop: "6rem", paddingBottom: "6rem" }}
      >
        <div className="flex-1 space-y-6 text-center lg:text-left flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#3d2514] leading-tight">
            Le goût qui régale
          </h1>

          <p className="text-lg text-[#3d2514] font-medium max-w-md mx-auto lg:mx-0 italic">
            Burgers, pizzas, spécialités africaines et desserts faits maison.
            Commandez en ligne et savourez vos plats préférés chez vous.
          </p>

          <div className="flex justify-center lg:justify-start mt-6">
            <button className="px-6 py-3 border cursor-pointer bg-[#3d2514] border-white text-white text-lg font-semibold rounded shadow hover:bg-amber-400 hover:text-black transition">
              Voir le menu
            </button>
          </div>
        </div>

        {/* Image + badge à droite */}
        <div className="flex-1 flex justify-center lg:justify-end items-center relative">
          {/* Image */}
          <img
            src={BurgerImg}
            alt="Burger"
            className="w-[24rem] md:w-[36rem] lg:w-[44rem] h-auto drop-shadow-2xl relative z-10"
          />

          <div className="absolute bottom-2 right-2 md:bottom-6 md:right-6 bg-red-600 text-white rounded-full px-4 py-2 md:px-6 md:py-4 font-bold text-base md:text-lg shadow-lg text-center z-20">
            Dès 2500 F CFA <br />
            <span className="text-xs md:text-sm font-normal">
              prix abordables
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
