import brand_img from "../assets/food.jpg";

function About() {
  return (
    <div
      className="container mx-auto px-6 md:px-20 lg:px-32 py-14 w-full overflow-hidden"
      id="About"
    >
      {/* Grid responsive */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Image */}
        <img
          src={brand_img}
          alt="Fast food Burger House"
          className="w-full h-72 object-cover rounded-lg shadow-lg"
        />

        {/* Bloc texte */}
        <div>
          <h2 className="text-3xl text-center font-bold mb-4 md:text-start">
            À propos de nous
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed text-center md:text-left">
            Bienvenue chez{" "}
            <span className="font-semibold text-orange-600">Burger House</span>{" "}
            ! Ici, nous servons des plats{" "}
            <span className="font-medium">frais</span>,{" "}
            <span className="font-medium">savoureux</span> et prêts à déguster,
            pour que vous puissiez profiter du meilleur du fast-food, vite et
            bien.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
