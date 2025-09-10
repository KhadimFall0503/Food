import brand_img from "../assets/food.jpg";

function About() {
  return (
    <div
      className="w-full px-6 md:px-12 lg:px-20 py-20 overflow-hidden bg-white"
      id="About"
    >
      {/* Grid responsive */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Image */}
        <img
          src={brand_img}
          alt="Fast food Burger House"
          className="w-full h-[450px] object-cover rounded-xl shadow-xl"
        />

        {/* Bloc texte */}
        <div>
          <p className="text-gray-700 text-lg leading-relaxed text-center md:text-left">
            Bienvenue chez{" "}
            <span className="font-semibold text-orange-600">Burger House</span>{" "}
            ! Ici, nous servons des plats{" "}
            <span className="font-medium">frais</span>,{" "}
            <span className="font-medium">savoureux</span> et prêts à déguster,
            pour que vous puissiez profiter du meilleur du fast-food, vite et
            bien.
            <br />
            Notre mission est de vous offrir une expérience culinaire unique,
            alliant <span className="font-medium">qualité</span> et{" "}
            <span className="font-medium">rapidité</span>. Que ce soit pour une
            pause déjeuner rapide, un dîner en famille ou une soirée entre amis,
            nos menus variés sauront satisfaire toutes vos envies.
            <br />
            Nous travaillons chaque jour avec passion pour sélectionner des
            <span className="font-medium">
              {" "}
              ingrédients de première qualité
            </span>
            , en respectant les normes d’hygiène et en innovant sans cesse pour
            vous surprendre avec de nouvelles saveurs. Rejoignez-nous et
            découvrez pourquoi
            <span className="font-semibold text-orange-600">
              {" "}
              Burger House{" "}
            </span>{" "}
            est l’adresse incontournable des amoureux du bon goût.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
