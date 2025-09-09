import React, { useState } from "react";
import brand1 from "../assets/future.jpg";
import brand2 from "../assets/burger.jpg"; // deuxième image pour le carrousel

const events = [
  {
    id: 1,
    title: "Grande Soirée Burger House",
    description:
      "Des offres exclusives, des dégustations et des animations vous attendent pour vivre une expérience unique avec vos plats préférés.",
    image: brand1,
  },
  {
    id: 2,
    title: "Burger Party Week-end",
    description:
      "Venez profiter de réductions spéciales et de nouvelles recettes inédites pour les amateurs de burgers.",
    image: brand2,
  },
];

function Future() {
  const [current, setCurrent] = useState(0);
  const length = events.length;

  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);

  return (
    <section className="py-14 bg-white" id="Evenement">
      <div className="container mx-auto px-6 md:px-20 lg:px-32 relative overflow-hidden">
        {events.map((event, index) => (
          <div
            key={event.id}
            className={`grid grid-cols-1 md:grid-cols-2 items-center gap-10 transition-all duration-700 transform ${
              index === current
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full absolute top-0 left-0 w-full"
            }`}
          >
            {/* Bloc texte */}
            <div>
              <h2 className="text-3xl text-center font-bold mb-4 md:text-start text-amber-600">
                {event.title}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed text-center md:text-left">
                {event.description}
              </p>
              <div className="mt-6 flex justify-center md:justify-start gap-4">
                <button className="px-6 py-2 bg-amber-600 text-white font-semibold rounded hover:bg-amber-700 transition">
                  Réserver
                </button>
                <button className="px-6 py-2 border border-amber-600 text-amber-600 font-semibold rounded hover:bg-amber-100 transition">
                  En savoir plus
                </button>
              </div>
            </div>

            {/* Image */}
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-72 object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}

        {/* Navigation */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 -translate-y-1/2 bg-amber-600 text-white p-3 rounded-full shadow hover:bg-amber-700"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 -translate-y-1/2 bg-amber-600 text-white p-3 rounded-full shadow hover:bg-amber-700"
        >
          &#10095;
        </button>
      </div>
    </section>
  );
}

export default Future;
