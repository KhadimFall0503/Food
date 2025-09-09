import React, { useState } from "react";
import Burger from "../assets/burger.jpg";
import Pizza from "../assets/pizza.jpg";
import Tacos from "../assets/tacos.jpg";
import Frites from "../assets/frites.jpg";
import Sushi from "../assets/sushi.jpg";
import Salade from "../assets/salade.jpg";
import Pasta from "../assets/pasta.jpg";
import Dessert from "../assets/dessert.jpg";

const platsData = [
  {
    id: 1,
    name: "Burger Spécial",
    image: Burger,
    prix: "2500 F CFA",
    category: "Burgers & Fast Food",
  },
  {
    id: 2,
    name: "Pizza Deluxe",
    image: Pizza,
    prix: "5000 F CFA",
    category: "Pizzas & Pasta",
  },
  {
    id: 3,
    name: "Tacos Party",
    image: Tacos,
    prix: "3000 F CFA",
    category: "Burgers & Fast Food",
  },
  {
    id: 4,
    name: "Frites Maison",
    image: Frites,
    prix: "1000 F CFA",
    category: "Burgers & Fast Food",
  },
  {
    id: 5,
    name: "Sushi Fresh",
    image: Sushi,
    prix: "6000 F CFA",
    category: "Spécialités & Desserts",
  },
  {
    id: 6,
    name: "Salade Fraîche",
    image: Salade,
    prix: "2000 F CFA",
    category: "Spécialités & Desserts",
  },
  {
    id: 7,
    name: "Pasta Italienne",
    image: Pasta,
    prix: "3500 F CFA",
    category: "Pizzas & Pasta",
  },
  {
    id: 8,
    name: "Dessert Chocolat",
    image: Dessert,
    prix: "1500 F CFA",
    category: "Spécialités & Desserts",
  },
];

function Plats() {
  const [activeCategory, setActiveCategory] = useState("Burgers & Fast Food");

  const categories = [
    "Burgers & Fast Food",
    "Pizzas & Pasta",
    "Spécialités & Desserts",
  ];

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-amber-600">Nos Plats</h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Choisissez vos plats préférés et savourez-les chez vous !
        </p>

        {/* Boutons catégories */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                activeCategory === cat
                  ? "bg-amber-600 text-white shadow-lg"
                  : "bg-amber-200 text-gray-800 hover:bg-amber-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cartes */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {platsData
            .filter((plat) => plat.category === activeCategory)
            .map((plat) => (
              <div
                key={plat.id}
                className="bg-white shadow-lg shadow-gray-300 mx-auto my-3 p-4 rounded-lg flex flex-col items-center w-full max-w-sm"
              >
                <img
                  src={plat.image}
                  alt={plat.name}
                  className="rounded w-full h-48 object-cover mb-3"
                />
                <h3 className="text-lg font-bold text-center">{plat.name}</h3>
                <p className="text-amber-600 font-semibold text-center">
                  {plat.prix}
                </p>
                <button className="mt-3 bg-amber-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-amber-700 transition">
                  Commander
                </button>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Plats;
