import image1 from "../assets/LastProducts-1.jpg";
import image2 from "../assets/LastProducts-2.jpg";
import image3 from "../assets/LastProducts-3.jpg";

const burgersData = [
  {
    id: 1,
    img: image1,
    title: "Burger Spécial",
    description: "Délicieux burger avec fromage et bacon",
    col: "left",
  },
  {
    id: 2,
    img: image2,
    title: "Cheeseburger",
    description: "Fromage fondant et sauce maison",
    col: "right-top",
  },
  {
    id: 3,
    img: image3,
    title: "Veggie Burger",
    description: "Saveurs végétariennes, frais et léger",
    col: "right-bottom",
  },
];

function Burger() {
  const leftBurger = burgersData.filter((b) => b.col === "left");
  const rightBurgers = burgersData.filter(
    (b) => b.col === "right-top" || b.col === "right-bottom"
  );

  return (
    <div className="mt-10 px-6 md:px-10 lg:px-16 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {/* Colonne gauche */}
        {leftBurger.map((burger) => (
          <div key={burger.id} className="relative w-full">
            <img
              src={burger.img}
              alt={burger.title}
              className="w-full h-80 md:h-[500px] object-cover rounded-lg shadow-lg"
            />
            <div className="absolute top-4 left-4 bg-amber-600 text-white px-4 py-2 rounded-lg shadow-lg">
              <h3 className="font-bold text-base md:text-lg">{burger.title}</h3>
              <p className="text-sm md:text-base">{burger.description}</p>
            </div>
          </div>
        ))}

        {/* Colonne droite */}
        <div className="flex flex-col gap-3 w-full">
          {rightBurgers.map((burger) => (
            <div key={burger.id} className="relative w-full">
              <img
                src={burger.img}
                alt={burger.title}
                className="w-full h-40 md:h-[245px] object-cover rounded-lg shadow-lg"
              />
              <div className="absolute top-2 left-2 bg-amber-600 text-white px-2 py-1 rounded-full shadow-lg">
                <h3 className="font-bold text-xs md:text-sm">{burger.title}</h3>
                <p className="text-[10px] md:text-xs">{burger.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Burger;
